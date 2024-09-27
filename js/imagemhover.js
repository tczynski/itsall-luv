window.addEventListener('DOMContentLoaded', (event) => {
    var imagensHover = document.querySelectorAll('.imagem-hover');

    imagensHover.forEach(function (imagem) {
      var imagemNormal = imagem.getAttribute('src');
      var novaImagem = imagem.getAttribute('data-hover');

      imagem.addEventListener('mouseover', function () {
        trocarImagem(imagem, novaImagem);
      });

      imagem.addEventListener('mouseout', function () {
        trocarImagem(imagem, imagemNormal);
      });
    });

    function trocarImagem(imagem, novaImagem) {
      imagem.src = novaImagem;
    }
  });

