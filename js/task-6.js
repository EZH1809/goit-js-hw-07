'use strict';
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


  function createBoxes() {
    const input = document.querySelector('input');
    const boxesContainer = document.getElementById('boxes');

    
    const numberOfBoxes = parseInt(input.value);
    if (isNaN(numberOfBoxes) || numberOfBoxes < 1 || numberOfBoxes > 100) {
      alert('Please enter a valid number between 1 and 100');
      return;
    }

    
    boxesContainer.innerHTML = '';

    
    let size = 30;
    for (let i = 0; i < numberOfBoxes; i++) {
      const box = document.createElement('div');
      box.className = 'box';
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxesContainer.appendChild(box);
      size += 10;
    }

    
    input.value = '';
  }

  function destroyBoxes() {
    const boxesContainer = document.getElementById('boxes');
   
    boxesContainer.innerHTML = '';
  }