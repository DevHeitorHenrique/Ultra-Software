const toggle = document.getElementById("menu-toggle");
const navList = document.querySelector("nav ul"); // Corrigido para pegar o <ul>

toggle.addEventListener("click", () => {
  navList.classList.toggle("active"); // Aplica 'active' no <ul>
});
