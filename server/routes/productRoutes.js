const express = require('express');
const router = express.Router();
const products = require('../data/products.json'); // 假设商品数据存储在 products.json 文件中

// 获取所有商品
router.get('/products', (req, res) => {
    res.json(products);
});

// 根据 ID 获取单个商品
router.get('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id, 10);
    const product = products.find(p => p.id === productId);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

module.exports = router; 