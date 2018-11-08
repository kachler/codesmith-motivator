document.addEventListener('DOMContentLoaded', function() {

    const outcomes1 = {
        title: 'Senior Software Engineer',
        industry: 'Internet',
        salary: '130k',
      };
      
    createImage();
    createText(outcomes1);


    
  }, false);


  function createImage() {
      const image = document.createElement('IMG');
      image.src = 'frank.png';

      const body = document.getElementById('body');
      body.appendChild(image);
  }

  function createText(obj) {

      for (let key in obj) {
        const text = document.createElement('P');
        text.setAttribute('id', key);
        text.textContent = obj[key];
        const body = document.getElementById('body');
        body.appendChild(text);
      }
  }