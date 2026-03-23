/**
 * Beta welcome email template — matches ParleMoi branding.
 * Table-based layout for maximum email-client compatibility.
 */

export function betaWelcomeEmail() {
  return `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>Welcome to ParleMoi Beta</title>
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
    Thanks for signing up for ParleMoi beta — we'll reach out when it's ready.
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
              <!-- Logo as text (most reliable across email clients) -->
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
                Thanks for joining ParleMoi.
              </h1>

              <p style="margin: 0 0 16px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 15px; line-height: 1.7; color: #4A4A4A;">
                Hello,
              </p>

              <p style="margin: 0 0 16px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 15px; line-height: 1.7; color: #4A4A4A;">
                Thank you for signing up for the ParleMoi beta. We're currently in active development, building something we believe will genuinely change the way people learn to speak French.
              </p>

              <p style="margin: 0 0 16px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 15px; line-height: 1.7; color: #4A4A4A;">
                Rest assured, we will reach out to you as soon as our beta is ready. You'll be among the first to try it.
              </p>

              <p style="margin: 0 0 24px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 15px; line-height: 1.7; color: #4A4A4A;">
                Hope you enjoy the rest of your day.
              </p>
            </td>
          </tr>

          <!-- Signature -->
          <tr>
            <td style="padding: 0 40px 40px;" class="px-mobile">
              <!-- Signature divider -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td style="border-top: 1px solid #E8E4DF; padding-top: 24px;">
                    <p style="margin: 0 0 2px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 15px; font-weight: 600; color: #1B2A4A; line-height: 1.5;">
                      Braydon Viragh
                    </p>
                    <p style="margin: 0 0 12px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 13px; color: #8B8B8B; line-height: 1.5;">
                      Founder &amp; Developer, Parlifica Inc.
                    </p>
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td style="padding-right: 16px;">
                          <span style="font-family: Georgia, 'Times New Roman', serif; font-size: 14px; font-weight: 700; color: #1B2A4A; letter-spacing: -0.3px;">Parle<span style="color: #E8863A;">Moi</span></span>
                          <span style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 11px; color: #8B8B8B; margin-left: 4px;">AI-powered French language learning</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-top: 8px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 12px; color: #8B8B8B; line-height: 1.6;">
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
          </tr>

        </table>
        <!-- /Email container -->

        <!-- Footer -->
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="560" class="email-container" style="max-width: 560px; width: 100%;">
          <tr>
            <td style="padding: 24px 16px; text-align: center; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 11px; color: #8B8B8B; line-height: 1.5;">
              &copy; 2026 Parlifica Inc. &middot; Montr&eacute;al, Qu&eacute;bec<br />
              You're receiving this because you signed up for the ParleMoi beta.
            </td>
          </tr>
        </table>

      </td>
    </tr>
  </table>

</body>
</html>`
}
