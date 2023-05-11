const vendasRepository = require("../repository/vendas.repository")

    
module.exports = {
  
    vendas: (req,res) => {
        vendasRepository.find().then((result) => {
            res.send(result);
        })
        .catch((error)=>{
            res.status(500).send(error)
        })
    },
    vendasID: (req,res) =>{
        const id =req.params.id;
        vendasRepository.findId(id).then((result) =>{
            res.send(result);
        })
        .catch((error) =>{
            res.status(500).send(error)
        })
    },
    adicionarVendas: (req,res) =>{
        vendasRepository.insert(req.body).then((result) =>{
            res.send(req.body).status(201)
            this.vendasID
        })
    },
    atualizarVendas: (req,res) =>{
        const id = req.params.id
        vendasRepository.update(req.body, id).then((result)=>{
            res.send("Venda Alterada").status(200)
            console.log("foi")
        })
        .catch((error) =>{
            res.status(500).send(error)
            console.log(error)
        })
    },
    deletarVendas: (req,res) =>{
        const id = req.params.id
        vendasRepository.delete(id).then((result)=>{
            res.send("Venda deletada")
        })
        .catch((error)=>{
            res.status(500).send(error)
        })
    }


}