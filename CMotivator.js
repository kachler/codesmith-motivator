document.addEventListener('DOMContentLoaded', function() {

    const outcomes1 = {
        title: 'Senior Software Engineer',
        industry: 'Internet',
        salary: '$130,000',
      };
      
    deepThought();
    createImage();
    createText(outcomes1);


    
  }, false);


  function deepThought() {
      const thoughts = ['This could be you!'];
      const text = document.createElement('P');
        text.setAttribute('id', 'thought');
        text.textContent = thoughts[0];
        const body = document.getElementById('body');
        body.appendChild(text);
  }
  
  function createImage() {
      const image = document.createElement('IMG');
      image.src = './assets/frank.png';

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