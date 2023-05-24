const express = require('express'); //require express package

const app= express(); // create own server named app

app.get('/', (request, response) => {
    response.sendFile(__dirname+ '/views/index.html');
});

app.get('/about', (request, response) => {
    response.sendFile(__dirname+ '/views/about.html');
});

app.get('/works', (request, response) => {
    response.sendFile(__dirname+ '/views/works.html');
});

app.get('/photo', (request, response) => {
    response.sendFile(__dirname+ '/views/photo.html');
});


app.listen(3000, () => console.log('My first app listening on port 3000!'))