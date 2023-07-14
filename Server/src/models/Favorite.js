const { DataTypes } = require('sequelize');

module.exports = (database) => {
   database.define('Favorite', {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         unique: true
      },
      name: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      status: {
         type: DataTypes.STRING,
         allowNull: false, 
      },
      species: {
         type: DataTypes.STRING,
         allowNull: false, 
      },
      gender: {
         type: DataTypes.STRING,
         allowNull: false, 
      },
      origin: {
         type: DataTypes.JSON,
         allowNull: false, 
      },
      image: {
         type: DataTypes.BLOB,
         allowNull: false, 
      }
   }, 
   { timestamps: false });
};
