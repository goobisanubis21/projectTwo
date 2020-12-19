$(document).ready(function (){
    var id = localStorage.getItem("user");
    
    $("#btnSubmit").on("click", function() {
        $.post($("#statsUpdate").val(), parseInt(id));
    });
});