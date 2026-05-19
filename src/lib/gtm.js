export function pushEvent(eventName, params = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ...params,
  });
}

export function trackPageView(url) {
  pushEvent("page_view", { page_path: url });
}

export function trackContactFormSubmit({ name, email, phone, subject, message }) {
  pushEvent("contact_form_submit", {
    form_name: "contact_form",
    form_user_name: name || "not_set",
    form_user_email: email || "not_set",
    form_user_phone: phone || "not_set",
    form_subject: subject || "not_set",
    form_message: message || "not_set",
  });
}

export function trackBookingSubmit({ firstName, lastName, email, phone, service, industry, facilitySize }) {
  pushEvent("booking_form_submit", {
    form_name: "booking_form",
    booking_first_name: firstName || "not_set",
    booking_last_name: lastName || "not_set",
    booking_email: email || "not_set",
    booking_phone: phone || "not_set",
    booking_service: service || "not_set",
    booking_industry: industry || "not_set",
    booking_facility_size: facilitySize || "not_set",
  });
}

export function trackPhoneClick(location) {
  pushEvent("phone_click", {
    click_location: location,
    phone_number: "+16313817252",
  });
}

export function trackCtaClick(ctaLabel, ctaLocation) {
  pushEvent("cta_click", {
    cta_label: ctaLabel,
    cta_location: ctaLocation,
  });
}
