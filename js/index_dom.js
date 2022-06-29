import scrollTopButton from "./boton_scroll.js";
import slider from "./carrusel.js";
import countdown from "./cuenta_regresiva.js";
import userDeviceInfo from "./deteccion_dispositivos.js";
import networkStatus from "./deteccion_red.js";
import webCam from "./deteccion_webcam.js";
import searchFilters from "./filtro_busquedas.js";
import getGeolocation from "./geolocalizacion.js";
import hamburgerMenu from "./menu_hamburguesa.js";
import speechReader from "./narrador.js";
import responsiveMedia from "./objeto_responsive.js";
import responsiveTester from "./prueba_responsive.js";
import { digitalClock, alarm } from "./reloj.js";
import scrollSpy from "./scroll_espia.js";
import draw from "./sorteo_digital.js";
import { moveBall, shortcuts } from "./teclado.js";
import darkTheme from "./tema_oscuro.js";
import contactFormValidations from "./validaciones_formulario.js";
import smartVideo from "./video_inteligente.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
  countdown("countdown", "Nov 29, 2022", "Feliz Cumpleaños Jere!!");
  scrollTopButton(".scroll-top-btn");
  responsiveMedia(
    "youtube",
    "(min-width:1024px)",
    `<a href="https://www.youtube.com/watch?v=cPcg-SBsOnY" target="_blank" rel="noopener noreferrer">Ver Video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/RooVX6eKmOA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  );
  responsiveMedia(
    "gmaps",
    "(min-width:1024px)",
    `<a href="https://goo.gl/maps/nyjR4sqjVyaVyREU9" target="_blank" rel="noopener noreferrer">Ver Mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28086.445260339708!2d-81.59891392508543!3d28.364724630593482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dd81a33dfde1fd%3A0x3438044622233fbb!2sDisney&#39;s%20Animal%20Kingdom!5e0!3m2!1ses!2sar!4v1654034718124!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  );
  responsiveTester("responsive-tester");
  userDeviceInfo("user-device");
  webCam("webcam");
  getGeolocation("geolocation");
  searchFilters(".card-filter", ".card");
  draw("#winner-btn", ".player");
  slider();
  scrollSpy();
  smartVideo();
  contactFormValidations();
});

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});

darkTheme(".dark-theme-btn", "dark-mode");
networkStatus();
speechReader();
