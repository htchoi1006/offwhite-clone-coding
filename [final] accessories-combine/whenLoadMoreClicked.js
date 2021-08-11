$(document).ready(function () {
    var loadmore = document.getElementById("loadMore")
    loadmore.onclick = function (){
        document.getElementById("loadMore-section").style.display="block";
        document.getElementById("loadMore").style.display="none";
    }
    // loadmore.onmouseout = function (){
    //     document.getElementById("filters").style.display="inline-block";
    // }

});