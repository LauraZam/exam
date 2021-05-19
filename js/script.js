
$('.imgs').ready(function () {
    $('.slider').slick({
        arrows: true,
        dots: false,
        adaptiveHeight: true,
        slidesToShow: 1,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1,
                    centerMode: false,
                }
            },
            {
                breakpoint: 770,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 580,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1,
                    centerMode: false,
                }
            }
        ]
    });
})
