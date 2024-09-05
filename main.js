import { footer } from "./components/footer";
import { header } from "./components/header";
import { ModalAccount, ModalCatalog } from "./components/modal";
import { ProductCard } from "./components/productCard";
// import { Swiper } from "./components/swiper";
import { getData} from "./libs/http";
import { reload } from "./libs/utils";
import { updateCartQuantity } from "./pages/basket/script";

header()
footer()
ModalAccount()
ModalCatalog()
// Swiper()

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
    delay: 3500,
    disableOnInteraction: false,
    }
  
    
  });





//   let productCard = getData('goods')
//   console.log(productCard);
//   Promise.all({productCard})
//   .then(({productCard}) => {
//     reload(productCard.data.slice(0,5), 'products-box', ProductCard)

//   } )
//   .catch(error => console.error(error)
//   )

getData('goods')
.then(res => {

    const categorizedGoods = {
        furniture: res.data.filter(item => item.type === 'furniture'),
        audio: res.data.filter(item => item.type === 'audio'),
        TV: res.data.filter(item => item.type === 'TV'),
        kitchen: res.data.filter(item => item.type === 'kitchen'),
        PC: res.data.filter(item => item.type === 'PC')
      };
      
    reload(categorizedGoods.furniture.slice(0,5), 'furniture', ProductCard)  
    reload(categorizedGoods.audio.slice(0,5), 'audio', ProductCard)  
    reload(categorizedGoods.TV.slice(0,5), 'TV', ProductCard)  
    reload(categorizedGoods.kitchen.slice(0,5), 'kitchen', ProductCard)  
    reload(categorizedGoods.PC.slice(5,10), 'PC', ProductCard)  
    
  })
  .catch(error => console.error(error))


let token = localStorage.getItem("token")
getData(`accounts?token=${token}`)
.then(res => {
    userName(res.data[0])
})
.catch(error => console.log(error))


export function userName(user) {

let name = document.querySelector('.user-name')

name.textContent = user.name
}
  

// let type = localStorage.getItem('type')
// getData(`goods?type=${type}`)
// .then(res => {
 
//   if(type == productsBox.getAttribute('name')) {
//     reload(res.data.slice(0,5), 'products-box', ProductCard)
//   }
// })
// .catch(error => console.error(error))


