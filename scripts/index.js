// ===== Navbar: sombra ao rolar =====
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 0) {
    navbar.classList.add('active');
    navbar.classList.add('scrolled'); // compatível com CSS novo
  } else {
    navbar.classList.remove('active');
    navbar.classList.remove('scrolled');
  }
});

// ===== Menu mobile: compatível com HTML antigo e novo =====
const toggleButton =
  document.querySelector('.navbar__toggle') || document.querySelector('.burguer');

const mobileMenu =
  document.querySelector('.mobile__links') || document.querySelector('.navbar__mobile');

toggleButton?.addEventListener('click', () => {
  // no markup novo usamos classe .show; no antigo, .active
  mobileMenu.classList.toggle('show');
  mobileMenu.classList.toggle('active');
});

mobileMenu?.querySelectorAll('a').forEach((a) =>
  a.addEventListener('click', () => {
    mobileMenu.classList.remove('show');
    mobileMenu.classList.remove('active');
  })
);

// ===== EmailJS (seu código, com leve UX) =====
document.addEventListener('DOMContentLoaded', () => {
  // sua public key
  emailjs.init('swkcuBg_POf9M-t-S');

  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-message');

  const show = (text, ok = true) => {
    status.textContent = text;
    status.style.color = ok ? '#22c55e' : '#f87171';
  };

  form?.addEventListener('submit', async (event) => {
    event.preventDefault();

    const { name, email, message } = event.target;

    // validações simples
    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
      show('Preencha todos os campos obrigatórios.', false);
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email.value)) {
      show('E-mail inválido.', false);
      return;
    }

    try {
      await emailjs.send('service_u9h1x9b', 'template_lojlrtw', {
        name: name.value,
        email: email.value,
        message: message.value
      });
      show('Mensagem enviada com sucesso!');
      form.reset();
    } catch (err) {
      console.error('Erro ao enviar mensagem:', err);
      show('Erro ao enviar mensagem. Tente novamente.', false);
    }
  });

  // ano no rodapé (se existir)
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});
   
