$(document).ready(function(){
    $.get('/api/game/', function(data) {

        console.log(data)

        $.get('/api/user', function(res){

            const userData = data.find( ({ UserId }) => UserId === res.id );
            $("#uStreak").append(`<p>${userData.winStreak}</p>`)
            $("#uScore").append(`<p>${userData.combineScore}</p>`)

    
            data.forEach(e => {
                addToRow("gUser",e.User.email,e.UserId)
                addToRow("gStreak",e.winStreak)
                addToRow("gScore",e.combineScore)
            });
        })

    })

});

function addToRow(rowId,val,id) {
    $("#" + rowId).append(
        `<li id="${id}">${val}</li>`
    )
}