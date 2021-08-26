const productsController = {
    list: (req, res) => {
		res.render('./products/productos', {titulo: "Red Impact - Productos"});
	}
}  

module.exports = productsController;