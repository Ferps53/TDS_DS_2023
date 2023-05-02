const connection = require("../mysql-connection.js")

module.exports = {
    find: () =>{
        return connection.select().from("vendas").innerJoin("FUNCIONARIOS", "FUNCIONARIOS.ID", "vendas.funcionarioID")
        .innerJoin("produtos", "produtos.produtoid", "vendas.produtoID")
    },
    findId: (id) =>{
        return connection.where("vendaID", "=", id).select().from("vendas").innerJoin("FUNCIONARIOS", "FUNCIONARIOS.ID", "vendas.funcionarioID")
        .innerJoin("produtos", "produtos.produtoid", "vendas.produtoID")
    },
    insert: (data) =>{
        return connection.insert(data).into("vendas")
    },
    update: (data, id) =>{
        return connection("vendas").update(data).where("vendaID", "=", id)
    },
    delete: (id)=>{
        return connection("vendas").del().where("vendaID", "=", id)
    }
    
}