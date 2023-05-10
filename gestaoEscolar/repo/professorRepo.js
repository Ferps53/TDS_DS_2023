const con = require("../connection");

module.exports = {
    find: () =>{
        return con.select().from("professores")
    },
    findId: (id) =>{
        return con.select().from("professores").where("id", "=", id);
    },
    update: (id, body) =>{
        return con("professores").update(body).where("id", "=", id);
    },
    insert: (body) =>{
        return con("professores").insert(body);
    },
    delete: (id) =>{
        return con("professores").del().where("id", "=", id);
    },
}
