const repo = require("../repo/alunoRepo")

module.exports = {
    find: (req,res) => {
        repo.find().then((result) => {
            res.send(result);
        })
        .catch((error)=>{
            res.status(500).send(error)
        })
    },
    findId: (req,res) =>{
        const id =req.params.id;
        repo.findId(id).then((result) =>{
            res.send(result);
        })
        .catch((error) =>{
            res.status(500).send(error)
        })
    },
    insert: (req,res) =>{
        repo.insert(req.body).then((result) =>{
            res.send(req.body).status(201)
        })
    },
    update: (req,res) =>{
        const id = req.params.id
        repo.update(req.body, id).then((result)=>{
            res.send("dados do aluno redefinidos").status(200)
            console.log("foi")
        })
        .catch((error) =>{
            res.status(500).send(error)
            console.log(error)
        })
    },
    delete: (req,res) =>{
        const id = req.params.id
        repo.delete(id).then((result)=>{
            res.send("Aluno deletado")
        })
        .catch((error)=>{
            res.status(500).send(error)
        })
    }


}