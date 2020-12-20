$(document).ready(function () {
    var userName = $("#Username");
    var passWord = $("#Password");
    var conFirm = $("#Confirm");
    $("#btnSignUp").on("click", function (e) {
        e.preventDefault;
        userData = {
            username: userName.val().trim(),
            password: passWord.val().trim()
        };

        if(!userData.username || !userData.password || userData.password != conFirm.val().trim()){
            return;
        }

        postToServer(userData.username, userData.password);
        userName.val("");
        passWord.val("");
    });

    function postToServer(name, password){
        $.post("/api/signup", {
            email: name,
            password: password
        }).then(function (data) {
            $.post("/api/game/" + data.id, function(data) {
                window.location.replace("/login");
            })
        });
    }
});