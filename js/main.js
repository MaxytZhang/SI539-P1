$(document).ready(function(){
    $(window).on("load", function () {
        $('.preloader').fadeOut('slow');
    });

    $('.navbar').css('transform', "scale(1.1,1.1)");
    var start_height = $(document).scrollTop();
    var navigation_height = $('.navbar').outerHeight();
    $(window).scroll(function() {
        var end_height = $(document).scrollTop();
        // console.log(end_height);
        if (end_height > navigation_height){
            // $('.navbar').css("display","none");
            // $('.navbar').hide('slow');
            $('.navbar').css('transform', "scale(1.0,1.0)");
            // $('.navbar').css('top', "-2vw");
            // $('.navbar-nav').css('padding-left', "8vw");
            // $('.navbar').fadeOut('slow');
            $('.sidebar').css("margin-top","100px");
        }else {
            // $('.navbar').css("display","flex");
            $('.navbar').show('slow');
            $('.navbar').css('transform', "scale(1.1,1.1)");
            // $('.navbar').fadeIn('slow');
            $('.sidebar').css("margin-top","120px");
        }
        // if (end_height < start_height){
        //     // $('.navbar').css("display","flex");
        //     $('.navbar').show('slow');
        //     $('.navbar').css('transform', "scale(1.1,1.1)");
        //     // $('.navbar').fadeIn('slow');
        //     $('.sidebar').css("margin-top","120px");
        // }
        start_height = $(document).scrollTop();
    });
});

// var h1 = document.documentElement.scrollTop;
// var h2 = document.getElementsByClassName("fixed-top navbar navbar-expand-xl navbar-expand-md navbar-expand-lg navbar-expand-sm")[0].offsetHeight;
// document.onscroll = function () {
//     var h = document.documentElement.scrollTop;
//     if (h > h2){
//         document.getElementsByClassName("fixed-top navbar navbar-expand-xl navbar-expand-md navbar-expand-lg navbar-expand-sm")[0].style.display = "none";
//         document.getElementsByClassName("fixed-top sidebar")[0].style.margin = "20px";
//     }
//     else{
//         document.getElementsByClassName("fixed-top navbar navbar-expand-xl navbar-expand-md navbar-expand-lg navbar-expand-sm")[0].style.display = "flex";
//         document.getElementsByClassName("fixed-top sidebar")[0].style.margin = "120px";
//     }
//     if (h < h1){
//         document.getElementsByClassName("fixed-top navbar navbar-expand-xl navbar-expand-md navbar-expand-lg navbar-expand-sm")[0].style.display = "flex";
//         document.getElementsByClassName("fixed-top sidebar")[0].style.margin = "120px";
//     }
//     h1 = document.documentElement.scrollTop;
// };


