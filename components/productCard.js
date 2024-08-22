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
     localStorage.setItem('cardId', item.id)
     location.href = '/pages/productCards/'
}


// let furnitureArr = data.filter((item) => item.type == 'furniture')
// let PCArr = data.filter((item) => item.type == 'PC')
// let audioArr = data.filter((item) => item.type == 'audio')
// let TVArr = data.filter((item) => item.type == 'TV')
// let kitchenArr = data.filter((item) => item.type == 'kitchen')


  

return productCard



}



function ProductPage(item){

}

export{ProductCard}