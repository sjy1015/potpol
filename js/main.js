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

    const swiperText = [
		{
			title: "CREATE SEMANTIC PAGES",
			subTitle: "Create semantic pages that increase web accessibility",
			sub1: "W Concept 사이트 리뉴얼",
			sub2: "제작기간 3주",
			sub3: "HTML + CSS + jQuery + Figma"
		},
		{
			title: "JAVASCRIPT AND LIBRARIES",
			subTitle: "Using JavaScript implementations and libraries",
			sub1: "YBM ECC 사이트 리뉴얼",
			sub2: "제작기간 3주",
			sub3: "HTML + CSS + JavaScript + Figma"
		},
		{
			title: "USER INTERFACE USING JavaScript",
			subTitle: "User interface implementation using JavaScript",
			sub1: "BARESIO 사이트 리뉴얼",
			sub2: "제작기간 3주",
			sub3: "HTML + CSS + JavaScript + Figma"
		},
        {
			title: "USER INTERFACE USING Jquery",
			subTitle: "User interface implementation using Jquery",
			sub1: "VOGUE 사이트 리뉴얼",
			sub2: "제작기간 3주",
			sub3: "HTML + CSS +  + jQuery + Figma"
		}
	];

    /* 스와이프 */

    let mainCurrent, mainTotal;

    const mainSwiper = new Swiper(".mainSwiper", {
        speed:1200,
        autoplay:{
            delay: 5000,
			disableOnInteraction: false
        },
        loop:true,
        pagination: {
            el: ".swiper-pagination",
        },
        on:{
            init:function(){
                mainCurrent=this.activeIndex;
				mainTotal=this.slides.length;
                textInsert(this.realIndex);
            },
            slideChangeTransitionEnd:function(){
                console.log(this.realIndex);
                textInsert(this.realIndex);
            }
        }
        
    });

    /* 메인 스와이프 */
    function textInsert(n){
        $(".swiper-slide .slideText").remove();
		setTimeout(function(){
			$(".swiper-slide-active").prepend(
				`<div class="slideText">
					<strong></strong>
					<span></span>
					<p class="mainText">
						<span></span>
						<span></span>
						<span></span>
					</p>
				</div>`
			);
		}, 10);
        setTimeout(function(){
            $('.slideText > strong').text(swiperText[n].title);
            $('.slideText > span').text(swiperText[n].subTitle);
            $('.mainText span').eq(0).text(swiperText[n].sub1);
            $('.mainText span').eq(1).text(swiperText[n].sub2);
            $('.mainText span').eq(2).text(swiperText[n].sub3);
            $('.slideText').addClass('active');
        }, 500);
    };

    $('#page1 .slidePause').click((e) => {
        e.preventDefault();
        if($('.slidePause').hasClass('pause')){
            $('.slidePause').removeClass('pause');
            $('.slidePause').addClass('play');
            mainSwiper.autoplay.stop();
        }
        else{
            $('.slidePause').removeClass('play');
            $('.slidePause').addClass('pause');
            mainSwiper.autoplay.start();
        }
    });

    /* page3 탭 움직이는거 */
    let tabN = 0;
    // let tabWidth=[];
    let tabWidth;
    let tabLeft;
    let tabClickN = 0;

    $(window).resize(function(){
		tabLeft=$(".tab").offset().left;
	});

	$(window).trigger("resize");

    // $(".page3Fix > ul li").each(function(i){
	// 	tabWidth.push($('.page3Fix > ul li').find("a").width()-10);
	// });
    tabWidth=$('.tab > ul li').width();

    let tabInteraction=() => {
        $('.bar').css({
            left: $('.tab > ul li').eq(tabN).offset().left-tabLeft,
            width: tabWidth
        });
    }
    tabInteraction();
    $('.tab > ul li').hover(function(){
        tabN=$(this).index();
        tabInteraction();
    },
    function(){
        tabN=tabClickN;
        tabInteraction();
    }
    );
    $('.tab > ul li').click(function(e){
        e.preventDefault();
        tabClickN=$(this).index();
    });

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
            cont1 : '비트맵 편집 프로그램 포토샵, 벡터 편집 프로그램 일러스트레이터',
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
    lastH = $('.page3Box.last').height();

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
        else if($(window).height() + scrollH == $(document).height()){
            $('.page3Top').removeClass('fixed');
            $('.page3Top').addClass('hide');
        }

        if(scrollH < $('#page2').offset().top){
            pageN = 0;
        }
        else if(scrollH < $('#page3').offset().top-100){
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

        if(pageN == 1){
            $('#header').addClass('white');
            $('#pcNav').addClass('white');
        }
        else if(pageN == 0){
            $('#header').removeClass('white');
            $('#pcNav').removeClass('white');
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

    /* 모바일 메뉴 */
    $('.mobOpen').click(function(e){
        e.preventDefault();           
        $('#mobNav').toggleClass('open');
        $('body').toggleClass('fixed');
        $('.mobOpen').toggleClass('active');
    });
    
    /*모바일 메뉴 클릭*/
    for(let mobH = 0; mobH < $('#mobNav li').length; mobH++){
        $('#mobNav li').eq(mobH).click(function(e){
            e.preventDefault();
            $('.mobOpen').removeClass('active');
            $('body').removeAttr('class');
            $('#mobNav').removeAttr('class');
            setTimeout(() => {
                pageN = $(this).index();
                let target = $(pageNum[pageN]);
                pos = target.offset().top;
                $('html').animate({scrollTop:pos}, 600);
            }, 500);
            
        });
    }

    

});