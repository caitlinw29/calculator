const calculator = document.getElementById('calculator');

calculator.addEventListener('click', (event) => {
  const isButton = event.target.nodeName === 'BUTTON';
  if (!isButton) {
    return;
  }

  const typingBlock = document.getElementById('typing-block');
  typingBlock.innerHTML += event.target.textContent;
})