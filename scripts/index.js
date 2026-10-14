/* global emailjs, t */

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ===== Navbar: borda + barra de progresso de leitura =====
const navbar = document.querySelector('.navbar');

const onScroll = () => {
  navbar.classList.toggle('scrolled', window.scrollY > 8);
  const max = document.documentElement.scrollHeight - window.innerHeight;
  navbar.style.setProperty('--p', max > 0 ? window.scrollY / max : 0);
};
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// ===== Menu mobile =====
const toggleBtn  = document.querySelector('.navbar__toggle');
const mobileMenu = document.querySelector('.mobile__links');

toggleBtn?.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('show');
  toggleBtn.setAttribute('aria-expanded', isOpen);
});

mobileMenu?.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => {
    mobileMenu.classList.remove('show');
    toggleBtn?.setAttribute('aria-expanded', 'false');
  })
);

// ===== Elementos sobem ao entrar na tela =====
const revealObserver = new IntersectionObserver(
  entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  }),
  { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
);
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ===== Link ativo no menu conforme a seção visível =====
const navLinks = document.querySelectorAll('.navbar__links a');

const sectionObserver = new IntersectionObserver(
  entries => entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${entry.target.id}`));
  }),
  { rootMargin: '-45% 0px -50% 0px' }
);
document.querySelectorAll('main section[id]').forEach(s => sectionObserver.observe(s));

// ===== Brilho do card seguindo o mouse =====
document.querySelectorAll('.card').forEach(card =>
  card.addEventListener('pointermove', e => {
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${e.clientX - r.left}px`);
    card.style.setProperty('--my', `${e.clientY - r.top}px`);
  })
);

// ===== Efeito de digitação no topo =====
const typedEl = document.querySelector('.typed');

if (typedEl) {
  const words = () => t('hero.words').split('|');

  if (reduceMotion) {
    typedEl.textContent = words()[0];
  } else {
    let wordIdx = 0;
    let charIdx = 0;
    let deleting = false;

    const tick = () => {
      const list = words();
      const word = list[wordIdx % list.length];

      charIdx += deleting ? -1 : 1;
      typedEl.textContent = word.slice(0, charIdx);

      let delay = deleting ? 45 : 90;
      if (!deleting && charIdx === word.length) {
        deleting = true;
        delay = 1600;
      } else if (deleting && charIdx === 0) {
        deleting = false;
        wordIdx++;
        delay = 350;
      }
      setTimeout(tick, delay);
    };
    setTimeout(tick, 600);
  }
}

// ===== Formulário de contato (EmailJS) =====
emailjs.init('swkcuBg_POf9M-t-S');

const form    = document.getElementById('contact-form');
const status  = document.getElementById('form-message');
const sendBtn = form?.querySelector('button[type="submit"]');

const showMsg = (key, ok = true) => {
  status.textContent = t(key);
  status.style.color = ok ? '#16a34a' : '#dc2626';
};

form?.addEventListener('submit', async e => {
  e.preventDefault();
  const { name, email, message } = e.target;

  if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
    showMsg('form.required', false);
    return;
  }
  if (!/^\S+@\S+\.\S+$/.test(email.value)) {
    showMsg('form.invalidEmail', false);
    return;
  }

  sendBtn.disabled = true;
  sendBtn.textContent = t('form.sending');

  try {
    await emailjs.send('service_u9h1x9b', 'template_lojlrtw', {
      name:    name.value,
      email:   email.value,
      message: message.value,
    });
    showMsg('form.sent');
    form.reset();
  } catch (err) {
    console.error('EmailJS error:', err);
    showMsg('form.error', false);
  } finally {
    sendBtn.disabled = false;
    sendBtn.textContent = t('contact.send');
  }
});
