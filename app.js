const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.resolve(__dirname,'./Public')));

app.listen(process.env.PORT || 3000,() => console.log('Servidor corriendo en puerto 3000'));

app.get('/',(req,res)=> {
    res.sendFile(path.resolve(__dirname,'./Views/home.html'));
});
app.get('/registrar',(req,res)=> {
    res.sendFile(path.resolve(__dirname,'./Views/registrar.html'));
});
