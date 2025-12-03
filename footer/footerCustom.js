/* Footer*/

let footer = document.querySelector("footer");

window.addEventListener("scroll", () => {
  let currentScroll = window.scrollY;
  let windowHeight = window.innerHeight;
  let documentHeight = document.documentElement.scrollHeight;

  if (currentScroll + windowHeight >= documentHeight - 10) {
    footer.style.transform = "translateY(0%)";
  } else {
    footer.style.transform = "translateY(90%)";
  }
});
footer.addEventListener("mouseover", () => {
  footer.style.transform = "translateY(0%)";
});
footer.addEventListener("mouseleave", () => {
  footer.style.transform = "translateY(90%)";
});
