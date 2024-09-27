import { exibirMensagem, tocarMusica, pararMusica } from "./modules.js";

document.addEventListener("DOMContentLoaded", function() {
  const camada2 = document.getElementById("layer2");
  const camada7 = document.getElementById("layer7");
  const camada3 = document.getElementById("layer3");
  const caixaMensagem = document.getElementById("message-box");
  const botaoMusica = document.getElementById("music-button");
  const botaoImagem = document.getElementById("image-button");

  let temporizadorGif3;

  camada2.addEventListener("click", function() {
    camada2.style.display = "none";
    if (camada7.style.display !== "none") {
      camada7.querySelector(".button").style.pointerEvents = "none";
    }
  });

  camada7.addEventListener("click", function() {
    if (camada2.style.display === "none") {
      camada7.style.display = "none";
    }
  });

  camada3.addEventListener("click", function() {
    clearTimeout(temporizadorGif3);
    exibirMensagem();
    indiceMensagem = (indiceMensagem + 1) % mensagens.length;
    temporizadorGif3 = setTimeout(() => {
      camada3.querySelector("img").src = "gif3.gif";
    }, 5000);
  });

  const mensagens = ["Mensagem 1", "Mensagem 2", "Mensagem 3"];
  let indiceMensagem = 0;

  botaoMusica.addEventListener("click", function() {
    if (audio.paused) {
      tocarMusica();
    } else {
      pararMusica();
    }
  });

  botaoImagem.addEventListener("click", function() {
    const novaImagem = document.createElement("img");
    novaImagem.src = "nova_imagem.jpg";
    novaImagem.alt = "Nova Imagem";

    const link = document.createElement("a");
    link.href = "https://www.example.com";
    link.target = "_blank";
    link.textContent = "Link para example.com";

    const texto = document.createElement("div");
    texto.textContent = "Texto";

    const sobreposicaoImagem = document.createElement("div");
    sobreposicaoImagem.classList.add("sobreposicao-imagem");

    const botaoFechar = document.createElement("div");
    botaoFechar.textContent = "Fechar";
    botaoFechar.classList.add("botao-fechar");
    botaoFechar.addEventListener("click", function() {
      camada13.removeChild(sobreposicaoImagem);
    });

    camada13.appendChild(sobreposicaoImagem);
    sobreposicaoImagem.appendChild(botaoFechar);
    sobreposicaoImagem.appendChild(novaImagem);
    sobreposicaoImagem.appendChild(link);
    sobreposicaoImagem.appendChild(texto);
  });
});
