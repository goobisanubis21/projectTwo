$(document).ready(function(){
    var clicked = []
    var wordArr = []
    var numWrong = 0

    $.get('/api/get-word/', function(data) {
        var word = data.toUpperCase()
        console.log(word)
        
        wordArr = [...word]

        var wordLen = word.length
        console.log(wordLen)
        
        for(let i = 0; i < wordLen; i++) {
            $("#wordContainer").append(
                `<div id="letter${i}" class="incorrectLetter"></div>`
            )

        }
        console.log(wordArr)
    }) 

    $(".btn").on('click', function(){
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
            
            console.log(letterIndex)

            letterIndex.forEach(e => {
                $("#letter" + e).text(letterClicked)
                $("#letter" + e).removeClass("incorrectLetter")
            });
        }
        else {
            numWrong++;
            wrongLetter(numWrong)
        }
    })


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
    }
}