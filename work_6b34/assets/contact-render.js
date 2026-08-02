(function () {
  const data = window.portalSiteData || {};
  const contact = data.contact || {};
  const email = contact.email || 'pr@wup-katowice.pl';
  const phone = contact.phone || '32 757 33 84';
  const phoneHref = `tel:+48${phone.replace(/\D/g, '')}`;

  document.querySelectorAll('[data-contact-email]').forEach((element) => {
    element.textContent = email;
    if (element.tagName === 'A') {
      element.href = `mailto:${email}`;
    }
  });

  document.querySelectorAll('[data-contact-email-link]').forEach((element) => {
    if (element.tagName === 'A') {
      element.href = `mailto:${email}`;
    }
  });

  document.querySelectorAll('[data-contact-phone]').forEach((element) => {
    element.textContent = phone;
    if (element.tagName === 'A') {
      element.href = phoneHref;
    }
  });

  document.querySelectorAll('[data-contact-phone-link]').forEach((element) => {
    if (element.tagName === 'A') {
      element.href = phoneHref;
    }
  });
})();
