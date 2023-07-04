const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = (req, res) => {
    
    const { id } = req.params
    axios(`${URL}${id}`)
    .then (response => response.data)
    .then(({id, name, gender, species, origin, image, status})=> {
        
        if (name) {
            const char = {
                id,
                name,
                gender,
                species,
                origin,
                image,
                status
            }
            
            return res.status(200).json(char)
        } 
        return res.status(404).send("Not found")
    })
    .catch(error => res.status(500).send(error.message))
}

module.exports = getCharById


