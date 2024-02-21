const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();  // Aqui você estava invocando express como uma função diretamente

// Configurar o middleware express.static para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));


const home = require('./routes/homeRoute');

const PORT = process.env.PORT || 3334;

app.use('/home', home);

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});
