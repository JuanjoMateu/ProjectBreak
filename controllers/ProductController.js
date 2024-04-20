const Product = require('../models/Products')

const ProductController = {
    async create(req, res) {
        try {
            const product = await Product.create({ ...req.body, completed: false })
            res.status(201).send(product)
        } catch (error) {
            console.log(error)
        }
    },
    async getAll(req, res) {
        try {
            const product = await Product.find()
            res.json(product)
        } catch (error) {
            console.log(error)
        }
    },
    async getAllSSR(req, res) {
        try {
            const product = await Product.find()
            res.send(`
                <h1>Todos los productos</h1>
                ${product.map(task => {
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
    async getByID(req, res) {
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
    async updateByName(req, res) {
        try {
          const id = req.params._id
          const title = req.body.title
          const updateProduct = await Product.findByIdAndUpdate(
            id, {
              title
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