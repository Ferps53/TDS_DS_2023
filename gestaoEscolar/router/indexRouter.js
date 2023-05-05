const express = require("express");

const router = new express.Router();

const alunoRouter = require("./escola/alunoRouter");
const turmaRouter = require("./escola/turmaRouter");
const professorRouter = require("./escola/professorRouter");

router.use("/", alunoRouter);
router.use("/", turmaRouter);
router.use("/", professorRouter);

module.exports = router