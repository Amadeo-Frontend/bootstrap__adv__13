// Obtenha o botão "Voltar ao topo"
var backToTopButton = document.getElementById("back-to-top-button");

backToTopButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
// Adicione um event listener ao evento "scroll" da janela
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 100) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});
