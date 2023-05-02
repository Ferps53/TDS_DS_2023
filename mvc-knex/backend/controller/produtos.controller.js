const produtosRepository = require("../repository/produtos.repository")

    
module.exports = {
    produtos: (req,res) => {
        produtosRepository.find().then((result) => {
            res.send(result);
        })
        .catch((error)=>{
            res.status(500).send(error)
        })
    },
    produtosID: (req,res) =>{
        const id =req.params.id;
        produtosRepository.findId(id).then((result) =>{
            res.send(result);
        })
        .catch((error) =>{
            res.status(500).send(error)
        })
    },
    adicionarProduto: (req,res) =>{
        produtosRepository.insert(req.body).then((result) =>{
            res.send(req.body).status(201)
        })
    },
    atualizarProduto: (req,res) =>{
        const id = req.params.id
        produtosRepository.update(req.body, id).then((result)=>{
            res.send("Produto Alterado").status(200)
            console.log("foi")
        })
        .catch((error) =>{
            res.status(500).send(error)
            console.log(error)
        })
    },
    deletarProduto: (req,res) =>{
        const id = req.params.id
        produtosRepository.delete(id).then((result)=>{
            res.send("Produto deletado")
        })
        .catch((error)=>{
            res.status(500).send(error)
        })
    }


}