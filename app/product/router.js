const router = require('express').Router();
const Product = require('./model')
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { where } = require('sequelize');
const upload = multer({dest: 'uploads'})

router.post('/product', upload.single('image'), async (req, res) => {
    const { name, price, stock, status } = req.body;
    const image = req.file;
    if(image){
        const target = path.join(__dirname, '../../uploads', image.originalname)
        fs.renameSync(image.path, target);
        try{
            await Product.sync();
            const result = await Product.create({ name, price, stock, status, image_url: `http://localhost:3000/public/${image.originalname}`});
            res.send(result);
        }catch(e){
            res.status(500).send(e);
        }
    }
    
});

router.get('/product', async (req, res) => {
    try {
        const products = await Product.findAll();
        res.send(products);
    } catch (e) {
        res.status(500).send(e);
    }
});

router.delete('/product/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await Product.destroy({
            where: {
              id: id,
            },
          });
        res.send({ message: 'Product deleted successfully' });
    } catch (e) {
        res.status(500).send(e);
    }
});

router.patch('/product/:id', upload.single('image'), async (req, res) => {
    const { id } = req.params;
    const { name, price, stock, status } = req.body;
    const image = req.file;
    if(image){
        const target = path.join(__dirname, '../../uploads', image.originalname)
        fs.renameSync(image.path, target);
        try {
            await Product.update(
                { name, price, stock, status, image_url: `http://localhost:3000/public/${image.originalname}` },
                {
                    where:{
                        id: id
                    }
                }
            );
            const updatedProduct = await Product.findByPk(id);
            res.send(updatedProduct);
        } catch (e) {
            console.error('Error updating product:', e);
            res.status(500).send(e);
        }
    }else{
        try {
            await Product.update(
                { name, price, stock, status },
                {
                    where:{
                        id: id
                    }
                }
            );
            const updatedProduct = await Product.findByPk(id);
            res.send(updatedProduct);
        } catch (e) {
            console.error('Error updating product:', e);
            res.status(500).send(e);
        }
    }
    
});

module.exports = router;
