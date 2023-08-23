$(() => {

    let page4Font;
    const fontWeight = ['900', '700', '500', '400'];
    page4Font = $('.page4Right .korean ul').children().length;
    // console.log(page4Font);
    for(let pageN = 0; pageN < page4Font; pageN++){
        $('.korean li').eq(pageN).click(function(){
            $('.korean p').css('font-weight', fontWeight[pageN]);
        });
        $('.english li').eq(pageN).click(function(){
            $('.english p').css('font-weight', fontWeight[pageN]);
        });
    }
});