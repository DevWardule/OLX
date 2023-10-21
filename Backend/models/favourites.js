// const { Sequelize,DataTypes } = require("sequelize");

module.exports = (sequelize,DataTypes) =>{
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