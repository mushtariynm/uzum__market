function ProductCard(item) {
   
    
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


let liked = JSON.parse(localStorage.getItem('favorites')) || [];

if (liked.some(like => like.id === item.id)) {
    likeButton.classList.add('fill'); 
}

likeButton.addEventListener('click', function() {
    this.classList.toggle('fill');

    if (this.classList.contains('fill')) {
        if (!liked.some(like => like.id === item.id)) {
            liked.push(item);
        }
        localStorage.setItem('favorites', JSON.stringify(liked));
    } else {
        liked = liked.filter(like => like.id !== item.id);
        localStorage.setItem('favorites', JSON.stringify(liked));
    }
});

productCard.onclick = () => {
    localStorage.setItem('type', item.type)
     localStorage.setItem('cardId', item.id)
     location.href = '/pages/productCards/'
}


let basket = JSON.parse(localStorage.getItem('basket')) || [];
        addCartButton.onclick = () => {
            basket.push(item);
            localStorage.setItem('basket', JSON.stringify(basket));
        };

return productCard

}


function createProductDisplay(item) {

const productBox = document.createElement('div');
const productDisplay = document.createElement('div');
const productMain = document.createElement('div');
const productMainImage = document.createElement('div');
const mainImage = document.createElement('img');
const productInfo = document.createElement('div');
const productRating = document.createElement('div');
const ratingText = document.createElement('p');
const productTitle = document.createElement('h1');
const productPrice = document.createElement('div');
const currentPrice = document.createElement('span');
const oldPrice = document.createElement('span');
const numberInput = document.createElement('div');
const minusButton = document.createElement('button');
const quantityInput = document.createElement('input');
const plusButton = document.createElement('button');
const productButtons = document.createElement('div');
const addToCartButton = document.createElement('button');
const buyNowButton = document.createElement('button');
const productDetails = document.createElement('div');
const deliveryText = document.createElement('p');
const deliverySubText = document.createElement('p');
const paymentText = document.createElement('p');
const paymentSubText = document.createElement('p');
const paymentImage = document.createElement('div');
const cardsImage = document.createElement('img');
const returnText = document.createElement('p');
const returnSubText = document.createElement('p');
const cardDesc = document.createElement('div');
const descTitle = document.createElement('p');
const desc = document.createElement('div');


productBox.className = 'product-box';
productDisplay.className = 'product-display';
productMain.className = 'product-main';
productMainImage.className = 'product-main-image';
productInfo.className = 'product-info';
productRating.className = 'product-rating';
ratingText.className = 'product-rating';
productPrice.className = 'product-price';
currentPrice.className = 'current-price';
oldPrice.className = 'old-price';
numberInput.className = 'number-input';
minusButton.className = 'minus';
quantityInput.type = 'number';
quantityInput.className = 'quantity';
plusButton.className = 'plus';
productButtons.className = 'product-buttons';
addToCartButton.className = 'add-to-cart';
buyNowButton.className = 'buy-now';
productDetails.className = 'product-details';
deliveryText.className = 'box-text';
deliverySubText.className = 'box-text-2';
paymentText.className = 'box-text';
paymentSubText.className = 'box-text-2';
returnText.className = 'box-text';
returnSubText.className = 'box-text-2';
desc.className = 'desc';
cardDesc.className = 'card-desc';



mainImage.src = item.media[0];
ratingText.textContent = `⭐ ${item.rating}`;
productTitle.textContent = item.title;
if (item.salePercentage) {
    currentPrice.textContent = `${
       Math.floor(item.price - (item.price * item.salePercentage) / 100)
    } сум`;

} else if(item.salePercentage == 0){
    currentPrice.textContent = `${item.price} сум`
}
oldPrice.textContent = item.price;
minusButton.textContent = '-';
quantityInput.value = '1';
plusButton.textContent = '+';
addToCartButton.textContent = 'Добавить в корзину';
buyNowButton.textContent = 'Купить в 1 клик';
deliveryText.textContent = 'Быстрая доставка от 1 дня';
deliverySubText.textContent = 'В пункты выдачи Uzum или курьером';
paymentText.textContent = 'Безопасная оплата удобным способом';
paymentSubText.textContent = 'Оплачивайте картой, наличными или в рассрочку';
cardsImage.src = '/cards.png';
returnText.textContent = 'Простой и быстрый возврат';
returnSubText.textContent = 'Примем товары в течение 10 дней и сразу вернём деньги';
descTitle.textContent = 'Описание товара';
desc.textContent = item.description;



productBox.appendChild(productDisplay);
productDisplay.appendChild(productMain);
productMain.appendChild(productMainImage);
productMainImage.appendChild(mainImage);
productMain.appendChild(productInfo);
productInfo.appendChild(productRating);
productRating.appendChild(ratingText);
productInfo.appendChild(productTitle);
productInfo.appendChild(productPrice);
productPrice.appendChild(currentPrice);
productPrice.appendChild(oldPrice);
productInfo.appendChild(numberInput);
numberInput.appendChild(minusButton);
numberInput.appendChild(quantityInput);
numberInput.appendChild(plusButton);
productInfo.appendChild(productButtons);
productButtons.appendChild(addToCartButton);
productButtons.appendChild(buyNowButton);
productInfo.appendChild(productDetails);
productDetails.appendChild(deliveryText);
productDetails.appendChild(deliverySubText);
productDetails.appendChild(document.createElement('hr'));
productDetails.appendChild(paymentText);
productDetails.appendChild(paymentSubText);
paymentImage.appendChild(cardsImage);
productDetails.appendChild(paymentImage);
productDetails.appendChild(document.createElement('hr'));
productDetails.appendChild(returnText);
productDetails.appendChild(returnSubText);
productBox.appendChild(cardDesc);
cardDesc.appendChild(descTitle);
cardDesc.appendChild(desc);

document.body.appendChild(productBox);
plusButton.onclick = () => {
    item.count = (item.count || 1) + 1; 
    quantityInput.value = item.count;
    currentPrice.textContent = `${item.price * item.count} сум`; 
    localStorage.setItem('backet', JSON.stringify(basket)); 
   
    // updateCartQuantity()
};

minusButton.onclick = () => {
    if (item.count > 1) {
        item.count -= 1; 
        quantityInput.value = item.count;
        currentPrice.textContent = `${item.price * item.count} сум`; 
    } else {
        basket.splice(backet.indexOf(item), 1); 
        itemsInBacket(); 
    }
    localStorage.setItem('backet', JSON.stringify(basket)); 
}; 

let basket = JSON.parse(localStorage.getItem('basket')) || [];
        addToCartButton.onclick = () => {
            basket.push(item);
            localStorage.setItem('basket', JSON.stringify(basket));
        };

return productBox
}



export{ProductCard, createProductDisplay}