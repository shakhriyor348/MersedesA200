const tabsHandlerEl = document.querySelectorAll('[data-tabs-handler]'),
    tabsContentEl = document.querySelectorAll('[data-tabs-field]'),
    title = document.querySelectorAll('.design__title')

for (let btn of tabsHandlerEl) {
    btn.addEventListener('click', () => {
        tabsHandlerEl.forEach(item => item.classList.remove('design-list__item_active'))
        btn.classList.add('design-list__item_active')
        tabsContentEl.forEach(content => {
            if (content.dataset.tabsField === btn.dataset.tabsHandler) {
                content.classList.remove('hidden')
            } else {
                content.classList.add('hidden')
            }
        })
        title.forEach(title => {
            if (content.dataset.tabsField === btn.dataset.tabsHandler) {
                title.classList.remove('hidden')
            } else {
                title.classList.add('hidden')
            }
        })

    })
}