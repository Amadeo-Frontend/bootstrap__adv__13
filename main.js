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

// Obtenha todos os links na página
const links = document.querySelectorAll("a");

// Adicione um event listener a cada link
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function (event) {
    event.preventDefault();

    // Obter o destino do link
    let target = this.getAttribute("href");

    // Usar o método scrollIntoView para rolar até o destino do link
    document.querySelector(target).scrollIntoView({
      behavior: "smooth",
    });
  });
}
