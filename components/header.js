import { searchItems } from "./searcher";

function header(item) {
    let header = document.querySelector('header')
    header.innerHTML = `
     <section class="header-first">
      <div class="box-in-center">
        <div class="location">
          <div class="geo">
            <span class="material-symbols-outlined"> location_on </span>
            <a href="#">Город: <span>Ташкент</span></a>
          </div>
          <div class="pick-up">
            <a href="#">Пункты выдачи</a>
          </div>          
        </div>

        <div class="more-info">
          <div class="question-answer">
            <a href="#">Вопрос-ответ</a>
          </div>

          <div class="my-orders">
            <a href="#">Мои заказы</a>
          </div>

          <a href="#" class="language">
            <div class="lang-flag"></div>
            <span>Русский</span>
          </a>
        </div>
      </div>
    </section>
      <section class="header-second">
        <div class="box-in-center">
          <div class="logo">
            <a href="">
              <img src="/Uzum-logo.png" alt="">
            </a>
          </div>
         <div class="dropdown">
                <button class="dropbtn">
                    <img src="" alt="">
                    Каталог
                </button>
              </div>

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
							<a href="/pages/basket/">Корзина <span class="prod-quantity"></span></a>

							<div class="modal__card">
								<ul class="incard"></ul>
							</div>
						</div>
					</div>
        </div>
    </section>
    <section class="header__third">
				<div class="box-in-center">
					<ul class="menu-list"></ul>
				</div>
			</section>
    `

    const headerThird = document.querySelector('.menu-list')
   const searchInput = document.querySelector('#search')
// Создадим контейнер для отображения результатов поиска
const searchResultsContainer = document.createElement('li');
searchResultsContainer.className = 'search-results';
headerThird.appendChild(searchResultsContainer);

// Добавим обработчик события input для поля поиска
searchInput.addEventListener('input', (event) => {
    const query = event.target.value; // Получаем введенный текст
    const foundItems = searchItems(item, query); // Выполняем поиск

    // Очистим контейнер результатов перед добавлением новых элементов
    searchResultsContainer.innerHTML = '';

    // Отобразим результаты поиска
    foundItems.forEach(item => {
        const resultItem = document.createElement('div');
        resultItem.className = 'search-result-item';
        resultItem.textContent = item.name; // Отображаем только название товара
        searchResultsContainer.appendChild(resultItem);
    });
});

}


// // header.js

// // Импортируем функцию поиска из searcher.js
// import { searchItems } from './searcher.js';

// // Создаем массив продуктов (или получаем его из источника данных)
// const products = [
//     { name: "Телевизор", description: "Телевизор с диагональю 50 дюймов" },
//     { name: "Телефон Samsung", description: "Модель Galaxy S21" },
//     { name: "Телефон-лягушка", description: "Ретро-телефон в форме лягушки" }
// ];

// // Найдем элемент header__third
// const headerThird = document.querySelector('.header__third');

// // Создадим элемент для поля ввода поиска
// const searchInput = document.createElement('input');
// searchInput.type = 'text';
// searchInput.placeholder = 'Поиск...';
// searchInput.className = 'search-input';

// // Добавим поле ввода в header__third
// headerThird.appendChild(searchInput);

// // Создадим контейнер для отображения результатов поиска
// const searchResultsContainer = document.createElement('div');
// searchResultsContainer.className = 'search-results';
// headerThird.appendChild(searchResultsContainer);

// // Добавим обработчик события input для поля поиска
// searchInput.addEventListener('input', (event) => {
//     const query = event.target.value; // Получаем введенный текст
//     const foundItems = searchItems(products, query); // Выполняем поиск

//     // Очистим контейнер результатов перед добавлением новых элементов
//     searchResultsContainer.innerHTML = '';

//     // Отобразим результаты поиска
//     foundItems.forEach(item => {
//         const resultItem = document.createElement('div');
//         resultItem.className = 'search-result-item';
//         resultItem.textContent = item.name; // Отображаем только название товара
//         searchResultsContainer.appendChild(resultItem);
//     });
// });


export{ header }