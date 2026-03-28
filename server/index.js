import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import { Resend } from 'resend'
import { betaWelcomeEmail, adminSignupNotification } from './emailTemplate.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()
const PORT = process.env.PORT || 3000

// Resend client — set RESEND_API_KEY in Railway env vars
const resend = new Resend(process.env.RESEND_API_KEY)

// Google Sheets Apps Script URL (same one the frontend was using)
const SHEETS_URL = 'https://script.google.com/macros/s/AKfycbxakNNzReV-0ka9pyzHN08G3hVay0jVUGaoAiV22zSyw1CuJ-pKW6X3DVTGeYM_pRAHtA/exec'

app.use(express.json())

// Serve static files from the Vite build
app.use(express.static(path.join(__dirname, '..', 'dist')))

// ── Beta signup endpoint ────────────────────────────────────────────
app.post('/api/beta-signup', async (req, res) => {
  const { email } = req.body

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
    return res.status(400).json({ error: 'Invalid email address.' })
  }

  const cleanEmail = email.trim().toLowerCase().slice(0, 254)

  try {
    // 1. Save to Google Sheets (fire-and-forget, don't block on it)
    const sheetsPromise = fetch(SHEETS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: cleanEmail }),
    }).catch((err) => {
      console.error('Google Sheets error:', err.message)
    })

    // 2. Send welcome email to the user
    const welcomePromise = resend.emails.send({
      from: 'Braydon Viragh <braydonpaul@parlemoiapp.com>',
      to: cleanEmail,
      subject: 'Welcome to ParleMoi Beta',
      html: betaWelcomeEmail(),
    })

    // 3. Send admin notification
    const adminPromise = resend.emails.send({
      from: 'ParleMoi <braydonpaul@parlemoiapp.com>',
      to: 'braydonpaul@parlemoiapp.com',
      subject: `New beta signup: ${cleanEmail}`,
      html: adminSignupNotification(cleanEmail),
    }).catch((err) => {
      console.error('Admin notification error:', err.message)
    })

    // Wait for all in parallel
    const [, emailResult] = await Promise.all([sheetsPromise, welcomePromise, adminPromise])

    if (emailResult.error) {
      console.error('Resend error:', emailResult.error)
      // Still return success — the signup was saved to Sheets
      return res.json({ success: true, emailSent: false })
    }

    return res.json({ success: true, emailSent: true })
  } catch (err) {
    console.error('Signup error:', err)
    return res.status(500).json({ error: 'Something went wrong. Please try again.' })
  }
})

// SPA fallback — serve index.html for all non-API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`ParleMoi server running on port ${PORT}`)
})
