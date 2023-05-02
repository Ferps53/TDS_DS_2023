const express = require("express");
const produtosController = require("../controller/produtos.controller")

const router = new express.Router();

router.get("/produtos", produtosController.produtos);
router.get("/produtos/:id([0-9]+)", produtosController.produtosID)
router.post("/produtos", produtosController.adicionarProduto)
router.put("/produtos/:id([0-9]+)", produtosController.atualizarProduto) 
router.delete("/produtos/:id([0-9]+)", produtosController.deletarProduto)

module.exports = router