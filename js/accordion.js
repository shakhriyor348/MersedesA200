const btn = document.querySelectorAll('.feature__link'),
    lists = document.querySelectorAll('.feature-sub')



btn.forEach((item, i) => {
    item.addEventListener('click', (e) => {
        btn.forEach((item) => {
            item.classList.remove('feature__link_active')
        })


        console.log(e.target);


        if(e.target && item.classList.contains('feature__link')){
            item.classList.remove('feature__link_active')
            console.log('asd');
        }else {

            item.classList.add('feature__link_active')
        }

      

        lists.forEach(list => {
            list.classList.add('hidden')
        })

        lists[i].classList.remove('hidden')
    })
})