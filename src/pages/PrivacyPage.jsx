import { CONTACT_EMAIL } from '../data/site.js';

const UPDATED = 'November 10, 2026';

const PROCESSORS = [
  ['Formspree', 'receives contact-form submissions and forwards them to our inbox.', 'https://formspree.io/legal/privacy-policy/'],
  ['Netlify', 'hosts this website and handles the technical request data described above.', 'https://www.netlify.com/privacy/'],
  ['Google Fonts', 'serves the typefaces used on this site, so your browser requests them from Google.', 'https://policies.google.com/privacy'],
];

function Ext({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

export default function PrivacyPage() {
  const mail = <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>;
  return (
    <section className="doc-page">
      <div className="wrap">
        <article className="doc">
          <div className="eyebrow" style={{ marginBottom: 16 }}>
            <span className="kicker-line" />
            Legal
          </div>
          <h1 className="h1">Privacy Policy</h1>
          <p className="doc-meta">Last updated {UPDATED}</p>

          <p>
            This policy explains what information Web Studio Labs (“we” or “us”) collects through webstudiolabs.com and
            how we use it. It covers this website only. Other sites we link to, including our own products, have their
            own policies.
          </p>

          <h2>What we collect</h2>
          <ul>
            <li>
              <strong>Project inquiries.</strong> When you use the contact form, we receive your name and email address,
              plus any optional details you choose to share: company, brand, or public profile; project category; budget
              range; target timeline; and your project description.
            </li>
            <li>
              <strong>Emails.</strong> If you email us, we receive whatever you include in your message.
            </li>
            <li>
              <strong>Technical request data.</strong> Like any website, our hosting provider receives standard request
              information, such as your IP address, browser type, and the pages you request, in order to deliver and
              secure the site.
            </li>
          </ul>
          <p>This site doesn’t set cookies and doesn’t use advertising or third-party tracking scripts.</p>

          <h2>How we use it</h2>
          <ul>
            <li>To reply to your inquiry and discuss a potential project.</li>
            <li>To keep a record of our conversation if we work together.</li>
          </ul>
          <p>
            We don’t sell your information or use it for advertising, and we won’t add you to a mailing list without
            asking.
          </p>

          <h2>Services that process your information</h2>
          <ul>
            {PROCESSORS.map(([name, what, href]) => (
              <li key={name}>
                <strong>{name}</strong> {what} <Ext href={href}>{name} privacy policy</Ext>
              </li>
            ))}
            <li>
              <strong>Our email provider</strong> stores the inquiries and emails we receive.
            </li>
          </ul>

          <h2>How long we keep it</h2>
          <p>
            We keep inquiries for as long as we need them to respond and to manage any project that follows, and then
            delete them. You can ask us to delete your information at any time.
          </p>

          <h2>Your choices</h2>
          <p>
            You can ask what information we hold about you, or ask us to correct or delete it, by emailing {mail}.
            Depending on where you live, you may have additional rights under local law, and we’ll honor them.
          </p>

          <h2>Changes to this policy</h2>
          <p>If our practices change, we’ll update this page and the date at the top.</p>

          <h2>Contact</h2>
          <p>Questions about this policy or your information: {mail}.</p>
        </article>
      </div>
    </section>
  );
}
