// scroll to top
function scrollToTop(){
    $('.scrollToTop').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 2000);
        return false;
    });
}

//set view to top (best working for partial post back buttons eg. btns in updatepanels) 
function setToTop(){
    window.scrollToTop(0, 0);
}

//scroll to specific div when nav is fixed
function scrollToDiv(e) {
    $('body, html').animate({ scrollTop: e.offset().top - 87.3 }, 'slow');

    //close mobile menu when user clicks on one of redirect link
    $(".mobile-nav-content").slideUp();
}

$(function () {
    $(document).scroll(function () {
        var $nav = $(".nav-fixed");
        var scroll_start = $(this).scrollTop();

        $nav.each(function(){

            //Adding background color to menu when scrolling
            if ($(this).css("display") == "flex" || $(this).css("display") == "block"){
                if (scroll_start > 0){

                    $(this).addClass("scrolled")
                }
                else{
                    $(this).removeClass("scrolled")
                }
                
            }
        })

        
    });
});
