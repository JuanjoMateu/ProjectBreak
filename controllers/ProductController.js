const Product = require('../models/Products')

const ProductController = {
    async createProduct(req, res) {
        try {
            const product = await Product.create({ ...req.body, completed: false })
            res.status(201).send(product)
        } catch (error) {
            console.log(error)
        }
    },
    async getAllProducts(req, res) {
        try {
            const product = await Product.find()
            res.json(product)
        } catch (error) {
            console.log(error)
        }
    },
    async getAllProductsSSR(req, res) {
        try {
            const product = await Product.find()
            res.send(`
                <h1>Todos los productos</h1>
                ${product.map(product => {
                return (
                    `<div>
                        <h2>${product.nombre}</h2>
                        <p>${product.descripcion}</p>
                        <p>${product.categoria}</p>
                        <p>${product.talla}</p>
                        <p>${product.precio}</p>
                        </div>`
                )
            }).join('')}
            `)
        } catch (error) {
            console.log(error)
        }
    },
    async getProductByID(req, res) {
        try {
            const id = req.params._id
            const product = await Product.findById(id)
            res.json(product)
        } catch (error) {
            console.log(error)
        }
    },
    async deleteProduct(req, res) {
        try {
            const id = req.params._id
            const deleteProduct = await Product.findByIdAndDelete(id)
            if (!deleteProduct) {
                return res.status(404).json({ mensaje: "Product not exist" })
            }
            res.json({ mensaje: "Product deleted", deleteProduct })
        } catch (error) {
            console.log(error)
        }
    },
    async updateProductName(req, res) {
        try {
          const id = req.params._id
          const nombre = req.body.nombre
          const updateProduct = await Product.findByIdAndUpdate(
            id, {
              nombre
            }, {new: true}
          )
          res.json(updateProduct)
        } catch (error) {
          console.log(error)
        }
    },
    async updateCompleted(req, res) {
        try {
            const id = req.params._id
            const updateProduct = await Product.findByIdAndUpdate(
                id, {
                completed: true
            }, { new: true }
            )
            if (!updateProduct) {
                return res.status(404).json({ mensaje: 'Product not founded' })
            }
            res.json(updateProduct)
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = ProductController