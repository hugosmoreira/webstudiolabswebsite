import { useState } from 'react';
import Icon from '../ui/Icon.jsx';

const EMPTY = { name: '', email: '', company: '', build: '', budget: '', timeline: '', message: '' };

// Formspree endpoint (env-overridable, with a direct fallback for now).
const FORMSPREE_ENDPOINT =
  import.meta.env.VITE_FORMSPREE_ENDPOINT || 'https://formspree.io/f/mwvzjlqe';

function Field({ label, children }) {
  return (
    <label className="fld">
      <span className="fld-lbl">{label}</span>
      {children}
    </label>
  );
}

/* Frontend-only: submits straight to Formspree via fetch. No backend/auth/payments. */
export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [form, setForm] = useState(EMPTY);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setError(false);
    setLoading(true);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(e.target),
      });
      if (res.ok) {
        setSent(true);
        setForm(EMPTY);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <div className="card card-pad sent-card">
        <div className="sent-ic">
          <Icon name="check" size={28} />
        </div>
        <h3 className="h2">Request received.</h3>
        <p className="muted" style={{ marginTop: 10 }}>
          Thanks — your project request was sent. We’ll review it and get back to you.
        </p>
        <button
          className="btn btn-ghost"
          style={{ marginTop: 18 }}
          onClick={() => {
            setSent(false);
            setError(false);
            setForm(EMPTY);
          }}
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form className="card card-pad contact-form" onSubmit={submit}>
      {/* Sets the Formspree email subject line */}
      <input type="hidden" name="_subject" value="New WebStudioLabs Project Request" />
      <div className="fld-row">
        <Field label="Name">
          <input className="inp" name="name" required value={form.name} onChange={set('name')} placeholder="Jane Doe" />
        </Field>
        <Field label="Email">
          <input className="inp" name="email" type="email" required value={form.email} onChange={set('email')} placeholder="jane@company.com" />
        </Field>
      </div>
      <Field label="Company">
        <input className="inp" name="company" value={form.company} onChange={set('company')} placeholder="Company name" />
      </Field>
      <Field label="What do you want to build?">
        <select className="inp" name="build" required value={form.build} onChange={set('build')}>
          {['Select one…', 'Custom web application', 'Mobile app', 'Internal dashboard', 'Client portal', 'SaaS MVP', 'AI assistant / automation', 'Not sure yet'].map((o, i) => (
            <option key={o} value={i === 0 ? '' : o} disabled={i === 0}>
              {o}
            </option>
          ))}
        </select>
      </Field>
      <div className="fld-row">
        <Field label="Budget range">
          <select className="inp" name="budget" value={form.budget} onChange={set('budget')}>
            {['Select…', '$5k – $15k', '$15k – $40k', '$40k – $100k', '$100k+', 'Need guidance'].map((o, i) => (
              <option key={o} value={i === 0 ? '' : o} disabled={i === 0}>
                {o}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Timeline">
          <select className="inp" name="timeline" value={form.timeline} onChange={set('timeline')}>
            {['Select…', 'ASAP', '1–2 months', '3–6 months', 'Just exploring'].map((o, i) => (
              <option key={o} value={i === 0 ? '' : o} disabled={i === 0}>
                {o}
              </option>
            ))}
          </select>
        </Field>
      </div>
      <Field label="Message">
        <textarea
          className="inp"
          name="message"
          rows={4}
          required
          value={form.message}
          onChange={set('message')}
          placeholder="A sentence or two about your workflow and what’s slowing you down…"
        />
      </Field>
      {error && (
        <p className="muted" style={{ color: 'var(--rose)', fontSize: '.9rem', margin: 0 }}>
          Something went wrong. Please email hello@webstudiolabs.com directly.
        </p>
      )}
      <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', marginTop: 4 }} disabled={loading}>
        {loading ? 'Sending...' : 'Send project request'}
        {!loading && <Icon name="arrowRight" size={17} />}
      </button>
    </form>
  );
}
