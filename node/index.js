const bodyParser = require('body-parser');
const express =require("express");

const userCorrect={
     user : "Ferps53",
     password : "ferps"
}


const app = express();
app.use(bodyParser.json());
app.get("/", [], (request, response) => {
    response.send("<h1>Hello World!</h1>")
})

app.post("/login", (request,response) =>{
    const {user, password} = request.body

    if (user === userCorrect.user && password === userCorrect.password){
        response.send({
            message: "autenticado",
            })
    }else{
        response.send({message: "errou"})
    }
    
})

app.listen(8080, (error)=>{
    if(error){
        console.error(error);
    }else{
        console.log("Server on Piazada!!!")
    }


})