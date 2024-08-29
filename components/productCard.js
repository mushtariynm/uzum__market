function ProductCard(item) {
   
    
const productCard = document.createElement('div');    
const imageContainer = document.createElement('div');
const img = document.createElement('img');

const productDetails = document.createElement('div');
const productInfo = document.createElement('div');
const title = document.createElement('span');
const rating = document.createElement('span');
const priceContainer = document.createElement('div');
const oldPrice = document.createElement('span');
const newPrice = document.createElement('span');


productInfo.className = 'product-info'
rating.className = 'rating';
productCard.className = 'product-card'; 
imageContainer.className = 'image-container';
productDetails.className = 'product-details';
priceContainer.className = 'price';
oldPrice.className = 'old-price';
newPrice.className = 'new-price';

img.src = item.media[0];


title.textContent = item.title;
rating.textContent = `⭐ ${item.rating}`;
oldPrice.textContent = item.price;


if (item.salePercentage) {
    newPrice.textContent = `${
       Math.floor(item.price - (item.price * item.salePercentage) / 100)
    } сум`;

} else if(item.salePercentage == 0){
    newPrice.textContent = `${item.price} сум`
}

imageContainer.append(img)
priceContainer.append(oldPrice, newPrice)
productInfo.append(title, rating)
productDetails.append(productInfo, priceContainer)
productCard.append(imageContainer, productDetails)


productCard.onclick = () => {
    localStorage.setItem('type', item.type)
     localStorage.setItem('cardId', item.id)
     location.href = '/pages/productCards/'
}
localStorage.setItem('type', item.type)


// movieContainer.onclick = () => {
//     let movieName = document.querySelector('.movie__name')
//     movieName.textContent = item.title
//     localStorage.setItem('movieId', item.id);
//     localStorage.setItem('backdropPath', item.backdrop_path);
//     location.href = '/pages/movie/';
// };


  

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
 
return productBox
}


export{ProductCard, createProductDisplay}