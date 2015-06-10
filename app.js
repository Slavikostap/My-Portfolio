//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");
var a=0;

//An image to overlay
$overlay.append($image);

//A caption to overlay
//$overlay.append($caption);

//Add overlay
$("body").append($overlay);

//Capture the click event on a link to an image
$("#imageGallery a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  //Update overlay with the image linked in the link
  $image.attr("src", imageLocation);
  
  //Show the overlay.
  var h=$(window).height();
  var w=$(window).width();
  $overlay.css('top',h*3);
  $overlay.fadeIn(300);

      if (w>h) {
        $('#overlay img').css('height', 0.8*h);
        $('#overlay img ').css('margin-top',0.1*h);
      } else {
        $('#overlay img').css('width', 0.8*w);
      }

});

//When overlay is clicked
$overlay.click(function(){
  //Hide the overlay
  $overlay.fadeOut(200);
});




