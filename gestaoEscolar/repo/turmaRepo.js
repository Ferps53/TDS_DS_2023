const con = require("../connection");

module.exports = {
    find: () =>{
        return con.select().from("turmas").join("alunos", "alunos.id", "turmas.ALUNO_ID")
        .join("professores", "professores.ID", "turmas.PROFESSOR_ID")
    },
    findId: (id) =>{
        return con.select().from("turmas").where("turmas.id", "=", id).innerJoin("alunos", "alunos.id", "turmas.ALUNO_ID")
        .innerJoin("professores", "professores.ID", "turmas.PROFESSOR_ID")
    },
    update: (id, body) =>{
        return con("turmas").update(body).where("id", "=", id);
    },
    insert: (body) =>{
        return con("turmas").insert(body);
    },
    delete: (id) =>{
        return con("turmas").del().where("id", "=", id);
    },
}
