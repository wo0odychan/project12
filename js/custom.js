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

    $('.mobile').on('click', function () {
        $(this).toggleClass('on');
        $('.gnb').toggleClass('on');

    });

    $('.gnb').on('wheel touchmove', function (e) {
        e.preventDefault();
    });




})