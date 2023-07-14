const {Favorite} = require("../DB_connection")

//let myFavorites = [];

const postFav = async (req, res) => {
    
    try {
        const { id, name, status, species, gender, origin, image} = req.body
        const newFavorite = await Favorite.create({
            id,
            name,
            status,
            species,
            gender,
            origin,
            image
        })
        return res.status(200).json(newFavorite)
        
    } catch (error) {
        return res.status(404).json({error: error.message})
    }
}

const deleteFav = (req, res) => {
    const { id } = req.params
    myFavorites = myFavorites.filter(fav => fav.id.toString() !== id)
    return res.status(200).json(myFavorites)
}

module.exports = {
    postFav,
    deleteFav
}