import { useEffect, useRef, useState } from 'react';
import Icon from '../ui/Icon.jsx';
import { onPreselectCategory } from '../lib/prefill.js';
import { CONTACT_EMAIL } from '../data/site.js';

const EMPTY = { name: '', email: '', company: '', build: '', budget: '', timeline: '', message: '' };

const CATEGORIES = [
  'Custom Software',
  'Mobile App',
  'Product Design or Website',
  'Creator or Community Platform',
  'Not Sure Yet',
];
const BUDGETS = ['$5k – $15k', '$15k – $40k', '$40k – $100k', '$100k+', 'Need guidance'];
const TIMELINES = ['ASAP', '1–2 months', '3–6 months', 'Just exploring'];

// Formspree endpoint (env-overridable, with a direct fallback for now).
const FORMSPREE_ENDPOINT =
  import.meta.env.VITE_FORMSPREE_ENDPOINT || 'https://formspree.io/f/mwvzjlqe';

function Field({ label, optional, children }) {
  return (
    <label className="fld">
      <span className="fld-lbl">
        {label}
        {optional && <span className="fld-opt"> (optional)</span>}
      </span>
      {children}
    </label>
  );
}

function Select({ name, value, onChange, options, placeholder, required }) {
  return (
    <select className="inp" name={name} required={required} value={value} onChange={onChange}>
      <option value="" disabled={required}>
        {placeholder}
      </option>
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  );
}

/* Frontend-only: submits straight to Formspree via fetch. */
export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [form, setForm] = useState(EMPTY);
  const sentRef = useRef(null);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  useEffect(
    () =>
      onPreselectCategory((category) => {
        setSent(false);
        setForm((f) => (f.build ? f : { ...f, build: category }));
      }),
    []
  );

  useEffect(() => {
    if (sent) sentRef.current?.focus();
  }, [sent]);

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
      <div className="card card-pad sent-card" role="status">
        <div className="sent-ic">
          <Icon name="check" size={28} />
        </div>
        <h3 className="h2" ref={sentRef} tabIndex={-1}>
          Inquiry received.
        </h3>
        <p className="muted" style={{ marginTop: 10 }}>
          Thanks — your project inquiry was sent. We’ll review it and get back to you.
        </p>
        <button
          type="button"
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
    <form className="card card-pad contact-form" onSubmit={submit} aria-busy={loading}>
      {/* Sets the Formspree email subject line */}
      <input type="hidden" name="_subject" value="New WebStudioLabs Project Request" />
      {/* Formspree honeypot: people never see this field, so a filled value marks the submission as spam. */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: 'none' }} />
      <div className="fld-row">
        <Field label="Name">
          <input className="inp" name="name" required autoComplete="name" value={form.name} onChange={set('name')} placeholder="Jane Doe" />
        </Field>
        <Field label="Email">
          <input
            className="inp"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={set('email')}
            placeholder="jane@company.com"
          />
        </Field>
      </div>
      <Field label="Company, brand, or public profile" optional>
        <input className="inp" name="company" autoComplete="organization" value={form.company} onChange={set('company')} placeholder="Company name, website, or @handle" />
      </Field>
      <Field label="What do you want to build?">
        <Select name="build" required value={form.build} onChange={set('build')} options={CATEGORIES} placeholder="Select one…" />
      </Field>
      <div className="fld-row">
        <Field label="Budget range" optional>
          <Select name="budget" value={form.budget} onChange={set('budget')} options={BUDGETS} placeholder="Select…" />
        </Field>
        <Field label="Target timeline" optional>
          <Select name="timeline" value={form.timeline} onChange={set('timeline')} options={TIMELINES} placeholder="Select…" />
        </Field>
      </div>
      <Field label="Project description">
        <textarea
          className="inp"
          name="message"
          rows={4}
          required
          value={form.message}
          onChange={set('message')}
          placeholder="What do you want to build, what problem does it solve, and where are you in the process?"
        />
      </Field>
      <div role="alert">
        {error && (
          <p className="form-error">
            Something went wrong and your inquiry wasn’t sent. Your details are still here — please try again, or
            email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> directly.
          </p>
        )}
      </div>
      <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', marginTop: 4 }} disabled={loading}>
        {loading ? 'Sending…' : 'Send Project Inquiry'}
        {!loading && <Icon name="arrowRight" size={17} />}
      </button>
      <p className="form-note">
        We use your details only to respond to your inquiry. See our <a href="/privacy/">Privacy Policy</a>.
      </p>
    </form>
  );
}
