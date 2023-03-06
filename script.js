// Pronunciations
var whanaungatanga = new Audio();
whanaungatanga.src = 'assets/audio/whanaungatanga.mp3';

var interaction = new Audio();
interaction.src = 'assets/audio/interaction.mp3';

var support = new Audio();
support.src = 'assets/audio/support.mp3';

var ako = new Audio();
ako.src = 'assets/audio/ako.mp3';

 
// Animating counter up stats
(function(e){"use strict";e.fn.counterUp=function(t){var n=e.extend({time:400,delay:10},t);return this.each(function(){var t=e(this),r=n,i=function(){var e=[],n=r.time/r.delay,i=t.text(),s=/[0-9]+,[0-9]+/.test(i);i=i.replace(/,/g,"");var o=/^[0-9]+$/.test(i),u=/^[0-9]+\.[0-9]+$/.test(i),a=u?(i.split(".")[1]||[]).length:0;for(var f=n;f>=1;f--){var l=parseInt(i/n*f);u&&(l=parseFloat(i/n*f).toFixed(a));if(s)while(/(\d+)(\d{3})/.test(l.toString()))l=l.toString().replace(/(\d+)(\d{3})/,"$1,$2");e.unshift(l)}t.data("counterup-nums",e);t.text("0");var c=function(){t.text(t.data("counterup-nums").shift());if(t.data("counterup-nums").length)setTimeout(t.data("counterup-func"),r.delay);else{delete t.data("counterup-nums");t.data("counterup-nums",null);t.data("counterup-func",null)}};t.data("counterup-func",c);setTimeout(t.data("counterup-func"),r.delay)};t.waypoint(i,{offset:"100%",triggerOnce:!0})})}})(jQuery);    jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});

// Accordion
document.querySelectorAll('.accordion__button').forEach(button => {
    button.addEventListener('click', () => { 
        // const accordionContent = button.nextElementSibling;

        button.classList.toggle('accordion__button--active');

        // if (button.classList.contains('accordion__button--active')){
        //    accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        // } else {
        //    accordionContent.style.maxHeight = 0;
        //}
    });
});


// Testimonial slider
const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

nextButton.addEventListener("click", (event) => {
    const slideWidth = slide.clientWidth;
      slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
const slideWidth = slide.clientWidth;
slidesContainer.scrollLeft -= slideWidth;
});
