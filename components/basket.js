function basketContent() {
    // Убедимся, что DOM полностью загружен перед выполнением кода
    document.addEventListener('DOMContentLoaded', function() {
        let basketBox = document.querySelector(".basket-box");
        
        // Проверяем, существует ли элемент basketBox в DOM
        if (!basketBox) {
            console.error('Element with class .basket-box not found.');
            return;
        }
        
        basketBox.innerHTML = `
            <div class="basket-container">
                <div class="free-basket-img">
                    <img src="/shopocat 1.png" alt="">
                </div>
                <div class="free-basket-text">
                    В корзине пока нет товаров
                </div>
                <p>Начните с подборок на главной странице или найдите нужный товар через поиск</p>
            </div>
        `;

        console.log(basketBox);
    });
}

export { basketContent };



