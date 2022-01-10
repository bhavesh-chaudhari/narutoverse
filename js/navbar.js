const hamburgerBtn = document.getElementById("hamburger-btn")
const navLinks = document.getElementById("nav-links")

let show = false;

const handleClick = () => {
  if (show === false) {
    show = true;
    hamburgerBtn.classList.add("open");
    navLinks.classList.remove("hide");
  } else {
    show = false;
    hamburgerBtn.classList.remove("open");
    navLinks.classList.add("hide");
  }
};

hamburgerBtn.addEventListener("click", handleClick);
