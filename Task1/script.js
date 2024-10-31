window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = red;
  } else {
    navbar.style.backgroundColor = "#333";
  }
});
