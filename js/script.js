// burger-btn
let burgerBtn = document.querySelector('.header__burger-btn');
let sidebar = document.querySelector('.header__sidebar');

burgerBtn.addEventListener("click", ()=> {
    burgerBtn.classList.toggle('active_burger');
    sidebar.classList.toggle('active_sidebar');
});
// burger-btn

// madal
let headerBtn = document.querySelector('.header__btn');
let modal = document.querySelector('.modal');
let modalClose = document.querySelector('.btn__close');
let orderBtn = document.querySelector('.btn__order');

headerBtn.addEventListener('click', function() {
    modal.classList.add('active_modal');
});
modalClose.addEventListener('click', function(e) {
    e.preventDefault();
    modal.classList.remove('active_modal');
});
orderBtn.addEventListener('click', function(e) {
    e.preventDefault();
    alert('Ваш заказ принят');
    modal.classList.remove('active_modal');
});
// modal


// header_slider
$('.header__slider').slick({
    mobileFirst: true,
    responsive: [{
        breakpoint: 991,
        settings: {
            slidesToShow: 1,
            arrows: false,
            dots: true,
            autoplay: true,
        }
    }]
});
// header_slider

// portfolio_slider
$('.portfolio__slider').slick({
    slidesToShow: 1,
    infinite: true,
    arrows: false,
    dots: false,
    centerMode: true,
    centerPadding: '20px',
    mobileFirst: true,
    responsive: [{
        breakpoint: 767,
        settings: {
            centerPadding: '60px',
        }
    }]
});
// portfolio_slider

// portfolio tabs
let tab = document.querySelectorAll('.tabs__item');
let slider = document.querySelectorAll('.portfolio__slider');

tab.forEach(function(item) {
    item.addEventListener('click', function() {
        tab.forEach(function(item) {
            item.classList.remove('tab_active');
        });
        item.classList.add('tab_active');
    });
});

tab[0].addEventListener('click', ()=> {
    slider[1].classList.remove('slider_active');
    slider[2].classList.remove('slider_active');
    slider[0].classList.add('slider_active');
});
tab[1].addEventListener('click', ()=> {
    slider[0].classList.remove('slider_active');
    slider[2].classList.remove('slider_active');
    slider[1].classList.add('slider_active');
});
tab[2].addEventListener('click', ()=> {
    slider[0].classList.remove('slider_active');
    slider[1].classList.remove('slider_active');
    slider[2].classList.add('slider_active');
});
// portfolio tabs

//portfolio accordion
let accordion__item = document.querySelectorAll('.accordion__item');
let accordion = document.querySelectorAll('.portfolio__accordion');

accordion__item.forEach(function(item) {
    item.addEventListener('click', function() {
        accordion__item.forEach(function(item) {
            item.classList.remove('accordion-item_active');
        });
        item.classList.add('accordion-item_active');
    });
});

tab[0].addEventListener('click', ()=> {
    accordion[1].classList.remove('accordion_active');
    accordion[2].classList.remove('accordion_active');
    accordion[0].classList.add('accordion_active');
});
tab[1].addEventListener('click', ()=> {
    accordion[0].classList.remove('accordion_active');
    accordion[2].classList.remove('accordion_active');
    accordion[1].classList.add('accordion_active');
});
tab[2].addEventListener('click', ()=> {
    accordion[0].classList.remove('accordion_active');
    accordion[1].classList.remove('accordion_active');
    accordion[2].classList.add('accordion_active');
});
//portfolio accordion

//reviews slider
$('.reviews__slider').slick({
    slidesToShow: 1,
    arrows: false,
    dots: true,
    asNavFor: '.reviews-side__slider'
});

$('.reviews-side__slider').slick({
    slidesToShow: 1,
    arrows: false,
    dots: false,
    asNavFor: '.reviews__slider',
});
//reviews sliderы