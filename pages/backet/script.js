import { footer } from "../../components/footer";
import { header } from "../../components/header";
import { ModalAccount } from "../../components/modal";
import { ProductsInBacket } from "../../components/productCard";
header()
footer()
ModalAccount()



let backet = JSON.parse(localStorage.getItem('baccfet')) || [];
const bag = document.querySelector('.backet')

if (backet.length === 0) {
    bag.classList.add('show');
    bag.classList.remove('hide');
} else {
    bag.classList.remove('show');
    bag.classList.add('hide');
    ProductsInBacket(backet); 
}


