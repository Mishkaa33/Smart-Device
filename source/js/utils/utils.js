const buttonTextChange = (buttonSelector, originalText, newText) =>{
  const button = document.querySelector('.' + buttonSelector);
  if (button.textContent.trim() === originalText) {
    button.textContent = newText;
  } else {
    button.textContent = originalText;
  }
};

export {buttonTextChange};
