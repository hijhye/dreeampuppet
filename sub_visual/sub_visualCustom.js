/*sub_visual*/
gsap.registerPlugin(ScrollTrigger);
$(window).resize(function () {
  if ($(window).width() > 720) {
    document.location.reload();
  }
});

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#visual",
    start: "top top",
    end: "+=2000",
    scrub: 2,
    markers: false,
    pin: true,
  },
});
tl.to(
  "#visual .circle",
  {
    width: "3000px",
    height: "3000px",
    borderRadius: 0,
  },
  0
)
  .to(
    "#visual .inner",
    {
      borderRadius: 0,
    },
    0.1
  )
  .to(
    "#visual h2",
    {
      width: "100%",
    },
    0
  )
  .to(
    "#visual .keyword01",
    {
      left: "-50px",
      fontSize: "120px",
    },
    0
  )
  .to(
    "#visual .keyword02",
    {
      right: "-100px",
      fontSize: "120px",
    },
    0
  )
  .to(
    "#visual li:nth-child(1)",
    {
      transform: "translateY(-60%)",
      ease: "elastic.out(1, 0.5)",
    },
    1
  )
  .to(
    "#visual li:nth-child(2)",
    {
      transform: "translateY(-40%)",
      ease: "elastic.out(1, 0.5)",
    },
    1.2
  )
  .to(
    "#visual li:nth-child(3)",
    {
      transform: "translateY(-50%)",
      ease: "elastic.out(1, 0.5)",
    },
    1.1
  )
  .to(
    "#visual li:nth-child(4)",
    {
      transform: "translateY(-30%)",
      ease: "elastic.out(1, 0.5)",
    },
    1.3
  )
  .to(
    "#visual li:nth-child(5)",
    {
      transform: "translateY(-50%)",
      ease: "elastic.out(1, 0.5)",
    },
    1.6
  )
  .to(
    "#visual li:nth-child(6)",
    {
      transform: "translateY(-20%)",
      ease: "elastic.out(1, 0.5)",
    },
    1.5
  )
  .to(
    "#visual li:nth-child(7)",
    {
      transform: "translateY(-50%)",
      ease: "elastic.out(1, 0.5)",
    },
    1.8
  )
  .to(
    "#visual li:nth-child(8)",
    {
      transform: "translateY(-30%)",
      ease: "elastic.out(1, 0.5)",
    },
    1.3
  );
