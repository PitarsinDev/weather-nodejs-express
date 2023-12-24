const { response } = require("express");

const express = requrie('express');
const request = requrie('request');
const app = express();
const post = 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

const apiKey = 'API_KEY' //API Key ของคุณที่ได้จาก OpenWeatherMap

app.get('/weather', (req, res) => {
    const city = req.qery.city;
    const url = 'http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}';

    request(url, (error, response, body) => {
        const weatherData = JSON.parse(body);
        const temperature = weatherData.main.temp;
        const description = weatherData.weather[0].description;

        const result = `Current temperature in ${city}: ${temperature}°C, ${description}.`;
        res.send(result);
    });
});

app.listen(port, () => {
    console.log('Server is running')
})