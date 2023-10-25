require('dotenv').config();
const { Sequelize } = require('sequelize');
const pg = require('pg')
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const  favoriteModel = require("./models/Favorite")
const  userModel  = require("./models/User")

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
// const database = new Sequelize(
//    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
//    { logging: false, native: false }
// );

const database = new Sequelize(`postgres://alex:76AqeX8fWM4GpXdcOtFCGJaFz5sR068M@dpg-cks6ufo5vl2c73dnevtg-a.oregon-postgres.render.com/rickandmorty_3ccw`, {
	logging: false,
	native: false,
	dialectOptions: {
		ssl: {
			rejectUnauthorized: false,
		},
	},
	dialectModule: pg,
});

// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.
favoriteModel(database);
userModel(database);
console.log(database.models);
//

//

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
const { User, Favorite } = database.models;
User.belongsToMany(Favorite, { through: 'user_favorite' })
Favorite.belongsToMany(User, { through: 'user_favorite'})


module.exports = {
   database,
   ...database.models
};
