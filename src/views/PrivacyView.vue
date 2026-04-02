<script setup>
import LegalNav from '../components/LegalNav.vue'
</script>

<template>
  <main class="max-w-3xl mx-auto px-6 pt-28 pb-20">
    <LegalNav />

    <h1 class="font-display text-3xl md:text-4xl text-navy mb-2">Privacy Policy</h1>
    <p class="font-bold text-text-muted mb-6">Effective Date: March 14, 2026</p>

    <div class="legal-prose text-text-light/85 leading-relaxed space-y-4">
      <p>This Privacy Policy explains how ParleMoi ("the App," "we," "us," or "our") collects, uses, and protects your information. ParleMoi is a French language learning app developed by Braydon Viragh, based in Montreal, Quebec, Canada.</p>

      <p>We built ParleMoi with privacy as a core design principle. We collect as little data as possible, process most things directly on your device, and never sell your personal information. This policy is written in plain language so you can understand exactly what happens with your data.</p>

      <p>If you have any questions about this policy, you can reach us at <a href="mailto:support@parlemoi.app" class="text-orange hover:underline">support@parlemoi.app</a> or visit <a href="https://parlemoi.app" class="text-orange hover:underline">https://parlemoi.app</a>.</p>

      <hr class="border-card-border my-8">

      <h2 class="font-display text-xl md:text-2xl text-navy mt-10 mb-3">1. Information We Collect</h2>

      <h3 class="font-display text-lg text-navy mt-7 mb-2">1.1 Voice and Speech Data</h3>

      <p>ParleMoi uses on-device speech recognition to help you practice speaking French. On iOS, this is powered by Apple's Speech Framework. On Android, it uses Google Speech Services. Both systems process your voice directly on your device.</p>

      <p><strong class="text-navy">Your voice never leaves your device.</strong> Raw audio recordings are never transmitted to our servers or any third-party service. The speech recognition engines convert your spoken words into text locally, and only that transcribed text is used within the app.</p>

      <p>When you engage in AI-powered conversation practice, the transcribed text (never the audio itself) is sent through our backend proxy to generate a response. This is the only time any speech-derived data leaves your device, and it is sent as plain text, not as a voice recording.</p>

      <h3 class="font-display text-lg text-navy mt-7 mb-2">1.2 Conversation Data</h3>

      <p>During AI conversation sessions, transcribed text from your speech is sent to our backend proxy, which forwards it to the Google Gemini API (our default language model) or to OpenAI's API (used as a fallback). These requests are made to generate conversational responses that help you practice French.</p>

      <p><strong class="text-navy">Conversation text is not permanently stored on our servers.</strong> It passes through our backend proxy in transit and is not retained after the response is delivered. Your conversation history is stored locally on your device in a SQLite database, which you can delete at any time by clearing the app's data or uninstalling the app.</p>

      <p>Google and OpenAI may process this text according to their own privacy policies (see Section 5 for links). We encourage you to review their policies for details on how they handle API requests.</p>

      <h3 class="font-display text-lg text-navy mt-7 mb-2">1.3 Learning Progress</h3>

      <p>All learning progress data, including lesson completion status, scores, XP (experience points), streaks, and other performance metrics, is stored exclusively in a local SQLite database on your device.</p>

      <p><strong class="text-navy">This data is never sent to any server.</strong> It exists only on your device. If you uninstall the app or clear its data, your learning progress will be permanently deleted.</p>

      <h3 class="font-display text-lg text-navy mt-7 mb-2">1.4 Payment Information</h3>

      <p>ParleMoi offers in-app subscriptions that are processed entirely by Apple (via the App Store) or Google (via Google Play). <strong class="text-navy">We never see your credit card information</strong>, billing address, or any other financial details. We have no access to this data at any point.</p>

      <p>We use RevenueCat to manage subscription status. RevenueCat receives anonymous purchase receipts from Apple or Google to verify whether your subscription is active. These receipts do not contain your name, email, payment method, or any other personally identifying information.</p>

      <h3 class="font-display text-lg text-navy mt-7 mb-2">1.5 What We Do NOT Collect</h3>

      <p>ParleMoi is designed to respect your privacy. We want to be explicit about what we do not do:</p>

      <ul class="list-disc pl-6 space-y-2">
        <li><strong class="text-navy">No analytics SDKs.</strong> We do not use Google Analytics, Firebase Analytics, Mixpanel, or any similar tools.</li>
        <li><strong class="text-navy">No tracking pixels.</strong> We do not embed tracking pixels or web beacons.</li>
        <li><strong class="text-navy">No advertising SDKs.</strong> We do not include any ad networks or advertising frameworks.</li>
        <li><strong class="text-navy">No account required.</strong> You do not need to create an account, provide your name, or give us an email address to use ParleMoi.</li>
        <li><strong class="text-navy">No location data.</strong> We do not request, collect, or store your GPS coordinates or any other location information.</li>
        <li><strong class="text-navy">No contacts or photos.</strong> We do not access your contacts, photo library, camera, or any other sensitive device features beyond the microphone (for speech practice).</li>
      </ul>

      <p><strong class="text-navy">We do not sell your data.</strong> Not now, not ever.</p>

      <hr class="border-card-border my-8">

      <h2 class="font-display text-xl md:text-2xl text-navy mt-10 mb-3">2. How We Use Your Information</h2>

      <p>The limited data that passes through our systems is used for one purpose: to power AI conversation practice. Specifically:</p>

      <ul class="list-disc pl-6 space-y-2">
        <li><strong class="text-navy">Transcribed text</strong> is sent to Google Gemini or OpenAI to generate French conversation responses in real time.</li>
        <li><strong class="text-navy">Anonymous subscription receipts</strong> are sent to RevenueCat to verify your subscription status and unlock premium features.</li>
      </ul>

      <p>We do not use your data for advertising, profiling, marketing, or any purpose other than delivering the core functionality of the app.</p>

      <hr class="border-card-border my-8">

      <h2 class="font-display text-xl md:text-2xl text-navy mt-10 mb-3">3. Data Storage and Security</h2>

      <h3 class="font-display text-lg text-navy mt-7 mb-2">On-Device Storage</h3>

      <p>All learning progress, conversation history, and app preferences are stored locally on your device using SQLite. This data is protected by your device's built-in security features (passcode, biometrics, encryption). We cannot access this data remotely.</p>

      <h3 class="font-display text-lg text-navy mt-7 mb-2">Data in Transit</h3>

      <p>When transcribed text is sent to our backend proxy during AI conversations, it is transmitted over encrypted HTTPS connections. Our backend proxy forwards the request to the AI provider and returns the response. We do not log or permanently store the content of these requests.</p>

      <h3 class="font-display text-lg text-navy mt-7 mb-2">Data Retention</h3>

      <p>Because we do not store your personal data on our servers, there is nothing for us to retain. Conversation text passes through our proxy in real time and is not saved. On-device data persists until you delete it by clearing the app data or uninstalling the app.</p>

      <hr class="border-card-border my-8">

      <h2 class="font-display text-xl md:text-2xl text-navy mt-10 mb-3">4. Data Sharing</h2>

      <p>We do not sell, rent, or trade your personal information to anyone. The only circumstances in which data leaves your device are:</p>

      <ul class="list-disc pl-6 space-y-2">
        <li><strong class="text-navy">AI conversation requests:</strong> Transcribed text is sent through our backend proxy to Google Gemini API or OpenAI API to generate responses.</li>
        <li><strong class="text-navy">Subscription verification:</strong> Anonymous purchase receipts are sent to RevenueCat to confirm your subscription status.</li>
      </ul>

      <p>We may disclose information if required to do so by law, such as in response to a valid court order or legal process. However, given that we collect virtually no personal data, we would have very little to provide.</p>

      <hr class="border-card-border my-8">

      <h2 class="font-display text-xl md:text-2xl text-navy mt-10 mb-3">5. Third-Party Services</h2>

      <p>ParleMoi relies on the following third-party services. Each has its own privacy policy governing how it handles data:</p>

      <ul class="list-disc pl-6 space-y-2">
        <li><strong class="text-navy">Google Gemini API</strong> (default AI provider): <a href="https://ai.google.dev/gemini-api/terms" class="text-orange hover:underline">Google AI Privacy Policy</a></li>
        <li><strong class="text-navy">OpenAI API</strong> (fallback AI provider): <a href="https://openai.com/privacy" class="text-orange hover:underline">OpenAI Privacy Policy</a></li>
        <li><strong class="text-navy">RevenueCat</strong> (subscription management): <a href="https://www.revenuecat.com/privacy/" class="text-orange hover:underline">RevenueCat Privacy Policy</a></li>
        <li><strong class="text-navy">Apple App Store</strong> (iOS distribution and payments): <a href="https://www.apple.com/privacy/" class="text-orange hover:underline">Apple Privacy Policy</a></li>
        <li><strong class="text-navy">Google Play</strong> (Android distribution and payments): <a href="https://policies.google.com/privacy" class="text-orange hover:underline">Google Privacy Policy</a></li>
        <li><strong class="text-navy">Apple Speech Framework</strong> (on-device speech recognition, iOS): Governed by Apple's privacy policy above.</li>
        <li><strong class="text-navy">Google Speech Services</strong> (on-device speech recognition, Android): Governed by Google's privacy policy above.</li>
      </ul>

      <p>We select third-party providers carefully and use them only where necessary to deliver the app's core features.</p>

      <hr class="border-card-border my-8">

      <h2 class="font-display text-xl md:text-2xl text-navy mt-10 mb-3">6. Your Privacy Rights</h2>

      <h3 class="font-display text-lg text-navy mt-7 mb-2">6.1 Canadian Residents (PIPEDA and Quebec Privacy Act)</h3>

      <p>If you are a resident of Canada, you have rights under the Personal Information Protection and Electronic Documents Act (PIPEDA) and, if you reside in Quebec, the Quebec Act Respecting the Protection of Personal Information in the Private Sector. These rights include:</p>

      <ul class="list-disc pl-6 space-y-2">
        <li>The right to know what personal information we hold about you.</li>
        <li>The right to access your personal information.</li>
        <li>The right to request correction of inaccurate information.</li>
        <li>The right to withdraw consent for the collection, use, or disclosure of your personal information.</li>
      </ul>

      <p>Because ParleMoi stores virtually no personal data on its servers, most of these rights are already satisfied by design. Your on-device data is under your full control. If you have questions or wish to exercise your rights, contact us at <a href="mailto:support@parlemoi.app" class="text-orange hover:underline">support@parlemoi.app</a>.</p>

      <h3 class="font-display text-lg text-navy mt-7 mb-2">6.2 European Union Residents (GDPR)</h3>

      <p>If you are a resident of the European Economic Area (EEA), you have rights under the General Data Protection Regulation (GDPR). These include:</p>

      <ul class="list-disc pl-6 space-y-2">
        <li><strong class="text-navy">Right of access:</strong> You may request a copy of any personal data we process about you.</li>
        <li><strong class="text-navy">Right to rectification:</strong> You may request correction of inaccurate data.</li>
        <li><strong class="text-navy">Right to erasure:</strong> You may request deletion of your personal data.</li>
        <li><strong class="text-navy">Right to restrict processing:</strong> You may ask us to limit how we use your data.</li>
        <li><strong class="text-navy">Right to data portability:</strong> You may request your data in a structured, machine-readable format.</li>
        <li><strong class="text-navy">Right to object:</strong> You may object to the processing of your personal data.</li>
        <li><strong class="text-navy">Right to withdraw consent:</strong> You may withdraw consent at any time.</li>
      </ul>

      <p>Our legal basis for processing transcribed conversation text is legitimate interest, specifically to provide you with the AI conversation feature you initiated. Since we do not permanently store personal data on our servers, most data subject requests are already addressed by our minimal-collection approach. You can delete all locally stored data at any time by clearing the app or uninstalling it.</p>

      <p>To exercise any of these rights, contact us at <a href="mailto:support@parlemoi.app" class="text-orange hover:underline">support@parlemoi.app</a>.</p>

      <h3 class="font-display text-lg text-navy mt-7 mb-2">6.3 California Residents (CCPA)</h3>

      <p>If you are a California resident, you have rights under the California Consumer Privacy Act (CCPA). These include:</p>

      <ul class="list-disc pl-6 space-y-2">
        <li><strong class="text-navy">Right to know:</strong> You may request details about the categories and specific pieces of personal information we collect.</li>
        <li><strong class="text-navy">Right to delete:</strong> You may request deletion of personal information we have collected.</li>
        <li><strong class="text-navy">Right to opt out of sale:</strong> You may direct us not to sell your personal information.</li>
        <li><strong class="text-navy">Right to non-discrimination:</strong> We will not discriminate against you for exercising your CCPA rights.</li>
      </ul>

      <p><strong class="text-navy">We do not sell your data.</strong> We have never sold personal information and have no plans to do so. Because we collect minimal data and do not store it on our servers, most CCPA requests are already satisfied by our privacy-first design.</p>

      <p>To exercise your rights or make a verifiable consumer request, contact us at <a href="mailto:support@parlemoi.app" class="text-orange hover:underline">support@parlemoi.app</a>.</p>

      <hr class="border-card-border my-8">

      <h2 class="font-display text-xl md:text-2xl text-navy mt-10 mb-3">7. Children's Privacy</h2>

      <p>ParleMoi is designed for adults aged 18 and older. The app is not directed at children under the age of 13, and we do not knowingly collect personal information from children under 13, in compliance with the Children's Online Privacy Protection Act (COPPA).</p>

      <p>If you believe that a child under 13 has used the app and that personal data may have been transmitted, please contact us at <a href="mailto:support@parlemoi.app" class="text-orange hover:underline">support@parlemoi.app</a> and we will take appropriate steps to investigate and address the concern.</p>

      <hr class="border-card-border my-8">

      <h2 class="font-display text-xl md:text-2xl text-navy mt-10 mb-3">8. International Data Transfers</h2>

      <p>When you use AI conversation features, transcribed text may be processed by servers located outside your country of residence, including in the United States, where Google and OpenAI operate infrastructure. These transfers are necessary to provide the conversation feature and are conducted over encrypted connections.</p>

      <p>RevenueCat may also process anonymous subscription receipts on servers located in the United States. No personally identifying information is included in these receipts.</p>

      <hr class="border-card-border my-8">

      <h2 class="font-display text-xl md:text-2xl text-navy mt-10 mb-3">9. Changes to This Policy</h2>

      <p>We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. When we make changes, we will update the "Effective Date" at the top of this page.</p>

      <p>We encourage you to review this policy periodically. Continued use of ParleMoi after changes are posted constitutes your acceptance of the updated policy. For significant changes, we will make reasonable efforts to notify users through the app.</p>

      <hr class="border-card-border my-8">

      <h2 class="font-display text-xl md:text-2xl text-navy mt-10 mb-3">10. Terms of Service</h2>

      <p>This Privacy Policy should be read alongside our Terms of Service, available at <router-link to="/terms" class="text-orange hover:underline">https://parlemoi.app/terms</router-link>. Together, these documents govern your use of ParleMoi.</p>

      <hr class="border-card-border my-8">

      <h2 class="font-display text-xl md:text-2xl text-navy mt-10 mb-3">11. Contact Us</h2>

      <p>If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact us:</p>

      <p>
        <strong class="text-navy">Braydon Viragh</strong><br>
        Montreal, Quebec, Canada<br>
        Email: <a href="mailto:support@parlemoi.app" class="text-orange hover:underline">support@parlemoi.app</a><br>
        Website: <a href="https://parlemoi.app" class="text-orange hover:underline">https://parlemoi.app</a>
      </p>

      <p>We will respond to all privacy-related inquiries within 30 days.</p>
    </div>
  </main>
</template>
