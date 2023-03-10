import {buttonTextChange} from './utils';

const button = document.querySelector('.about__accordion-button');

const changeText = () =>{
  buttonTextChange('about__accordion-button', 'Подробнее', 'Скрыть');
};

const addButtonEventListeners = () =>{
  if (button) {
    button.addEventListener('click', changeText);
  } else {
    return;
  }
};

export {addButtonEventListeners};
