const express = require('express');

//Router es un objeto que nos permite crear rutas
const router = express.Router()

const petList = {
    "pets" : [
        {
            "id": 1,
            "name": "Firulais",
            "type": "dog",
            "age": 2,
        },
        {
            "id": 2,
            "name": "Mishifu",
            "type": "cat",
            "age": 1,
        },
        {
            "id": 3,
            "name": "Piolin",
            "type": "bird",
            "age": 3,
        },
        {
            "id": 4,
            "name": "Perry",
            "type": "platypus",
            "age": 4,
        },
    ]
}

//Query
//Query params: url/api/v1/pets?age=3&type=dog
//Son similares a los params, pero suelen enviar en la url para enviar uno o mas datos
//Las querys son abiertasm no definimos cuantas variables nos tienen que mandar
//no como se llaman, nuestra responsabilidad es solo tomar lo 
//que nos interesa

router.get('/api/v1/pets', (request, response) => {
    console.log('Query de pets', request.query)
    const { age,type } = request.query
    if(!age && type){
        response.status(200).send(petList)
        return
    }
    const fileredPets = petList.pets.filter(pet => {
        return pet.age == age || pet.type == type
    })
    response.status(200).send(fileredPets)
    return
})

router.get('/api/v1/pets/:id', (request, response) => {
    console.log('Params de onePet', request.params)
    
    const onePet = petList.pets.find(pet => pet.id == request.params.id)
    
    onePet ? response.status(200).send(onePet) : response.status(404).send({message: 'Pet not found'})
})  

module.exports = router