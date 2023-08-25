$(() => {
    // 스크롤트리거
    const trigger = new ScrollTrigger.default({
        trigger: {
            once:true,
            toggle:{
                class: {
                in: 'active',
                out: 'inactive'
                }
            },
            offset: {
                viewport: {
                    x:0,
                    y:0.15
                }
            }
        }
    });
    trigger.add('div[id^=head], div[class^=text], div[class^=content], div[class*=Inner');
    // trigger.add('div[class^=content], div[class*=Inner');

// 변수들
    let winT = 0;
    let pageNum = 0;
    let winHalf;
    let pos = 0;
    let swCurrent, swTotal;
    const linkArray = ['#header','#page1','#page2','#page3','#page4','#page5']

    // 화면 맞추기
    $(window).resize(() => {
        let winH = $(window).height();
        winHalf = winH * 0.1;
    });
    $(window).trigger('resize');
    

    // 스크롤 이벤트
    $(window).scroll(() => {
        winT = $(window).scrollTop();
        if(winT < $('#page1').offset().top){
            pageNum = 0;
        }
        else if(winT < $('#page2').offset().top-winHalf){
            pageNum = 1;
        }
        else if(winT < $('#page3').offset().top-winHalf){
            pageNum = 2;
        }
        else if(winT < $('#page4').offset().top-winHalf){
            pageNum = 3;
        }
        else if(winT < $('#page5').offset().top-(winHalf*3)){
            pageNum = 4;
        }
        else{
            pageNum = 5;
        }
        // console.log(pageNum);
        if(!$('#header .navBar ul li').eq(pageNum).hasClass('active')){
            $('#header .navBar ul li').removeClass('active');
            $('#header .navBar ul li').eq(pageNum).addClass('active');
        }
    });

    // 스와이퍼 js
    const headerSwiper = new Swiper(".headerSwiper", {
        loop:true,
        // autoplay:{
        //     delay:2000,
        //     disableOnInteraction: false
        // },
        pagination:{
            el:'.swiper-pagination',
            // type:'fraction'
            clickable:true
        }
    
    });
    
    $('#header .headerController .prev').click((e) => {
        e.preventDefault();
        headerSwiper.slidePrev();
        if(!$('#header .headerController .prev').hasClass('active')){
            $('#header .headerController .next').removeClass('active');
            $('#header .headerController .prev').addClass('active');
            // $('#header .textBox').addClass('active');
        }
    });
    $('#header .headerController .next').click((e) => {
        e.preventDefault();
        headerSwiper.slideNext();
        if(!$('#header .headerController .next').hasClass('active')){
            $('#header .headerController .prev').removeClass('active');
            $('#header .headerController .next').addClass('active');
            // $('#header .textBox').addClass('active');
        }
    });
    // 일시정지
    $('#pausePlay').click(function(e){
        e.preventDefault();
        if($(this).hasClass('play')){
            $(this).removeAttr('class');
            $(this).addClass('pause');
            headerSwiper.autoplay.start();
        }
        else{
            $(this).removeAttr('class');
            $(this).addClass('play');
            headerSwiper.autoplay.stop();
        }
    });

    // 클릭 이벤트 PC판
    $('#header .navBar ul li').click(function(e){
        e.preventDefault();
        pageNum = $(this).index();
        let target = $(linkArray[pageNum]);
        pos = target.offset().top;
        $('html').animate({scrollTop:pos}, 600);
    });

    // 클릭 이벤트 모바일판
    $('#header .mobOpen').click(function(e){
        e.preventDefault();
        if(!$('body').hasClass('fixed')){
            $('body').addClass('fixed');
            $('#header .mobBar').fadeIn(300);
            $('#header .mobOpen').addClass('active');
            headerSwiper.autoplay.stop();
        }
        else if($('body').hasClass('fixed')){
            $('body').removeClass('fixed');
            $('#header .mobBar').fadeOut(300);
            $('#header .mobOpen').removeClass('active');
            headerSwiper.autoplay.start();
        }
    });
    $('#header .mobBar ul li').click(function(e){
        e.preventDefault();
        pageNum = $(this).index();
        let target = $(linkArray[pageNum]);
        pos = target.offset().top;
        $('body').removeClass('fixed');
        $('#header .mobBar').fadeOut(300);
        $('#header .mobOpen').removeClass('active');
        setTimeout(() => {
            $('html').animate({scrollTop:pos}, 600);
        }, 500);
    });
    
    // let contentNumber = 0;
    const contentText = [
        {
            info : 'Client Information',
            clien : '아로필'
        },
        {
            info : 'Client Information',
            clien : '위닉스'
        },
        {
            info : 'Client Information',
            clien : 'KCLA가나안'
        },
        {
            info : 'Client Information',
            clien : '커피TV'
        },
        {
            info : 'Client Information',
            clien : 'CODE-X'
        },
        {
            info : 'Client Information',
            clien : '코박메드'
        }
    ];

    // for(let contentNumber = 0; contentNumber < $('#page2 .potpContent ul li').length; contentNumber++){
    //     $('#page2 .potpContent ul li').eq(contentNumber).hover(() => {
    //             $('#page2 .potpContent .photo').removeClass('active');
    //             $('#page2 .potpContent .photo').eq(contentNumber).addClass('active');
    //             $('#page2 .potpContent .photoCover').eq(contentNumber).html(
    //                 `<h3></h3>
    //                 <p></p>`
    //             );
    //             $('#page2 .potpContent .photoCover h3').html(contentText[contentNumber].info);
    //             $('#page2 .potpContent .photoCover p').html(contentText[contentNumber].clien);
    //         }, () => {
    //             $('#page2 .potpContent .photo').removeClass('active');
    //         }
    //         );
    // }
    for(let contentNumber = 0; contentNumber < $('#page2 .potpContent ul li').length; contentNumber++){
        $('#page2 .potpContent ul li').eq(contentNumber).hover(() => {
                $('#page2 .potpContent .photo').removeAttr('active');
                $('#page2 .potpContent .photo').eq(contentNumber).addClass('active');
                $('#page2 .potpContent .photoCover').eq(contentNumber).html(
                    `<h3></h3>
                    <p></p>
                    `
                );
                setTimeout(() => {
                    $('#page2 .potpContent .photoCover h3').text(contentText[contentNumber].info);
                    $('#page2 .potpContent .photoCover p').text(contentText[contentNumber].clien);
                    $('#page2 .potpContent .photoCover a').remove();
                    $('#page2 .potpContent .photoCover').eq(contentNumber).append(`<a href=""><i class="xi-home-o"></i>Home Page</a>`);
                }, 100);
                
            }, () => {
                $('#page2 .potpContent .photo').removeClass('active');
                $('#page2 .potpContent .photoCover a').remove();
            }
            );
    }

});
