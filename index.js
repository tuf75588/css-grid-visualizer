const input = document.querySelector('input[type="checkbox"]');
const gridContainer = document.querySelector('.container');
const img = document.querySelector('img');
console.log(input);

input.addEventListener('click', (e) => {
  img.classList.toggle('img');
  const isChecked = e.target.checked;
  if (!isChecked) {
    gridContainer.style.display = 'block';
  } else {
    gridContainer.style.display = 'grid';
  }
});
