const db = require('../models/server');

const findFavofUser = async (req,res)=>{
    let uid = req.params.id;
    let favs = await db.fav.findAll({where:{userId : uid}});
    let req1  = [];

    
    favs.forEach((obj)=>{
        req1.push(obj);
    })

    let res1 = [];
    // console.log(req1[0]);
    for(let i =0;i<req1.length;i++)
    {
        // console.log(req1[i]);
        let temp = await db.products.findOne({where:{id:req1[i].dataValues.productId}});
        res1.push(temp);
    }

    // console.log(typeof(favs))
    res.send(res1);
}

const addFav = async(req,res)=>{
    let obj = {
        userId:req.body.user_id,
        productId: req.body.prod_id
    }
    console.log(obj);
    let newobj = await db.fav.create(obj);
    res.send(newobj);
}

module.exports = {
    findFavofUser,
    addFav
}