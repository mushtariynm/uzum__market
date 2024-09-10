import { footer } from "../../components/footer";
import { header } from "../../components/header";
import { ModalAccount } from "../../components/modal";
import { getData } from "../../libs/http";
import { userName } from "../../libs/utils";

header()
footer()
ModalAccount()


let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
const favBox = document.querySelector('.favorites')

if (favorites.length == 0) {
    favBox.classList.add('show');
    favBox.classList.remove('hide');
} else {
    favBox.classList.remove('show');
    favBox.classList.add('hide');
    FavCards(favorites)
}



function FavCards() {
    const favContainer = document.querySelector('.fav-products')
    favContainer.innerHTML = ''
    favorites.forEach((item) => {

    const productCard = document.createElement('div');    
    const imageContainer = document.createElement('div');
    const img = document.createElement('img');
    const likeButton = document.createElement('div');
    const svgLikeIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const pathToFav = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    
    const productDetails = document.createElement('div');
    const productInfo = document.createElement('div');
    const title = document.createElement('span');
    const rating = document.createElement('span');
    const priceContainer = document.createElement('div');
    const oldPrice = document.createElement('span');
    const newPrice = document.createElement('span');
    const addCartButton = document.createElement('button');
    const cartImg = document.createElement('img');
    
    
    productCard.className = 'product-card'; 
    productInfo.className = 'product-info'
    rating.className = 'rating';
    imageContainer.className = 'image-container';
    img.className = 'card-img'
    likeButton.className = 'product-card-like';
    productDetails.className = 'product-details';
    priceContainer.className = 'price';
    oldPrice.className = 'old-price';
    newPrice.className = 'new-price';
    addCartButton.className = 'add-cart';
    
    img.src = item.media[0];
    svgLikeIcon.setAttribute('viewBox', '0 0 24 24');
    svgLikeIcon.setAttribute('fill', 'none');
    svgLikeIcon.setAttribute('stroke', 'currentColor');
    svgLikeIcon.setAttribute('stroke-width', '2');
    svgLikeIcon.setAttribute('stroke-linecap', 'round');
    svgLikeIcon.setAttribute('stroke-linejoin', 'round');
    pathToFav.setAttribute('d', 'M12 21l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.18L12 21z');
    cartImg.src = '/backet.png';
    
    title.textContent = item.title.length > 40 ? item.title.slice(0, 40) + "..." : item.title;;
    rating.textContent = `⭐ ${item.rating}`;
    oldPrice.textContent = item.price;
    
    
if (item.salePercentage) {
    oldPrice.style.textDecoration =   'line-through'
    oldPrice.style.color = 'gray'
    newPrice.textContent = `${
        Math.floor(item.price - (item.price * item.salePercentage) / 100)
    } сум`;
    
} else {
    newPrice.inert = item.price
}
    svgLikeIcon.append(pathToFav)
    likeButton.append(svgLikeIcon);
    imageContainer.append(likeButton, img)
    priceContainer.append(oldPrice, newPrice)
    productInfo.append(title, rating)
    productDetails.append(productInfo, priceContainer)
    addCartButton.appendChild(cartImg);
    productCard.append(imageContainer, productDetails, addCartButton)
    favContainer.append(productCard)
    
    productCard.onclick = () => {
        localStorage.setItem('type', item.type)
         localStorage.setItem('cardId', item.id)
         location.href = '/pages/productCards/'
    }
    
    let liked = JSON.parse(localStorage.getItem('favorites')) || [];
if (liked.some(like => like.id === item.id)) {
    likeButton.classList.add('active'); 
}

        likeButton.classList.add('active');  

        likeButton.addEventListener('click', function(e) {
            e.stopPropagation();
            this.classList.toggle('active');

            if (!this.classList.contains('active')) {
                favorites = favorites.filter(favItem => favItem.id !== item.id);
                localStorage.setItem('favorites', JSON.stringify(favorites));
                productCard.remove(); 
            }
        });
        let basket = JSON.parse(localStorage.getItem('basket')) || [];

        addCartButton.addEventListener('click', function(e) {
            e.stopPropagation();

            let existingItem = basket.find(basketItem => basketItem.id === item.id);

            if (existingItem) {
                existingItem.count = (existingItem.count || 1) + 1;
            } else {
                const newItem = { ...item, count: 1 };
                basket.push(newItem);
            }

            localStorage.setItem('basket', JSON.stringify(basket));
        });
    })
    }


let token = localStorage.getItem("token")
getData(`accounts?token=${token}`)
.then(res => {
  userName(res.data[0])
})
.catch(error => console.log(error))