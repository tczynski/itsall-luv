var button1 = document.getElementById('button1');
    var button2 = document.getElementById('button2');
    var layer7 = document.querySelector('.layer7');
    var layer4Gif = document.querySelector('.layer4 .imagem-hover');

    var button1Active = false;
    var button2Active = false;
    var layer7Transparency = true;

    button1.addEventListener('click', function () {
      button1Active = !button1Active;

      if (button1Active) {
        layer7.classList.remove('transparency');
      } else {
        layer7.classList.add('transparency');
      }

      if (button2Active && !layer7Transparency) {
        layer4Gif.src = 'caminho_do_gif_alternativo.gif';
        setTimeout(function () {
          layer4Gif.src = 'caminho_original_do_gif.gif';
        }, 5000);
      }
    });

    button2.addEventListener('click', function () {
      button2Active = !button2Active;
      if (button2Active) {
        layer7.classList.add('transparency');
      } else {
        layer7.classList.remove('transparency');
      }
      layer7Transparency = button2Active;
    });