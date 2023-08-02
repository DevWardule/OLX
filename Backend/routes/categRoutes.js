const express = require('express');
const router = express.Router();
const categController = require('../controllers/categController')

// console.log('Defining userRoutes...');

router.get('/getAllCateg',categController.getAllCateg);
router.post('/addCateg',categController.addCateg);

// router.get('/getAllUsers', (req, res) => {
//   res.send('Hello from userRoutes!');
// });

module.exports = router;
