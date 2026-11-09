const button = document.querySelector('#focus-button');
const panel = document.querySelector('#prompt-panel');

button.addEventListener('click', () => {
  const isHidden = panel.hasAttribute('hidden');
  if (isHidden) {
    panel.removeAttribute('hidden');
    button.textContent = 'Hide test prompt';
  } else {
    panel.setAttribute('hidden', '');
    button.textContent = 'Show test prompt';
  }
});  
