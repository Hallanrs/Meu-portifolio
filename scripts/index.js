/* ============================================================
   MAIN SCRIPT
   ============================================================ */
/* global emailjs */

// ===== Navbar: is-stuck class on scroll =====
const navbar = document.querySelector('.navbar');

const onScroll = () => {
  if (window.scrollY > 8) {
    navbar.classList.add('is-stuck', 'scrolled');
  } else {
    navbar.classList.remove('is-stuck', 'scrolled');
  }
};

onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// ===== Mobile menu toggle =====
const toggleBtn  = document.querySelector('.navbar__toggle');
const mobileMenu = document.querySelector('.mobile__links');

toggleBtn?.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('show');
  toggleBtn.setAttribute('aria-expanded', isOpen);
});

// Close menu when a link is clicked
mobileMenu?.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => {
    mobileMenu.classList.remove('show');
    toggleBtn?.setAttribute('aria-expanded', 'false');
  })
);

// ===== Scroll animations via IntersectionObserver =====
const animObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        animObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('[data-animate]').forEach(el => animObserver.observe(el));

// ===== Contact form + EmailJS =====
document.addEventListener('DOMContentLoaded', () => {
  emailjs.init('swkcuBg_POf9M-t-S');

  const form   = document.getElementById('contact-form');
  const status = document.getElementById('form-message');

  const showMsg = (text, ok = true) => {
    status.textContent = text;
    status.style.color = ok ? '#10b981' : '#f87171';
  };

  form?.addEventListener('submit', async e => {
    e.preventDefault();
    const { name, email, message } = e.target;

    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
      showMsg('Preencha todos os campos obrigatórios.', false);
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email.value)) {
      showMsg('E-mail inválido.', false);
      return;
    }

    try {
      await emailjs.send('service_u9h1x9b', 'template_lojlrtw', {
        name:    name.value,
        email:   email.value,
        message: message.value,
      });
      showMsg('Mensagem enviada com sucesso!');
      form.reset();
    } catch (err) {
      console.error('EmailJS error:', err);
      showMsg('Erro ao enviar mensagem. Tente novamente.', false);
    }
  });

  // Copyright year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
