const express = require(express);
const router = require("./router/indexRouter")

const app = express();

app.use(express.json());
app.use(router)

app.listen(8080, (error)=>{
    if(error){
        console.log(error);
    }
    console.log("Servidor Rodando")
})