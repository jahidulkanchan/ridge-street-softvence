import "swiper/css";
import "swiper/css/navigation";

import Swiper from "swiper";
import { Navigation } from "swiper/modules";

new Swiper(".swiper", {
  modules: [Navigation],
  loop: true,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});
