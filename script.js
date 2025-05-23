 document.addEventListener("DOMContentLoaded", function () {
    var myCarousel = document.querySelector('#carouselExampleIndicators');
    var carousel = new bootstrap.Carousel(myCarousel, {
      interval: 3000,  
      ride: 'carousel' 
    });
  });