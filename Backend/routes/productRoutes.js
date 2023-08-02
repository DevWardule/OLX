const express = require("express");
const db = require("../models/server");
const router = express.Router();
const productController = require("../controllers/productController");
const paginationObj = require("../middlewares/pagination");

const pagination = paginationObj.pagination;

const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: "frontend/public/Images",
  filename: (req, file, cb) => {
    console.log("the file is", file);
    return cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

// const upload = multer({ dest: 'images/' }).single('image_url');

router.get("/getAllProd", productController.getAllProd);

router.post(
  "/addProduct",
  upload.single("image_url"),
  productController.addProduct
);
router.get("/findbyname/:name", productController.findProductbyName);
router.get("/findbycat/:catname", productController.findProductbyCat);
router.get("/findprodbyid/:id", productController.findProductById);
router.get("/findprodbycatid/:id", productController.findProductsbyCatId);
router.get("/findmyprod/:id", productController.findMyProducts);

module.exports = router;
