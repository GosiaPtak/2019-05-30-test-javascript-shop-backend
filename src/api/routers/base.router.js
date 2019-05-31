const express = require('express');
const router = express.Router();

const products = require('../../../fakes/fake-products.json').products;

router.get('/recent-products', (req, res) => {
    res.json(products.slice(0, 8));
});

router.get('/products', (req, res) => {
    res.json(products);
});
router.get('/', (req, res) => {
    res.end('ok');
});

module.exports = (app) =>{
    app.use(router);
}

