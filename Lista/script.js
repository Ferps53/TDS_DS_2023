const input = window.document.getElementById("input");
const li = window.document.getElementById("li");
const ul = document.querySelector("ul");

function add(){
    var li = document.createElement("li");
    var value = input.value;
    var value_li = document.createTextNode(value);

    if(value!=null){
        li.appendChild(value_li);
        ul.appendChild(li);
    }
    
}



