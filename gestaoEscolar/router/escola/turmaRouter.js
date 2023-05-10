const repo = require("../../controller/turmaController");
const express = require("express");

const router = new express.Router();

router.get("/turma", repo.find)
router.get("/turma/:id([0-9]+)", repo.findId)
router.post("/turma", repo.insert)
router.put("/turma/:id([0-9]+)", repo.update)
router.delete("/turma/:id([0-9]+)", repo.delete)

module.exports = router

