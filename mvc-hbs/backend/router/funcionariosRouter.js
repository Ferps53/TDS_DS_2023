const express = require("express");
const funcionariosController = require("../controller/funcionarios.controller")

const router = new express.Router();

router.get("/funcionarios", funcionariosController.funcionarios);
router.get("/funcionarios/:id([0-9]+)", funcionariosController.funcionariosID)
router.post("/funcionarios", funcionariosController.adicionarFuncionario)
router.put("/funcionarios/:id([0-9]+)", funcionariosController.atualizarFuncionario) 
router.delete("/funcionarios/:id([0-9]+)", funcionariosController.deletarFuncionario)

module.exports = router