const outcomes1 = {
  title: 'Senior Software Engineer',
  industry: 'Internet',
  salary: '$130,000',
};

const outcomes2 = {
  title: 'Software Engineer',
  industry: 'Consumer Services',
  salary: '$170,000',
};

const outcomes3 = {
  title: 'Backend Software Engineer',
  industry: 'Research',
  salary: '$120,000',
};

const outcomes4 = {
  title: 'Full Stack Software Engineer',
  industry: 'Marketing and Advertising',
  salary: '$125,000',
};

const outcomes5 = {
  title: 'Senior Frontend Engineer',
  industry: 'Consumer Goods',
  salary: '$130,000',
};

const outcomes6 = {
  title: 'Software Engineer',
  industry: 'Insurance',
  salary: '$130,000',
};

const outcomes7 = {
  title: 'Principal Engineer',
  industry: 'Internet',
  salary: '$140,000',
};

const outcomes8 = {
  title: 'Product Manager',
  industry: 'Internet',
  salary: '$140,000',
};

const outcomes9 = {
  title: 'Software Engineer',
  industry: 'Internet',
  salary: '$140,000',
};

const outcomes10 = {
  title: 'Staff Technologist',
  industry: 'Management Consulting',
  salary: '$110,000',
};

const outcomes = [outcomes1, outcomes2, outcomes3, outcomes4, outcomes5,
  outcomes6, outcomes7, outcomes8, outcomes9, outcomes10];

const images = ['./assets/adrian.png', './assets/chris.png', './assets/danni.png', './assets/dave.png', './assets/donte.png',
  './assets/frank.png', './assets/jae.png', './assets/jason.png', './assets/josie.png', './assets/ken.png', './assets/mario.png',
  './assets/tim.png', './assets/victor.png', './assets/darryl.png', './assets/evgenii.png', './assets/jim.png', './assets/tony.png'];

function deepThought() {
    const thoughts = [`This could be you!`, `Dont give up!`, `Opportunities await!`];
    const text = document.createElement('P');
    text.setAttribute('id', 'thought');
    text.textContent = thoughts[Math.floor(Math.random() * thoughts.length)];
    const body = document.getElementById('body');
    body.appendChild(text);
}

function createImage() {
    const image = document.createElement('IMG');
    image.src = './assets/frank.png';
}

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

function needHelpText() {
    const text = document.createElement('P');
    text.setAttribute('id', 'help-text');
    text.textContent = 'Do you need more help?';
    const body = document.getElementById('body');
    body.appendChild(text);
}

function createSlack() {
    const link = document.createElement('a');
    link.textContent = "Help!";
    link.setAttribute('id', 'slack');
    link.onclick = () => window.open("slack://channel?team=TCYV2P7FH&id=CDQUXFK4L");
    const body = document.getElementById('body');
    body.appendChild(link);
}

function createMail() {
    const link = document.createElement('a');
    link.textContent = "HELP!!!";
    link.setAttribute('id', 'mail');
    link.onclick = () => window.open("mailto:will.sentence@codesmith.io");
    const body = document.getElementById('body');
    body.appendChild(link);
}

function onLoad() {
  deepThought();
  createImage();
  createText(randomOutcome());
  needHelpText();
  createSlack();
  createMail();
};


document.addEventListener('DOMContentLoaded', onLoad);
