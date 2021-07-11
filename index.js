const input = document.querySelector('input[type="checkbox"]');
const gridContainer = document.querySelector('.container');
console.log(input);

input.addEventListener('click', (e) => {
  const isChecked = e.target.checked;
  if (!isChecked) {
    gridContainer.style.display = 'block';
  } else {
    gridContainer.style.display = 'grid';
  }
});
