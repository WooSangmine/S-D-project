jQuery(document).ready(function() {
    $('.navi>li').mouseover(function() {
        $('.submenu').stop().slideDown(500);
        $('#menu_bg').stop().slideDown(400);
    }).mouseout(function() {
        $('.submenu').stop().slideUp(400);
        $('#menu_bg').stop().slideUp(500);
    });
    $('#menu_bg').mouseover(function() {
        $('.submenu').stop().slideDown(500);
        $('#menu_bg').stop().slideDown(400);
    }).mouseout(function() {
        $('.submenu').stop().slideUp(400);
        $('#menu_bg').stop().slideUp(500);
    });

    $('.slide a:gt(0)').hide();
    setInterval(function(){
        $('.slide a:first-child')
            .fadeOut()
            .next('a')
            .fadeIn()
            .end()
            .appendTo('.slide');
        },5000);
    
    $('#menuicon').click(function(){
        $('.hgbt').toggleClass('active');
        if($('#menuicon').is(":checked") == true){
            $('.hgtap').animate({
                marginRight:0
            },1000);};
            if($('#menuicon').is(":checked") == false){
                $('.hgtap').animate({
                    marginRight:-300
                },1000);};
    });

});