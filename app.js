const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav-list a");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));

// Adiciona um evento de clique a cada link de navegação para fechar o menu
navLinks.forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("active"));
});