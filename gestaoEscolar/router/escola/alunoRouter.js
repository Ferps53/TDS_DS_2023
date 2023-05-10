const repo = require("../../controller/alunoController");
const express = require("express");

const router = new express.Router();

router.get("/aluno/", repo.find)
router.get("/aluno/:id([0-9]+)", repo.findId)
router.post("/aluno/", repo.insert)
router.put("/aluno/:id([0-9]+)", repo.update)
router.delete("/aluno/:id([0-9]+)", repo.delete)

module.exports = router