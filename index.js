require('dotenv').config();
const express = require('express');


const app = express();

const port_num = 4000;

app.get('/twitter', (req, res) => {
    res.send("Get method Called, response sended on twitter !");
})

app.get('/login', (req, res) => {
    res.send("<h1> You entered in Login Page !</h1>");
})

app.get('/youtube', (req, res) => {
    res.send("<h2>This is youtube response page ! </h2>");
})

app.listen(process.env.PORT, () => {
    console.log(`Port is listening on post no. ${port_num} !`);
})