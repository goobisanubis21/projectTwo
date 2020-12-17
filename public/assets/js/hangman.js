$(document).ready(function(){
    var clicked = []
    var wordArr = []
    var numWrong = 0
    var word

    $.get('/api/get-word/', function(data) {
        word = data.toUpperCase()
        console.log(word)
        
        wordArr = [...word]

        var wordLen = word.length
        
        for(let i = 0; i < wordLen; i++) {
            $("#wordContainer").append(
                `<div id="letter${i}" class="incorrectLetter"></div>`
            )

        }
    }) 

    $(".letterButton").on('click', function(){
        $(this).prop('disabled', true)
        var letterClicked = $(this).attr('data-letter')
        clicked.push(letterClicked)

        if(wordArr.includes(letterClicked)) {
            var letterIndex = []

            wordArr.forEach((e,i) => {
                if (letterClicked == e) {
                    letterIndex.push(i)
                }
            });
            
            letterIndex.forEach(e => {
                $("#letter" + e).text(letterClicked)
                $("#letter" + e).removeClass("incorrectLetter")
            });

            if(document.getElementsByClassName('incorrectLetter').length == 0) {
                complete()
            }

        }
        else {
            numWrong++;
            wrongLetter(numWrong)

        }
    })

    $("#guessButton").on('click',function() {
        let guess = prompt("what is your guess")

        if (word == guess.toUpperCase()) {
            complete()
        }
        else {
            wrongLetter(numWrong)
        }
    });

    $("#cancelButton").on('click',function() {
        if(confirm("are your sure you want to quit?")) {
            window.location.href = '/';
        }
    });
    
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
        disableAll()
        $('#points').text(0);
    }
    else {
        let currNum = $('#points').text()
        $('#points').text(parseInt(currNum) - 10);
    }
}

function disableAll() {
    $(".btn").prop('disabled', true)
}

function complete() {
    disableAll()
}