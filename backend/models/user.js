const { Model, Sequelize } = require("sequelize");
const { dialect } = require("../config/db.config");
const sequelize = new Sequelize({dialect: 'mysql'});

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
   
        userName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        avatar: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "http://127.0.0.1:3000/images/avatars/default_user.jpg"
        }
    })
    return User;
}