function ModalAccount() {
    let modal = document.querySelector('.modal__bg')
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

function ModalCatalog() {
    let modalCatalog = document.querySelector('.modal-catalog')
    let catalogBtn = document.querySelector('.catalog')
    catalogBtn.onclick = () => {
        modalCatalog.style.visibility = "visible"
        modalCatalog.style.opacity = "1"
    }
    // catalogBtn.ondoubleclick = () => {
    //     modal.style.visibility = "hidden"
    //     modal.style.opacity = "0"
    // }
}

export{ModalAccount, ModalCatalog}