function reload(arr, place, Element) {
    let box = document.querySelector(`#${place}`);
    box.innerHTML = ""

    // if(!arr.length) {
    //     return
    // }

    for (let item of arr) {
        let elem = Element(item);
        box.append(elem);
    }
    }

    // function validation() {
    //     let regEx = {
    //       phone: /^[0-9\-\+]{9,15}$/
    //     }
    //     let inputs = document.querySelector(".required")
    //     let bool = true
    //     inputs.forEach((inp) => {
    //         let inpContent = inp.getAttribute("name")
    //         if (regEx[inpContent].test(inp.value)) {
    //             inp.classList.remove("error")
    //             inp.style.border = "1px solid black"
    //         } else {
    //             inp.classList.add("error")
    //             inp.style.border = "1px solid red"
    //             bool = false
    //         }
    //     }
    //     )
    //     return bool
    //   }
    


function generateToken() {
    const characters = "ADYUGKGLkhjgguaihfuuoh868658780"
  
    let res = ""
    for (let i = 0; i < 10; i++) {
        let random = Math.floor(Math.random() * characters.length)
        res += characters[random]
    }
    return res;
  }
  

function deBounce(fn, ms) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout); 
        timeout = setTimeout(() => {
            fn.apply(this, args); 
        }, ms);
    }
  }

  function userName(user) {

    let name = document.querySelector('.user-name')
    
    name.textContent = user.name
    }
    function productsQuantity(){
        let basket = JSON.parse(localStorage.getItem('basket')) || [];
  let numbOfGoods = document.querySelector('.prod-quantity')
  numbOfGoods.textContent = basket.length
    }
    function userProfile (user) {
        let firstName = document.getElementById('first-name')
        firstName.value = user.name
        
        let number = document.getElementById('phone')
        number.value = user.phone
        }
export{reload, generateToken, deBounce, userName, productsQuantity, userProfile}