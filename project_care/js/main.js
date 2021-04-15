 $(function () {

   // scroll ....................................................
   $("a[href^='#']").click(function () {
     var _href = $(this).attr("href");
     $("html, body").animate({
       scrollTop: $(_href).offset().top + "px"
     }, {
       duration: 1200,
       easing: "swing"
     });
     return false;
   });

   // burger menu.................................................
   $('.header__burger').click(function (event) {
     $('.header__burger,.header__nav').toggleClass('active');
     $('.body').toggleClass('lock'); // убрать прокрутку контента под выпавшем меню
   });

   //  main modal.................................................
   $('.open-modal').click(function () {
     $('.modal-main').fadeIn(400);
   });
   $('.modal-main__close').click(function () {
     $('.modal-main').fadeOut(400);
   });

   // main slider ................................................
   $('.main-slider').slick({
     dots: true,
     infinite: true,
     speed: 2000,
     fade: true,
     cssEase: 'linear',

     autoplay: true,
     autoplaySpeed: 8000,
     pauseOnFocuse: false,
     pauseOnHover: false,
     pauseOnDotsHover: true,
   });

   /*------------------------ weDo sectio ----------------------*/

   //  top weDo slider ...........................................
   $('.whatWeDo-section__slider').slick({
     dots: false,
     infinite: true,
     fade: true,
     speed: 1000,
     slidesToShow: 1,
     slidesToScroll: 1,
     cssEase: 'linear',
   });


   /*---------------------- ourWorks section -------------------*/
   //  ourWorks main slider ............................................
   $('.ourWorks-main-slider').slick({
     slidesToShow: 1,
     slidesToScroll: 1,
     arrows: false,
     swipe: false,
     dots: false,
     infinite: true,
     speed: 1000,
     fade: true,
     cssEase: 'linear',
     asNavFor: '.ourWorks-verticalSlider',
   });


   // ourWorks slider ............................................
   $('.ourWorks-second-slider').slick({
     dots: true,
     infinite: true,
     speed: 1000,
     fade: true,
     cssEase: 'linear',
     responsive: [{
       breakpoint: 1000,
       settings: {
         arrows: false,
       }
     }, ]

   });

   // vertical slider ............................................
   $('.ourWorks-verticalSlider').slick({
     dots: false,
     infinite: true,
     speed: 800,
     cssEase: 'ease',
     slidesToShow: 3,
     centerMode: true,
     focusOnSelect: true,
     asNavFor: '.ourWorks-main-slider',
     responsive: [{
         breakpoint: 1001,
         settings: {
           arrows: false,
           centerPadding: '60px',
           centerMode: true,
         }
       },
       {
         breakpoint: 760,
         settings: {
           arrows: false,
           centerPadding: '80px',
           centerMode: true,
           slidesToShow: 2,
         }
       },
       {
         breakpoint: 550,
         settings: {
           arrows: false,
           centerPadding: '40px',
           centerMode: true,
           slidesToShow: 2,
         }
       },
       {
         breakpoint: 520,
         settings: {
           arrows: false,
           centerPadding: '100px',
           centerMode: true,
           slidesToShow: 1,
         }
       },
       {
         breakpoint: 440,
         settings: {
           arrows: false,
           centerPadding: '80px',
           centerMode: true,
           slidesToShow: 1,
         }
       },
       {
         breakpoint: 360,
         settings: {
           arrows: false,
           centerPadding: '60px',
           centerMode: true,
           slidesToShow: 1,
           vertical: false,
           verticalSwiping: false,
         }
       },
       {
         breakpoint: 300,
         settings: {
           arrows: false,
           centerPadding: '40px',
           centerMode: true,
           slidesToShow: 1,
           vertical: false,
           verticalSwiping: false,
         }
       },
     ]
   });


   // listing open ..............................................
   $('.ourWorks-section__listing-open').click(function (event) {
     $('.ourWorks-section__listing-open,.ourWorks-section__listing-wrap').toggleClass('active');
   });



   /*------------------- price & question section ---------------*/

   //  price ........................
   //  price arrows 
   $('.price-section__left-item').click(function (event) {
     $('.price-section__left-arrow').addClass('_active').siblings().removeClass('_active')
       .closest('.price-section__left-item').find('.price-section__left-arrow').removeClass('_active').eq($(this).index()).addClass('_active');
   });

   //  price tabs
   $('.price-section__right-title').not(':first').hide();
   $('.price-section__right-item').not(':first').hide();
   $('.price-section__left .price-section__left-item').click(function () {
     $('.price-section__left .price-section__left-item').removeClass('_active').eq($(this).index());
     $('.price-section__right-title').hide().eq($(this).index()).fadeIn(300);
     $('.price-section__right-item').hide().eq($(this).index()).fadeIn(300);
   }).eq(0).addClass('_active');

   // question .......................
   //  question arrows 
   $('.question-section__right-item').click(function () {
     $('.question-section__right-arrow').addClass('_active').siblings().removeClass('_active').closest('.question-section__right-item').find('.question-section__right-arrow').removeClass('_active').eq($(this).index()).addClass('_active');
   });

   // quest titles, text 
   $('.question-section__left-title').not(':first').hide();
   $('.question-section__left-text').not(':first').hide();
   $('.question-section__right .question-section__right-item').click(function () {
     $('.question-section__right .question-section__right-item').removeClass('_active').eq($(this).index());
     $('.question-section__left-title').hide().eq($(this).index()).fadeIn(300);
     $('.question-section__left-text').hide().eq($(this).index()).fadeIn(300);
   }).eq(0).addClass('_active');

   // comment slider .............................................
   $('.comment-slider').slick({
     adaptiveHeight: true,
     dots: false,
     infinite: false,
     speed: 800,
     slidesToShow: 2,
     slidesToScroll: 1,
     cssEase: 'linear',
     responsive: [{
       breakpoint: 1000,
       settings: {
         slidesToShow: 1,
         dots: true,
         arrows: false,
       }
     }, ]
   });
 });