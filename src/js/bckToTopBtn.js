// Mostra o botão quando o usuário rola a página para baixo
window.onscroll = function () {
  var backToTopBtn = document.getElementById("backToTopBtn");

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
};

// Função para rolar para o topo da página
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Adiciona evento de clique ao botão
document
  .getElementById("backToTopBtn")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Previne o comportamento padrão do link
    scrollToTop();
  });
