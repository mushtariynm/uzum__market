function favourites() {
    let favBox = document.querySelector('.favourites')
    favBox.innerHTML = `
     <div class="backet-container">
            <div class="free-backet-img">
                <img src="/hearts 1.png" alt="">
            </div>
            <div class="free-backet-text">
            Добавьте то, что понравилось
        </div>
        <p>Перейдите на главную страницу и нажмите на ♡ в товаре <br>
            На главную</p>
           </div>
    `
}
export{favourites}