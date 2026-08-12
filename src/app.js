const button = document.getElementById('actionButton');
const status = document.getElementById('status');

button.addEventListener('click', () => {
  status.textContent = 'Source repo sync ready!';
});
