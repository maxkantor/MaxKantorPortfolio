/**
 * Google Analytics (GA4) & Event Tracking Utility
 * Safe wrapper that respects existing gtag / dataLayer without duplicate initialization.
 */

export const trackEvent = (eventName, params = {}) => {
  if (typeof window === 'undefined') return;

  // Safe gtag invocation
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  } else if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({
      event: eventName,
      ...params,
    });
  }

  // Development logger for verification
  if (import.meta.env.DEV) {
    console.debug(`[Analytics] ${eventName}:`, params);
  }
};

// Consulting-specific event helpers
export const trackConsultingView = (source = 'direct') => {
  trackEvent('consulting_view', {
    page: '/consulting',
    source,
  });
};

export const trackConsultingServiceView = (service, source = 'consulting_page') => {
  trackEvent('consulting_service_view', {
    service,
    source,
    page: window.location.pathname || '/',
  });
};

export const trackConsultingBookClick = (service = 'General Consultation', source = 'button') => {
  trackEvent('consulting_book_click', {
    service,
    source,
    page: window.location.pathname || '/',
  });
};

export const trackServiceClick = (eventType, service, source = 'card') => {
  trackEvent(eventType, {
    service,
    source,
    page: window.location.pathname || '/',
  });
};

export const trackInquiryStart = (service = 'unspecified', source = 'form') => {
  trackEvent('consulting_inquiry_start', {
    service,
    source,
    page: window.location.pathname || '/',
  });
};

export const trackInquirySubmit = (service = 'unspecified', interest = '', hasBudget = false) => {
  trackEvent('consulting_inquiry_submit', {
    service,
    interest,
    has_budget: hasBudget,
    page: window.location.pathname || '/',
  });
};
