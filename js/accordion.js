const btn = document.querySelectorAll('.feature__link'),
    lists = document.querySelectorAll('.feature-sub')



btn.forEach((item, i) => {
    item.addEventListener('click', () => {
        btn.forEach((item) => {
            item.classList.remove('feature__link_active')
        }) 


        
       item.classList.add('feature__link_active')

       lists.forEach(list => {
           list.classList.add('hidden')
       })

       lists[i].classList.remove('hidden')
    })
})