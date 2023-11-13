const expres = require("express");
const router = expres.Router();

const favController = require("../controllers/favController");

router.get("/findAllFav/:id", favController.findFavofUser);
router.post("/addFav", favController.addFav);
router.post("/removeFromFav", favController.removeFromfav);

module.exports = router;
