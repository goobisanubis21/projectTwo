$(document).ready(function () {
    $("#btnSignUp").on("click", function () {
        window.location = "/signup";
    });

    var emailInput = $("#username");
    var passwordInput = $("#password");

    $("#btnLogin").on("click", function (event) {
        event.preventDefault();
        var user = {
            email: emailInput.val(),
            password: passwordInput.val()
        };

        if (!user.email || !user.password) {
            return;
        }

        login(user.email, user.password);
        emailInput.val("");
        passwordInput.val("");
    });

    function login(email, password) {
        $.post("/api/login", {
            email: email,
            password: password
        }).then(function () {
            window.location.replace("/");
        }).catch(function (err) {
            console.log(err);
            $("#errorMessage").text("Invalid Username or Password");
            $("#errorMessage").css("color", "red");
        })
    }
});