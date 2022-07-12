const search = document.querySelector(".search");
const btnSearch = document.querySelector(".btn-search");
const inputSearch = document.querySelector(".input-search");

btnSearch.addEventListener("click", () => {
  search.classList.toggle("active");
  inputSearch.focus();
});
