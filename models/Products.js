const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    nombre: String,   
    descripcion: String,
    categoria: { type: String, enum: ['Camisetas', 'Pantalones', 'Zapatos', 'Accesorios'] },
    talla: { type: String, enum: ["XS", "S", "M", "L", "XL"] },
    precio: Number
}, { timestamps: true })
const Products = mongoose.model('Product', ProductSchema )

module.exports = Products