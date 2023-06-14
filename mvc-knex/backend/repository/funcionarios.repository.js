const connection = require("../mysql-connection.js")

module.exports = {
    find: () =>{
        return connection.select().from("funcionarios")
    },
    findId: (id) =>{
        return connection.where("id", "=", id).select().from("funcionarios")
    },
    insert: (data) =>{
        return connection.insert(data).into("funcionarios")
    },
    update: (data, id) =>{
        return connection("funcionarios").update(data).where("id", "=", id)
    },
    delete: (id)=>{
        return connection("funcionarios").del().where("id", "=", id)
    }
    
}