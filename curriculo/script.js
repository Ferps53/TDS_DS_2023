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

