function ProductCard(item) {
   
    
const productCard = document.createElement('div');    
const imageContainer = document.createElement('div');
const img = document.createElement('img');
const likeButton = document.createElement('button');
const likeImg = document.createElement('img');

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
likeImg.src = '/heart.png';
cartImg.src = '/backet.png';

title.textContent = item.title.length > 40 ? item.title.slice(0, 40) + "..." : item.title;;
rating.textContent = `⭐ ${item.rating}`;
oldPrice.textContent = item.price;


if (item.salePercentage) {
    newPrice.textContent = `${
        Math.floor(item.price - (item.price * item.salePercentage) / 100)
    } сум`;
    
} else if(item.salePercentage == 0){
    newPrice.textContent = `${item.price} сум`
}
likeButton.append(likeImg);
imageContainer.append(likeButton, img)
priceContainer.append(oldPrice, newPrice)
productInfo.append(title, rating)
productDetails.append(productInfo, priceContainer)
addCartButton.appendChild(cartImg);
productCard.append(imageContainer, productDetails, addCartButton)


productCard.onclick = () => {
    localStorage.setItem('type', item.type)
     localStorage.setItem('cardId', item.id)
     location.href = '/pages/productCards/'
}

addCartButton.onclick = () => {

 let cart = JSON.parse(localStorage.getItem("cart"))
 if(!cart.includes(item)){
   cart.push(item)
 } else {
    cart.splice(cart.indexOf(item), 1)
 }

ProductsInBacket()

}



  

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

function ProductsInBacket(item) {
    const cartContainer = document.createElement("div");
  cartContainer.className = "cart-container";

  // Cart items container
  const cartItems = document.createElement("div");
  cartItems.className = "cart-items";

  // Cart item
  const cartItem = document.createElement("div");
  cartItem.className = "cart-item";

  const productImg = document.createElement("img");
  productImg.src = item.media[0]; 
  productImg.alt = "Product Image";

  // Item details
  const itemDetails = document.createElement("div");
  itemDetails.className = "item-details";

  const itemInfo = document.createElement("div");
  itemInfo.className = "item-info";

  const itemDescription = document.createElement("p");
  itemDescription.textContent = item.title;

  const itemPrice = document.createElement("span");
  itemPrice.className = "item-price";
  itemPrice.textContent = `${
        Math.floor(item.price - (item.price * item.salePercentage) / 100)
    } сум`;

  // Quantity controls
  const quantityControls = document.createElement("div");
  quantityControls.className = "quantity-controls";

  const minusButton = document.createElement("button");
  minusButton.textContent = "-";

  const quantityDisplay = document.createElement("span");
  quantityDisplay.textContent = "1";

  const plusButton = document.createElement("button");
  plusButton.textContent = "+";

  quantityControls.appendChild(minusButton);
  quantityControls.appendChild(quantityDisplay);
  quantityControls.appendChild(plusButton);

  itemInfo.appendChild(itemDescription);
  itemInfo.appendChild(itemPrice);
  itemInfo.appendChild(quantityControls);

  // Delete button
  const deleteBtn = document.createElement("div");
  deleteBtn.className = "delete-btn";

  const deleteImg = document.createElement("img");
  deleteImg.src = "/delete.png"; 

  const deleteText = document.createElement("span");
  deleteText.textContent = "Удалить";

  deleteBtn.appendChild(deleteImg);
  deleteBtn.appendChild(deleteText);

  itemDetails.appendChild(itemInfo);
  itemDetails.appendChild(deleteBtn);

  cartItem.appendChild(productImg);
  cartItem.appendChild(itemDetails);

  cartItems.appendChild(cartItem);

  // Cart summary
  const cartSummary = document.createElement("div");
  cartSummary.className = "cart-summary";

  const totalAmount = document.createElement("h2");
  totalAmount.textContent = "1 650 000 сум";

  const totalItems = document.createElement("p");
  totalItems.innerHTML = 'Итого товаров: <span>14</span>';

  const totalDiscount = document.createElement("p");
  totalDiscount.innerHTML = 'Итого скидки: <span>244 000 сум</span>';

  const checkoutButton = document.createElement("button");
  checkoutButton.className = "checkout-button";
  checkoutButton.textContent = "Оформить";

  cartSummary.appendChild(totalAmount);
  cartSummary.appendChild(totalItems);
  cartSummary.appendChild(totalDiscount);
  cartSummary.appendChild(checkoutButton);

  cartContainer.appendChild(cartItems);
  cartContainer.appendChild(cartSummary);

  document.body.appendChild(cartContainer);
  return cartContainer
}


export{ProductCard, createProductDisplay, ProductsInBacket}