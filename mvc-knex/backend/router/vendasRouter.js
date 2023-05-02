const express = require("express");
const vendasController = require("../controller/vendas.controller")

const router = new express.Router();

router.get("/vendas", vendasController.vendas);
router.get("/vendas/:id([0-9]+)", vendasController.vendasID)
router.post("/vendas", vendasController.adicionarVendas)
router.put("/vendas/:id([0-9]+)", vendasController.atualizarVendas) 
router.delete("/vendas/:id([0-9]+)", vendasController.deletarVendas)

module.exports = router