import { footer } from "./components/footer";
import { header } from "./components/header";
import { ModalAccount } from "./components/modal";
import { ProductCard } from "./components/productCard";
import { Swiper } from "./components/swiper";
import { getData, postData } from "./libs/http";
import { generateToken, reload, validation } from "./libs/utils";

header()
footer()
ModalAccount()
Swiper()





  // let productCard = getData('goods')
  // console.log(productCard);
  
  
  // Promise.all({productCard})
  // .then(({productCard}) => {
  //   reload(productCard.data.slice(0,5), 'products-box', ProductCard)

  // } )
  // .catch(error => console.error(error)
  // )

  getData('goods')
  .then(res => {
    reload((res.data), 'products-box', ProductCard);
    console.log(res);
    
  })
  .catch(error => console.error(error))







const form = document.forms[0]

form.onsubmit = (e) => {
    e.preventDefault()
    let user = {}
    let fn = new FormData(form)
    let token = generateToken()
    fn.forEach((value, key) => {
        user[key] = value
    })
    

    let phone = fn.get('phone')
    
   
getData(`accounts?phone=${phone}`)
.then(res => {
    console.log(res.data);
    
        if(validation()){
           
            postData('accounts', {token, ...user})
                .then((res) => {
                    localStorage.setItem("token", res.data.token)
                    localStorage.setItem("userId", res.data.id)
                    window.location.replace('/')
                })
                .catch((error) => console.log(error))
        }
    
})
.catch(error => console.log(error))
}

