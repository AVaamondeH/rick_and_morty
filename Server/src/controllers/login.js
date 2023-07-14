const  { User }  = require("../DB_connection");

const login = async(req, res) => {
    
    try {
        const {email, password} = req.query
        if (!email || !password) throw Error("Faltan datos")
    
        const verifyEmail = await User.findAll({
            where: {
                email,
            }
        })
        if (!verifyEmail.length) throw Error("Usuario no encontrado")
        console.log(verifyEmail);
        const verifyUser = verifyEmail[0].dataValues
        if (verifyUser.password === password) return res.status(200).json({access: true})

        throw Error("Contraseña incorrecta")
        
    } catch (error) {
        switch (error.message) {
            case "Faltan datos":
                return res.status(400).json({error: error.message});
            case "Usuario no encontrado":
                return res.status(404).json({error: error.message});
            case "Contraseña incorrecta":
                return res.status(403).json({error: error.message});
            default:
                return res.status(500).json({error: error.message}) ;
        }         
    }    

}

module.exports = {
    login
}