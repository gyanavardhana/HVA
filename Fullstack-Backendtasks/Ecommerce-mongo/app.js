// index.js
const express = require('express');
const db = require('./db');
const Category = require("./Models/catalogModel");
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/categories', async (req, res) => {
    try {
        const category = new Category({
            category_name: req?.body?.category_name,
            category_products: req?.body?.category_products || []
        });

        await category.save();
        res.send(category);
    } catch (err) {
        res.status(500).send(err.message);
    }
});


app.delete('/categories/:categoryName', async (req, res) => {
    try {
        const category = await Category.findOneAndDelete({ category_name: req.params.categoryName });
        if (!category) return res.status(404).send('Category not found');

        res.send(category);
    } catch (err) {
        res.status(500).send(err.message);
    }
});


app.post('/categories/:categoryName/products', async (req, res) => {
    try {
        const category = await Category.findOne({ category_name: req?.params?.categoryName });
        if (!category) return res.status(404).send('Category not found');

        category.category_products.push(req?.body);
        await category.save();

        res.send(category);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.get('/categories/:categoryName/products', async (req, res) => {
    try {
        const category = await Category.findOne({ category_name: req?.params?.categoryName });
        if (!category) return res.status(404).send('Category not found');

        res.send(category.category_products);
    } catch (err) {
        res.status(500).send(err.message);
    }
});
app.put('/categories/:categoryName/products/:productId', async (req, res) => {
    try {
        const category = await Category.findOne({ category_name: req?.params?.categoryName });
        if (!category) return res.status(404).send('Category not found');

        const productIndex = category.category_products.findIndex(product => product.id === req?.params?.productId);
        if (productIndex === -1) return res.status(404).send('Product not found');

        category.category_products[productIndex].price = req?.body?.price;
        await category.save();

        res.send(category.category_products[productIndex]);
    } catch (err) {
        res.status(500).send(err.message);
    }
});


app.delete('/categories/:categoryName/products/:productId', async (req, res) => {
    try {
      const category = await Category.findOne({ category_name: req?.params?.categoryName });
      if (!category) return res.status(404).send('Category not found');
  
      const productIndex = category.category_products.findIndex(product => product.id === req?.params?.productId);
      if (productIndex === -1) return res.status(404).send('Product not found');
  
      const [product] = category.category_products.splice(productIndex, 1);
  
      await category.save();
  
      res.send(product);
    } catch (err) {
      res.status(500).send(err.message);
    }
  });
  


app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
