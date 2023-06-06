import fetch from 'node-fetch'

fetch('http://localhost:3000/random-fact')
.then(response => response.json())
.then(data => {
    console.log(data.fact)
})

.catch(error => {
    console.log('Error: ', error)
})