


const exibirMensagem = function() {
    const caixaMensagem = document.getElementById("message-box");
    caixaMensagem.style.display = "block";
    caixaMensagem.textContent = mensagens[indiceMensagem];
  };
  
  const tocarMusica = function() {
    // Seu código para tocar música aqui
  };
  
  const pararMusica = function() {
    // Seu código para parar música aqui
  };
  
  export { exibirMensagem, tocarMusica, pararMusica };
