$(document).ready(function () {
    $("body").prepend(`
<div class="sidenav">
        <a href="/">
        <h1 id="navTitle"> HangdOut </h1></a>
        <a href="/">Home</a>
        <a href="/highscore">Highscores</a>
        <a href="/game">Play Hangman</a>
        <a href="/login">Logout</a>
        <button id = "deleteMe">Delete Account</button>
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
                window.replace("/login")
            })
        })
    })
});