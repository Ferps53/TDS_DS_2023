const con = require("../connection");

module.exports = {
    find: () =>{
        return con.select().from("alunos")
    },
    findId: (id) =>{
        return con.select().from("alunos").where("id", "=", id);
    },
    update: (id, body) =>{
        return con("alunos").update(body).where("id", "=", id);
    },
    insert: (body) =>{
        return con("alunos").insert(body);
    },
    delete: (id) =>{
        return con("alunos").del().where("id", "=", id);
    },
}