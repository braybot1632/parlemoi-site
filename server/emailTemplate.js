/**
 * Reusable ParleMoi branded email template.
 *
 * brandedEmail({ title, preheader, headline, body, footerNote, showSignature })
 *   - title:         <title> tag content
 *   - preheader:     hidden preview text in inbox
 *   - headline:      Georgia serif heading inside the card
 *   - body:          raw HTML string for the main content area
 *   - footerNote:    small text below the card (e.g. "You're receiving this because…")
 *   - showSignature: whether to include Braydon's signature block (default true)
 */

const FONT_BODY = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
const P = `font-family: ${FONT_BODY}; font-size: 15px; line-height: 1.7; color: #4A4A4A;`

export function brandedEmail({ title, preheader, headline, body, footerNote, showSignature = true }) {
  return `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>${title}</title>
  <!--[if mso]>
  <noscript>
    <xml>
      <o:OfficeDocumentSettings>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  </noscript>
  <![endif]-->
  <style>
    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
    body { margin: 0; padding: 0; width: 100% !important; height: 100% !important; background-color: #F5F3F0; }

    @media only screen and (max-width: 620px) {
      .email-container { width: 100% !important; }
      .fluid { max-width: 100% !important; height: auto !important; }
      .stack-column { display: block !important; width: 100% !important; }
      .px-mobile { padding-left: 24px !important; padding-right: 24px !important; }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #F5F3F0;">

  <!-- Preheader (hidden preview text) -->
  <div style="display: none; max-height: 0; overflow: hidden; font-size: 1px; line-height: 1px; color: #F5F3F0;">
    ${preheader}
  </div>

  <!-- Outer wrapper -->
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #F5F3F0;">
    <tr>
      <td align="center" style="padding: 40px 16px;">

        <!-- Email container -->
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="560" class="email-container" style="max-width: 560px; width: 100%; background-color: #FFFFFF; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">

          <!-- Header bar -->
          <tr>
            <td style="background-color: #1B2A4A; padding: 32px 40px; text-align: center;" class="px-mobile">
              <span style="font-family: Georgia, 'Times New Roman', serif; font-size: 28px; font-weight: 700; color: #FFFFFF; letter-spacing: -0.5px;">Parle<span style="color: #E8863A;">Moi</span></span>
            </td>
          </tr>

          <!-- Orange accent line -->
          <tr>
            <td style="background: linear-gradient(135deg, #E8863A, #D4A853); height: 3px; font-size: 0; line-height: 0;">&nbsp;</td>
          </tr>

          <!-- Body content -->
          <tr>
            <td style="padding: 40px 40px 16px;" class="px-mobile">
              <h1 style="margin: 0 0 24px; font-family: Georgia, 'Times New Roman', serif; font-size: 24px; font-weight: 700; color: #1B2A4A; line-height: 1.3; letter-spacing: -0.3px;">
                ${headline}
              </h1>
              ${body}
            </td>
          </tr>

          ${showSignature ? `<!-- Signature -->
          <tr>
            <td style="padding: 0 40px 40px;" class="px-mobile">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td style="border-top: 1px solid #E8E4DF; padding-top: 24px;">
                    <p style="margin: 0 0 2px; font-family: ${FONT_BODY}; font-size: 15px; font-weight: 600; color: #1B2A4A; line-height: 1.5;">
                      Braydon Viragh
                    </p>
                    <p style="margin: 0 0 12px; font-family: ${FONT_BODY}; font-size: 13px; color: #8B8B8B; line-height: 1.5;">
                      Founder &amp; Developer, Parlifica Inc.
                    </p>
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td style="padding-right: 16px;">
                          <span style="font-family: Georgia, 'Times New Roman', serif; font-size: 14px; font-weight: 700; color: #1B2A4A; letter-spacing: -0.3px;">Parle<span style="color: #E8863A;">Moi</span></span>
                          <span style="font-family: ${FONT_BODY}; font-size: 11px; color: #8B8B8B; margin-left: 4px;">The app that gets you speaking French</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-top: 8px; font-family: ${FONT_BODY}; font-size: 12px; color: #8B8B8B; line-height: 1.6;">
                          <a href="https://parlemoiapp.com" style="color: #E8863A; text-decoration: none;">parlemoiapp.com</a>
                          &nbsp;&middot;&nbsp;
                          <a href="mailto:braydonpaul@parlemoiapp.com" style="color: #8B8B8B; text-decoration: none;">braydonpaul@parlemoiapp.com</a>
                          &nbsp;&middot;&nbsp;
                          Montr&eacute;al, Qu&eacute;bec
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>` : ''}

        </table>

        <!-- Footer -->
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="560" class="email-container" style="max-width: 560px; width: 100%;">
          <tr>
            <td style="padding: 24px 16px; text-align: center; font-family: ${FONT_BODY}; font-size: 11px; color: #8B8B8B; line-height: 1.5;">
              &copy; 2026 Parlifica Inc. &middot; Montr&eacute;al, Qu&eacute;bec<br />
              ${footerNote}
            </td>
          </tr>
        </table>

      </td>
    </tr>
  </table>

</body>
</html>`
}

// Helper to wrap text in a styled paragraph
export function p(text) {
  return `<p style="margin: 0 0 16px; font-family: ${FONT_BODY}; font-size: 15px; line-height: 1.7; color: #4A4A4A;">${text}</p>`
}

// ── Pre-built emails ────────────────────────────────────────────────

export function betaWelcomeEmail() {
  return brandedEmail({
    title: 'Thanks for Your Interest in ParleMoi',
    preheader: "Thank you for your interest in ParleMoi \u2014 we'll be in touch with a TestFlight invite soon.",
    headline: 'Thank you for your interest.',
    body: [
      p('Hello,'),
      p("Thank you for your interest in ParleMoi. We've been thrilled by the response so far."),
      p("Due to the high volume of sign-ups, we're onboarding testers in waves. When it's your turn, you'll receive a separate email with a TestFlight invitation link to download and try the app."),
      p('We appreciate your patience and look forward to having you test ParleMoi soon.'),
    ].join('\n'),
    footerNote: "You're receiving this because you signed up for the ParleMoi beta.",
  })
}

const BETA_SURVEY_URL = 'https://braydonviragh.github.io/parlemoi-beta-survey/'

export function betaTestInviteEmail() {
  return brandedEmail({
    title: 'Your ParleMoi Beta Access is Ready',
    preheader: 'Your TestFlight invite is on the way — here\u2019s how to get started with ParleMoi.',
    headline: 'Your beta access is ready.',
    body: [
      p('Hello,'),
      p('Thank you for signing up to test ParleMoi. We\u2019re excited to have you on board. Your TestFlight invitation is on the way \u2014 here\u2019s everything you need to get started.'),

      `<h2 style="margin: 28px 0 16px; font-family: Georgia, 'Times New Roman', serif; font-size: 18px; font-weight: 700; color: #1B2A4A; line-height: 1.3;">Getting set up</h2>`,

      `<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 24px;">
        <tr>
          <td style="padding: 12px 0; border-bottom: 1px solid #E8E4DF; font-family: ${FONT_BODY}; font-size: 15px; line-height: 1.7; color: #4A4A4A;">
            <span style="display: inline-block; background: #1B2A4A; color: #FFFFFF; width: 24px; height: 24px; border-radius: 50%; text-align: center; font-size: 12px; line-height: 24px; margin-right: 10px; font-weight: 700;">1</span>
            <strong style="color: #1B2A4A;">Check your email</strong> \u2014 you\u2019ll receive a separate invitation from <strong>Apple TestFlight</strong> shortly. It may take a few minutes to arrive.
          </td>
        </tr>
        <tr>
          <td style="padding: 12px 0; border-bottom: 1px solid #E8E4DF; font-family: ${FONT_BODY}; font-size: 15px; line-height: 1.7; color: #4A4A4A;">
            <span style="display: inline-block; background: #1B2A4A; color: #FFFFFF; width: 24px; height: 24px; border-radius: 50%; text-align: center; font-size: 12px; line-height: 24px; margin-right: 10px; font-weight: 700;">2</span>
            <strong style="color: #1B2A4A;">Install TestFlight</strong> \u2014 if you don\u2019t already have it, download the <a href="https://apps.apple.com/app/testflight/id899247664" style="color: #E8863A; text-decoration: none;">TestFlight app</a> from the App Store (it\u2019s free, made by Apple).
          </td>
        </tr>
        <tr>
          <td style="padding: 12px 0; border-bottom: 1px solid #E8E4DF; font-family: ${FONT_BODY}; font-size: 15px; line-height: 1.7; color: #4A4A4A;">
            <span style="display: inline-block; background: #1B2A4A; color: #FFFFFF; width: 24px; height: 24px; border-radius: 50%; text-align: center; font-size: 12px; line-height: 24px; margin-right: 10px; font-weight: 700;">3</span>
            <strong style="color: #1B2A4A;">Accept the invite</strong> \u2014 open the TestFlight email and tap "View in TestFlight". This will open the app and let you install ParleMoi.
          </td>
        </tr>
        <tr>
          <td style="padding: 12px 0; font-family: ${FONT_BODY}; font-size: 15px; line-height: 1.7; color: #4A4A4A;">
            <span style="display: inline-block; background: #1B2A4A; color: #FFFFFF; width: 24px; height: 24px; border-radius: 50%; text-align: center; font-size: 12px; line-height: 24px; margin-right: 10px; font-weight: 700;">4</span>
            <strong style="color: #1B2A4A;">Start learning</strong> \u2014 open ParleMoi, complete the onboarding, and explore at your own pace. There\u2019s no right or wrong way to test \u2014 just use it naturally.
          </td>
        </tr>
      </table>`,

      `<h2 style="margin: 8px 0 16px; font-family: Georgia, 'Times New Roman', serif; font-size: 18px; font-weight: 700; color: #1B2A4A; line-height: 1.3;">After you\u2019ve tested the app</h2>`,

      p('Once you\u2019ve had a chance to explore, we\u2019d love to hear what you think. Your feedback directly shapes what we build next, and the survey is completely anonymous \u2014 no user information is attached \u2014 so please be as candid as possible.'),

      `<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: 8px 0 24px;">
        <tr>
          <td align="center">
            <a href="${BETA_SURVEY_URL}" style="display: inline-block; padding: 14px 36px; background-color: #E8863A; color: #FFFFFF; font-family: ${FONT_BODY}; font-size: 16px; font-weight: 600; text-decoration: none; border-radius: 8px;">Take the Feedback Survey</a>
          </td>
        </tr>
      </table>`,

      p('The survey takes about 3 minutes and covers your experience with onboarding, lessons, AI chat, practice scenarios, and mini-games.'),
      p('Thank you for helping us build something better.'),
    ].join('\n'),
    footerNote: "You\u2019re receiving this because you signed up for the ParleMoi beta.",
  })
}

export function adminSignupNotification(signupEmail) {
  return brandedEmail({
    title: 'New Beta Signup',
    preheader: `New beta signup: ${signupEmail}`,
    headline: 'New beta signup.',
    showSignature: false,
    body: [
      p(`<strong>${signupEmail}</strong> just signed up for the ParleMoi beta.`),
      p(`<a href="https://docs.google.com/spreadsheets" style="color: #E8863A; text-decoration: none;">View all signups in Google Sheets</a>`),
    ].join('\n'),
    footerNote: 'Internal notification — ParleMoi beta signups.',
  })
}
