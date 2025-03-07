const navbar = document.querySelector('.navbar');
const mobileNavbar = document.querySelector('.navbar__mobile');
const button = document.querySelector('.burguer');

button.addEventListener('click', function () {
  mobileNavbar.classList.toggle('active');
});

window.addEventListener('scroll', function () {
  if (this.window.pageYOffset > 0) return navbar.classList.add('active');
  return navbar.classList.remove('active');
});

document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("swkcuBg_POf9M-t-S"); // Substitua pelo seu Public Key do EmailJS

  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const form = event.target;
      const formData = {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value,
      };

      emailjs
        .send("service_0ow1spe", "template_869dery", formData)
        .then(() => {
          document.getElementById("form-message").textContent =
            "Mensagem enviada com sucesso!";
          form.reset();
        })
        .catch((error) => {
          console.error("Erro ao enviar mensagem:", error);
          document.getElementById("form-message").textContent =
            "Erro ao enviar mensagem. Tente novamente.";
        });
    });
});
