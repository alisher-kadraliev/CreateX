// Custom scripts
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


//sad

var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

//slide
$(document).ready(function () {
    $(".slider").slick({
        slidesToShow: 3,
        slidesToScroll: 2,
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

//slide for work
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
        arrows:false,
        asNavFor: '.slider-for',
        infinite: true,
        draggable: false,
        focusOnSelect: true
    });
});