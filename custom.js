gsap.registerPlugin(ScrollTrigger);

setInterval(function () {
  $("#visual ul")
    .stop()
    .animate({ "margin-left": "-100%" }, 1500, function () {
      $("#visual ul").css({ "margin-left": "0px" });
      $("#visual li:first-child").appendTo("#visual ul");
    });
}, 3000);

gsap.to(".con01 .inner .text", {
  scrollTrigger: {
    trigger: ".con01",
    markers: false,
    scrub: true,
    start: "top 60%",
    end: "top 50%",
  },
  opacity: 1,
  y: 20,
});
gsap.to(".con01 .inner", {
  scrollTrigger: {
    trigger: ".con01",
    markers: true,
    start: "top 30%",
    end: "top 30%",
    scrub: 5,
  },
  x: "-100%",
});

gsap.from(".con01 li", {
  scrollTrigger: {
    trigger: ".con01",
    markers: false,
    start: "top 15%",
    end: "top 15%",
    scrub: 3,
  },
  y: 50,
  stagger: 0.5,
  opacity: 0,
});
