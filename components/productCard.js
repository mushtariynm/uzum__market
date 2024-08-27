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


function createProductDisplay() {
    // Create main display container
    const productDisplay = document.createElement('div');
    productDisplay.id = 'product-display';
    document.body.appendChild(productDisplay);

    // Create the main image container
    const mainContainer = document.createElement('div');
    mainContainer.className = 'product-main';
    
    const mainImageDiv = document.createElement('div');
    mainImageDiv.className = 'product-main-image';
    
    const mainImage = document.createElement('img');
    mainImage.id = 'mainImage';
    mainImage.src = 'main_image_1.jpg'; // Default main image
    mainImage.alt = 'Main product image';
    
    mainImageDiv.appendChild(mainImage);
    mainContainer.appendChild(mainImageDiv);
    
    // Create the thumbnail swiper container
    const thumbsContainer = document.createElement('div');
    thumbsContainer.className = 'swiper-container-thumbs';
    
    const thumbsWrapper = document.createElement('div');
    thumbsWrapper.className = 'swiper-wrapper';
    
    const thumbnails = [
        'thumb1.png',
        'thumb2.png',
        'thumb3.png',
        'thumb4.png'
    ];

    thumbnails.forEach((thumb, index) => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';

        const img = document.createElement('img');
        img.src = thumb;
        img.alt = `${index + 1}`;

        // Add click event to change the main image
        img.addEventListener('click', () => {
            mainImage.src = `main_image_${index + 1}.jpg`; // 
        });

        slide.appendChild(img);
        thumbsWrapper.appendChild(slide);
    });

    thumbsContainer.appendChild(thumbsWrapper);
    productDisplay.appendChild(mainContainer);
    productDisplay.appendChild(thumbsContainer);

    

    const swiperThumbs = new Swiper('.swiper-container-thumbs', {
        direction: 'vertical',
        spaceBetween: 10,
        slidesPerView: all,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
      });
      
      var swiperMain = new Swiper('.swiper-container', {
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: swiperThumbs,
        },
      });
    return productDisplay
}


export{ProductCard, createProductDisplay}