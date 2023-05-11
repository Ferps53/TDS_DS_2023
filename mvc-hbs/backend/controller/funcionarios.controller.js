const funcionariosRepository = require("../repository/funcionarios.repository")

    
module.exports = {
    funcionarios: (req,res) => {
        funcionariosRepository.find().then((result) => {
            res.send(result);
        })
        .catch((error)=>{
            res.status(500).send(error)
        })
    },
    funcionariosID: (req,res) =>{
        const id =req.params.id;
        funcionariosRepository.findId(id).then((result) =>{
            res.send(result);
        })
        .catch((error) =>{
            res.status(500).send(error)
        })
    },
    adicionarFuncionario: (req,res) =>{
        funcionariosRepository.insert(req.body).then((result) =>{
            res.send(req.body).status(201)
        })
    },
    atualizarFuncionario: (req,res) =>{
        const id = req.params.id
        funcionariosRepository.update(req.body, id).then((result)=>{
            res.send("Funcionario Alterado").status(200)
            console.log("foi")
        })
        .catch((error) =>{
            res.status(500).send(error)
            console.log(error)
        })
    },
    deletarFuncionario: (req,res) =>{
        const id = req.params.id
        funcionariosRepository.delete(id).then((result)=>{
            res.send("Funcionario deletado")
        })
        .catch((error)=>{
            res.status(500).send(error)
        })
    }


}