const db = require('../models/server')

categ = db.categ;

const getAllCateg = async (req,res)=>{
    let categs = await categ.findAll({});
    res.send(categs);
    // res.send("<h1>meow</h1>");
};

const addCateg = async (req,res)=>{
    let cat = {
        id:req.body.id,
        name : req.body.name
    }
    // console.log(req.body);
    let newcat = await categ.create(cat);
    res.send(newcat);
};

module.exports = {
    getAllCateg,
    addCateg
}