const { Favorite } = require("../DB_connection")

const postFav = async (req, res) => {
    
    try {
        const { id, name, status, species, gender, origin, image} = req.body
        if(!id || !name || !status || !species || !gender || !origin || !image) throw Error("Faltan datos")
        
        const newFavorite = await Favorite.findOrCreate({
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
        if (error.message === "Faltan datos") return res.status(401).json({error: error.message})
        return res.status(500).json({error: error.message}) 
    }
}


module.exports = {
    postFav
}