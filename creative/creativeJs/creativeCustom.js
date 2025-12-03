/*section1 제이쿼리*/
$(function () {
  $(".creative1 .left li").on("click", function () {
    let leftUl = $(this).index();
    // console.log(leftUl);
    $(".creative1 .left li").removeClass("on");
    $(this).addClass("on");
    $(".creative1 .right ul").removeClass("Img");

    $(".creative1 .right ul").eq(leftUl).addClass("Img");
  });
  /*section2 제이쿼리*/

  $(".creative2 li").on("mouseenter", function () {
    // 나머지 li는 투명도 0.5
    $(".creative2 li").css({ opacity: "0.5" });
    // 마우스 올린 아이템은 투명도 1, 크기 1.5배
    $(this).css({ transform: "scale(1.1)", opacity: "1" });
  });

  $(".creative2 li").on("mouseleave", function () {
    // 모두 원래 상태로
    $(".creative2 li").css({ opacity: "1", transform: "scale(1)" });
  });

  /*section3 제이쿼리*/
  $(".creative3 li").on("mouseenter", function () {
    let textP = $(this).index();
    console.log(textP);
    $(".creative3 .creative3Img").removeClass("big");
    $(".creative3 .creative3Img").eq(textP).addClass("big");
    $(".creative3 p").removeClass("show");
    $(".creative3 p").eq(textP).addClass("show");
  });

  /*star*/
  $(".star div").on("mouseenter", function () {
    $(this).css({ opacity: "1" });
  });
  $(".star div").on("mouseleave", function () {
    $(this).css({ opacity: "0.5" });
  });
});
