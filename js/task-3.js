const formInput = document.getElementById('name-input');
const formOutput = document.getElementById('name-output');

formInput.addEventListener('input', event => {
  const trimmed = event.target.value.trim();

  formOutput.textContent = trimmed || 'Anonymous';
});
