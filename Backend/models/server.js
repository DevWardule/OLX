
const dbConfig = require('../config/dbconfig')

const { Sequelize,DataTypes } = require('sequelize')

//connecting database with sequelize orm--------------
const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host:dbConfig.HOST,
        dialect:dbConfig.dialect,
        operatorAliases : false,
        pool:{
            max : dbConfig.pool.max,
            min : dbConfig.pool.min,
            acquire:dbConfig.pool.acquire,
            idle : dbConfig.pool.idle
        }
    }
)


const db = {} // creating database object

db.Sequelize = Sequelize //Sequelize class
db.sequelize = sequelize //sequelize object


//enter db.tablename

db.user = require('./User.js')(sequelize,DataTypes)
db.categ = require('./categories.js')(sequelize,DataTypes)
db.products = require('./products.js')(sequelize,DataTypes)
db.fav = require('./favourites')(sequelize,DataTypes,db.user,db.products)

//ASSOCIATIONS HERE
// db.project.hasOne(db.match);
// db.match.belongsTo(db.project);

// Cateogory will be parent table and product is child. Product will contain foreign key categid
db.categ.hasMany(db.products);
db.products.belongsTo(db.categ);

// I want column of seller_id in product table, user table will be parent. also one user can sell multiple items,one to many relation
db.user.hasMany(db.products);
db.products.belongsTo(db.user);

//many to many association, fav will be middle table,which will have two foreign keys.
db.user.belongsToMany(db.products, {through:db.fav});
db.products.belongsToMany(db.user, {through:db.fav});


sequelize.authenticate().then(()=>{
    console.log("connected...")
})
.catch(err=>{
    console.log(err)
})



db.sequelize.sync({force:false}).then(()=>{
    console.log("sync done")
}) //if set true create new table again and again

module.exports = db;

