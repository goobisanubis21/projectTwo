$(document).ready(function () {
    var clicked = []
    var wordArr = []
    var numWrong = 0;
    var word
    var score = 100;

    var userData;
    var userId;

    $.get('/api/user', function (data) {
        console.log(data)
        userId = data.id
    }).then(function () {
        $.get('/api/game/' + userId, function (data) {
            userData = data[0];
            console.log(userData)

            //
            $.get('/api/get-word/', function (data) {
                word = data.toUpperCase()
                console.log(word)

                wordArr = [...word]

                var wordLen = word.length

                for (let i = 0; i < wordLen; i++) {
                    $("#wordContainer").append(
                        `<div id="letter${i}" class="incorrectLetter"></div>`
                    )
                }
            })

            //Get user data on page load

            var winStreak = userData.winStreak;
            var combineScore = userData.combineScore;
            var currWinStreak = userData.currWinStreak;
            var currCombineScore = userData.currCombineScore;

            $(".letterButton").on('click', function () {
                $(this).prop('disabled', true)
                var letterClicked = $(this).attr('data-letter')
                clicked.push(letterClicked)

                if (wordArr.includes(letterClicked)) {
                    var letterIndex = []

                    wordArr.forEach((e, i) => {
                        if (letterClicked == e) {
                            letterIndex.push(i)
                        }
                    });

                    letterIndex.forEach(e => {
                        $("#letter" + e).text(letterClicked)
                        $("#letter" + e).removeClass("incorrectLetter")
                    });

                    if (document.getElementsByClassName('incorrectLetter').length == 0) {
                        complete()
                    }

                }
                else {
                    numWrong++;
                    wrongLetter(numWrong)

                }
            })

            $("#guessButton").on('click', function () {
                let guess = prompt("what is your guess")

                if (word == guess.toUpperCase()) {
                    let currNum = $('#points').text();
                    score = parseInt(currNum);
                    complete()
                }
                else {
                    numWrong++;
                    wrongLetter(numWrong)
                }
            });

            $("#cancelButton").on('click', function () {
                if (confirm("are your sure you want to quit?")) {
                    window.location.href = '/';
                }
            });

            $("#tryAgain").on('click', function () {
                window.location.href = '/game';
            });

            $("#leaveGame").on('click', function () {
                window.location.href = '/';
            });




            function wrongLetter(numWrong) {

                switch (numWrong) {

                    case 1:
                        $("#gameImage").attr("src", "./assets/images/hangman/oneWrong.png");
                        break;

                    case 2:
                        $("#gameImage").attr("src", "./assets/images/hangman/twoWrong.png");
                        break;

                    case 3:
                        $("#gameImage").attr("src", "./assets/images/hangman/threeWrong.png");
                        break;

                    case 4:
                        $("#gameImage").attr("src", "./assets/images/hangman/fourWrong.png");
                        break;

                    case 5:
                        $("#gameImage").attr("src", "./assets/images/hangman/fiveWrong.png");
                        break;

                    case 6:
                        $("#gameImage").attr("src", "./assets/images/hangman/sixWrong.png");
                        break;
                }

                if (numWrong == 6) {
                    //logic to end game
                    score = 0;
                    $('#points').text(score);
                    complete()
                }
                else {
                    let currNum = $('#points').text()
                    score = parseInt(currNum) - 10;
                    $('#points').text(score);
                }
            }

            function disableAll() {
                $(".gameButton").prop('disabled', true)
            }

            function complete() {
                disableAll()

                $("#finishModalContainer").removeClass('hidden')
                $("#finalScore").text(score);

                if (score == 0) {
                    resetWin()
                }
                else {

                    currWinStreak++;
                    currCombineScore += score;

                    $("#winStreak").text(currWinStreak);
                    $("#combineScore").text(currCombineScore);

                    if(currWinStreak > winStreak) {
                        updateWin()
                        newBest()
                    }

                    else {
                        updateWin()
                    }

                }

            }

            function updateWin() {
                $.ajax({
                    method: "PUT",
                    url:"/api/game-score/" + userId + "/" + currWinStreak + "/" + currCombineScore
                }).then(function(res){

                })
            }

            function resetWin() {
                $("#winStreak").text("0");
                $("#combineScore").text("0");

                $.ajax({
                    method: "PUT",
                    url:"/api/game-score/" + userId + "/0/0"
                }).then(function(res){
                    
                })
            }

            function newBest() {
                $.ajax({
                    method: "PUT",
                    url:"/api/game-best/" + userId + "/" + currWinStreak + "/" + currCombineScore
                }).then(function(res){

                })
            }
        });
    });
});