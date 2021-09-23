const express = require("express");
const { get } = require("http");

const app = express();

const path = require("path");

const publicPath = path.resolve(__dirname, "./public");

app.use (express.static(publicPath));

//HOME
app.get('/', (req, res) =>{
    res.sendFile(path.resolve(__dirname, 'views/home.html'));
});

// LOGIN
app.get('/login', (req, res) =>{
    res.sendFile(path.resolve(__dirname, 'views/login.html'));
});

//REGISTER
app.get('/register',(req, res) =>{
    res.sendFile(path.resolve(__dirname,'views/register.html'))
});


//SERVIDOR LOCAL:3000
app.listen( process.env.PORT || '3000', () =>{
        console.log('El servidor 3000, esta funcionando..');
});