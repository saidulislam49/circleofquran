$(document).ready(function(){

    $('.venobox').venobox()

})

//slider 
$(document).ready(function(){
    $('.slider').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1, 
        autoplay: true,
        autoplaySpeed: 1000,
        prevArrow : '.left_arrow',
        nextArrow : '.right_arrow',
        responsive: [
            
            {
              breakpoint: 750,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            } 
        ]
    });
});