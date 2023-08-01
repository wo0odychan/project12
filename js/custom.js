$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0 ? $('.header').addClass('on') : $('.header').removeClass('on');
    });

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        $('._mv').each(function () {
            if (sct + $(window).innerHeight() - 200 > $(this).offset().top) {
                $(this).addClass('on')
            } else {
                $(this).removeClass('on')
            }
        })
    });

    $('.right_slide').slick({
        arrows: false,
        autoplay: true,
        speed: 1000,
        pauseOnHover: true,
        slidesToShow: 3,
    });

    $('.main_notice .arrows .left').on('click', function () {
        $('.right_slide').slick('slickPrev')
    });
    $('.main_notice .arrows .right').on('click', function () {
        $('.right_slide').slick('slickNext')
    });



})