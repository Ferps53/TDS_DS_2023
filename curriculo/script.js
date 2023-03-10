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


function plus(){
    var numPage = 1;
    var plusButton = document.getElementById("plus");
    if(plusButton.click){
        numPage++;
        alert(numPage);
    }
}


function carrosel(){
    var numPage = 1;
    var plusButton = document.getElementById("plus");
    var minusButton = document.getElementById("minus");

   
    if(minusButton.click){
        numPage--;
    }
    if(numPage < 1){
        numPage = 4;
    }else if(numPage > 4){
        numPage = 1
    }

    switch(numPage){
        case 1:
            //display page 1
            break;
        case 2:
            //display page 2
            break;
        case 3:
            //display page 3
            break;
        case 4:
            //display page 4
            break;
    }


}

