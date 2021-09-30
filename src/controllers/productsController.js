const productsController = {
    list: (req, res) =>{
		res.render('./products/productos', {titulo: "Red Impact - Productos"});
	},
	   //muestra todos los productos para hombres
    productosInd: (req,res) =>{
        res.render('./products/productosInd', {titulo: "Red Impact - Indumentaria"});
    },
    detail: (req, res) =>{
        res.render('./products/productDetail', {titulo: "Red Impact - Producto número 1"});
    }
}  

module.exports = productsController;