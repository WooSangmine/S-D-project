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
});