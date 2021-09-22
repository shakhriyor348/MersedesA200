const btn = document.querySelectorAll('.feature__link'),
    lists = document.querySelectorAll('.feature-sub')



btn.forEach((item, i) => {
    item.addEventListener('click', () => {
        btn.forEach((item) => {
            if(item.classList.contains('feature__link_active')) {
                item.classList.remove('feature__link_active')
            }else {
                item.classList.add('feature__link_active')
            }
        })

        if(item.classList.contains('feature__link_active')) {
            lists[i].classList.remove('hidden')
        }else {
            lists[i].classList.add('hidden')
        }
    })
})


