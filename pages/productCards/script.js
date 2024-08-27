import { all } from "axios";
import { footer } from "../../components/footer";
import { header } from "../../components/header";
import { getData } from "../../libs/http";
import { reload } from "../../libs/utils";
import { createProductDisplay } from "../../components/productCard";
import { ModalAccount } from "../../components/modal";

header()
footer()
ModalAccount()
// let cardId = localStorage.getItem('cardId')
// getData(`goods?id=${cardId}`)
// .then( res => {
//   reload( res.data, 'product-page', createProductDisplay)
// })
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



