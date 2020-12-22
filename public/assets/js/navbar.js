$(document).ready(function () {
    var openNav = true;
    $("body").prepend(`
    <div class="sidenav" id="navbar">
        <a href="/">
        <h1 id="navTitle"> H </h1></a>
        <div id="container" > <a href="/"> <span class="material-icons-outlined">
        home
        </span> Home</a> </div>
        <hr class="solid">
        <div id="container"> <a href="/highscore"><span class="material-icons-outlined">
        score
        </span>Highscores</a> </div>
        <hr class="solid">
        <div id="container"> <a href="/game"><span class="material-icons-outlined">
        videogame_asset
        </span>Play Hangman</a> </div>
        <hr class="solid">
        <div id="container"> <a href="/login"><span class="material-icons-outlined">
        power_settings_new
        </span>Logout</a> </div>
        <button class="btn btn-danger" id = "deleteMe">Delete Account</button>
    </div>`);

    $("#deleteMe").on("click", function () {
        var userId;
        $.get("/api/user", function (data) {
            userId = data.id;
        }).then(function () {
            $.ajax({
                method: "DELETE",
                url: "/api/users/" + userId
            }).then(function () {
                window.location.replace("/login");
            });
        });
    });

    $("#hideNav").on("click", function () {
        if (openNav) {
            $("#navbar").addClass("sidenavCollapsed");
            $("body").css("margin-left", "0px");
            openNav = false;
        } else {
            $("#navbar").removeClass("sidenavCollapsed");
            $("body").css("margin-left", "250px");
            openNav = true;
        }
    });
});