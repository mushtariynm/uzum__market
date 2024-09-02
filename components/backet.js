function backet(){
    let backetBox = document.querySelector('.backet')
    backetBox.innerHTML = `
     <div class="backet-container">
            <div class="free-backet-img">
                <img src="/shopocat 1.png" alt="">
            </div>
            <div class="free-backet-text">
                В корзине пока нет товаров
        </div>
        <p>Начните с подборок на главной странице или найдите нужный товар через поиск</p>
           </div>
    `
}

export {backet}