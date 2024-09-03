import { footer } from "../../components/footer";
import { header } from "../../components/header";
import { ModalAccount } from "../../components/modal"
header()
footer()
// ModalAccount()



let basket = JSON.parse(localStorage.getItem('basket')) || [];
const bag = document.querySelector('.backet')
let cartCont = document.querySelector('.cart-container')

if (basket.length === 0) {
        bag.classList.add('show');
        bag.classList.remove('hide');
        cartCont.style.display = 'none'
    } else {
            bag.classList.remove('show');
            bag.classList.add('hide');
            cartCont.style.display = 'flex'
            ProductsInBasket(basket); 
        }

function ProductsInBasket() {
    const basketContainer = document.querySelector('.cart-items')
    
    basket.forEach((item) => {
        
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
    
      quantityControls.append(minusButton);
      quantityControls.append(quantityDisplay);
      quantityControls.append(plusButton);
    
      itemInfo.append(itemDescription);
      itemInfo.append(itemPrice);
      itemInfo.append(quantityControls);
    
      // Delete button
      const deleteBtn = document.createElement("div");
      deleteBtn.className = "delete-btn";
    
      const deleteImg = document.createElement("img");
      deleteImg.src = "/delete.png"; 
    
      const deleteText = document.createElement("span");
      deleteText.textContent = "Удалить";
    
      cartItem.onclick = () => {
        localStorage.setItem('cardId', item.id)
         location.href = '/pages/productCards/'
      }
      plusButton.onclick = () => {
        item.count = (item.count || 1) + 1; 
        quantityDisplay.value = item.count;
        itemPrice.textContent = `${item.price * item.count} сум`; 
        localStorage.setItem('basket', JSON.stringify(basket)); 
        reloadPrices(sum); 
        // updateCartQuantity()
    };

    minusButton.onclick = () => {
        if (item.count > 1) {
            item.count -= 1; 
            quantityDisplay.value = item.count;
            itemPrice.textContent = `${item.price * item.count} сум`; 
        } else {
            alert('Товар удален с корзины');
            basket.splice(basket.indexOf(item), 1); 
        }
        localStorage.setItem('basket', JSON.stringify(basket)); 
        reloadPrices(basket)
    };
    deleteBtn.onclick = () => {
        basket.splice(basket.indexOf(item), 1); 
        localStorage.setItem('basket', JSON.stringify(basket)); 
        reloadPrices(basket); 
    };


    deleteBtn.append(deleteImg);
    deleteBtn.append(deleteText);
  
    itemDetails.append(itemInfo);
    itemDetails.append(deleteBtn);
  
    cartItem.append(productImg);
    cartItem.append(itemDetails);
  
    basketContainer.append(cartItem); 

    
    });
    reloadPrices(basket)
    }
    

function reloadPrices(basket) {
    const totalPriceSpan = document.querySelector('.total-amount');
    const totalPrice = basket.reduce((a, b) => a + (b.price * (b.count || 1)), 0);
    totalPriceSpan.textContent = totalPrice

    const totalItemsSpan = document.querySelector('.products-numb');
    const totalQuantity = basket.reduce((a, b) => a + (b.count || 1), 0);
    totalItemsSpan.textContent = totalQuantity
}

function updateCartQuantity() {
  // Get the span element where the cart quantity is displayed
  const quantityElement = document.querySelector('.quantity');

  // Calculate the total number of items in the cart
  const totalQuantity = basket.reduce((a, b) => a + (b.count || 1), 0);

  // Update the quantity element with the total quantity
  quantityElement.innerHTML = totalQuantity;
}
 console.log( ProductsInBasket());
 

