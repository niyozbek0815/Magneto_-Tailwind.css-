$(document).ready(function() {

    $(".search_btn").click(function() {
        $(".search").slideToggle("slow");
    });
    $(".li ").click(function() {
        $(".li ul").slideToggle();
    });
    $('.your-class').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    });
    $('.your-class2').slick({
        slidesToShow: 9,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 3000,

    });

    $(".your-class .slick-next").css({ "display": "none" });

    $(".your-class .slick-prev").css({ "display": "none" });
    $(".your-class2 .slick-next").css({ "display": "none" });

    $(".your-class2 .slick-prev").css({ "display": "none" });
    var a = 1
    $("#cat-b").click(function() {
        $(".top-cat").slideToggle();
        if (a % 2 == 1) {
            $("#icon2").removeClass("fa-arrow-down");
            $("#icon2").addClass("fa-arrow-up");

        } else {
            $("#icon2").removeClass("fa-arrow-up");
            $("#icon2").addClass("fa-arrow-down");
        }
        a = a + 1;
    });



});