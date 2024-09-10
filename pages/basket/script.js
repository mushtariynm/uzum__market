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


if (basket.length === 0) {
    basketContent();
    cartCont.style.display = 'none';
} else {
    cartCont.style.display = 'flex';
    ProductsInBasket(basket); 
}

function ProductsInBasket(basket) {
    const basketContainer = document.querySelector('.cart-items');
    basketContainer.innerHTML = ""; 

    basket.forEach((item) => {
        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";

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

        const quantityControls = createQuantityControls(item, itemPrice);

        itemInfo.append(itemDescription, itemPrice, quantityControls);

        const deleteBtn = createDeleteButton(item, cartItem);

        itemDetails.append(itemInfo, deleteBtn);
        cartItem.append(productImg, itemDetails);
        basketContainer.append(cartItem);
    });

    updateCart();
}

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
        removeItem(item); 
        cartItem.remove(); 
        saveBasket();
    };

    return deleteBtn;
}

function calculatePrice(item) {
   
    return Math.floor(item.price - (item.price * item.salePercentage) / 100);
}
function totalSale() {
    return basket.reduce((a, product) => {
        if (product.salePercentage > 0) {
            const discount = (product.price * product.salePercentage) / 100;
            return Math.round(a + (discount * (product.count || 1))) ;
        }
        return a;
    }, 0);
}
function removeItem(item) {
    const index = basket.indexOf(item);
    if (index > -1) {
        basket.splice(index, 1);
    }
}

function saveBasket() {
    localStorage.setItem('basket', JSON.stringify(basket));
    updateCart();
}

function updateCart() {
    const totalPrice = basket.reduce((a, b) => a + calculatePrice(b) * (b.count || 1), 0);
    document.querySelector('.total-amount').textContent = `${totalPrice} сум`;

    const totalItems = basket.reduce((a, b) => a + (b.count || 1), 0);
    document.querySelector('.products-numb').textContent = totalItems;

    quantityElement.textContent = totalItems;
    const totalDiscount = totalSale();
    document.querySelector('.cart-summary p:nth-of-type(2) span').textContent = totalDiscount;


    if (basket.length === 0) {
        cartCont.style.display = 'none';
        basketContent();
    }
}

let token = localStorage.getItem("token");
getData(`accounts?token=${token}`)
    .then(res => {
        userName(res.data[0]);
    })
    .catch(error => console.log(error));

export { updateCart, ProductsInBasket };


    
