const burger = document.querySelector('.humburger-menu'),
    menuElem = document.querySelector('.menu')

const toggleMenu = () => {
    menuElem.classList.toggle('menu-active')
    burger.classList.toggle('humburger-menu-active')
}

document.body.addEventListener('click', (e) => {
    let target = e.target

    if (target && target.classList.contains('humburger-menu') || target.classList.contains('menu')) {
        toggleMenu()

    } else {
        menuElem.classList.remove('menu-active')
        burger.classList.remove('humburger-menu-active')
    }
})


