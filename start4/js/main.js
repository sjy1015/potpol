$(() => {

    /* 메뉴 Hover */
    $('.menu1').hover(() => {
        !$('#header').hasClass('open') ? $('#header').addClass('open') : $('#header').removeAttr('class');
    });

    for(let n = 0; n < $('.menu1 > li').length; n++){
        $('.menu1 > li').eq(n).hover(() => {
            !$('.menu1 > li').eq(n).hasClass('active') ? 
            $('.menu1 > li').eq(n).addClass('active') : $('.menu1 > li').removeAttr('class');
        });
    }

    /* 모바일 메뉴 */
    $('.mobOpen').click((e) => {
        e.preventDefault();
        if(!$('body').hasClass('fixed')){
            $('body').addClass('fixed');
            $('.mobNavi').addClass('active');
        }
    });
    $('.mobClose').click((e) => {
        e.preventDefault();
        $('body').removeAttr('class');
        $('.mobNavi').removeClass('active');
    });

    /* 모바일 메뉴 오픈 */
    for(let i = 0; i < $('.mobMenu1 > li').length; i++){
        $('.mobMenu1 > li').eq(i).click((e) => {
            e.preventDefault();
            if(!$('.mobMenu1 > li').eq(i).hasClass('open')){
                $('.mobMenu1 > li').eq(i).addClass('open');
                $('.mobMenu2').eq(i).slideDown(300);
            }
            else{
                $('.mobMenu1 > li').eq(i).removeAttr('class');
                $('.mobMenu2').eq(i).slideUp(300);
            }
        });
        
    }

    /* 시간 */
//원하는 시간 값 셋팅
    let user_year = 2023;
    let user_month = 12;
    let user_day = 31;
    let user_hour = 24;
    let user_minute = 59;
    let user_second = 59;
    let day, hour, minute, second;

//1월이 0부터 시작하기 때문에 개발을 모르는 사람도 셋팅이 가능하도록 안보이게 처리
    setMonth();

    let endTime = new Date(user_year,user_month,user_day,user_hour,user_minute,user_second);

    function setClock() {
        let now = new Date();
        let totalTime =  endTime ;

        let _second = 1000;
        let _minute = _second * 60;
        let _hour = _minute * 60;
        let _day = _hour * 24;

        let distance = totalTime - now;
        if(distance < 0){
            //적절한 종료 로직 
            return false;
        }

        let days = Math.floor(distance / _day);
        let hours = Math.floor((distance % _day) / _hour);
        let minutes = Math.floor((distance % _hour) / _minute);
        let seconds = Math.floor((distance % _minute) / _second);

        day = days.toString();
        hour = hours.toString();
        minute = minutes.toString();
        second = seconds.toString();

        $('.date').text(`${day}일`);
        $('.hour').text(`${hour}시간`);
        $('.minite').text(`${minute}분`);
        $('.second').text(`${second}초`);
        $('.buyDate').text(`${day}일 남음`);

        let result = day + " days " + hour + " hours, " + minute + " minutes " + second + " seconds";
        setTimeout(setClock, 1000);
        // console.log(result);
}
    setClock();
    function setMonth(){
        user_month = user_month -1;
    }

    /* 사이드 메뉴 */
    $('.quickBtn').click(function(e){
        e.preventDefault();
        $('#sideMenu').toggleClass('active');
        !$('#sideMenu').hasClass('active') ? $('.quickOpen').slideUp(600) : $('.quickOpen').slideDown(600);
    });


    /* 메인 스와이퍼 */
    const page1Swiper = new Swiper(".page1Swiper", {
        loop:true,
        pagination: {
            el: ".swiper-pagination"
        }
    });

    let ww = $(window).width();
    let page3Swiper = undefined;
    let page2Swiper = undefined;


    /* 2페이지 스와이퍼 */

    function initSwiper2() {

        if (ww < 761 && page2Swiper == undefined) {
            const page2Swiper = new Swiper(".page2Swiper", {
                loop:true,
                slidesPerView: "auto",
                spaceBetween: 30
                });
        } else if (ww >= 761 && page2Swiper != undefined) {
            page2Swiper.destroy();
            page2Swiper = undefined;
        }
    }
    


    /* 3페이지 스와이퍼 */
    function initSwiper() {

    if (ww < 761 && page3Swiper == undefined) {
        page3Swiper = new Swiper(".page3Swiper", {
        slidesPerView: 'auto',
        spaceBetween: 30,
        // simulateTouch: true,
        loop: true
        // autoplay: {
        //     delay: 2000,
        //     disableOnInteraction: false,
        // },
        });
    } else if (ww >= 761 && page3Swiper != undefined) {
        page3Swiper.destroy();
        page3Swiper = undefined;
    }
}

initSwiper();
initSwiper2();

$(window).on('resize', function () {
    ww = $(window).width();
    initSwiper();
    initSwiper2();
});

/* 5페이지 스와이퍼 */
const page5Swiper = new Swiper(".page5Swiper", {
    loop:true,
    pagination: {
        el: ".swiper-pagination"
    }
});


//     let page3Swiper=undefined;
//     let winW;

//     initSwiper = () => {
//         winW=$(window).width();

//         if(winW <= 760){
//             page3Swiper = new Swiper(".page3Swiper", {
//                 loop:true,
//                 slidesPerView: "auto",
//                 spaceBetween: 30,
//                 breakpoints:{
//                     761:{
//                         spaceBetween: 10
//                     }
//                 }
//             });
//         }
//         else{
//             // page2Swiper.destroy(true, true);
//             page3Swiper.destroy();
//             page3Swiper=undefined;
//             $(".page3Swiper .swiper-wrapper").removeAttr("style");
//             $(".page3Swiper .swiper-slide").removeAttr("style");
//         }
//     }
//     initSwiper();

// $(window).on("resize", function(){
// 	initSwiper();
// });


});