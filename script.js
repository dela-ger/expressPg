// const { response } = require("express");

document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3001/api/headers')
    .then(response => response.json())
    .then(data => {
        const mainHeading = document.getElementById('main-heading');
        mainHeading.textContent = data.main_heading
    })

    .catch(error => console.error(error))
})

// document.addEventListener('DOMContentLoaded', async () => {
//     try {
//         const response = await fetch('http://localhost:3001/api/headers')
//         const data = await response.json()
//         console.log(data)
//     }
//     catch (error) {
//         console.error(error)
//     }
// })