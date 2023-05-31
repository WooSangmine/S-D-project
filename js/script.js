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
            },500);};
            if($('#menuicon').is(":checked") == false){
                $('.hgtap').animate({
                    marginRight:-300
                },500);};
    });

    $(function() {
        $("input[type=submit]").click(function() {
            var result = $.trim($("input[type=text]").val());
            if (!result) {
              alert("입력하십시오");
            }
        })
    })

    $(function() {
        $(".hgtap> ul>li ").click(function() {
            alert("로그인을 하세요")
        });
    });

    $(function() {
        $(".hgtap> li ").click(function() {
            location.href = "login.php";
        });
    });
});