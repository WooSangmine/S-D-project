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
            .fadeOut(3000)
            .next('a')
            .fadeIn(3000)
            .end()
            .appendTo('.slide');
        },4000);
    
    $('#menuicon').click(function(){
        $('.hgbt').toggleClass('active');
        if($('#menuicon').is(":checked") == true){
            $('.hgtap').animate({
                marginRight:0
            },500);};
            if($('#menuicon').is(":checked") == false){
                $('.hgtap').animate({
                    marginRight:-300
                },500);};
    });
});

$(document).ready(function() {

    var $banner = $(".banner").find("ul");

    var $bannerWidth = $banner.children().outerWidth();
    var $bannerHeight = $banner.children().outerHeight(); 
    var $bannerLength = $banner.children().length;
    var rollingId;

   
    rollingId = setInterval(function() { rollingStart(); }, 4000);

    
    function rollingStart() {
        $banner.css("width", $bannerWidth * $bannerLength + "px");
        $banner.css("height", $bannerHeight + "px");
        
        $banner.animate({left: - $bannerWidth + "px"}, 1500, function() { 
            $(this).append("<li>" + $(this).find("li:first").html() + "</li>");            
            $(this).find("li:first").remove();          
            $(this).css("left", 0);
            
        });
    }
}); 

