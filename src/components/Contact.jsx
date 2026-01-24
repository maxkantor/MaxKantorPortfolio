import { useState, useEffect, useRef } from 'react';

const PRESET_CHIPS = [
  {
    id: 'manager',
    label: 'Software Engineering Manager role',
    template: "Hi Max — I'd like to discuss a Software Engineering Manager opportunity at [Company]. Are you open to a quick conversation this week? Here's some context: …",
  },
  {
    id: 'leadership',
    label: 'Software Engineering Leadership opportunity',
    template: "Hi Max — we're exploring a Software Engineering Leadership opportunity at [Company] and your background stood out. Would you be open to a brief conversation? Context: …",
  },
  {
    id: 'intro',
    label: 'Quick intro / networking',
    template: "Hi Max — I came across your profile and would love to connect. If you're open, I'd appreciate a quick intro chat. …",
  },
];

const PresetChips = ({ selectedChip, onChipClick }) => {
  return (
    <div className="contact-form__presets">
      <span className="contact-form__presets-label">Start with a template</span>
      <div className="contact-form__chips">
        {PRESET_CHIPS.map((chip) => (
          <button
            key={chip.id}
            type="button"
            className={`contact-form__chip ${selectedChip === chip.id ? 'contact-form__chip--active' : ''}`}
            onClick={() => onChipClick(chip.id)}
            aria-pressed={selectedChip === chip.id}
            title={chip.label}
          >
            {chip.label}
          </button>
        ))}
      </div>
    </div>
  );
};

const ConfirmReplace = ({ onConfirm, onCancel }) => {
  return (
    <div className="contact-form__confirm-modal">
      <p>Replace your current message with this template?</p>
      <div className="contact-form__confirm-actions">
        <button
          type="button"
          className="contact-form__confirm-btn contact-form__confirm-btn--primary"
          onClick={onConfirm}
        >
          Replace
        </button>
        <button
          type="button"
          className="contact-form__confirm-btn contact-form__confirm-btn--secondary"
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

const Contact = () => {
  const [status, setStatus] = useState({ state: 'idle', message: '' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [isTyping, setIsTyping] = useState(false);
  const [canSubmit, setCanSubmit] = useState(false);
  const [selectedChip, setSelectedChip] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [pendingChipId, setPendingChipId] = useState(null);
  const debounceTimer = useRef(null);
  const textareaRef = useRef(null);

  // Validation functions
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateForm = () => {
    const newErrors = { name: '', email: '', message: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Message must be at least 20 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Debounced validation
  useEffect(() => {
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    setIsTyping(true);
    debounceTimer.current = setTimeout(() => {
      const isValid = validateForm();
      setCanSubmit(isValid);
      setIsTyping(false);
    }, 800);

    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePresetChip = (chipId) => {
    const chip = PRESET_CHIPS.find((c) => c.id === chipId);
    if (!chip) return;

    // If textarea is empty, apply template without confirmation
    if (formData.message.trim() === '') {
      setFormData((prev) => ({ ...prev, message: chip.template }));
      setSelectedChip(chipId);
      // Focus textarea after state updates
      setTimeout(() => textareaRef.current?.focus(), 0);
      return;
    }

    // If textarea has content, show confirmation
    setPendingChipId(chipId);
    setShowConfirm(true);
  };

  const confirmReplace = () => {
    if (!pendingChipId) return;
    const chip = PRESET_CHIPS.find((c) => c.id === pendingChipId);
    if (chip) {
      setFormData((prev) => ({ ...prev, message: chip.template }));
      setSelectedChip(pendingChipId);
      setTimeout(() => textareaRef.current?.focus(), 0);
    }
    setShowConfirm(false);
    setPendingChipId(null);
  };

  const cancelReplace = () => {
    setShowConfirm(false);
    setPendingChipId(null);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('mykantor@bellsouth.net');
      const originalText = status.message;
      setStatus({ state: 'success', message: 'Email copied to clipboard!' });
      setTimeout(() => {
        setStatus({ state: 'idle', message: originalText });
      }, 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const honeypot = form.companyWebsite?.value?.trim();

    // Anti-spam honeypot check
    if (honeypot) {
      setStatus({ state: 'error', message: 'Unable to send message.' });
      return;
    }

    // Final validation
    if (!validateForm()) {
      return;
    }

    // Prefer env var but fall back to deployed API so the form still works if env is missing
    const apiBase = (import.meta.env.VITE_CONTACT_API_URL || 'https://l0kj1d9qib.execute-api.us-east-1.amazonaws.com').trim();
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
      console.log('Sending to:', url);
      
      // Generate subject line
      const subject = `Portfolio Contact — ${name} (${email})`;
      
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message, subject }),
      });
      const data = await response.json().catch(() => ({}));
      console.log('Response:', response.status, data);

      if (!response.ok || !data.ok) {
        throw new Error(data.error || 'Unable to send message.');
      }

      form.reset();
      setFormData({ name: '', email: '', message: '' });
      setErrors({ name: '', email: '', message: '' });
      setCanSubmit(false);
      setStatus({ state: 'success', message: 'Message sent. Thank you!' });
      console.log('Email sent successfully!');
      setTimeout(() => {
        setStatus({ state: 'idle', message: '' });
      }, 5000);
    } catch (error) {
      console.error('Contact form error:', error);
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
          <p>Recruiters and hiring managers: reach out directly.</p>
        </div>
        <div className="contact-grid">
          <div className="contact-card">
            <h3>Let's connect</h3>
            <div className="contact-info">
              <div className="contact-info__item">
                <span className="contact-info__label">Email</span>
                <a 
                  href="mailto:mykantor@bellsouth.net" 
                  className="contact-info__link"
                  aria-label="Send email to mykantor@bellsouth.net"
                >
                  mykantor@bellsouth.net
                </a>
              </div>
              <div className="contact-info__item">
                <span className="contact-info__label">GitHub</span>
                <a
                  href="https://github.com/maxkantor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-info__link"
                  aria-label="Visit Max Kantor's GitHub profile"
                >
                  github.com/maxkantor
                </a>
              </div>
              <div className="contact-info__item">
                <span className="contact-info__label">LinkedIn</span>
                <a
                  href="https://www.linkedin.com/in/maxim-kantor-0a423125/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-info__link"
                  aria-label="Visit Max Kantor's LinkedIn profile"
                >
                  linkedin.com/in/maxim-kantor-0a423125
                </a>
              </div>
            </div>
            
            <div className="contact-actions">
              <a
                href="mailto:mykantor@bellsouth.net"
                className="btn btn--secondary btn--sm"
                aria-label="Open email client"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                Email me
              </a>
              <button
                onClick={copyEmail}
                className="btn btn--secondary btn--sm"
                type="button"
                aria-label="Copy email address to clipboard"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
                Copy email
              </button>
            </div>

            <div className="contact-resume">
              <a
                className="btn btn--primary btn--sm"
                href="/Max-Kantor-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Max Kantor's resume as PDF"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download Resume
              </a>
              <span className="contact-resume__meta">PDF • Opens in new tab</span>
              <a 
                href="/Max-Kantor-Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-resume__link"
                aria-label="View resume in browser"
              >
                View Resume →
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="contact-form__header">
              <h3>Send a message <span className="contact-form__promise">· Typically responds within 24 hours</span></h3>
            </div>

            <div className="contact-form__row">
              <label htmlFor="contact-name">
                Name <span aria-label="required">*</span>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  aria-invalid={errors.name ? 'true' : 'false'}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <span id="name-error" className="contact-form__error" role="alert">
                    {errors.name}
                  </span>
                )}
              </label>

              <label htmlFor="contact-email">
                Email <span aria-label="required">*</span>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="your.email@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  aria-invalid={errors.email ? 'true' : 'false'}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <span id="email-error" className="contact-form__error" role="alert">
                    {errors.email}
                  </span>
                )}
              </label>
            </div>

            <label className="contact-form__honeypot" aria-hidden="true">
              Company Website
              <input name="companyWebsite" type="text" tabIndex="-1" autoComplete="off" />
            </label>

            <PresetChips selectedChip={selectedChip} onChipClick={handlePresetChip} />

            {showConfirm && <ConfirmReplace onConfirm={confirmReplace} onCancel={cancelReplace} />}

            <label htmlFor="contact-message">
              Message <span aria-label="required">*</span>
              <textarea
                ref={textareaRef}
                id="contact-message"
                name="message"
                rows="4"
                placeholder="Tell me about the opportunity or how I can help..."
                value={formData.message}
                onChange={handleChange}
                required
                aria-required="true"
                aria-invalid={errors.message ? 'true' : 'false'}
                aria-describedby={errors.message ? 'message-error message-hint' : 'message-hint'}
              />
              {errors.message && (
                <span id="message-error" className="contact-form__error" role="alert">
                  {errors.message}
                </span>
              )}
              <span id="message-hint" className="contact-form__hint">
                Minimum 20 characters ({formData.message.length}/20)
              </span>
            </label>

            <button
              className="btn btn--primary btn--sm contact-form__submit"
              type="submit"
              disabled={status.state === 'loading' || !canSubmit}
              aria-busy={status.state === 'loading'}
            >
              {status.state === 'loading' ? (
                <>
                  <svg className="contact-form__spinner" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="12" y1="2" x2="12" y2="6"></line>
                    <line x1="12" y1="18" x2="12" y2="22"></line>
                    <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
                    <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
                    <line x1="2" y1="12" x2="6" y2="12"></line>
                    <line x1="18" y1="12" x2="22" y2="12"></line>
                    <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
                    <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
                  </svg>
                  Sending…
                </>
              ) : (
                'Send message →'
              )}
            </button>

            <p className="contact-form__trust-text">No spam. Your message goes directly to me.</p>

            {status.message && (
              <div
                className={`contact-form__status contact-form__status--${status.state}`}
                role={status.state === 'error' ? 'alert' : 'status'}
                aria-live="polite"
              >
                {status.state === 'success' && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                )}
                {status.state === 'error' && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="15" y1="9" x2="9" y2="15"></line>
                    <line x1="9" y1="9" x2="15" y2="15"></line>
                  </svg>
                )}
                <span>{status.message}</span>
                {status.state === 'error' && (
                  <a href="mailto:mykantor@bellsouth.net" className="contact-form__status-link">
                    Email me directly →
                  </a>
                )}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
