const express = require('express');
const morgan= require('morgan');
const path = require('path');
const cors=require('cors')
require('./database');
const app = express();
const userRoute = require('./routes/userRoute')
//Ajustes
app.set('port',process.env.PORT||8000); //.set se da el valor al puerto
app.use(morgan('dev'));

//json() establece que los datos de ingreso y salida seran en formato json
app.use(express.json());
app.use(cors())

//rutas app.use() dentro del parentesis se pone la primera parte de la ruta que
// ira en el link y al lado el nombre que lo dimos en el controlador

app.use('/api',userRoute);


//Archivos estaticos que contendra la app como imagenes, iconos, etc.
app.use(express.static(path.join(__dirname, 'public')));

//.listen Inicializacion del servidor 
app.listen(app.get('port'), ()=>{
console.log(`servidor iniciado en el puerto ${app.get('port')}`);
})
