$(document).ready(function(){
    var absWidth = $(window).width();
    if (absWidth < 575.98 ){
        if ($('.navbar-toggle').attr("aria-expanded") == true){

        }
        else{

        }
    }
    var absHeight = $(window).height();
    // var navHeight = $('nav').height();
    // var downHeight = $('#down').height();
    console.log(absHeight);
    // var downpadding = absHeight-navHeight-downHeight;
    if (absHeight > 900) {
        $('#down').css("padding-top","60px")
    }
    if (absHeight > 700 && absHeight < 900){
        $('#down').css("position","relative");
        $('#down').css("top","-60px")
    }
    // console.log(downpadding);
    // $('#down').css("padding-top",downpadding);
    var scrollTop = 0;
    $(window).scroll(function () {
        var st = $(window).scrollTop();
        if (st > 0) {
            $("#down").css("display", "none");
        } else {
            $("#down").css("display", "block");
        }
        //screen 1
        if (st > scrollTop && scrollTop === 0) {
            $("html,body").animate({scrollTop : scrollTop + absHeight}, 1000);
        }
        //screen2
        if (st < scrollTop && scrollTop === absHeight) {
            $("html,body").animate({scrollTop : scrollTop - absHeight}, 1000);
        }
        //key
        scrollTop = st;
    });

    $("#down").click(function () {
        $("html,body").animate({scrollTop : absHeight}, 1000);
    });
});