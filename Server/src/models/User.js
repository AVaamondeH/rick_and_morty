const { DataTypes } = require('sequelize');

module.exports = (database) => {
   database.define('User', {
      id: {
         type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true
      },
      email: {
         type: DataTypes.STRING,
         allowNull: false,
         unique: true,
         validate: {
            isEmail: true
         }

      },
      password: {
         type: DataTypes.STRING,
         allowNull: false,
         validate: {
            len: {
               args: [6, 30],
               msg: 'La contraseña debe tener entre 8 y 30 caracteres'
            },
            // isStrongPassword: {
            //    msg: 'La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial'
            // }
         }    
      }
   }, { timestamps: false });
};
