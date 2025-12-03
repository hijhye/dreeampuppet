// con01
let values = document.querySelectorAll(".con01 .values div");
let text = document.querySelectorAll(".con01 ul li");

values.forEach((i, index) => {
  i.addEventListener("mouseenter", () => {
    values[index].classList.add("sizeUp");
  });
  i.addEventListener("mouseleave", () => {
    values.forEach((i) => {
      i.classList.remove("sizeUp");
    });
  });

  i.addEventListener("click", function () {
    values.forEach((i) => {
      i.classList.remove("active");
    });
    i.classList.add("active");

    text.forEach(function (i, index) {
      gsap.to(i, { opacity: 0, duration: 1.5 });
      i.classList.remove("up");
    });
    gsap.to(text[index], { opacity: 1, duration: 1.5 });
    text[index].classList.add("up");

    gsap
      .timeline()
      .fromTo(".con01 li h3", { rotateX: "250deg" }, { rotateX: "360deg" }, 0.3)
      .fromTo(
        ".con01 li .second",
        { rotateX: "-120deg" },
        { rotateX: "0deg" },
        0.3
      );
  });
});

// con02
$(".con02 .menu li").on("mouseenter", function () {
  let i = $(this).index();
  $(".con02 .title li").removeClass("look");
  $(".con02 .title li").eq(i).addClass("look");
});

gsap
  .timeline()
  .fromTo(".con02 .title h3", { x: "150%" }, { x: "0%" }, 0.5)
  .fromTo(".con02 .title p", { x: "150%" }, { x: "0%" }, 1);

let menu = document.querySelectorAll(".con02 .menu li");
let bg = document.querySelectorAll(".con02 .bg li");
console.log(menu);

menu.forEach((i, index) => {
  i.addEventListener("mouseover", function () {
    menu.forEach(function (i, index) {
      i.classList.remove("look");
    });
    menu[index].classList.add("look");
    gsap
      .timeline()
      .fromTo(".con02 .title h3", { x: "150%" }, { x: "0%" }, 0)
      .fromTo(".con02 .title p", { x: "150%" }, { x: "0%" }, 0.3);

    bg.forEach((i) => {
      gsap.killTweensOf(i);
      i.style.display = "none";
    });

    gsap.fromTo(
      bg[index],
      { opacity: 0 },
      { opacity: 1, duration: 1.3, display: "block" }
    );
  });
});

// .con03

// let screen = window.innerWidth;
// console.log("d", screen);
// $(window).resize(function () {
//   if (screen <= 720) {
//     const walk = (x - startX) * 1;
//   } else {
//     const walk = (x - startX) * 2;
//   }
// });

//

$(function () {
  $(".con03 ul").simplyScroll({
    speed: 1,
    pauseOnHover: true,
    pauseOnTouch: false,
  });

  // 2️⃣ 약간 지연 후 clip 요소 탐색 (simplyScroll이 구조 생성할 시간 필요)
  setTimeout(() => {
    let frame = document.querySelector(".con03 .simply-scroll-clip");
    let isDown = false;
    let startX, scrollLeft;

    // 3️⃣ jQuery 이벤트 연결
    $(frame)
      .on("mousedown", function (e) {
        isDown = true;
        startX = e.pageX - $(this).offset().left;
        scrollLeft = this.scrollLeft;
      })
      .on("mouseleave mouseup", function () {
        isDown = false;
      })
      .on("mousemove", function (e) {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - $(this).offset().left;
        const walk = (x - startX) * 2; // 스크롤 속도 조절
        this.scrollLeft = scrollLeft - walk;
      });
  }, 300);
});

// .con04

gsap.registerPlugin(ScrollTrigger);
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".con04",
      start: "top 60%",
      end: "30% 50%",
      scrub: 2,
      markers: false,
    },
  })
  .fromTo(
    ".con04 h3:nth-child(1) p",
    { y: "150%", opacity: 0 },
    { y: 0, opacity: 1, duration: 0.6 },
    0
  )
  .fromTo(
    ".con04 h3:nth-child(2) p",
    { y: "150%", opacity: 0 },
    { y: 0, opacity: 1, duration: 0.6 },
    0.5
  );

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
