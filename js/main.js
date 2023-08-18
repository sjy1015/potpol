$(() => {
    
    /* 스크롤 트리거*/
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
                    y:0.25
                }
            }
        }
    });
    trigger.add('section[id^=page]'); 


    /* 스킬 */
    const skillCont = [
        {
            title : '자바스크립트',
            cont1 : 'Ecma International의 프로토타입 기반 스크립트언어. 웹을 구성하는 기본요소',
            cont2 : '자바스크립트 표준 작성 및 자바스크립트 기반의 플러그인 활용 및 구현 (제이쿼리, 스와이퍼)'
        },
        {
            title : 'HTML5 / CSS3 반응형 / SASS',
            cont1 : '웹브라우저의 기본뼈대',
            cont2 : 'HTML5 웹표준 문법 준수 및 웹 접근성 향상. 및 반응형 CSS 작성 가능.',
            cont3 : 'CSS 전처리 기능 프로그래밍 SASS를 활용한 CSS작성.'
        },
        {
            title : '깃허브',
            cont1 : '분산 버전 관리시스템 깃(Git)을 기반으로 한 코드 호스팅 공유 플랫폼',
            cont2 : '깃(Git)을 이용하여 코드의 변경 사항을 추적하고 관리, 이를 깃허브에 업로드하여 저장, 공유, 협업'
        },
        {
            title : '피그마',
            cont1 : '웹 기반 UI/UX 디자인 및 프로토타이핑 협업툴',
            cont2 : '피그마를 이용한 디자인 및 팀과 공유한 협업 작업',
            cont3 : '프로토타이핑 기능을 이용한 코딩에 적합한 디자인'
        },
        {
            title : '포토샵 / 일러스트레이터',
            cont1 : '비트맵 기반 편집 프로그램 포토샵, 벡터 기반 편집 프로그램 일러스트레이터',
            cont2 : '포토샵을 이용한 비트맵 이미지 작업 및 편집',
            cont3 : '일러스트레이터를 이용한 벡터 이미지 작업 및 편집'
        }
    ];
    for(let n = 0; n < $('.page2Cont li').length; n++){
        $('.page2Cont li').eq(n).click(() => {
            $('.page2Cont .page2Skill').remove();
            $('.page2Cont li').eq(n).append(`
                <div class="page2Skill">
                    <h3 class="title"></h3>
                    <p class="cont1"></p>
                    <p class="cont2"></p>
                    <p class="cont3"></p>
                </div>
            `);
            $('.page2Skill .title').text(skillCont[n].title);
            $('.page2Skill .cont1').text(skillCont[n].cont1);
            $('.page2Skill .cont2').text(skillCont[n].cont2);
            $('.page2Skill .cont3').text(skillCont[n].cont3);
            $('.page2Skill').slideDown(400);
        });

    }


/* 포트폴리오*/
/* 클릭 이벤트 */
    for(potpN = 0; potpN < $('.page3Selection li').length; potpN++){
        $('.page3Selection li').eq(potpN).click(function(e){
            e.preventDefault();
            if(!$(this).hasClass('active')){
                $('.page3Selection li').removeClass('active');
                $(this).addClass('active');
            }
        });
    }

    /* 스크롤 이벤트 */
    const pageNum = ['#page1', '#page2', '#page3', '#page4'];
    let page3H;
    let scrollH = 0;
    let page3Top;
    let page3Stop;
    let pageN;
    let headH;

    $(window).resize(() => {
        let winH=$(window).height();
        winHalf = winH * 0.85;
    });
    $(window).trigger('resize');

    /* 메뉴 따라 내려가는거 */
    page3Top = $('.page3Top').offset().top;
    page3Stop = $('.page3Box.last').offset().top;
    headH = $('#header').height();
    lastH = $('.last').height();

    // console.log(lastH);

    $(window).scroll(() => {
        scrollH = $(window).scrollTop();
        if(scrollH >= page3Top-headH){
            if(!$('.page3Top').hasClass('fixed')){ 
                $('.page3Top').addClass('fixed');
                $('.page3Top').css({top: headH});
                $('.page3Top').removeClass('hide');
            }
        }
        else{
            if($('.page3Top').hasClass('fixed') === true){
                $('.page3Top').removeClass('fixed');
                $('.page3Top').removeClass('hide');
            }
        }
        if(page3Stop-lastH <= scrollH){
            $('.page3Top').removeClass('fixed');
            $('.page3Top').addClass('hide');
        }

        if(scrollH < $('#page2').offset().top){
            pageN = 0;
        }
        else if(scrollH < $('#page3').offset().top){
            pageN = 1;
        }
        else if(scrollH < $('#page4').offset().top){
            pageN = 2;
            if($(window).height() + scrollH == $(document).height()){
                pageN = 3;
            }
        }
        else{
            pageN = 4;
        }
        // console.log(pageN);
        if(!$('#pcNav li').eq(pageN).hasClass('active')){
            $('#pcNav li').removeClass('active');
            $('#pcNav li').eq(pageN).addClass('active');
        }
    });
    /* 메뉴 누르면 이동하는거 */
    $('#pcNav li').click(function(e){
        e.preventDefault();
        pageN = $(this).index();
        let target = $(pageNum[pageN]);
        pos = target.offset().top;
        $('html').animate({scrollTop:pos}, 600);
    });


});