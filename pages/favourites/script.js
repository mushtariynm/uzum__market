import { footer } from "../../components/footer";
import { header } from "../../components/header";
import { ModalAccount } from "../../components/modal";
import { ProductCard } from "../../components/productCard";

header()
footer()
ModalAccount()


let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
const favoriteIds = favorites.map(item => item.id);
const backet = document.querySelector('.favourites')

if (favorites.length === 0) {
    backet.classList.add('show');
    backet.classList.remove('hide');
} else {
    backet.classList.remove('show');
    backet.classList.add('hide');
    ProductCard(favorites); 
}