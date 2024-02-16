function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

function createBoxes() {
  const input = document.querySelector('input');
  const amount = input.valueAsNumber;

  if (amount < 1 || amount > 100 || isNaN(amount)) {
    alert('Please enter a number between 1 and 100');
    return;
  }

  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = '';

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    boxesContainer.appendChild(box);
  }

  input.value = '';
}

function destroyBoxes() {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = '';
}
