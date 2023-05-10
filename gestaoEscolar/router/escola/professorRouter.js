const repo = require("../../controller/professorController");
const express = require("express");

const router = new express.Router();

router.get("/professor", repo.find)
router.get("/professor/:id([0-9]+)", repo.findId)
router.post("/professor", repo.insert)
router.put("/professor/:id([0-9]+)", repo.update)
router.delete("/professor/:id([0-9]+)", repo.delete)

module.exports = router

