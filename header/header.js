let ofsT1 = 0;
let ofsT2;

let header = document.querySelector('header');
window.addEventListener('scroll', () => {
    ofsT2 = window.scrollY;
    console.log(ofsT1);
    if (ofsT1 >= ofsT2) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
    ofsT1 = ofsT2;
});
