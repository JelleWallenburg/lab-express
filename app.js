const express = require('express'); //require express package

const app= express(); // create own server named app

app.get('/home', (request, response) => {
    console.log(request);
    response.send('<h1>Welcome Ironhacker.');
});

app.get('/about', (request, response) => {
    console.log(request);
    response.send('<h1>Welcome Ironhacker.');
});

app.get('/works', (request, response) => {
    console.log(request);
    response.send('<h1>Welcome Ironhacker.');
});

app.get('/photo', (request, response) => {
    console.log(request);
    response.send('<h1>Welcome Ironhacker.');
});


app.listen(3000, () => console.log('My first app listening on port 3000!'))