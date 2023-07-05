const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

// const getCharById = (req, res) => {
    
//     const { id } = req.params
//     axios(`${URL}${id}`)
//     .then (response => response.data)
//     .then(({id, name, gender, species, origin, image, status})=> {
        
//         if (id) {
//             const char = {
//                 id,
//                 name,
//                 gender,
//                 species,
//                 origin,
//                 image,
//                 status
//             }
            
//             return res.status(200).json(char)
//         } 
//         return res.status(404).send("Not found")
//     })
//     .catch(error => res.status(500).send(error.message))
// }

const getCharById = async (req, res) => {
    
    try {
        const { id } = req.params
        const { data } = await axios(`${URL}${id}`)
        const { name, gender, species, origin, image, status } = data 
            
            if (!name) throw Error (`ID: ${id} not found`)
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
    } catch (error) {
        return  error.message.includes("ID")
            ? res.status(404).send(error.message)
            : res.status(500).send(error.response.data.error)        
        }
    
}

module.exports = getCharById


