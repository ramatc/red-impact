const fs = require('fs');
const path = require('path');

const mainController = {
    index: (req, res) => {
		res.render('index', {titulo: "RED IMPACT"});
	},

}  

module.exports = mainController