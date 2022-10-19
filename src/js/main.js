


// Мобильное меню бургер
function burgerMenu() {
    const burger = document.querySelector('.burger')
    const menu = document.querySelector('.menu')
    const body = document.querySelector('body')
    const info = document.querySelector('.info')
    burger.addEventListener('click', () => {
        if (!menu.classList.contains('active')) {
            menu.classList.add('active')
            burger.classList.add('active-burger')
            body.classList.add('locked')
            info.classList.add('active')
        } else {
            menu.classList.remove('active')
            burger.classList.remove('active-burger')
            body.classList.remove('locked')
            info.classList.remove('active')
        }
    })
    // Вот тут мы ставим брейкпоинт навбара
    window.addEventListener('resize', () => {
        if (window.innerWidth > 991.98) {
            menu.classList.remove('active')
            burger.classList.remove('active-burger')
            body.classList.remove('locked')
            info.classList.remove('active')
        }
    })
}
burgerMenu()


// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedNav() {
    const nav = document.querySelector('nav')

    // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
    const breakpoint = 1
    if (window.scrollY >= breakpoint) {
        nav.classList.add('fixed__nav')
    } else {
        nav.classList.remove('fixed__nav')
    }
}
window.addEventListener('scroll', fixedNav)


//swiper-1

const historySlider = document.querySelector('.history-slider');

if (historySlider) {
    const workSlider = new Swiper(historySlider, {
        spaceBetween: 20,
        slidesPerView: 1,
        navigation: {
            nextEl: ".history__next",
            prevEl: ".history__prev",
        },
    });

    workSlider.on('slideChange', function () {
        console.log(workSlider.realIndex);

        historyBtns.forEach(el => {
            el.classList.remove('history-nav__btn--active');
        });

        document.querySelector(`.history-nav__btn[data-index="${workSlider.realIndex}"]`).classList.add('history-nav__btn--active');
    });

    const historyBtns = document.querySelectorAll('.history-nav__btn');

    historyBtns.forEach((el, idx) => {
        el.setAttribute('data-index', idx);

        el.addEventListener('click', (e) => {
            const index = e.currentTarget.dataset.index;

            historyBtns.forEach(el => {
                el.classList.remove('history-nav__btn--active');
            });

            e.currentTarget.classList.add('history-nav__btn--active');

            workSlider.slideTo(index);
        });
    });
}

//slide
$(document).ready(function () {
    $(".slider").slick({
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1184,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    centerMode: true,
                    variableWidth: true
                }
            },

            {
                breakpoint: 805,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },

            {
                breakpoint: 649,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });
    $(".clients__swiper").slick({
        arrows: true,

    });
});

// Аккордеон
function accordion() {
    const items = document.querySelectorAll('.accordion__item-trigger')
    items.forEach(item => {
        item.addEventListener('click', () => {
            const parent = item.parentNode
            if (parent.classList.contains('accordion__item-active')) {
                parent.classList.remove('accordion__item-active')
            } else {
                document
                    .querySelectorAll('.accordion__item')
                    .forEach(child => child.classList.remove('accordion__item-active'))
                parent.classList.add('accordion__item-active')
            }
        })
    })
}
accordion()

//dropdown
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
//load more
$(document).ready(function () {
    $(".content").slice(0, 9).show();
    $("#loadMore").on("click", function (e) {
        e.preventDefault();
        $(".content:hidden").slice(0, 4).slideDown();
        if ($(".content:hidden").length == 0) {
            $("#loadMore").text("No Content").addClass("noContent");
        }
    });

})

// //slide for work
$(document).ready(function () {
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 5,
        arrows: false,
        asNavFor: '.slider-for',
        infinite: true,
        draggable: false,
        focusOnSelect: true,
        responsive: [

            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 390,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }

        ]
    });
});




//////////////////////////////////////////
function getItems(className) {
    items.forEach(item => {
        if (item.classList.contains(className)) {
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
    })
}
//////////////////////////////////////////



//swiper
const heroSliderSpeed = 1500;

const bodyStyles = window.getComputedStyle(document.body);
const fooBar = bodyStyles.getPropertyValue('--hero-slider-speed'); //get

document.body.style.setProperty('--hero-slider-speed', heroSliderSpeed + 'ms');//set


const swiperWap = new Swiper('.hero-slider', {
    // Optional parameters
    slidesPerView: 1,
    // If we need pagination
    pagination: {
        el: '.hero__pag',
        type: 'bullets',
        clickable: true
    },
    speed: heroSliderSpeed,
    autoplay: {
        delay: 1000,
    },

    navigation: {
        nextEl: '.hero__next',
        prevEl: '.hero__prev',
    },

    on: {
        init: function () {
            const paginationBullets = document.querySelectorAll('.hero__pag .swiper-pagination-bullet');

            paginationBullets.forEach(el => {
                el.innerHTML = `<span class="hero__bar"></span>`;
            });
        },
    },
});


//new filter
const list = document.querySelector('.list'),
    items = document.querySelectorAll('.blocks__item')
listItems = document.querySelectorAll('.list__item')

function filter() {
    list.addEventListener('click', event => {
        const targetId = event.target.dataset.id
        const target = event.target

        if (target.classList.contains('list__item')) {
            listItems.forEach(listItem => listItem.classList.remove('active'))
            target.classList.add('active')
        }


        switch (targetId) {
            case 'all':
                getItems('blocks__item')
                break
            case 'Company':
                getItems(targetId)
                break
            case 'Innovation':
                getItems(targetId)
                break
            case 'Industry':
                getItems(targetId)
                break
            case 'Expert':
                getItems(targetId)
                break
            case 'Marketing':
                getItems(targetId)
                break
        }
    })
}
filter()
// //////////////////////////////////////////

//Modal
// function bindModal(trigger, modal, close) {
//     trigger = document.querySelector(trigger),
//         modal = document.querySelector(modal),
//         close = document.querySelector(close)

//     const body = document.body

//     trigger.addEventListener('click', e => {
//         e.preventDefault()
//         modal.style.display = 'flex'
//         body.classList.add('locked')
//     });
//     close.addEventListener('click', () => {
//         modal.style.display = 'none'
//         body.classList.remove('locked')
//     });
//     modal.addEventListener('click', e => {
//         if (e.target === modal) {
//             modal.style.display = 'none'
//             body.classList.remove('locked')
//         }
//     })
// }

// // ПЕРВЫЙ аргумент - класс кнопки, при клике на которую будет открываться модальное окно.
// // ВТОРОЙ аргумент - класс самого модального окна.
// // ТРЕТИЙ аргумент - класс кнопки, при клике на которую будет закрываться модальное окно.
// bindModal('.modal__btn', '.modal__wrapper', '.modal__close')
// bindModal('.modal__btn-1', '.modal__wrapper-1', '.modal-1__close-1')


