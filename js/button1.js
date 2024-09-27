var imagemAlternada = false;

  var primeiraImagem = "/img/vidro.gif"; 
  var segundaImagem = "/img/vidroA.gif"; 
  
  function substituirImagem() {
    var vidroE = document.getElementById("vidroE");
    var imagemExistente = vidroE.querySelector("img");
    if (imagemAlternada) {
      imagemExistente.src = primeiraImagem;
      imagemAlternada = false;
    } else {
      var novaImagem = imagemExistente.cloneNode();
      novaImagem.src = segundaImagem;
      vidroE.innerHTML = "";
      vidroE.appendChild(novaImagem);
      imagemAlternada = true;
    }
  }
  document.addEventListener("DOMContentLoaded", function() {
    var button1 = document.getElementById("button1");
    button1.addEventListener("click", substituirImagem);
  });