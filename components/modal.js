import { getData } from "../libs/http"

function ModalAccount() {
    let modal = document.querySelector('.modal__bg')
    modal.innerHTML = `
    <div class="modal__content">
     
      <form action="">
         
          <h1>Введите номер телефона</h1>
          <p>Отправим смс с кодом подтверждения</p>
          <div class="input__main">
         
          <div class="input__elem">
      <label for="name">Ваш номер телефона</label>
          
          <div  class="phone-number" placeholder="00 000-00-00" type="tel">
            <div class="country-number">+998</div>
            <input placeholder="00 000-00-00" type="tel" name="phone" class="numb-after required">
          </div>
          
  </div>
  
</div>
<button class="form__btn">Получить код</button> <br><br>

<p class="agreements">Авторизуясь, вы соглашаетесь c политикой <br>
  обработки персональных данных</p>
      </form>
      <button class="close"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLXgiPjxsaW5lIHgxPSIxOCIgeTE9IjYiIHgyPSI2IiB5Mj0iMTgiPjwvbGluZT48bGluZSB4MT0iNiIgeTE9IjYiIHgyPSIxOCIgeTI9IjE4Ij48L2xpbmU+PC9zdmc+" alt=""></button>

  </div>
    `
let btnOpen = document.querySelector('.account')
let btnClose = document.querySelector(".close")

btnOpen.onclick = () => {
    modal.style.visibility = "visible"
    modal.style.opacity = "1"
}
btnClose.onclick = () => {
    modal.style.visibility = "hidden"
    modal.style.opacity = "0"
}
}

function ModalCatalog(item) {
    let modalCatalog = document.querySelector('.modal-catalog')
    modalCatalog.innerHTML = `
    <div class="catalog-content">
        <section class="header-second">
          <div class="box-in-center">
            <div class="logo">
              <a href="">
                <img src="/Uzum-logo.png" alt="">
              </a>
            </div>
            <button class="catalog">
              <img src="/catalog.png" alt="">
            </button>
  
            <div class="search">
              <div class="searchQuery">
                <input
                  type="search"
                  name="searchItem"
                  placeholder="Искать товары и категории"
                  id="search"
                />
                <button class="searchIcon">
                  <span class="material-symbols-outlined"> search </span>
                </button>
              </div>
  
              <ul class="searchResults"></ul>
            </div>
            <div class="btn-block">
              <div class="account">
                <span class="material-symbols-outlined"> person </span>
                <p data-name="">Войти</p>
              </div>
  
              <div class="liked">
                <span class="material-symbols-outlined">favorite</span>
                <a href="/pages/favourites/">Избранное</a>
              </div>
  
              <div class="cart">
                <span class="material-symbols-outlined"> shopping_bag </span>
                <a href="/pages/backet/">Корзина</a>
  
                
              </div>
            </div>
          </div>
          
          <div class="category-box">
          <div class="cards-category">
          <p>Категории товаров</p>
              <a  href="/pages/furniture/" class="category">Мебель <span class="goods-numb">10 товаров</span></a>
              <a  href="/pages/PC/" class="category">Электроника <span class="goods-numb">10 товаров</span></a>
              <a  href="/pages/audio/" class="category">Наушники и аудиотехника <span class="goods-numb">10 товаров</span></a>
              <a  href="/pages/TV/" class="category">Телевизоры <span class="goods-numb">10 товаров</span></a>
              <a  href="/pages/kitchen/" class="category">Товары для кухни <span class="goods-numb">10 товаров</span></a>
            </div>
        </div>
      </section>
    </div>
    `
    
    // let goodsNumb = document.querySelectorAll('.goods-numb')
    // goodsNumb.forEach((elem) => {
    //     elem.textContent = item.type.length
    // })

    let catalogBtn = document.querySelector('.modal-bg-catalog')
    catalogBtn.onclick = () => {
        modalCatalog.style.visibility = "visible"
        modalCatalog.style.opacity = "1"
    }
    catalogBtn.ondblclick = () => {
        modal.style.visibility = "hidden"
        modal.style.opacity = "0"
    }
}

export{ModalAccount, ModalCatalog}