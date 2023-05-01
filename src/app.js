import express from 'express';
import ProductManager from './productManager.js';

const pm = new ProductManager('./products.json')
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/products', async (req, res) => {

    //let productList = await pm.getProducts();
    res.send(await pm.getProducts());
});

app.listen(8080, () => {

    console.log('Escuchando puerto 8080');

});

