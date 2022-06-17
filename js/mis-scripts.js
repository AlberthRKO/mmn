$(function () {
  /* ------------------------------------
  *1. Configuración de RdNavbar 
  -------------------------------------*/

  $(document).ready(function () {
    $("#example").DataTable();
  });

  rdNav = $(".rd-navbar");

  rdNav.RDNavbar({
    stickUpClone: false,
    stickUpOffset: 47,

    responsive: {
      0: {
        layout: "rd-navbar-fixed",
      },
      992: {
        layout: "rd-navbar-static",
      },
      1200: {
        layout: "rd-navbar-static",
      },
    },
  });

  // iniciando el swiper instanciando

  var swiper = new Swiper("#animacion", {
    // parametros para los botones de navegacion
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
    // botones de pagination
    pagination: {
      el: ".swiper-pagination",
      type: "bullets" /* tipo de paginacion */,
      clickable: true,
    },
    speed: 600,
    effect: "fade",
    grabCursor: true /* el cursor toma forma de manito */,

    // animacion de forma automatica
    autoplay: {
      delay: 3000,
    },

    // eventos para la opcion del teclado
    keyboard: {
      enabled: true,
      onlyInViewport: true /* para q cuando funcione solo cuando se vea el enlace */,
    },

    on: {
      slideChangeTransitionStart: function () {
        $(".animado").hide(0);
        $(".animado").removeClass("aos-init").removeClass("aos-animate");
      },
      slideChangeTransitionEnd: function () {
        $(".animado").show(0);
        AOS.init();
      },
    },
  });

  AOS.init();
});
