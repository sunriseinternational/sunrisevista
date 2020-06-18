//amenity accordion
var icons = {
    header: "iconClosed",    // custom icon class
    activeHeader: "iconOpen" // custom icon class
};

$( "#accordion" ).accordion({
    heightStyle: "content",
    icons: icons,
    collapsible: true, 
    active: false
});

// menu toggle function
var $mobileNavContent = $(".mobile-nav-content");
$("#hamburger").on("click", function(){
    $mobileNavContent.slideToggle(function(){
        if (!$mobileNavContent.is(":visible")){
            $('#hamburger div').html('<i class="fas fa-bars"></i>');
        }
        else{
            $('#hamburger div').html('<i class="far fa-times-circle"></i>');
            
        }
    });
});

//reset ham icon when clicks link on menu
$('.mobile-nav-content').on("click", function(){
    $('#hamburger div').html('<i class="fas fa-bars"></i>');
})


//copyright
var currentTime = new Date().getFullYear();
$(".f-copyrights").html('<p>© ' + currentTime + ' Inn Hotels. All rights reserved.</p>');



//automated pop up notice with session
// set session
if(!sessionStorage.getItem('firstVisit')){ 
    sessionStorage.setItem('firstVisit', '1'); 
}else{ 
    sessionStorage.setItem('firstVisit', '0'); 
}


// pop up notice
    
$(function(){
    
    if (sessionStorage.getItem('firstVisit') === "1")
    {
       // switcher
        $(".popUp").show(); 
        // $(".popUp").hide();
    } 

    $("#popUpClose").click(function(){
        $(".popUp").hide();
    })
    
});





// Js modal

// Get the modal
var modal = document.getElementById("mapModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("mapPhoto");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// modal event only happen when click outside the form elements
$("#map").click(function (event) {
    $target = $(event.target);
    if (!$target.closest('#name').length && !$target.closest('#email').length && !$target.closest('#message').length && !$target.closest('#submitbtn').length) {
        modal.style.display = "block";
        modalImg.src = img.src;
        captionText.innerHTML = img.alt;
    }
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("photo-close")[0];

// When the user clicks on <span> (x), close the modal
if (span != undefined){
    span.onclick = function() { 
        modal.style.display = "none";
    }
}



// header marque slider
$(".marque-photo").slick({
    arrows: true,
    dots: true,
    speed: 2000,
    fade: true,
    autoplay: true,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    autoplaySpeed: 5000,
    asNavFor: '.page-marque'
})

$(".page-marque").slick({
    arrows: false,
    dots: false,
    speed: 2000,
    fade: true,
    autoplay: true,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    autoplaySpeed: 5000,
    asNavFor: '.marque-photo'
})


// retrieve querystring
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

//print messages
function printMessage(msg){
    switch(msg){
        case "empty":{
            msg = "[Error] All of text boxes are required."
            break;
        }
        case "success":{
            msg = "[Success] Your message sent."
            break;
        }
        case "fail":{
            msg = "[Error] Your message fail to send, check back later."
            break;
        }
        default:{
            msg = "Page not found."
        }
    }
    return msg;
}

//replace the message
var msg = getParameterByName('q');

if (msg != "" && msg != null){
    var message = document.getElementById("emailMessage");
    if (message != null || message != ""){
        message.innerHTML = printMessage(msg);
    }
}