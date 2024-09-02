const express = require('express')
const product = require('../models/companyModel')
const rawProduct = require('../models/rawProductModel')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const products = await product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/comp1', async (req, res) => {
  try {
    const products = await product.find( {company: '1'} );
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/comp2', async (req, res) => {
  try {
    const products = await product.find({company: '2'});
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/rawProduct', async (req, res) => {
  try {
    const rawProducts = await rawProduct.find();
    res.json(rawProducts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/rawProduct/comp1', async (req, res) => {
  try {
    const rawProducts = await rawProduct.find({company: '1'});
    res.json(rawProducts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/rawProduct/comp2', async (req, res) => {
  try {
    const rawProducts = await rawProduct.find({company: '2'});
    res.json(rawProducts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/',async (req,res) => {
  const {date, company, q, model, total} = req.body

  try{
    const newProduct = await product.create({date,company,q,model,total})
    res.status(200).json(product)
  }catch(err){
    res.status(400).json({error : err.message})
  }
  
})

router.post('/rawProduct',async (req,res) => {
  const {date, company, where, source, tones, rate, extraCharge} = req.body

  try{
    const newProduct = await rawProduct.create({date,company,where,source,tones,rate,extraCharge})
    res.status(200).json(rawProduct)
  }catch(err){
    res.status(400).json({error : err.message})
  }
  
})

module.exports = router;