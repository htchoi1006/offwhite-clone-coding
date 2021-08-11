$(document).ready(function () {
    var menu = document.getElementById("sortBy")
    menu.onmouseover = function (){
        document.getElementById("filters").style.display="none";
    }
    menu.onmouseout = function (){
        document.getElementById("filters").style.display="inline-block";
    }

});