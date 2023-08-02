const { Sequelize,DataTypes } = require("sequelize");

module.exports = (sequelize,DataTypes) => {
    
    const product = sequelize.define('product',{
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
        description:{
            type:DataTypes.STRING
        },
        price:{
            type:DataTypes.INTEGER
        },
        image_url:{
            type:DataTypes.STRING
        }, 
        location:{
            type:DataTypes.STRING
        },
        isavailable:{
            type:DataTypes.BOOLEAN,
            defaultValue:true
        }
    }, {
        timestamps: false
    })

    return product;
}