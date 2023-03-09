import {buttonTextChange} from './utils';

const button = document.querySelector('.about__accordion-button');

const changeText = () =>{
  buttonTextChange('about__accordion-button', 'Подробнее', 'Скрыть');
};

const buttonEventListeners = () =>{
  button.addEventListener('click', changeText);
};

export {buttonEventListeners};
