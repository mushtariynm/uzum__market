function ProductCard(item) {
   
    
const productCard = document.createElement('div');    
const imageContainer = document.createElement('div');
const img = document.createElement('img');
const productDetails = document.createElement('div');
const title = document.createElement('h2');
const priceContainer = document.createElement('div');
const oldPrice = document.createElement('p');
const newPrice = document.createElement('p');
productCard.className = 'product-card'; 
imageContainer.className = 'image-container';
productDetails.className = 'product-details';
priceContainer.className = 'price';
oldPrice.className = 'old-price';
newPrice.className = 'new-price';

img.src = item.media[0];


title.textContent = item.description;
oldPrice.textContent = item.price;
if (item.salePercentage) {
    newPrice.textContent = `${
        item.price - (item.price * item.salePercentage) / 100
    } сум`;
}

imageContainer.append(img)
priceContainer.append(oldPrice, newPrice)
productDetails.append(title, priceContainer)
productCard.append(imageContainer, productDetails)


// productCard.onclick = () => {
//     //  localStorage.setItem('card', item.id)
//      location.href = '/pages/producrCards/'
//     const ids = data.goods.map(item => item.id); // Предполагается, что данные находятся в goods
//     console.log(ids);
    
//     localStorage.setItem('goodsIds', JSON.stringify(ids));
// }


return productCard



}



function ProductPage(item){

}

export{ProductCard}