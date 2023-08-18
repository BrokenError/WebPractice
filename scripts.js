let address_delivery = document.getElementById('modal1');
let btn_open = document.querySelector('.address__btn')
let btn_close = document.querySelector('.modal__close')

btn_open.addEventListener('click', modalOpen);
btn_close.addEventListener('click', modalCLose);

function modalOpen(){
    bodyLock()
    address_delivery.style.display = "flex";
    address_delivery.addEventListener('click', function (e) {
        if (!e.target.closest('.modal-window')) {
            modalCLose();
        }
    })

}

function modalCLose(){
    bodyUnlock()
    address_delivery.style.display = "none";
}

function bodyLock() {
    let body_page =document.querySelector("body");
    body_page.style.overflow = "hidden";
}

function bodyUnlock() {
    let body_page = document.querySelector("body");
    body_page.style.overflow = 'visible';
    body_page.style.overflowX = "hidden";
}
