const outcomes1 = {
  title: 'Senior Software Engineer',
  industry: 'Internet',
  salary: '130k',
};

const outcomes2 = {
  title: 'Software Engineer',
  industry: 'Consumer Services',
  salary: '170k',
};

const outcomes3 = {
  title: 'Backend Software Engineer',
  industry: 'Research',
  salary: '120k',
};

const outcomes4 = {
  title: 'Full Stack Software Engineer',
  industry: 'Marketing and Advertising',
  salary: '125k',
};

const outcomes5 = {
  title: 'Senior Frontend Engineer',
  industry: 'Consumer Goods',
  salary: '130k',
};

const outcomes6 = {
  title: 'Software Engineer',
  industry: 'Insurance',
  salary: '130k',
};

const outcomes7 = {
  title: 'Principal Engineer',
  industry: 'Internet',
  salary: '140k',
};

const outcomes8 = {
  title: 'Product Manager',
  industry: 'Internet',
  salary: '140k',
};

const outcomes9 = {
  title: 'Software Engineer',
  industry: 'Internet',
  salary: '140k',
};

const outcomes10 = {
  title: 'Staff Technologist',
  industry: 'Management Consulting',
  salary: '110k',
};

const outcomes = [outcomes1, outcomes2, outcomes3, outcomes4, outcomes5,
  outcomes6, outcomes7, outcomes8, outcomes9, outcomes10];

const images = ['/assets/adrian.png', '/assets/chris.png', '/assets/danni.png', '/assets/dave.png', '/assets/donte.png',
  '/assets/frank.png', '/assets/jae.png', '/assets/jason.png', '/assets/josie.png', '/assets/ken.png', '/assets/mario.png',
  '/assets/tim.png', '/assets/victor.png', '/assets/darryl.png', '/assets/evgenii.png', '/assets/jim.png', '/assets/tony.png'];

function randomImage() {
  return images[Math.floor(Math.random() * images.length)];
}

function randomOutcome() {
  return outcomes[Math.floor(Math.random() * 10)];
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

function createImage() {
  const image = document.createElement('IMG');
  image.src = randomImage();

  const body = document.getElementById('body');
  body.appendChild(image);
}

function onLoad() {

  createImage();
  createText(randomOutcome());

};

document.addEventListener('DOMContentLoaded', onLoad);
