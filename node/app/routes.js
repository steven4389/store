const express = require('express');
const router = express.Router();

// Importar controladores
const UserController = require('./controllers/UserController');
const ProductController = require('./controllers/ProductController');

// Products
router.post('/', ProductController.create);
router.get('/getByName/:name', ProductController.showByKeyWord);
router.get('/', ProductController.sowAll);
router.get('/:id', ProductController.showById);
router.patch('/:id', ProductController.update);
router.delete('/:id', ProductController.delete);

module.exports = router;
