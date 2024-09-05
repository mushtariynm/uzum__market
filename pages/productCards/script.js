import { all } from "axios";
import { footer } from "../../components/footer";
import { header } from "../../components/header";
import { getData } from "../../libs/http";
import { reload, userName } from "../../libs/utils";
import { createProductDisplay, ProductCard } from "../../components/productCard";
import { ModalAccount } from "../../components/modal";

header()
footer()

let cardId = localStorage.getItem('cardId')
let productCard = getData(`goods?id=${cardId}`)
let similarCards = getData('goods')

  // Promise.all({productCard, similarCards})
  // .then(({productCard, similarCards}) => {

  //   reload(productCard.data, 'product-page', createProductDisplay)
    
  //   reload(similarCards.data, 'similar-products', ProductCard)
  // })
  // .catch(error => console.error(error)
  // )
getData(`goods?id=${cardId}`)
.then( res => {
  reload( res.data, 'product-page', createProductDisplay)
  reload(res.data, 'similar-products', ProductCard)

})
.catch(error => console.error(error)
)

let type = localStorage.getItem('type')
getData(`goods?type=${type}`)
.then( res => {
  reload(res.data.slice(0,5), 'similar-products', ProductCard)

})
.catch(error => console.error(error)
)

let token = localStorage.getItem("token")
getData(`accounts?token=${token}`)
.then(res => {
  userName(res.data[0])
})
.catch(error => console.log(error))



