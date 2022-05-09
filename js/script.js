"use strict"
//calc minus margin
const obj = document.querySelector('.intro__container');
if (obj) {
    calcMargin();
    window.addEventListener('resize', calcMargin);
}
function calcMargin() {
    let width = obj.offsetWidth;
    let height = obj.offsetHeight;
    obj.style.marginLeft = `-${width / 2}px`;
    obj.style.marginTop = `-${height / 2}px`;
}

//works open by tap on mobiles
const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    IOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.IOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
};
if (isMobile) {
    const works = document.getElementsByClassName('works__item');
    for (let i = 0; i < works.length; i++) {
        works[i].addEventListener('click', () => {
            works[i].classList.toggle('active');
            setTimeout(() => {
                if (works[i].classList.contains('active')) {
                    works[i].classList.remove('active');
                }
            }, 6000)
        });
    }
}


//header fixed
const header = document.querySelector(".header");
function checkScroll() {
    let scrollPos = window.scrollY;
    if ((scrollPos > 90) || (window.innerWidth < 812)) {
        header.classList.remove("not-fixed");
    }
    else {
        header.classList.add("not-fixed")
    }
}
document.addEventListener("DOMContentLoaded", checkScroll);
window.addEventListener("scroll", checkScroll);


//slider
$(document).ready(function () {
    $('.slider').slick({
        arrows:false,
        adaptiveHeight: false,
        dots: true,
    });
});