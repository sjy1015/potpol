$(() => {
    /* 메인 스와이프 */
    const page2Swiper = new Swiper(".page2Swiper", {
        slidesPerView: 1,
        loop:true,
        centeredSlides: true,
        initialSlide:0,
        spaceBetween: 20,
        pagination: {
            el: ".swiper-pagination",
            clickable:true
        },
        breakpoints:{
            740:{
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1280:{
                slidesPerView: 3,
                spaceBetween: 30
            }
        }

    });
    


    $('.page2Prev').click((e) => {
        e.preventDefault();
        page2Swiper.slidePrev();
    });
    $('.page2Next').click((e) => {
        e.preventDefault();
        page2Swiper.slideNext();
    });

    /* 본문 바로가기 */
    $('.skipNav').focusin(() => {
        $('.skipNav').addClass('active');
        $('#header').addClass('active');
    });
    $('.skipNav').focusout(() => {
        $('.skipNav').removeClass('active');
        $('#header').removeClass('active');
    });

    /* 메뉴 펼치기 */
    $('.menu1 > li').hover(
        () => {
            $('#header').addClass('open');
        },
        () => {
            $('#header').removeClass('open');
        }
    );

    /* 스크롤 이벤트 */
let pageN = 0;
let scrollH;

$(window).scroll(() => {
    scrollH = $(window).scrollTop();
    if(scrollH < $('#page2').offset().top){
        pageN = 0;
    }
    else if(scrollH < $('#page3').offset().top){
        pageN = 1;
    }
    else if(scrollH < $('#page4').offset().top){
        pageN = 2;
    }
    else if(scrollH < $('#page5').offset().top){
        pageN = 3;
    }
    else if(scrollH < $('#page6').offset().top){
        pageN = 4;
        if($(window).height() + scrollH == $(document).height()){
            pageN = 5;
        }
    }
    else{
        pageN = 5;
    }
    console.log(pageN);

    if(pageN > 0 && !$('.mobOpen').hasClass('active')){
        $('.mobOpen').addClass('active');
    }
    else if(pageN == 0 && $('.mobOpen').hasClass('active')){
        $('.mobOpen').removeClass('active');
    }
});

/* 모바일 메뉴 */
let mobL = $('.mobClick > li').length;
console.log(mobL);

$('.mobOpen').click((e) => {
    e.preventDefault();
    $('.mobOpen').toggleClass('open');
    $('.mobMenu').toggleClass('open');
    $('body').toggleClass('fixed');
    // if($('.mobOpen').hasClass('open')){
        
    // }
});

for(let mobN = 0; mobN < mobL; mobN++){
    $('.mobClick > li').eq(mobN).click((e) => {
        e.preventDefault();
        console.log(mobN);
        if(!$('.mobOpen2').eq(mobN).hasClass('open')){
            $('.mobOpen2').removeClass('open');
            $('.mobOpen2').eq(mobN).addClass('open');
        }
        else if($('.mobOpen2').eq(mobN).hasClass('open')){
            $('.mobOpen2').eq(mobN).removeClass('open');
        }
    });
}

});