const connection = require("../mysql-connection.js")

module.exports = {
    find: () =>{
        return connection.select().from("FUNCIONARIOS")
    },
    findId: (id) =>{
        return connection.where("id", "=", id).select().from("FUNCIONARIOS")
    },
    insert: (data) =>{
        return connection.insert(data).into("FUNCIONARIOS")
    },
    update: (data, id) =>{
        return connection("FUNCIONARIOS").update(data).where("id", "=", id)
    },
    delete: (id)=>{
        return connection("FUNCIONARIOS").del().where("id", "=", id)
    }
    
}