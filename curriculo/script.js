function menuDisplay() {
    var checkBox = document.getElementById("chkMenu");
    var nav = document.getElementById("navigation");

    if (checkBox.checked == true) {
        nav.style.display = "grid";
    }
    else {
        nav.style.display = "none";
    }
}

let numPage = 1;
mostrarPagina(numPage);

function change(n){
    mostrarPagina(numPage += n);
}


function mostrarPagina(n){
    let i;
    let Info = document.getElementById("Info");
    let ObJ = document.getElementById("Obj");
    let Cursos = document.getElementById("Cursos")
    let Forma = document.getElementById("Forma");
    let pages = [Info, Obj, Cursos, Forma];
    if(numPage > 4){
        numPage = 1;
    }
    if(numPage < 1){
        numPage = 4;
    }
    for(i = 0; i < pages.length; i++){
        pages[i].style.display = "none";
    }
    pages[numPage-1].style.display = "block";
    alert(numPage);

}





