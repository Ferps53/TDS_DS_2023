const express = require("express");

const router = require("./router/router.js");

const app = express();

app.use(express.json());
app.use(router);

app.listen(3008, (error)=>{
    if (error){
        console.log(error);
    }
    console.log("Server ON!!! Port:3008 🐫");
});