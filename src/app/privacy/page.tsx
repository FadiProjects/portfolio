import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-400 py-16 px-4 sm:px-8 lg:px-24 font-sans selection:bg-zinc-700 selection:text-zinc-100 pt-64">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-zinc-100 mb-12 tracking-tight">Privacy Policy</h1>

        <div className="space-y-12 leading-relaxed">
          {/* 1. Datenschutz auf einen Blick */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-zinc-100 border-b border-zinc-800 pb-2">1. Data Protection at a Glance</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-zinc-200">General Information</h3>
              <p>The following notes provide a simple overview of what happens to your personal data when you visit this website. Personal data is any data with which you can be personally identified. Detailed information on the subject of data protection can be found in our privacy policy listed below this text.</p>

              <h3 className="text-xl font-medium text-zinc-200 uppercase tracking-wide text-sm">Data Collection on this Website</h3>
              <p><strong>Who is responsible for data collection on this website?</strong><br />The data processing on this website is carried out by the website operator. You can find their contact details in the section "Note on the Responsible Party" in this privacy policy.</p>
              
              <p><strong>How do we collect your data?</strong><br />On the one hand, your data is collected when you communicate it to us. This can be, for example, data that you enter in a contact form.</p>
              <p>Other data is collected automatically or after your consent when you visit the website through our IT systems. These are primarily technical data (e.g., internet browser, operating system, or time of the page call). This data is collected automatically as soon as you enter this website.</p>

              <p><strong>What do we use your data for?</strong><br />Part of the data is collected to ensure the error-free provision of the website. Other data can be used to analyze your user behavior. If contracts can be concluded or initiated via the website, the transmitted data will also be processed for contract offers, orders, or other order inquiries.</p>

              <p><strong>What rights do you have regarding your data?</strong><br />You have the right at any time to receive information free of charge about the origin, recipient, and purpose of your stored personal data. You also have a right to demand the correction or deletion of this data. If you have given your consent to data processing, you can revoke this consent at any time for the future. You also have the right, under certain circumstances, to demand the restriction of the processing of your personal data. Furthermore, you have a right of appeal to the competent supervisory authority.</p>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-medium text-zinc-200">Analysis Tools and Third-Party Tools</h3>
              <p>When visiting this website, your surfing behavior can be statistically evaluated. This happens primarily with so-called analysis programs. Detailed information on these analysis programs can be found in the following privacy policy.</p>
            </div>
          </section>

          {/* 2. Hosting (Vercel) */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-zinc-100 border-b border-zinc-800 pb-2">2. Hosting</h2>
            <h3 className="text-xl font-medium text-zinc-200">Vercel</h3>
            <p>We host our website with the following provider: <strong>Vercel Inc.</strong>, 440 N Barranca Ave #4133, Covina, CA 91723, USA (hereinafter: Vercel).</p>
            <p>When you visit our website, Vercel collects various log files including your IP addresses. Vercel is a platform for frontend frameworks and static sites. Data processing may also take place in the USA. Vercel uses Standard Contractual Clauses (SCCs) to ensure an adequate level of data protection. Details can be found in Vercel's privacy policy: <a href="https://vercel.com" className="text-zinc-200 underline underline-offset-4 decoration-zinc-700 hover:decoration-zinc-100 transition-colors" title="https://vercel.com" aria-label="https://vercel.com" target="_blank">https://vercel.com</a>.</p>
            <p>The use of Vercel is based on Art. 6 (1) (f) GDPR. We have a legitimate interest in the most reliable presentation of our website. If a corresponding consent was requested, processing takes place exclusively on the basis of Art. 6 (1) (a) GDPR and § 25 (1) TDDDG, insofar as the consent includes the storage of cookies or access to information in the user's terminal device (e.g., device fingerprinting) within the meaning of the TDDDG. Consent can be revoked at any time.</p>
            <div className="bg-zinc-900 p-4 border border-zinc-800 rounded-md">
              <p className="font-semibold text-zinc-200 mb-2">Data Processing Agreement</p>
              <p>We have concluded a Data Processing Agreement (DPA) with the aforementioned provider. This is a contract required by data protection law, which ensures that they process the personal data of our website visitors only in accordance with our instructions and in compliance with the GDPR.</p>
            </div>
          </section>

          {/* 3. Allgemeine Hinweise */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-zinc-100 border-b border-zinc-800 pb-2">3. General Information and Mandatory Information</h2>
            <h3 className="text-xl font-medium text-zinc-200">Data Protection</h3>
            <p>The operators of these pages take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with the statutory data protection regulations and this privacy policy.</p>
            <p>If you use this website, various personal data will be collected. Personal data is data with which you can be personally identified. This privacy policy explains what data we collect and what we use it for. It also explains how and for what purpose this happens.</p>
            <p className="italic underline underline-offset-4 decoration-zinc-800">We point out that data transmission over the Internet (e.g., when communicating by e-mail) can have security gaps. Complete protection of data against access by third parties is not possible.</p>

            <h3 className="text-xl font-medium text-zinc-200 mt-8">Note on the Responsible Party</h3>
            <div className="bg-zinc-900/50 p-6 rounded-lg border border-zinc-800">
              <p className="font-bold text-zinc-100">Fadi Moussa</p>
              <p>Huttenstraße 22</p>
              <p>10553 Berlin, Germany</p>
              <p className="mt-4"><strong>Phone:</strong> +49 1787108450</p>
              <p><strong>E-Mail:</strong> <span className="text-zinc-300">fadimoussa1998@gmail.com</span></p>
            </div>
            <p className="text-sm mt-4 text-zinc-500">The responsible party is the natural or legal person who alone or jointly with others decides on the purposes and means of processing personal data (e.g., names, e-mail addresses, etc.).</p>

            <h3 className="text-xl font-medium text-zinc-200">Storage Duration</h3>
            <p>Unless a more specific storage period has been specified in this privacy policy, your personal data will remain with us until the purpose for processing the data no longer applies. If you assert a justified request for deletion or revoke your consent to data processing, your data will be deleted, provided we have no other legally permissible reasons for storing your personal data (e.g., tax or commercial law retention periods); in the latter case, deletion will take place after these reasons cease to apply.</p>

            <h3 className="text-xl font-medium text-zinc-200">General Information on the Legal Basis for Data Processing on this Website</h3>
            <p>If you have consented to data processing, we process your personal data on the basis of Art. 6 (1) (a) GDPR or Art. 9 (2) (a) GDPR, provided that special categories of data according to Art. 9 (1) GDPR are processed. In the event of express consent to the transfer of personal data to third countries, data processing is also based on Art. 49 (1) (a) GDPR. If you have consented to the storage of cookies or access to information in your end device (e.g., via device fingerprinting), the data processing is additionally based on § 25 (1) TDDDG. Consent can be revoked at any time. If your data is required for the fulfillment of a contract or for the implementation of pre-contractual measures, we process your data on the basis of Art. 6 (1) (b) GDPR. Furthermore, we process your data if it is necessary to fulfill a legal obligation on the basis of Art. 6 (1) (c) GDPR. Data processing may also be carried out on the basis of our legitimate interest pursuant to Art. 6 (1) (f) GDPR. Information about the relevant legal basis in each individual case is provided in the following paragraphs of this privacy policy.</p>

            <h3 className="text-xl font-medium text-zinc-200">Recipients of Personal Data</h3>
            <p>In the course of our business activities, we work with various external bodies. In some cases, it is also necessary to transfer personal data to these external bodies. We only pass on personal data to external bodies if this is necessary within the framework of the fulfillment of a contract, if we are legally obliged to do so (e.g., passing on data to tax authorities), if we have a legitimate interest according to Art. 6 (1) (f) GDPR in passing it on, or if another legal basis allows the data transfer. When using processors, we only pass on the personal data of our customers on the basis of a valid Data Processing Agreement (DPA). In the case of joint processing, a joint processing agreement is concluded.</p>

            <h3 className="text-xl font-medium text-zinc-200">Revocation of Your Consent to Data Processing</h3>
            <p>Many data processing operations are only possible with your express consent. You can revoke consent you have already given at any time. The legality of the data processing carried out until the revocation remains unaffected by the revocation.</p>

            <div className="bg-zinc-900 border-l-4 border-zinc-500 p-6 my-8">
              <h3 className="text-lg font-bold text-zinc-100 uppercase mb-4">Right to Object to Data Collection in Special Cases and to Direct Advertising (Art. 21 GDPR)</h3>
              <p className="text-xs uppercase leading-relaxed text-zinc-400">
                IF DATA PROCESSING IS BASED ON ART. 6 (1) (E) OR (F) GDPR, YOU HAVE THE RIGHT AT ANY TIME, FOR REASONS ARISING FROM YOUR PARTICULAR SITUATION, TO OBJECT TO THE PROCESSING OF YOUR PERSONAL DATA; THIS ALSO APPLIES TO PROFILING BASED ON THESE PROVISIONS. THE RESPECTIVE LEGAL BASIS ON WHICH PROCESSING IS BASED CAN BE FOUND IN THIS PRIVACY POLICY. IF YOU OBJECT, WE WILL NO LONGER PROCESS YOUR AFFECTED PERSONAL DATA UNLESS WE CAN DEMONSTRATE COMPELLING LEGITIMATE GROUNDS FOR THE PROCESSING WHICH OVERRIDE YOUR INTERESTS, RIGHTS, AND FREEDOMS, OR THE PROCESSING SERVES THE ASSERTION, EXERCISE, OR DEFENSE OF LEGAL CLAIMS (OBJECTION ACCORDING TO ART. 21 (1) GDPR).
              </p>
              <p className="text-xs uppercase leading-relaxed text-zinc-400 mt-4">
                IF YOUR PERSONAL DATA IS PROCESSED FOR THE PURPOSE OF DIRECT ADVERTISING, YOU HAVE THE RIGHT TO OBJECT AT ANY TIME TO THE PROCESSING OF PERSONAL DATA CONCERNING YOU FOR THE PURPOSE OF SUCH ADVERTISING; THIS ALSO APPLIES TO PROFILING TO THE EXTENT THAT IT IS RELATED TO SUCH DIRECT ADVERTISING. IF YOU OBJECT, YOUR PERSONAL DATA WILL SUBSEQUENTLY NO LONGER BE USED FOR THE PURPOSE OF DIRECT ADVERTISING (OBJECTION ACCORDING TO ART. 21 (2) GDPR).
              </p>
            </div>

            <h3 className="text-xl font-medium text-zinc-200">Right to lodge a complaint with the competent supervisory authority</h3>
            <p>In the event of violations of the GDPR, data subjects have the right to lodge a complaint with a supervisory authority, in particular in the Member State of their habitual residence, their place of work or the place of the alleged violation. The right to lodge a complaint is without prejudice to other administrative or judicial remedies.</p>

            <h3 className="text-xl font-medium text-zinc-200">Right to data portability</h3>
            <p>You have the right to have data that we process automatically on the basis of your consent or in fulfillment of a contract handed over to you or to a third party in a common, machine-readable format. If you request the direct transfer of the data to another controller, this will only be done insofar as it is technically feasible.</p>

            <h3 className="text-xl font-medium text-zinc-200">Information, correction and deletion</h3>
            <p>Within the framework of the applicable legal provisions, you have the right at any time to free information about your stored personal data, its origin and recipient and the purpose of the data processing and, if applicable, a right to correction or deletion of this data. For this purpose, as well as for further questions on the subject of personal data, you can contact us at any time.</p>

            <h3 className="text-xl font-medium text-zinc-200">Right to restriction of processing</h3>
            <p>You have the right to request the restriction of the processing of your personal data. You can contact us at any time for this purpose. The right to restriction of processing exists in the following cases:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>If you contest the accuracy of your personal data stored by us, we usually need time to verify this. For the duration of the audit, you have the right to demand the restriction of the processing of your personal data.</li>
              <li>If the processing of your personal data happened/is happening unlawfully, you can request the restriction of data processing instead of deletion.</li>
              <li>If we no longer need your personal data, but you need it to exercise, defend or assert legal claims, you have the right to demand the restriction of the processing of your personal data instead of deletion.</li>
              <li>If you have lodged an objection pursuant to Art. 21 (1) GDPR, a balance must be struck between your interests and ours. As long as it has not yet been determined whose interests prevail, you have the right to demand the restriction of the processing of your personal data.</li>
            </ul>
            <p>If you have restricted the processing of your personal data, this data – apart from its storage – may only be processed with your consent or for the assertion, exercise or defense of legal claims or for the protection of the rights of another natural or legal person or for reasons of an important public interest of the European Union or a Member State.</p>

            <h3 className="text-xl font-medium text-zinc-200 pt-6">SSL or TLS Encryption</h3>
            <p>For security reasons and to protect the transmission of confidential content, such as orders or inquiries that you send to us as the site operator, this site uses SSL or TLS encryption. You can recognize an encrypted connection by the fact that the address line of the browser changes from "http://" to "https://" and by the lock symbol in your browser line. If SSL or TLS encryption is activated, the data you transmit to us cannot be read by third parties.</p>

            <h3 className="text-xl font-medium text-zinc-200 pt-6">Objection to Promotional Emails</h3>
            <p>The use of contact data published within the scope of the imprint obligation for the purpose of sending unsolicited advertising and information materials is hereby prohibited. The operators of the pages expressly reserve the right to take legal action in the event of the unsolicited sending of advertising information, such as spam emails.</p>
          </section>

          {/* 4. Datenerfassung auf dieser Website */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-zinc-100 border-b border-zinc-800 pb-2">4. Data Collection on this Website</h2>
            
            <h3 className="text-xl font-medium text-zinc-200">Cookies</h3>
            <p>Our website uses so-called "cookies". Cookies are small data packets and do not cause any damage to your end device. They are stored on your device either temporarily for the duration of a session (session cookies) or permanently (permanent cookies). Session cookies are automatically deleted at the end of your visit. Permanent cookies remain stored on your device until you delete them yourself or until your web browser automatically deletes them.</p>
            <p>Cookies can originate from us (first-party cookies) or from third-party companies (so-called third-party cookies). Third-party cookies enable the integration of certain services from third-party companies within websites (e.g., cookies for processing payment services).</p>
            <p>Cookies that are required to carry out the electronic communication process, to provide certain functions you desire (e.g., for the shopping cart function), or to optimize the website (e.g., cookies for measuring the web audience) (necessary cookies) are stored on the basis of Art. 6 (1) (f) GDPR, unless another legal basis is specified. The website operator has a legitimate interest in storing necessary cookies for the technically error-free and optimized provision of its services. If consent for the storage of cookies and comparable recognition technologies was requested, processing is based exclusively on this consent (Art. 6 (1) (a) GDPR and § 25 (1) TDDDG); consent can be revoked at any time.</p>
            
            <h3 className="text-xl font-medium text-zinc-200 pt-4 text-zinc-300 italic">Contact Form (Web3Forms)</h3>
            <div className="bg-zinc-900/40 p-5 rounded border border-zinc-800">
              <p>If you send us inquiries via the contact form, your details from the inquiry form, including the contact data you provided there, will be stored by us for the purpose of processing the inquiry and in the event of follow-up questions.</p>
              <p className="mt-2 text-sm">The processing of this data is based on <strong>Art. 6 (1) (b) GDPR</strong>, provided your request is related to the fulfillment of a contract or is necessary for the implementation of pre-contractual measures (e.g., a moving quote). In all other cases, the processing is based on our legitimate interest in the effective processing of the inquiries addressed to us (Art. 6 (1) (f) GDPR).</p>
              <p className="mt-2 text-sm italic">We use the service <strong>Web3Forms</strong> to send the form data. The provider is Web3Forms, India. The data you enter into the form will be transmitted to Web3Forms' servers and processed there. Please note that India is a third country outside the European Union. Data transmission is encrypted. Further information: <a href="https://web3forms.com" className="text-zinc-200 underline">://web3forms.com</a>.</p>
            </div>

            <h3 className="text-xl font-medium text-zinc-200">Server Log Files</h3>
            <p>The provider of the pages automatically collects and stores information in so-called server log files, which your browser automatically transmits to us. These are: Browser type and browser version, operating system used, Referrer URL, Hostname of the accessing computer, Time of the server request, and IP address. This data is not merged with other data sources.</p>
            <p>The collection of this data is based on Art. 6 (1) (f) GDPR. The website operator has a legitimate interest in the technically error-free presentation and optimization of its website – for this purpose, the server log files must be recorded.</p>

            <h3 className="text-xl font-medium text-zinc-200 pt-6">Inquiry by E-mail, Telephone, or Fax</h3>
            <p>If you contact us by e-mail, telephone, or fax, your request, including all resulting personal data (name, request), will be stored and processed by us for the purpose of processing your request. We do not pass on this data without your consent.</p>
            <p>The processing of this data is based on Art. 6 (1) (b) GDPR if your request is related to the fulfillment of a contract or is necessary for the implementation of pre-contractual measures. In all other cases, the processing is based on our legitimate interest in the effective processing of the inquiries addressed to us (Art. 6 (1) (f) GDPR) or on your consent (Art. 6 (1) (a) GDPR) if this was requested.</p>
          </section>
        </div>

        <footer className="mt-20 pt-8 border-t border-zinc-900 text-zinc-600 text-sm">
          <p>© {new Date().getFullYear()} Fadi Moussa — Privacy Policy</p>
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPolicy;