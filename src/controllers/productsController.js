const db = require("../database/models");
const Products = db.Product;
const Categories = db.Category;

const productsController = {
    list: async (req, res) =>{
        Products.findAll()
        .then(response => {
            res.render('./products/productos', {titulo: "Red Impact - Productos", products:response});
        })
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

    detail: async (req, res) =>{
        const categories = await Categories.findAll();
        let Product = await Products.findByPk(req.params.id);
        res.render('./products/productDetail', {titulo: `Red Impact - ${Product.name}`, product: Product, categories});
    }
}  

module.exports = productsController;