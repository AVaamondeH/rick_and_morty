let myFavorites = [];

const postFav = (req, res) => {
    
    try {
        myFavorites.push(req.body)
        console.log(req.body);
    
        return res.status(200).json(myFavorites)
        
    } catch (error) {
        return res.status(404).json({error: error})
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