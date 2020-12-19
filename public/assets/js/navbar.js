$(document).ready(function () {
    $("body").prepend(` <nav class="navbar navbar-expand-lg navbar-light bg-light" id="zIndex">
<div class="container-fluid">
    <a class="navbar-brand" href="#">HangdOut</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-4">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/highscore">Highscores</a>
            </li>
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/game">Play Hangman</a>
            </li>
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/login">Logout</a>
            </li>
        </ul>
        
         
    </div>
    
</div>
</nav>

<div class="sidenav">
        <a href="">
            <h1> HangdOut </h1></a>
        <a href="">Dunno</a>
        <a href="">Highscores</a>
        <a href="">Games</a>
        <a href="">Logout</a>
    </div>`);
});