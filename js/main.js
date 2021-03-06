// select element function



$(document).ready(function () {
   $('.menu-toggle').on('click', function () {
      $(this).toggleClass('open');
     
      $('body').toggleClass('open');
      
   });

   AOS.init({
      easing: 'ease',
      duration: 2000,
      once: true
   })
   
});


// Scroll reveal




// Scroll reveal
window.sr = ScrollReveal();

sr.reveal('.animate-left', {
   origin: 'left',
   duration: 1000, 
   distance: '25rem',
   deley: 1000
});


sr.reveal('.animate-right', {
   origin: 'right',
   duration: 1000, 
   distance: '25rem',
   deley: 600
});
sr.reveal('.animte-top', {
   origin: 'top',
   duration: 1000, 
   distance: '25rem',
   deley: 600
});

sr.reveal('.animate-bottom', {
   origin: 'bottom',
   duration: 1000, 
   distance: '25rem',
   deley: 600
});
// Grenn Shock


TweenMax.from(".bottom-text", 3, {
   delay: 0.9,
   opacity: 0,
   y: 20,
   ease: Expo.easeInOut
});


TweenMax.from(".copyright1", 3, {
   delay: 1,
   opacity: 0,
   y: 20,
   ease: Expo.easeInOut
});
// meni
TweenMax.from(".menu-toggle", 3, {
   delay: 1.2,
   opacity: 0,
   x: 30,
   ease: Expo.easeInOut
});
TweenMax.from(".logo", 3, {
   delay: 0.8,
   opacity: 0,
   y: -30,
   ease: Expo.easeInOut
});


TweenMax.from(".work-end-1", 3, {
   delay: 0.8,
   opacity: 0,
   y: 30,
   ease: Expo.easeInOut
});



TweenMax.from(".left0-anime", 3, {
   delay: 0.9,
   opacity: 0,
   x: 30,
   ease: Expo.easeInOut
});

TweenMax.from(".right-anime", 3, {
   delay: 1.1,
   opacity: 0,
   y: 30,
   ease: Expo.easeInOut
});
//about h1 para button social
TweenMax.from(".left-o h1", 3, {
   delay: 1.6,
   opacity: 0,
   y: 30,
   ease: Expo.easeInOut
});

TweenMax.from(".left-o h6", 3, {
   delay: 2.6,
   opacity: 0,
   y: 1,
   ease: Expo.easeInOut
});
TweenMax.from(".hr", 3, {
   delay: 1.8,
   opacity: 0,
   y: 1,
   ease: Expo.easeInOut
});


TweenMax.from(".left-p", 3, {
   delay: 2.2,
   opacity: 0,
   y: 30,
   ease: Expo.easeInOut
});


TweenMax.from(".left-l", 3, {
   delay: 2.3,
   opacity: 0,
   y: 30,
   ease: Expo.easeInOut
});

TweenMax.from(".left-q", 3, {
   delay: 2.3,
   opacity: 0,
   y: 30,
   ease: Expo.easeInOut
});








TweenMax.from(".buttons-desc", 3, {
   delay: 2.5,
   opacity: 0,
   y: 30,
   ease: Expo.easeInOut
});






TweenMax.staggerFrom(".media ul li ", 2, {
   delay: 3,
   opacity: 0,
   x: 20,
   ease: Power3.easeInOut
}, 0.1);


//home pic h1  parag button 

TweenMax.from(".letters-0", 3, {
   delay: 1.1,
   opacity: 0,
   y: -30,
   ease: Expo.easeInOut
});

TweenMax.from(".letters", 3, {
   delay: 1.5,
   opacity: 0,
   y: 20,
   ease: Expo.easeInOut
});


TweenMax.from(".p1", 3, {
   delay: 1.8,
   opacity: 0,
   y: 20,
   ease: Expo.easeInOut
});

TweenMax.from("#one", 3, {
   delay: 2.2,
   opacity: 0,
   y: 20,
   ease: Expo.easeInOut
});

TweenMax.from("#two", 3, {
   delay: 2.4,
   opacity: 0,
   y: 20,
   ease: Expo.easeInOut
});

TweenMax.from(".back-right", 3, {
   delay: 3.5,
   opacity: 0,
   x: -30,
   ease: Expo.easeInOut
});
TweenMax.from(".copyright", 3, {
   delay: 3.5,
   opacity: 0,
   x: 30,
   ease: Expo.easeInOut
});
//



TweenMax.from(".contact-title", 3, {
   delay: 0.9,
   opacity: 0,
   y: -30,
   ease: Expo.easeInOut
});


TweenMax.from(".detalis-area", 3, {
   delay: 0.9,
   opacity: 0,
   x: -30,
   ease: Expo.easeInOut
});
TweenMax.from(".msg-area", 3, {
   delay: 0.9,
   opacity: 0,
   x: 30,
   ease: Expo.easeInOut
});

TweenMax.from(".roga", 3, {
   delay: 3,
   opacity: 0,
   y: 20,
   ease: Expo.easeInOut
});

// home pictures

var t1 = new TimelineMax();

t1.from(".ringOne", 4, {
   delay: 0.3,
   opacity: 0,
   y: 40,
   ease: Expo.easeInOut
}).from(".ringTwo", 4, {
   delay: 0.8,
   opacity: 0,
   y: 40,
   ease: Expo.easeInOut
}, "-=5").to(".ringOne", 4, {
   delay: 0.3,
   x: 40,
   ease: Expo.easeInOut
}).to(".ringTwo", 4, {
   delay: 0.8,
   x: 40,
   ease: Expo.easeInOut
},"-=5");


// 



TweenMax.from(".lora-left", 3, {
   delay: 1.9,
   opacity: 0,
   x: 0,
   ease: Expo.easeIn
});
//  overly background
TweenMax.to(".first", 1.5,{
   delay: 0.3,
   top: "-100%",
   ease: Expo.easeInOut
});

TweenMax.to(".two", 1.5,{
   delay: 0.6,
   top: "-100%",
   ease: Expo.easeInOut
});

TweenMax.to(".three", 1.5,{
   delay: 0.9,
   top: "-100%",
   ease: Expo.easeInOut
});



document.querySelector('.main').style.display="none";
document.getElementById('load').classList.add('loader')

setTimeout(() =>{
   document.getElementById('load').classList.remove('loader')
document.querySelector('.main').style.display="block";


},
4000)






