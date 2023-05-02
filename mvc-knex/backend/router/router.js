const express = require("express");
const funcionariosRouter = require("./funcionariosRouter")
const produtosRouter = require("./produtos.Router")
const vendasRouter = require("./vendasRouter")

const router = new express.Router();

router.use("/", funcionariosRouter)
router.use("/", produtosRouter)
router.use("/", vendasRouter)

module.exports = router