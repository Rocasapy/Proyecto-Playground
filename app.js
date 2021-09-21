const express = require('express')
const app = express()
const path = require('path');

const publicPath = path.resolve(__dirname, './public');  
app.use(express.static(publicPath));

const publicPath2 = path.resolve(__dirname, './views');  
app.use(express.static(publicPath2));


app.listen(process.env.PORT || 3000, function() {
  console.log("Servidor corriendo en el puerto 3000");
});


app.get('/', (req,res) =>{
  res.sendFile(path.resolve(__dirname, './views/home.html'));
});

app.get('/', (req,res) =>{
  res.sendFile(path.resolve(__dirname, './views/register.html'));
});

app.get('/', (req,res) =>{
  res.sendFile(path.resolve(__dirname, './views/login.html'));
});