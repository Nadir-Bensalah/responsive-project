var modal = document.getElementById("myModal");


var btn = document.getElementById("myBtn");


var span = document.getElementsByClassName("close")[0];

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

var modal2 = document.getElementById("modal2");

var btn2 = document.getElementById("reservation");



btn2.onclick = function () {
    modal2.style.display = "block";
}


span2.onclick = function () {
    modal2.style.display = "none";
}






