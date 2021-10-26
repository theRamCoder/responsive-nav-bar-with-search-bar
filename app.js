const burger = document.querySelector(".fa-bars");
const links = document.querySelector(".links");

burger.addEventListener("click", () => {
  burger.classList.toggle("fa-times");
  links.classList.toggle("links");
  links.classList.toggle("links-active");
});
