import { useState } from 'react';
import Icon from '../ui/Icon.jsx';

const EMPTY = { name: '', email: '', company: '', build: '', budget: '', timeline: '', message: '' };

function Field({ label, children }) {
  return (
    <label className="fld">
      <span className="fld-lbl">{label}</span>
      {children}
    </label>
  );
}

/* Front-end only — no backend wired up yet. Shows a confirmation state on submit. */
export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState(EMPTY);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="card card-pad sent-card">
        <div className="sent-ic">
          <Icon name="check" size={28} />
        </div>
        <h3 className="h2">Request received.</h3>
        <p className="muted" style={{ marginTop: 10 }}>
          Thanks, {form.name || 'there'}. We’ll reply within one business day to schedule your strategy call.
        </p>
        <button
          className="btn btn-ghost"
          style={{ marginTop: 18 }}
          onClick={() => {
            setSent(false);
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
      <div className="fld-row">
        <Field label="Name">
          <input className="inp" required value={form.name} onChange={set('name')} placeholder="Jane Doe" />
        </Field>
        <Field label="Email">
          <input className="inp" type="email" required value={form.email} onChange={set('email')} placeholder="jane@company.com" />
        </Field>
      </div>
      <Field label="Company">
        <input className="inp" value={form.company} onChange={set('company')} placeholder="Company name" />
      </Field>
      <Field label="What do you want to build?">
        <select className="inp" value={form.build} onChange={set('build')}>
          {['Select one…', 'Custom web application', 'Mobile app', 'Internal dashboard', 'Client portal', 'SaaS MVP', 'AI assistant / automation', 'Not sure yet'].map((o, i) => (
            <option key={o} value={i === 0 ? '' : o} disabled={i === 0}>
              {o}
            </option>
          ))}
        </select>
      </Field>
      <div className="fld-row">
        <Field label="Budget range">
          <select className="inp" value={form.budget} onChange={set('budget')}>
            {['Select…', '$5k – $15k', '$15k – $40k', '$40k – $100k', '$100k+', 'Need guidance'].map((o, i) => (
              <option key={o} value={i === 0 ? '' : o} disabled={i === 0}>
                {o}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Timeline">
          <select className="inp" value={form.timeline} onChange={set('timeline')}>
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
          rows={4}
          value={form.message}
          onChange={set('message')}
          placeholder="A sentence or two about your workflow and what’s slowing you down…"
        />
      </Field>
      <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', marginTop: 4 }}>
        Send project request
        <Icon name="arrowRight" size={17} />
      </button>
    </form>
  );
}
