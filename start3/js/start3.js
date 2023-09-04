$(() => {

    let page6Font;
    const fontWeight = ['900', '700', '500', '400'];
    page6Font = $('.page6Right .korean ul').children().length;
    // console.log(page6Font);
    for(let pageN = 0; pageN < page6Font; pageN++){
        $('.korean li').eq(pageN).click(function(e){
            e.preventDefault();
            $('.korean p').css('font-weight', fontWeight[pageN]);
        });
        $('.english li').eq(pageN).click(function(e){
            e.preventDefault();
            $('.english p').css('font-weight', fontWeight[pageN]);
        });
    }
});