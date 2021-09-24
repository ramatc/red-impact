const productsController = {
    list: (req, res) => {
		res.render('./products/productos', {titulo: "Red Impact - Productos"});
	},
	   //muestra todos los productos para hombres
    productosInd: (req,res) =>{
        res.render('./products/productosInd', {titulo: "Red Impact - Indumentaria"});
    },
}  

module.exports = productsController;