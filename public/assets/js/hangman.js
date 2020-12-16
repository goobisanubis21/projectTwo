$(document).ready(function(){
    var clicked = []
    var wordArr = []


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


        console.log(letterClicked)
    })


});
