gsap.registerPlugin(ScrollTrigger);

// 플로팅
let float = document.querySelector("#floating .floatFix");
let goTop = document.querySelector("#floating .top");
let inquery = document.querySelector("#floating .inquery");
let close = document.querySelector(".inquery i");
let send = document.querySelector(".inquery .send");
let inputs = document.querySelectorAll(".inquery li input");

console.log(inputs);

let isActive = false;

function change() {
  gsap.to(".floatFix img", { opacity: 0, duration: 0.5 });
  gsap.to(".floatFix p", { opacity: 1 });
}
function reset() {
  gsap.to(".floatFix img", { opacity: 1 });
  gsap.to(".floatFix p", { opacity: 0, duration: 0.5 });
}

float.addEventListener("mouseenter", () => {
  gsap.to("#floating .top", { opacity: 1, top: "-35%" });
  change();
});

float.addEventListener("mouseleave", (e) => {
  if (isActive) return;
  reset();
  check = e.relatedTarget;
  if (goTop === check) {
    return;
  }
  gsap.to("#floating .top", { opacity: 0, top: "50%" });
});

goTop.addEventListener("mouseleave", (e) => {
  check = e.relatedTarget;
  if (float === check) {
    return;
  }
  gsap.to("#floating .top", { opacity: 0, top: "50%" });
});

float.addEventListener("click", () => {
  isActive = true;
  if (!goTop.matches(":hover")) {
    gsap.to("#floating .top", { opacity: 0, top: "50%" });
  }
  gsap.to(inquery, { top: "-500px", display: "block", opacity: 1 });
  change();
});

close.addEventListener("click", () => {
  isActive = false;
  gsap.to(inquery, { top: 0, display: "none", opacity: 0 });
  reset();
});
$(goTop).on("click", function () {
  let conTop = $(".con01").offset().top;
  $("html, body").animate({ scrollTop: conTop }, 800);
});

send.addEventListener("click", () => {
  inputs.forEach((input) => {
    input.value = "";
  });
});
