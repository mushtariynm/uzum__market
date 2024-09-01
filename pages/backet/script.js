import { footer } from "../../components/footer";
import { header } from "../../components/header";
import { ModalAccount } from "../../components/modal";
import { ProductCard } from "../../components/productCard";
import { getData } from "../../libs/http";
import { reload } from "../../libs/utils";

header()
footer()
ModalAccount()

let cardId = localStorage.getItem('cardId')
// let cart = JSON.parse(localStorage.getItem("cart"))
// let item = []

// getData(`goods?id=${cardId}`) 
// .then(res => {
//     item.push(cart)
//     reload(res.data, 'add-to-backet', ProductCard)
//     console.log(item);
    
// })
// .catch(error => console.error(error)
// )
let cart = [];
localStorage.setItem("cart", JSON.stringify(cart));
