const fs = require('fs');
const path = require('path');
// const db = require('../database/models');
// const Products = db.Product;
// const { Op } = require("sequelize");

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const mainController = {
    index: (req, res) => {
		res.render('index', {titulo: "RED IMPACT"});
	},
	search:(req,res)=>{
        Products.findAll({
            where:{
                name: {[Op.like] : "%" + req.query.search + "%"}
            }
        }).then(response=>{
            let search = req.query.search
            res.render("search",{titulo:"Resultado de tu busqueda" , products:response , toThousand, search})
        })
        
    },
	nosotros: (req, res) => {
		res.render("nosotros", {titulo: "RED IMPACT - NOSOTROS"});
	},
	productos: (req, res) => {
		res.render("productos", {titulo: "RED IMPACT - PRODUCTOS"});
	},
	certificaciones: (req, res) => {
		res.render("certificaciones", {titulo: "RED IMPACT - CERTIFICACIONES"});
	},
	contacto: (req, res) => {
		res.render("contacto", {titulo: "RED IMPACT - CONTACTO"});
	},
	comoLlegar: (req, res) => {
		res.render("como-llegar", {titulo: "RED IMPACT - COMO LLEGAR"});
	}

}  

module.exports = mainController