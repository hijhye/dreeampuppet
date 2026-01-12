gsap.registerPlugin(ScrollTrigger);

//헤더

//비주얼
setInterval(function () {
    $('#visual ul')
        .stop()
        .animate({ 'margin-left': '-100%' }, 1500, function () {
            $('#visual ul').css({ 'margin-left': '0px' });
            $('#visual li:first-child').appendTo('#visual ul');
        });
}, 4000);

//con01
gsap.to('.con01 .inner .text', {
    scrollTrigger: {
        trigger: '.con01',
        markers: false,
        scrub: true,
        start: 'top 60%',
        end: 'top 50%',
    },
    opacity: 1,
    y: 20,
});
gsap.to('.con01 .inner', {
    scrollTrigger: {
        trigger: '.con01',
        markers: false,
        start: 'top 10%',
        end: 'top 10%',
        scrub: 5,
    },
    x: '-100%',
});

gsap.from('.con01 li', {
    scrollTrigger: {
        trigger: '.con01',
        markers: false,
        start: 'top 5%',
        end: 'top 5%',
        scrub: 3,
    },
    y: 50,
    stagger: 0.5,
    opacity: 0,
});

//con02
let con02li = document.querySelectorAll('.con02 .inner .text li');
let con02Imgli = document.querySelectorAll('.con02 .inner .imgWrap li');
let con02subTli = document.querySelectorAll('.con02 .inner .subText li');
con02li.forEach((li, index) => {
    li.addEventListener('mouseenter', function () {
        console.log(index);
        con02li.forEach((li) => {
            li.classList.remove('on');
        });
        con02Imgli.forEach((img) => {
            img.classList.remove('on');
        });
        con02Imgli[index].classList.add('on');
        con02subTli.forEach((li) => {
            li.classList.remove('on');
        });
        con02subTli[index].classList.add('on');
        li.classList.add('on');
    });
});
