document.querySelectorAll('nav').forEach((nav, index) => {
  const toggle = nav.querySelector('[data-framer-name="Menu"]');
  const links = nav.querySelector('[data-framer-name="Navigation links"]');
  if (!toggle || !links) return;
  links.id = `navigation-${index}`;
  toggle.setAttribute('aria-controls', links.id);
  const setOpen = (open) => {
    nav.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  };
  toggle.addEventListener('click', () => setOpen(!nav.classList.contains('menu-open')));
  toggle.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setOpen(!nav.classList.contains('menu-open'));
    }
  });
  nav.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      setOpen(false);
      toggle.focus();
    }
  });
  links.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setOpen(false)));
});

document.querySelectorAll('[data-enquiry-form]').forEach((form) => {
  const polish = document.documentElement.lang === 'pl';
  form.querySelector('[name="_next"]').value = new URL(polish ? 'thank-you-pl.html' : 'thank-you.html', window.location.href).href;
});
