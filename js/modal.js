const modalBtn = document.querySelectorAll('.more'),
    modal = document.querySelector('.modal'),
    modalClose = document.querySelector('.modal__close')

modalBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.classList.remove('hidden')
    })
})


modal.addEventListener('click', (e) => {
    let target = e.target


    if(target && target.classList.contains('overlay') || target.classList.contains('modal__close')) {
        modal.classList.add('hidden')
    }
})