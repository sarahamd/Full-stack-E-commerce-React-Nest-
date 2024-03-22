var gallery=["img/task1(SlideShow)/1.jpg","img/task1(SlideShow)/2.jpg","img/task1(SlideShow)/3.jpg","img/task1(SlideShow)/4.jpg","img/task1(SlideShow)/5.jpg","img/task1(SlideShow)/6.jpg"];
var i=1;
function nextfunc(){
    if(i<gallery.length)
    {  
        document.images[0].src=gallery[i];
        i++;
        }
        console.log(i);
}


function prevfunc(){
    if(i==gallery.length)
    {
        i-=1;
        document.images[0].src=gallery[i-1];
        i-=1;
    }
    else if(i>1)
    {
        document.images[0].src=gallery[i-1];
        i-=1;
    }
    else if(i==1)
    {
        document.images[0].src=gallery[0];
    }
}



 var k=1;
 var timer_id;
function SlideShow(){
  timer_id= setInterval(function() {
    document.images[0].src=gallery[k];
    k++;
    if(k==gallery.length)
    {
        k=0;
    }
 }, 500);
}

function stopfunc()
{

    /****************************** issue when i press slideshow button many times with no time ican;t stop this slideshow through the stop button */
    clearInterval(timer_id);
    document.images[0].src=gallery[k];
  }


if (timer_id) {
    clearInterval(timer_id);
    timer_id = null; // Reset timer_id to indicate that the slideshow is stopped
    // Optionally, reset the image to the first one when stopping
    k = 0;
    document.images[0].src = gallery[k];
}