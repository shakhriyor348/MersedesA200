const links = document.querySelectorAll('.menu-list__link'),
    mainScroll = document.querySelector('.main__scroll')

const newArr = [...links, mainScroll]

newArr.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault()

        let id = e.target.getAttribute('href').substr(1)

        document.getElementById(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
})


