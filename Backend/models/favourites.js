const { Sequelize,DataTypes } = require("sequelize");

module.exports = (sequelize,DataTypes,User,Product) =>{
    const fav = sequelize.define('fav',{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey :true
        },
    },{
        timestamps:false
    });

    return fav;
}