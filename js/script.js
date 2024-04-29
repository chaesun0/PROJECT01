$('.svgBtn').click(function(){
    $(this).toggleClass('addsvg')
    let card=$(this).parents('h3').next('.contentCard');
    $('.contentCard').hide();
    if(card.is(':visible')) {
        card.slideUp();
    } else{
        card.slideDown()
    }
});