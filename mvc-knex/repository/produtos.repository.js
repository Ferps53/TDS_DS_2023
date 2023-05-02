const connection = require("../mysql-connection.js")

module.exports = {
    find: () =>{
        return connection.select().from("produtos")
    },
    findId: (id) =>{
        return connection.where("produtoid", "=", id).select().from("produtos")
    },
    insert: (data) =>{
        return connection.insert(data).into("produtos")
    },
    update: (data, id) =>{
        return connection("produtos").update(data).where("produtoid", "=", id)
    },
    delete: (id)=>{
        return connection("produtos").del().where("produtoid", "=", id)
    }
    
}