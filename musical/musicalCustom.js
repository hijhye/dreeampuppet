/*con01*/
let con01 = document.querySelector(".con01");
let con01_txtList = document.querySelectorAll(".txtList li");
let con01_imgList = document.querySelectorAll(".imgListWrap>li");
let scrollableDuration = con01.offsetHeight - window.innerHeight;
// console.log(con01_txtList, con01_imgList, scrollableDuration);

con01_txtList.forEach((txt, index) => {
  txt.addEventListener("mouseover", () => {
    con01_txtList.forEach((txt) => {
      txt.classList.remove("active");
    });
    txt.classList.add("active");
    con01_imgList.forEach((img) => {
      img.classList.remove("active");
    });
    con01_imgList[index].classList.add("active");
  });
});

window.addEventListener("scroll", () => {
  let progress = scrollY - con01.offsetTop;
  let progressPercent = Math.round((progress / scrollableDuration) * 100);
  // console.log(progressPercent);
  if (progressPercent >= 0 && progressPercent <= 100 / 5) {
    con01_txtList.forEach((txt) => {
      txt.classList.remove("active");
    });
    con01_imgList.forEach((img) => {
      img.classList.remove("active");
    });
    con01_txtList[0].classList.add("active");
    con01_imgList[0].classList.add("active");
  } else if (progressPercent >= 100 / 5 && progressPercent <= (100 / 5) * 2) {
    con01_txtList.forEach((txt) => {
      txt.classList.remove("active");
    });
    con01_imgList.forEach((img) => {
      img.classList.remove("active");
    });
    con01_txtList[1].classList.add("active");
    con01_imgList[1].classList.add("active");
  } else if (
    progressPercent >= (100 / 5) * 2 &&
    progressPercent <= (100 / 5) * 3
  ) {
    con01_txtList.forEach((txt) => {
      txt.classList.remove("active");
    });
    con01_imgList.forEach((img) => {
      img.classList.remove("active");
    });
    con01_txtList[2].classList.add("active");
    con01_imgList[2].classList.add("active");
  } else if (
    progressPercent >= (100 / 5) * 3 &&
    progressPercent <= (100 / 5) * 4
  ) {
    con01_txtList.forEach((txt) => {
      txt.classList.remove("active");
    });
    con01_imgList.forEach((img) => {
      img.classList.remove("active");
    });
    con01_txtList[3].classList.add("active");
    con01_imgList[3].classList.add("active");
  } else if (
    progressPercent >= (100 / 5) * 4 &&
    progressPercent <= (100 / 5) * 5
  ) {
    con01_txtList.forEach((txt) => {
      txt.classList.remove("active");
    });
    con01_imgList.forEach((img) => {
      img.classList.remove("active");
    });
    con01_txtList[4].classList.add("active");
    con01_imgList[4].classList.add("active");
  }
});

/*con02*/

let con2Category = document.querySelectorAll(".con02 .category li");
let con02List = document.querySelectorAll(".con02 .listWrapAll > li");
let con03List = document.querySelectorAll(".con03 .cardListWrapAll > li");
// console.log(con2Category, con02List, con03List);

con2Category.forEach((category, categoryIndex) => {
  category.addEventListener("click", () => {
    con2Category.forEach((category) => {
      category.classList.remove("active");
    });
    category.classList.add("active");
    // console.log(categoryIndex);
    con02List.forEach((list) => {
      list.classList.remove("active");
    });
    con02List[categoryIndex].classList.add("active");

    con03List.forEach((list) => {
      list.classList.remove("active");
    });
    con03List[categoryIndex].classList.add("active");
  });
});

$(function () {
  $(".con02 .list").simplyScroll({
    speed: 1, //숫자가 클 수록 움직임이 빨라짐
  });
});

/* con02 클릭 시 con03으로 스크롤 이동 */
$(".con02 .list li").on("mouseenter", function () {
  $(this).addClass("on");
});
$(".con02 .list li").on("mouseleave", function () {
  $(this).removeClass("on");
});

$(".con02 .list li").on("click", function (e) {
  let i = $(this).index();
  let target = $(".con03 .cardListWrapAll > li.active .cardList > li").eq(i);
  console.log(target); //->무조건 카드리스트 firstchild의 eq i li 로 잡힘

  $(".con03 .cardListWrapAll > li.active .cardList > li").removeClass("on");
  let targetPosition = target.offset().top;
  target.addClass("on");

  $("html, body").animate(
    { scrollTop: targetPosition },
    1000 * (i + 1),
    function () {
      window.addEventListener("scroll", () => {
        $(".con03 .cardListWrapAll > li.active .cardList > li").removeClass(
          "on"
        );
      });
      target.addClass("on");
    }
  );
});
