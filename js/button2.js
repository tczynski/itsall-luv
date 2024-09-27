const gifElement = document.querySelector('#chuva');
      const button = document.querySelector('.button2');

      button.addEventListener('click', function() {
        if (gifElement.style.display === 'none') {
          gifElement.style.display = 'block';
        } else {
          gifElement.style.display = 'none';
        }
      });