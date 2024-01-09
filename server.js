// #1 Call express lib (import)
const express = require('express');

//#2 Crear una instancia de express (crear una aplicacion de express)
const app = express()

//#3 Configurar la app de express (app.use)
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//#4 Crear una ruta (app.get)
app.get('/', (request, response) => {
    response.send('Hola mundo 2 y 3')
})

//#5 Inicializar el servidor (app.listen)
app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000')
})