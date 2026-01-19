import { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const honeypot = form.company?.value?.trim();

    if (honeypot) {
      setStatus({ state: 'error', message: 'Unable to send message.' });
      return;
    }

    const apiBase = import.meta.env.VITE_CONTACT_API_URL || '';
    if (!apiBase) {
      setStatus({
        state: 'error',
        message: 'Contact service is not configured yet.',
      });
      return;
    }

    setStatus({ state: 'loading', message: 'Sending message...' });

    try {
      const url = `${apiBase.replace(/\/$/, '')}/contact`;
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await response.json().catch(() => ({}));

      if (!response.ok || !data.ok) {
        throw new Error(data.error || 'Unable to send message.');
      }

      form.reset();
      setStatus({ state: 'success', message: 'Message sent. Thank you!' });
    } catch (error) {
      setStatus({
        state: 'error',
        message: error.message || 'Something went wrong. Please try again.',
      });
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section__header">
          <h2>Contact</h2>
          <p>Recruiters and hiring managers: email me directly.</p>
        </div>
        <div className="contact-grid">
          <div className="contact-card">
            <h3>Let's connect</h3>
            <p className="contact-card__cta">
              Email: <a href="mailto:mykantor@bellsouth.net">mykantor@bellsouth.net</a>
            </p>
            <p>
              GitHub:{' '}
              <a
                href="https://github.com/maxkantor"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/maxkantor
              </a>
            </p>
            <p>
              LinkedIn:{' '}
              <a
                href="https://www.linkedin.com/in/maxim-kantor-0a423125/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/maxim-kantor-0a423125
              </a>
            </p>
            <a
              className="btn btn--primary btn--sm resumeButton"
              href="/Max-Kantor-Resume.pdf"
              download
            >
              Download Resume
            </a>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Name
              <input name="name" type="text" placeholder="Your name" required />
            </label>
            <label>
              Email
              <input name="email" type="email" placeholder="Your email" required />
            </label>
            <label className="contact-form__honeypot" aria-hidden="true">
              Company
              <input name="company" type="text" tabIndex="-1" autoComplete="off" />
            </label>
            <label>
              Message
              <textarea name="message" rows="5" placeholder="How can I help?" required />
            </label>
            <button
              className="btn btn--primary btn--sm"
              type="submit"
              disabled={status.state === 'loading'}
            >
              {status.state === 'loading' ? 'Sending...' : 'Send message'}
            </button>
            {status.message && (
              <p
                className={`contact-form__status contact-form__status--${status.state}`}
                role="status"
                aria-live="polite"
              >
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
