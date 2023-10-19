const express = require('express');
const { products } = require('./data');

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><a href = "/api/products">Product details</a>')
})

app.get('/api/products', (req, res) => {
    const newProduct = products.map((product) => {
        const { id, name, image } = product;
        return { id, name, image };
    })
    res.json(newProduct)
})

// params - /:[]

app.get('/api/products/:productId', (req, res) => {
    // console.log(req.params)
    const { productId } = req.params;
    const singleProduct = products.find(product => product.id === Number(productId));
    if (!singleProduct) {
        return res.status(404).send(`<hi>Product with id: ${ productId } does not exist</hi>`)
    }
    console.log('single product: ', singleProduct)
    return res.json(singleProduct);
})

// app.get('/api/v1/info', (req, res) => {
//     // console.log(req.query);
//     const { limit, search } = req.query;
//     let sortedProducts = [...products];
//     if (search) {
//         sortedProducts = sortedProducts.filter((product) => {
//             return product.name.startsWith(search)
//         })
//     }
//     if (limit) {
//         sortedProducts = sortedProducts.slice(0,Number(limit))
//     }
//     res.status(200).json(sortedProducts)
// })

app.listen(5000, () => {
    console.log('Server started at port 5000...')
})