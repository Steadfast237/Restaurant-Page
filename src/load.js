import Home from './tabs/home';
import Menu from './tabs/menu';
import About from './tabs/about';

const content = document.querySelector('#content');

function clickHandlerHeader(e) {
  const target = e.target;

  if (target.tagName !== 'BUTTON') return;

  content.innerHTML = '';
  switch (target.dataset.nav) {
    case 'home':
      content.innerHTML = Home();
      break;

    case 'menu':
      content.innerHTML = Menu();
      break;

    case 'about':
      content.innerHTML = About();
      break;
  }
}

function loadedHandlerDocument() {
  content.innerHTML = Home();

  document
    .querySelector('header')
    .addEventListener('click', clickHandlerHeader);
}

export default loadedHandlerDocument;
