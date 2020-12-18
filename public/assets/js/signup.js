$(document).ready(function () {
    $("#btnSignUp").on("click", function (e) {
        e.preventDefault;
        var userName = $("#Username").val().trim();
        var passWord = $("#Password").val().trim();
        var conFirm = $("#Confirm").val().trim();
        console.log(userName);
        console.log(passWord);
        userData = {
            username: userName,
            password: passWord
        };
        
        var {name, pass} = userData;

        if(!name || !pass || pass != conFirm ){
            return;
        }

        postToServer(name, pass);
        name.val("");
        pass.val("");
    });

    function postToServer(name, password){
        $.post("/api/signup", {
            email: name,
            password: password
        }).then(function (data) {
            window.location.replace("/");
        }).catch(handleErr);
    }

    function handleErr(err) {
        $("#error").text(err.responseJSON);
    }
});