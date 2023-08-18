$(() => {
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




});