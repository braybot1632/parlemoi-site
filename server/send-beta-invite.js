/**
 * Send the beta test invite email to TestFlight beta testers.
 *
 * Usage:
 *   RESEND_API_KEY=re_xxx node server/send-beta-invite.js
 *
 * Pass --dry-run to preview without sending:
 *   RESEND_API_KEY=re_xxx node server/send-beta-invite.js --dry-run
 */

import { Resend } from 'resend'
import { betaTestInviteEmail } from './emailTemplate.js'

const BETA_TESTERS = [
  'bradyviragh@gmail.com',
  'chahdjelassi@hotmail.com',
  'bpviragh@gmail.com',
  'shaneviragh@gmail.com',
  'karenviragh@gmail.com',
  'pascala@glendon.yorku.ca',
  'devonviragh@gmail.com',
  'ianwilson.per@gmail.com',
  'pearce.gould99@gmail.com',
  'a.ammarr17@gmail.com',
]

const dryRun = process.argv.includes('--dry-run')
const resend = new Resend(process.env.RESEND_API_KEY)
const DELAY_MS = 500

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function main() {
  console.log(dryRun ? '--- DRY RUN (no emails will be sent) ---\n' : '')

  console.log(`Sending to ${BETA_TESTERS.length} beta tester(s):\n`)
  BETA_TESTERS.forEach((e, i) => console.log(`  ${i + 1}. ${e}`))
  console.log()

  if (dryRun) {
    console.log('Done (dry run). Remove --dry-run to send for real.')
    return
  }

  let sent = 0
  let failed = 0

  for (const email of BETA_TESTERS) {
    try {
      const { error } = await resend.emails.send({
        from: 'Braydon Viragh <braydonpaul@parlemoiapp.com>',
        to: email,
        subject: 'Your ParleMoi Beta Access is Ready',
        html: betaTestInviteEmail(),
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
