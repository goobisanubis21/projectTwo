$(document).ready(function(){
    addToRow("gUser","test222","1")
    addToRow("gStreak","test222","1")
    addToRow("gScore","test222","1")
});

function addToRow(rowId,val,id) {
    $("#" + rowId).append(
        `<p id="${id}">${val}</p>`
    )
}