let jogar = document.getElementById("Jogar");
let config = document.getElementById("Opcoes");
let creditos = document.getElementById("Creditos");
let saga = document.getElementById("Saga");
let menuCreditos = document.getElementById("menuCreditos")
let menu = document.getElementById("configMenu")
let sairMenu = document.getElementById("sairConfig")
var alt = 0;
var tentavivasFechar = 0;
var raiva = 0;

function startMenu(){
    alert("Bem vindo ao Melhor Jogo\nEsse é o melhor jogo que existe!!\nAproveite ;)")
} 

function Saga(){
    window.location = "../index.html"
} 

function abrirCreditos(){
    menuCreditos.style.display = "flex";
}

function sairCreditos(){
    menuCreditos.style.display ="none"
}

function Jogar(){
    alert("Vc vai ter que me pegar primeiro!😎");
    jogar.style.transition = "0.3ms";
    jogar.style.display = "none";
    saga.style.display = "block"
}

function abrirConfig(){
    menu.style.display = "flex";
}

function salvarConfig(){
    let dificuldade = document.getElementById("dificuldadeRange")
    let volume = document.getElementById("volumeRange")
    localStorage.setItem("dificuldade", dificuldade.value)
    localStorage.setItem("volume", volume.value)
    alert("Configurações Salvas😃")
    alt++;
}

function fecharConfig(){
    if(alt == 0){
        tentavivasFechar ++;
        if(tentavivasFechar < 3){
            alert("Parece que você não salvou suas alterações 😆")
        }
        
        if(tentavivasFechar == 3){
            alert("Amigão é só clickar em salvar...\nNão é tão dificil assim...")
        }
        if(tentavivasFechar >3 && tentavivasFechar <5){
            alert("Sério isso??\n Salve logo e pare de comédia!!😡")
        }
        if(tentavivasFechar == 5){
            alert("🤬🤬🤬\nPronto eu salvei, criatura irratante!")
            menu.style.display = "none"; 
            salvarConfig()
            raiva ++;
        }

    } else{
        alt--;
        menu.style.display = "none"; 
    }
}