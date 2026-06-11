const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const year = document.querySelector('#year');

if (year) {
  year.textContent = new Date().getFullYear();
}

// Adds the Client Log-in button to the main homepage navigation after Contact us.
const contactButton = document.querySelector('.nav-links .nav-cta[href="#contact"]');
if (contactButton && !document.querySelector('.nav-links .client-login-link')) {
  const clientLogin = document.createElement('a');
  clientLogin.href = 'login.html';
  clientLogin.className = 'nav-cta client-login-link';
  clientLogin.textContent = 'Client Log-in';
  contactButton.insertAdjacentElement('afterend', clientLogin);
}

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}
