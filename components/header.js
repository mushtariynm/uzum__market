function header() {
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

    let search = document.querySelector('.search')

}
export{ header }