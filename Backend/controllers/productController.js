const db = require("../models/server");
const paginationObj = require("../middlewares/pagination");

const pagination = paginationObj.pagination;

const getAllProd = async (req, res) => {
  let prds = await db.products.findAll({});
  // res.send(res.resultset);
  res.send(prds);
};

const addProduct = async (req, res) => {
  // let catobj =await db.categ.findOne({where:{name:req.body.catname}})
  // let userobj = await db.user.findOne({where:{id:req.body.seller_id}})
  //select * from cat where cat.name = req.body.catname

  //   console.log(catobj);
  //   console.log(userobj);
  // console.log(req.body.catname);

  console.log("This is file", req.file);
  let prodobj = {
    name: req.body.name,
    description: req.body.desc,
    price: req.body.price,
    image_url: req.file.filename,
    location: req.body.loc,
    categId: req.body.catid,
    userId: req.body.seller_id,
    quantity: req.body.quantity,
  };
  let obj = await db.products.create(prodobj);
  res.send(obj);
};

const findProductbyName = async (req, res) => {
  console.log(req.params.name);
  let obj = await db.products.findAll({ where: { name: req.params.name } });
  res.send(obj);
};

const findProductbyCat = async (req, res) => {
  let catobj = await db.categ.findOne({ where: { name: req.params.catname } });
  let objs = await db.products.findAll({
    where: { categId: catobj.dataValues.id },
  });
  res.send(objs);
};

const findProductsbyCatId = async (req, res) => {
  const cat_id = req.params.id;
  let objarr = await db.products.findAll({
    where: {
      categId: cat_id,
    },
  });

  res.send(objarr);
};

const findProductById = async (req, res) => {
  let req_id = req.params.id;
  const prod = await db.products.findOne({
    where: {
      id: req_id,
    },
  });
  res.send(prod);
};

const findMyProducts = async (req, res) => {
  let uid = req.params.id;
  const prod = await db.products.findAll({
    where: {
      userId: uid,
    },
  });
  res.send(prod);
};

module.exports = {
  getAllProd,
  addProduct,
  findProductbyName,
  findProductbyCat,
  findProductById,
  findProductsbyCatId,
  findMyProducts,
};
