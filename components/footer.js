function footer() {
    let footer = document.querySelector('footer')
    footer.innerHTML = `
    <section class="footer">
				<div class="box-in-center">
					<div class="about-us">
						<h3>О нас</h3>
						<a href="#">Пункты выдачи</a>
						<a href="#">Вакансии</a>
					</div>

					<div class="users">
						<h3>Пользователям</h3>
						<a href="#">Связаться с нами</a>
						<a href="#">Вопрос - ответ</a>
					</div>

					<div class="for-entrepreneurs">
						<h3>Для предпринимателей</h3>
						<a href="#">Продавайте на Uzum</a>
						<a href="#">Вход для продавцов</a>
					</div>

					<div class="social">
						<h3>Скачать приложение</h3>
						<div class="download-app">
							<a href="#" class="appstore">
								<img src="/appstore.svg" alt="appstore" />
								<span>AppStore</span>
							</a>
							<a class="googleplay">
								<img src="/googleplay.svg" alt="googleplay" />
								<span>Google Play</span>
							</a>
						</div>

						<div class="social-links">
							<h3>Uzum в соцсетях</h3>
							<div class="social-links__apps">
								<a href="#">
									<img src="/instagram.svg" alt="" />
								</a>

								<a href="#">
									<img src="/telegram.svg" alt="" />
								</a>

								<a href="#">
									<img src="/youtube.svg" alt="" />
								</a>

								<a href="#">
									<img src="/facebook.svg" alt="" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section class="footer__second">
				<div class="box-in-center">
					<div class="agreements">
						<div class="confidentiality">
							<a href="#">Соглашение о конфиденциальности</a>
						</div>

						<div class="agreement">
							<a href="#">Пользовательское соглашение</a>
						</div>
					</div>

					<div class="copyright-text">
						<p>«2023© ООО «UZUM MARKET». ИНН 309376127. Все права защищены»</p>
					</div>
				</div>
			</section>
    `
}

export{footer}