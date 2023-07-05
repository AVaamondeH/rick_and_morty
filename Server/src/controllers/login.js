const users = require("../utils/users")

const login = (req, res) => {
    const {email, password} = req.query
    const verify = users.find((user) => user.email === email && user.password === password )

    verify 
    ? res.status(200).json({access: true})
    : res.status(404).json({access: false})


}

module.exports = login