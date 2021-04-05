$(window).on("load",function() {
   $(window).scroll(function() {
     var windowBottom = $(this).scrollTop() + $(this).innerHeight();
     $(".fade").each(function() {
       /* Check the location of each desired element */
       var objectBottom = $(this).offset().top + $(this).outerHeight();
       
       /* If the element is completely within bounds of the window, fade it in */
       if ((objectBottom/1.1) < windowBottom) { //object comes into view (scrolling down)
         if ($(this).css("opacity")==0) {$(this).fadeTo(800,1);}
       } else { //object goes out of view (scrolling up)
       }
     });
   }).scroll(); //invoke scroll-handler on page-load
 });



 if ($(this).css("opacity")==1) {$(this).fadeTo(10,0);}




 