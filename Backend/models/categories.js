const { Sequelize,DataTypes } = require("sequelize");

module.exports = (sequelize,DataTypes) => {
    
    const categ = sequelize.define('categ',{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement : true,
            primaryKey:true,
            allowNull:false
        },
        name:{
            type : DataTypes.STRING,
            allowNull: false
        },
    }, {
        timestamps: false
    })

    return categ;
}