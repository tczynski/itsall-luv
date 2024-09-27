function openModal(modalNumber) {
      var modal = document.getElementById("myModal" + modalNumber);
      modal.style.display = "block";
    }

    // Função para exibir o próximo conteúdo
    function nextContent(modalNumber, currentContentId, nextContentId) {
      var currentContent = document.getElementById(currentContentId);
      var nextContent = document.getElementById(nextContentId);

      currentContent.style.display = "none";
      nextContent.style.display = "block";
    }

    // Função para voltar ao conteúdo anterior
    function previousContent(modalNumber, currentContentId, previousContentId) {
      var currentContent = document.getElementById(currentContentId);
      var previousContent = document.getElementById(previousContentId);

      currentContent.style.display = "none";
      previousContent.style.display = "block";
    }

    // Função para fechar o modal
    function closeModal(modalNumber) {
      var modal = document.getElementById("myModal" + modalNumber);
      modal.style.display = "none";
    }

    // Função para fechar o modal ao clicar fora dele
    window.onclick = function(event) {
      if (event.target.classList.contains("modal")) {
        event.target.style.display = "none";
      }
    };