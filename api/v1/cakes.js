const express = require('express');
//Router es un objeto que nos permite crear rutas
const router = express.Router()

//Ejemplo de mala practica, uso de path en vez de get y uso 207 en vez de 200, asi como 401 en vez de 404

router.patch('/api/v1/cakes/:cakeId', (request, response) => {
    const{ cakeId } = request.params
    if(cakeId > 100){
        response.status(401).send({
            message: 'Él pastel esta feo'
        })
    }else {
        const mensaje = {
            id: `El id del pastel es ${cakeId}`
        }
        response.status(207).send(mensaje)
        return
       }
       response.send(cakeId)

})

module.exports = router