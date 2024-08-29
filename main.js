import { footer } from "./components/footer";
import { header } from "./components/header";
import { ModalAccount, ModalCatalog } from "./components/modal";
import { ProductCard } from "./components/productCard";
// import { Swiper } from "./components/swiper";
import { getData, postData } from "./libs/http";
import { generateToken, reload, validation } from "./libs/utils";

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
    delay: 2500,
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
      console.log(categorizedGoods);

    reload(categorizedGoods.furniture.slice(0,5), 'furniture', ProductCard)  
    reload(categorizedGoods.audio.slice(0,5), 'audio', ProductCard)  
    reload(categorizedGoods.TV.slice(0,5), 'TV', ProductCard)  
    reload(categorizedGoods.kitchen.slice(0,5), 'kitchen', ProductCard)  
    reload(categorizedGoods.PC.slice(5,10), 'PC', ProductCard)  
    
  })
  .catch(error => console.error(error))

  

// let type = localStorage.getItem('type')
// getData(`goods?type=${type}`)
// .then(res => {
 
//   if(type == productsBox.getAttribute('name')) {
//     reload(res.data.slice(0,5), 'products-box', ProductCard)
//   }
// })
// .catch(error => console.error(error))





// const form = document.forms[0]

// form.onsubmit = (e) => {
//     e.preventDefault()
//     let user = {}
//     let fn = new FormData(form)
//     let token = generateToken()
//     fn.forEach((value, key) => {
//         user[key] = value
//     })
    

//     let phone = fn.get('phone')
    
   
// getData(`accounts?phone=${phone}`)
// .then(res => {
//     console.log(res.data);
    
//         if(validation()){
           
//             postData('accounts', {token, ...user})
//                 .then((res) => {
//                     localStorage.setItem("token", res.data.token)
//                     localStorage.setItem("userId", res.data.id)
//                     window.location.replace('/')
//                 })
//                 .catch((error) => console.log(error))
//         }
    
// })
// .catch(error => console.log(error))
// }

