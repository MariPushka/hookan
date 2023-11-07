 $(document).ready(function(){
  
  $("#burger").click(function (){
    let mobmenu = $("#mob-menu");
    mobmenu.show();
    let burger = $(".mob-burger");
    burger.hide();
    $(".menu__close").click(function (){
        mobmenu.hide();
        burger.show();
    })
}) 
  
  $('#btn-one').click(function(){
    $('.option')[0].scrollIntoView({behavior: "smooth"});
});

$('#btn-two').click(function(){
  $('.action')[0].scrollIntoView({behavior: "smooth"});
});

$('#mainSlider').slick({
 arrows:true,
    dots:true,
    slidesToShow:1,
    slidesToScroll:1,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 800,
        settings:{
          arrows:false,
          dots:true
        }
       
    }

   ]

});


$('.slider-reviews').slick({
  dots: true,
  arrows:true,
  speed:500,
  initialSlide:0,
  slidesToShow: 2,
  slidesToScroll: 2,
  cssEase:"linear",
  responsive: [
      {
        breakpoint: 1024,
        settings: {
            dots:true,
            arrows:false
        }
    },
    {
      breakpoint: 800,
      settings: {
        dots:true,
        arrows:false,
          slidesToShow: 1,
          slidesToScroll: 1
      }
  }
  ]
});


  let loader=$('.loader');

  let names=$("#names");
let phone=$("#phone");
let time=$("#time");

let submit = $("#submit")

let hasError=false;

submit.click(function (){
  $('.error-input').hide();
  if (!names.val()){
    names.next().show();
    hasError = true;
  }
  if (!phone.val()) {
    phone.next().show();
    hasError = true;
  }
  if (!time.val()) {
    time.next().show();
    hasError = true;
  }

  if (!hasError) {
    loader.css('display', 'flex');
    $.ajax({
      method: "POST",
      url: "https://testologia.site/checkout",
      data: {name: names.val(), phone: phone.val(), time: time.val()}

    })

        .done(function (msg) {
          loader.hide();
          if (msg.success) {
            $("form")[0].reset();
            $(".action-header").fadeOut(297).delay(4000).fadeIn(297);
  $(".action-text").fadeOut(297).delay(4000).fadeIn(297);
  $('.action-form').fadeOut(297).delay(4000).fadeIn(297);
            //$(".container-action").fadeOut(297).delay(4000).fadeIn(297);
            $(".span-two").append("<span>Спасибо за Ваш заказ. Мы скоро свяжемся с Вами!</span>").fadeIn(297).delay(4000);
           $("#submit").attr("disabled","disabled"); 
            //$("span").append("<span>Спасибо за Ваш заказ. Мы скоро свяжемся с Вами!</span>").delay(4000).fadeOut(297);
            //$('.spans').append('<span>Спасибо, мы свяжемся с вами в ближайшее время!</span>');
            //popap.delay(1000).fadeOut(300);
            // $(".span-two").append("<span>Спасибо за Ваш заказ. Мы скоро свяжемся с Вами!</span>").delay(4000).fadeOut(297);
          } else {
            alert("Возникла ошибка при оформлении заказа! Повторите заказ!");
            
          }
        });

  }
  
})



});