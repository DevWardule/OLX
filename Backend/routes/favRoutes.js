const expres = require('express');
const router = expres.Router();

const favController = require('../controllers/favController');

router.get('/findAllFav/:id',favController.findFavofUser);
router.post('/addFav',favController.addFav);

module.exports = router;