const { Favorite } = require("../DB_connection")


const deleteFav = async (req, res) => {
    try {
        const { id } = req.params
        myFavorites = await Favorite.findByPk(id)
        myFavorites.destroy();
        return res.status(200).json(myFavorites)
        
    } catch (error) {
        return res.status(500).json({error: error.message}) 
    }
    
}

module.exports = {
    deleteFav
}