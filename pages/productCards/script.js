import { all } from "axios";
import { footer } from "../../components/footer";
import { header } from "../../components/header";

header()
footer()


const swiperThumbs = new Swiper('.swiper-container-thumbs', {
  direction: 'vertical',
  spaceBetween: 10,
  slidesPerView: all,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});

var swiperMain = new Swiper('.swiper-container', {
  spaceBetween: 10,
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  thumbs: {
      swiper: swiperThumbs,
  },
});
