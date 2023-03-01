let button = document.querySelector('.search-icon-container');
let searchField = document.querySelector('.search-field');
button.addEventListener('click', () => {
  window.location.href = `/search.html?search=${searchField.value}`;
});
