/**
 * One-off script to send the beta welcome email to existing signups.
 *
 * Usage:
 *   RESEND_API_KEY=re_xxx node server/backfill-emails.js
 *
 * Pass --dry-run to preview without sending:
 *   RESEND_API_KEY=re_xxx node server/backfill-emails.js --dry-run
 */

import { Resend } from 'resend'
import { betaWelcomeEmail } from './emailTemplate.js'

const SHEETS_JSON_URL =
  'https://script.google.com/macros/s/AKfycbxFm4mnFcii__L5UKLI3fUOsvYLCtV-zsH5Sb03XNr0XPgPoj0aDlmquxKhRbKwPl2q1Q/exec'

const dryRun = process.argv.includes('--dry-run')
const resend = new Resend(process.env.RESEND_API_KEY)
const DELAY_MS = 500 // half-second between sends to stay well under rate limits

async function fetchEmails() {
  const res = await fetch(SHEETS_JSON_URL)
  const data = await res.json()

  // Apps Script typically returns { data: [{ email: "..." }, ...] } or similar
  // Adjust the path below to match your actual response shape
  const rows = Array.isArray(data) ? data : data.data || data.emails || []
  const all = rows.map((r) => (typeof r === 'string' ? r : r.email || r.Email)).filter(Boolean)
  return [...new Set(all)] // deduplicate
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function main() {
  console.log(dryRun ? '--- DRY RUN (no emails will be sent) ---\n' : '')

  const emails = await fetchEmails()
  console.log(`Found ${emails.length} email(s) to send to:\n`)
  emails.forEach((e, i) => console.log(`  ${i + 1}. ${e}`))
  console.log()

  if (dryRun) {
    console.log('Done (dry run). Remove --dry-run to send for real.')
    return
  }

  let sent = 0
  let failed = 0

  for (const email of emails) {
    try {
      const { error } = await resend.emails.send({
        from: 'Braydon Viragh <braydonpaul@parlemoiapp.com>',
        to: email,
        subject: 'Welcome to ParleMoi Beta',
        html: betaWelcomeEmail(),
      })

      if (error) {
        console.error(`  FAIL  ${email} — ${error.message}`)
        failed++
      } else {
        console.log(`  SENT  ${email}`)
        sent++
      }
    } catch (err) {
      console.error(`  FAIL  ${email} — ${err.message}`)
      failed++
    }

    await sleep(DELAY_MS)
  }

  console.log(`\nDone. Sent: ${sent}, Failed: ${failed}`)
}

main().catch(console.error)
