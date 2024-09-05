import { basketContent } from "../../components/basket";
import { footer } from "../../components/footer";
import { header } from "../../components/header";
import { ModalAccount } from "../../components/modal"
import { getData } from "../../libs/http";
import { userName } from "../../libs/utils";
header()
footer()
ModalAccount()

const basket = JSON.parse(localStorage.getItem('basket')) || [];
const cartCont = document.querySelector('.cart-container');
const quantityElement = document.querySelector('.prod-quantity');

// Проверка корзины на наличие товаров
if (basket.length === 0) {
    basketContent();
    cartCont.style.display = 'none';
    quantityElement.style.visibility = 'hidden';
} else {
    cartCont.style.display = 'flex';
    quantityElement.style.visibility = 'visible';
    ProductsInBasket(basket); 
}

// Отображение товаров в корзине
function ProductsInBasket(basket) {
    const basketContainer = document.querySelector('.cart-items');
    basketContainer.innerHTML = ""; // Очищаем корзину перед добавлением элементов

    basket.forEach((item) => {
        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";

        // Создание элемента с картинкой товара
        const productImg = document.createElement("img");
        productImg.src = item.media[0];
        productImg.alt = "Product Image";

        const itemDetails = document.createElement("div");
        itemDetails.className = "item-details";

        const itemInfo = document.createElement("div");
        itemInfo.className = "item-info";

        const itemDescription = document.createElement("p");
        itemDescription.textContent = item.title;

        const itemPrice = document.createElement("span");
        itemPrice.className = "item-price";
        itemPrice.textContent = `${calculatePrice(item)} сум`;

        // Создание контролов для изменения количества товаров
        const quantityControls = createQuantityControls(item, itemPrice);

        itemInfo.append(itemDescription, itemPrice, quantityControls);

        const deleteBtn = createDeleteButton(item, cartItem);

        itemDetails.append(itemInfo, deleteBtn);
        cartItem.append(productImg, itemDetails);
        basketContainer.append(cartItem);
    });

    updateCart();
}

// Создание контролов для изменения количества товаров
function createQuantityControls(item, itemPrice) {
    const quantityControls = document.createElement("div");
    quantityControls.className = "quantity-controls";

    const minusButton = document.createElement("button");
    minusButton.textContent = "-";

    const quantityDisplay = document.createElement("span");
    quantityDisplay.textContent = item.count || 1;

    const plusButton = document.createElement("button");
    plusButton.textContent = "+";

    quantityControls.append(minusButton, quantityDisplay, plusButton);

    plusButton.onclick = (e) => {
        e.stopPropagation();
        item.count = (item.count || 1) + 1;
        quantityDisplay.textContent = item.count;
        itemPrice.textContent = `${calculatePrice(item)} сум`;
        saveBasket();
    };

    minusButton.onclick = (e) => {
        e.stopPropagation();
        if (item.count > 1) {
            item.count -= 1;
            quantityDisplay.textContent = item.count;
            itemPrice.textContent = `${calculatePrice(item)} сум`;
        } else {
            alert('Товар удален из корзины');
            removeItem(item);
        }
        saveBasket();
    };

    return quantityControls;
}

// Создание кнопки удаления
function createDeleteButton(item, cartItem) {
    const deleteBtn = document.createElement("div");
    deleteBtn.className = "delete-btn";

    const deleteImg = document.createElement("img");
    deleteImg.src = "/delete.png";

    const deleteText = document.createElement("span");
    deleteText.textContent = "Удалить";

    deleteBtn.append(deleteImg, deleteText);

    deleteBtn.onclick = (e) => {
        e.stopPropagation();
        removeItem(item); // Удаление товара из корзины
        cartItem.remove(); // Удаление элемента из DOM
        saveBasket();
    };

    return deleteBtn;
}

// Функция для пересчета цены товара с учетом скидки
function calculatePrice(item) {
    return Math.floor(item.price - (item.price * item.salePercentage) / 100);
}

// Удаление товара из корзины
function removeItem(item) {
    const index = basket.indexOf(item);
    if (index > -1) {
        basket.splice(index, 1);
    }
}

// Сохранение корзины в localStorage
function saveBasket() {
    localStorage.setItem('basket', JSON.stringify(basket));
    updateCart();
}

// Обновление общей суммы и количества товаров
function updateCart() {
    const totalPrice = basket.reduce((a, b) => a + calculatePrice(b) * (b.count || 1), 0);
    document.querySelector('.total-amount').textContent = `${totalPrice} сум`;

    const totalItems = basket.reduce((a, b) => a + (b.count || 1), 0);
    document.querySelector('.products-numb').textContent = totalItems;
    quantityElement.textContent = totalItems;

    // Скрытие корзины, если она пуста
    if (basket.length === 0) {
        cartCont.style.display = 'none';
        basketContent();
    }
}

// Загрузка данных пользователя
let token = localStorage.getItem("token");
getData(`accounts?token=${token}`)
    .then(res => {
        userName(res.data[0]);
    })
    .catch(error => console.log(error));

export { updateCart, ProductsInBasket };




//     const basket = JSON.parse(localStorage.getItem('basket')) || [];
//     const cartCont = document.querySelector('.cart-container');
//     const quantityElement = document.querySelector('.prod-quantity');

//     if (basket.length === 0) {
//         basketContent()
//         cartCont.style.display = 'none';
//         quantityElement.style.visibility = 'hidden'; 
//     } else {
//         cartCont.style.display = 'flex';
//         quantityElement.style.visibility = 'visible';
//         ProductsInBasket(basket); 
//     }

    



// function ProductsInBasket() {
//     const basketContainer = document.querySelector('.cart-items')
//     basketContainer.innerHTML = ""
    
//     basket.forEach((item) => {
        
//       // Cart item
//       const cartItem = document.createElement("div");
//       cartItem.className = "cart-item";
    
//       const productImg = document.createElement("img");
//       productImg.src = item.media[0]; 
//       productImg.alt = "Product Image";
    
//       // Item details
//       const itemDetails = document.createElement("div");
//       itemDetails.className = "item-details";
    
//       const itemInfo = document.createElement("div");
//       itemInfo.className = "item-info";
    
//       const itemDescription = document.createElement("p");
//       itemDescription.textContent = item.title;
    
//       const itemPrice = document.createElement("span");
//       itemPrice.className = "item-price";
//       itemPrice.textContent = `${
//             Math.floor(item.price - (item.price * item.salePercentage) / 100)
//         } сум`;
    
//       // Quantity controls
//       const quantityControls = document.createElement("div");
//       quantityControls.className = "quantity-controls";
    
//       const minusButton = document.createElement("button");
//       minusButton.textContent = "-";
    
//       const quantityDisplay = document.createElement("span");
//       quantityDisplay.textContent = "1";
    
//       const plusButton = document.createElement("button");
//       plusButton.textContent = "+";
    
//       quantityControls.append(minusButton);
//       quantityControls.append(quantityDisplay);
//       quantityControls.append(plusButton);
    
//       itemInfo.append(itemDescription);
//       itemInfo.append(itemPrice);
//       itemInfo.append(quantityControls);
    
//       // Delete button
//       const deleteBtn = document.createElement("div");
//       deleteBtn.className = "delete-btn";
    
//       const deleteImg = document.createElement("img");
//       deleteImg.src = "/delete.png"; 
    
//       const deleteText = document.createElement("span");
//       deleteText.textContent = "Удалить";
    
//       cartItem.onclick = () => {
//         localStorage.setItem('cardId', item.id)
//          location.href = '/pages/productCards/'
//       }
//       plusButton.onclick = (e) => {
//         e.stopPropagation();
//         item.count = (item.count || 1) + 1; 
//         quantityDisplay.value = item.count;
//         itemPrice.textContent = `${item.price * item.count} сум`; 
//         localStorage.setItem('basket', JSON.stringify(basket)); 
//         reloadPrices(sum); 
//         updateCartQuantity()
//     };

//     minusButton.onclick = (e) => {
//         e.stopPropagation();
//         if (item.count > 1) {
//             item.count -= 1; 
//             quantityDisplay.value = item.count;
//             itemPrice.textContent = `${item.price * item.count} сум`; 
//         } else {
//             alert('Товар удален с корзины');
//             basket.splice(basket.indexOf(item), 1); 
//         }
//         localStorage.setItem('basket', JSON.stringify(basket)); 
//         reloadPrices(basket)
//     };
//     deleteBtn.onclick = () => {
//         // e.stopPropagation();
//         basket.splice(basket.indexOf(item), 1); 
//         localStorage.setItem('basket', JSON.stringify(basket)); 
//         reloadPrices(basket); 
        
//     };


//     deleteBtn.append(deleteImg);
//     deleteBtn.append(deleteText);
  
//     itemDetails.append(itemInfo);
//     itemDetails.append(deleteBtn);
  
//     cartItem.append(productImg);
//     cartItem.append(itemDetails);
  
//     basketContainer.append(cartItem); 

    
//     });
//     reloadPrices(basket)
//     updateCartQuantity()
//     }
    

// function reloadPrices() {
//     const totalPriceSpan = document.querySelector('.total-amount');
//     const totalPrice = basket.reduce((a, b) => a + (b.price * (b.count || 1)), 0);
//     totalPriceSpan.textContent = totalPrice

//     const totalItemsSpan = document.querySelector('.products-numb');
//     const totalQuantity = basket.reduce((a, b) => a + (b.count || 1), 0);
//     totalItemsSpan.textContent = totalQuantity
// }

// function updateCartQuantity() {
//   const totalQuantity = basket.reduce((a, b) => a + (b.count || 1), 0);
//   quantityElement.innerHTML = totalQuantity;
// }

// let token = localStorage.getItem("token")
// getData(`accounts?token=${token}`)
// .then(res => {
//   userName(res.data[0])
// })
// .catch(error => console.log(error))
// export{updateCartQuantity, ProductsInBasket}
 

