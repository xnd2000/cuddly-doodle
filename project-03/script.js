function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

$.fn.randomOrder = function(animate) {
    var image = $(this);
    
    // Viewport Dimensions
    var vpHeight = $(window).height();
    var vpWidth = $(window).width();
    
    // Image Position
    var xPos = getRandomInt(0, vpWidth - image.width());
    var yPos = getRandomInt(0, vpHeight - image.height());
    var zIndex = getRandomInt(0,13);
    
    // Animation Duration
    if(animate) var dur = 500;
    else var dur = 0;
    
    image.animate({left: xPos, top: yPos, 'z-index': zIndex}, dur);
};

$('img').draggable({stack: "img"});

/*
When a key is pressed in the page (97-122 is between a-z),
a function is called recieving the event and
a random image is picked from image list and
new position is assigned to it
*/
$(document).on('keypress', function(e) {
    if (e.which >= 97 && e.which <= 122) {
        $('img.slideshow').eq(Math.floor(Math.random() * $('img.slideshow').length)).randomOrder(false);
    }
});

// Change after 10 Seconds
//window.setInterval(function(){
//  $('img').randomOrder(true);
//}, 10000);
