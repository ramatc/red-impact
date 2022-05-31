const db = require("../database/models");
const Products = db.Product;

const productsController = {
    list: (req, res) =>{
		res.render('./products/productos', {titulo: "Red Impact - Productos"});
	},

    productosCascos: (req, res) =>{
        Products.findAll()
        .then(response => {
            res.render('./products/productosCascos', {titulo: "Red Impact - Cascos", products:response});
        })
    },

    productosInd: (req, res) =>{
        Products.findAll()
        .then(response => {
            res.render('./products/productosInd', {titulo: "Red Impact - Indumentaria", products:response});
        })
    },

    productosCalzado: (req, res) =>{
        Products.findAll()
        .then(response => {
            res.render('./products/productosCalzado', {titulo: "Red Impact - Calzado", products:response});
        })
    },

    productosEquipamiento: (req, res) =>{
        Products.findAll()
        .then(response => {
            res.render('./products/productosEquipamiento', {titulo: "Red Impact - Equipamiento", products:response});
        })
    },

    productosByM: (req, res) =>{
        Products.findAll()
        .then(response => {
            res.render('./products/productosByM', {titulo: "Red Impact - Bolsos y Mochilas", products:response});
        })
    },

    productosUniformes: (req, res) =>{
        Products.findAll()
        .then(response => {
            res.render('./products/productosUniformes', {titulo: "Red Impact - Uniformes", products:response});
        })
    },

    productosAccesorios: (req, res) =>{
        Products.findAll()
        .then(response => {
            res.render('./products/productosAccesorios', {titulo: "Red Impact - Accesorios", products:response});
        })
    },

    detail: (req, res) =>{
        res.render('./products/productDetail', {titulo: "Red Impact - Producto número 1"});
    }
}  

module.exports = productsController;