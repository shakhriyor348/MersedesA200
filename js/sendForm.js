const form = document.querySelector('.form-test-drive');
// https://jsonplaceholder.typicode.com

form.addEventListener('submit', (e) => {
    e.preventDefault()

    let data = {}

    for (let { name, value } of form.elements) {
        if (name) {
            data[name] = value
        }


    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data)
    })
        .then(res => {
            if (res.status === 200 || res.status === 201) {
                return res.json()
            } else {
                throw new Error(res.status)
            }
        })
        .then(data => {
            form.reset()
        })
        .catch(error => console.dir(error))
})