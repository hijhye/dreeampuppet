$(document).ready(function () {
  const $newsWrap = $("#page1 .news-wrap");
  const $noticeWrap = $("#page1 .notice_wrap");
  const $navItems = $(".com_tab  li");
  const $title = $("#page1 > h2");

  // 스코프를 뉴스 전용 페이지네비로 한정 (숫자 1,2)
  const $pageNavNews = $("#page1 .news-wrap .page-nav");
  const $noticePrev = $("#page1 .notice-prev");
  const $noticeNext = $("#page1 .notice-next");
  const $tbody = $("#page1 table tbody");

  // 초기 상태: 뉴스 보임, 공지 숨김
  $noticeWrap.hide();
  $pageNavNews.show(); // ← 뉴스용 숫자 네비는 처음부터 보이게
  $noticePrev.hide();
  $noticeNext.hide();

  // 작성자 일괄 jpuppetadmin
  function updateNewsAuthors() {
    $tbody.find("tr td:nth-child(3)").text("jpuppetadmin");
  }
  updateNewsAuthors();

  // 탭 클릭
  $navItems.on("click", function () {
    const label = $(this).text().trim();
    $navItems.removeClass("active");
    $(this).addClass("active");
    moveHighlight($(this));

    if (label === "공지사항") {
      $title.html("공지사항 <span>Notice</span>");
      $newsWrap.stop(true, true).hide();
      $noticeWrap.stop(true, true).fadeIn(200);

      // 공지 탭: 숫자 네비 숨김, 화살표 보임
      $pageNavNews.hide();
      $noticePrev.show();
      $noticeNext.show();
    } else {
      $title.html("뉴스 <span>News Update</span>");
      $noticeWrap.stop(true, true).hide();
      $newsWrap.stop(true, true).fadeIn(200);

      // 뉴스 탭: 숫자 네비 보임, 화살표 숨김
      $pageNavNews.show();
      $noticePrev.hide();
      $noticeNext.hide();

      updateNewsAuthors();
    }
  });

  // 뉴스 숫자 페이지 네비 클릭 (샘플 데이터 전환)
  $pageNavNews.on("click", "a", function (e) {
    e.preventDefault();
    const page = Number($(this).data("page"));
    $pageNavNews.find("a").removeClass("active");
    $(this).addClass("active");

    $tbody.empty();

    if (page === 1) {
      $("#total-count").text("6");
      $tbody.append(`
        <tr><td>뉴스 제목 1</td><td>2025-10-28</td><td>jpuppetadmin</td></tr>
        <tr><td>뉴스 제목 2</td><td>2025-10-27</td><td>jpuppetadmin</td></tr>
        <tr><td>뉴스 제목 3</td><td>2025-10-26</td><td>jpuppetadmin</td></tr>
        <tr><td>뉴스 제목 4</td><td>2025-10-25</td><td>jpuppetadmin</td></tr>
        <tr><td>뉴스 제목 5</td><td>2025-10-24</td><td>jpuppetadmin</td></tr>
        <tr><td>뉴스 제목 6</td><td>2025-10-23</td><td>jpuppetadmin</td></tr>
      `);
    } else if (page === 2) {
      $("#total-count").text("3");
      $tbody.append(`
        <tr><td>뉴스 제목 7</td><td>2025-10-22</td><td>jpuppetadmin</td></tr>
        <tr><td>뉴스 제목 8</td><td>2025-10-21</td><td>jpuppetadmin</td></tr>
        <tr><td>뉴스 제목 9</td><td>2025-10-20</td><td>jpuppetadmin</td></tr>
      `);
    }
  });

  // highlight 이동 함수 (기존 동일)
  function moveHighlight($el) {
    const left = $el.position().left;
    const width = $el.outerWidth();
    const height = $el.outerHeight();
    $(".highlight").css({ left, width, height });
  }
  moveHighlight($navItems.filter(".active"));

  // 공지 hover 이펙트 (기존 동일)
  $(".notice_wrap li")
    .on("mouseenter", function () {
      const $li = $(this);
      if ($li.is(":animated")) return;
      $li
        .css({ position: "relative", zIndex: 10 })
        .animate({ top: "-5px" }, 100)
        .animate({ top: "0px" }, 100)
        .animate({ top: "-3px" }, 80)
        .animate({ top: "0px" }, 80)
        .addClass("shine");
    })
    .on("mouseleave", function () {
      $(this).removeClass("shine");
    });

  // (선택) 공지 li 클릭시 링크 처리 예시
  // $(".notice_wrap li").on("click", function () {
  //   const link = $(this).data("link");
  //   if (link) location.href = link;
  // });
});

// 떨어지는 별 효과

// === Falling Stars (parallax on scroll) ===
(function () {
  // 별 파일 경로(순서 중요: star11, star1, star13)
  const SRC = ["../starIMG/star11.png", "../starIMG/star13.png"];

  // 각 레이어 설정: x(좌표%), size(px), 시작 Y, 속도, 루프 길이(px)
  const layers = [
    {
      x: "5%",
      size: 120,
      baseY: -120,
      speed: 0.35,
      cycle: window.innerHeight + 200,
    },
    {
      x: "95%",
      size: 100,
      baseY: -180,
      speed: 0.55,
      cycle: window.innerHeight + 200,
    },
    {
      x: "50%",
      size: 80,
      baseY: -100,
      speed: 0.25,
      cycle: window.innerHeight + 200,
    },
  ];

  // 컨테이너 생성 (포인터 이벤트 막고, 화면 고정)
  const wrap = document.createElement("div");
  wrap.id = "falling-stars";
  Object.assign(wrap.style, {
    position: "fixed",
    left: "0",
    top: "0",
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    zIndex: "0", // 필요하면 1~10으로 올리세요
    overflow: "hidden",
  });
  document.body.appendChild(wrap);

  // 이미지 생성
  const imgs = SRC.map((src, i) => {
    const img = new Image();
    img.src = src;
    Object.assign(img.style, {
      position: "absolute",
      left: layers[i].x,
      top: "0px",
      width: layers[i].size + "px",
      height: "auto",
      transform: "translate(-50%, 0)",
      willChange: "transform",
      imageRendering: "auto",
    });
    wrap.appendChild(img);
    return img;
  });

  // 스크롤 패럴랙스 업데이트
  let ticking = false;
  function update() {
    const sy = window.scrollY || 0;
    imgs.forEach((img, i) => {
      const L = layers[i];
      const y = (L.baseY + sy * L.speed) % L.cycle; // 아래로 흘러내리게
      img.style.transform = `translate(-50%, ${y}px)`;
    });
    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }

  // 초기 실행 및 이벤트
  update();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", () => {
    layers.forEach((L) => (L.cycle = window.innerHeight + 200));
    update();
  });
})();
//반짝이는 마우스 포인터

// <![CDATA[
var colour = "random"; // in addition to "random" can be set to any valid colour eg "#f0f" or "red"
var sparkles = 50;

/****************************
 *  Tinkerbell Magic Sparkle *
 *(c)2005-13 mf2fm web-design*
 *  http://www.mf2fm.com/rv  *
 * DON'T EDIT BELOW THIS BOX *
 ****************************/
var x = (ox = 400);
var y = (oy = 300);
var swide = 800;
var shigh = 600;
var sleft = (sdown = 0);
var tiny = new Array();
var star = new Array();
var starv = new Array();
var starx = new Array();
var stary = new Array();
var tinyx = new Array();
var tinyy = new Array();
var tinyv = new Array();

window.onload = function () {
  if (document.getElementById) {
    var i, rats, rlef, rdow;
    for (var i = 0; i < sparkles; i++) {
      var rats = createDiv(3, 3);
      rats.style.visibility = "hidden";
      rats.style.zIndex = "999";
      document.body.appendChild((tiny[i] = rats));
      starv[i] = 0;
      tinyv[i] = 0;
      var rats = createDiv(5, 5);
      rats.style.backgroundColor = "transparent";
      rats.style.visibility = "hidden";
      rats.style.zIndex = "999";
      var rlef = createDiv(1, 5);
      var rdow = createDiv(5, 1);
      rats.appendChild(rlef);
      rats.appendChild(rdow);
      rlef.style.top = "2px";
      rlef.style.left = "0px";
      rdow.style.top = "0px";
      rdow.style.left = "2px";
      document.body.appendChild((star[i] = rats));
    }
    set_width();
    sparkle();
  }
};

function sparkle() {
  var c;
  if (Math.abs(x - ox) > 1 || Math.abs(y - oy) > 1) {
    ox = x;
    oy = y;
    for (c = 0; c < sparkles; c++)
      if (!starv[c]) {
        star[c].style.left = (starx[c] = x) + "px";
        star[c].style.top = (stary[c] = y + 1) + "px";
        star[c].style.clip = "rect(0px, 5px, 5px, 0px)";
        star[c].childNodes[0].style.backgroundColor = star[
          c
        ].childNodes[1].style.backgroundColor =
          colour == "random" ? newColour() : colour;
        star[c].style.visibility = "visible";
        starv[c] = 50;
        break;
      }
  }
  for (c = 0; c < sparkles; c++) {
    if (starv[c]) update_star(c);
    if (tinyv[c]) update_tiny(c);
  }
  setTimeout("sparkle()", 40);
}

function update_star(i) {
  if (--starv[i] == 25) star[i].style.clip = "rect(1px, 4px, 4px, 1px)";
  if (starv[i]) {
    stary[i] += 1 + Math.random() * 3;
    starx[i] += ((i % 5) - 2) / 5;
    if (stary[i] < shigh + sdown) {
      star[i].style.top = stary[i] + "px";
      star[i].style.left = starx[i] + "px";
    } else {
      star[i].style.visibility = "hidden";
      starv[i] = 0;
      return;
    }
  } else {
    tinyv[i] = 50;
    tiny[i].style.top = (tinyy[i] = stary[i]) + "px";
    tiny[i].style.left = (tinyx[i] = starx[i]) + "px";
    tiny[i].style.width = "2px";
    tiny[i].style.height = "2px";
    tiny[i].style.backgroundColor = star[i].childNodes[0].style.backgroundColor;
    star[i].style.visibility = "hidden";
    tiny[i].style.visibility = "visible";
  }
}

function update_tiny(i) {
  if (--tinyv[i] == 25) {
    tiny[i].style.width = "1px";
    tiny[i].style.height = "1px";
  }
  if (tinyv[i]) {
    tinyy[i] += 1 + Math.random() * 3;
    tinyx[i] += ((i % 5) - 2) / 5;
    if (tinyy[i] < shigh + sdown) {
      tiny[i].style.top = tinyy[i] + "px";
      tiny[i].style.left = tinyx[i] + "px";
    } else {
      tiny[i].style.visibility = "hidden";
      tinyv[i] = 0;
      return;
    }
  } else tiny[i].style.visibility = "hidden";
}

document.onmousemove = mouse;
function mouse(e) {
  if (e) {
    y = e.pageY;
    x = e.pageX;
  } else {
    set_scroll();
    y = event.y + sdown;
    x = event.x + sleft;
  }
}

window.onscroll = set_scroll;
function set_scroll() {
  if (typeof self.pageYOffset == "number") {
    sdown = self.pageYOffset;
    sleft = self.pageXOffset;
  } else if (
    document.body &&
    (document.body.scrollTop || document.body.scrollLeft)
  ) {
    sdown = document.body.scrollTop;
    sleft = document.body.scrollLeft;
  } else if (
    document.documentElement &&
    (document.documentElement.scrollTop || document.documentElement.scrollLeft)
  ) {
    sleft = document.documentElement.scrollLeft;
    sdown = document.documentElement.scrollTop;
  } else {
    sdown = 0;
    sleft = 0;
  }
}

window.onresize = set_width;
function set_width() {
  var sw_min = 999999;
  var sh_min = 999999;
  if (document.documentElement && document.documentElement.clientWidth) {
    if (document.documentElement.clientWidth > 0)
      sw_min = document.documentElement.clientWidth;
    if (document.documentElement.clientHeight > 0)
      sh_min = document.documentElement.clientHeight;
  }
  if (typeof self.innerWidth == "number" && self.innerWidth) {
    if (self.innerWidth > 0 && self.innerWidth < sw_min)
      sw_min = self.innerWidth;
    if (self.innerHeight > 0 && self.innerHeight < sh_min)
      sh_min = self.innerHeight;
  }
  if (document.body.clientWidth) {
    if (document.body.clientWidth > 0 && document.body.clientWidth < sw_min)
      sw_min = document.body.clientWidth;
    if (document.body.clientHeight > 0 && document.body.clientHeight < sh_min)
      sh_min = document.body.clientHeight;
  }
  if (sw_min == 999999 || sh_min == 999999) {
    sw_min = 800;
    sh_min = 600;
  }
  swide = sw_min;
  shigh = sh_min;
}

function createDiv(height, width) {
  var div = document.createElement("div");
  div.style.position = "absolute";
  div.style.height = height + "px";
  div.style.width = width + "px";
  div.style.overflow = "hidden";
  return div;
}

function newColour() {
  var c = new Array();
  visual;
  c[0] = 255;
  c[1] = Math.floor(Math.random() * 256);
  c[2] = Math.floor(Math.random() * (256 - c[1] / 2));
  c.sort(function () {
    return 0.5 - Math.random();
  });
  return "rgb(" + c[0] + ", " + c[1] + ", " + c[2] + ")";
}
