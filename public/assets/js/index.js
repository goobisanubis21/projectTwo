$(document).ready(function (){
    const statusArea = $("#statuses");
    var userId;

    $.get("/api/user/", function (data){
        userId = data.id;
    }).then(function () {
        $("#btnSubmit").on("click", function() {
            $.post("/api/status/", {
                text: $("#statusUpdate").val(),
                id: userId
            }).then(function () {
                statusArea.empty();
                $.get("/api/status/").then(function (data) {
                    console.log(data);
                    for(let i = 0; i < data.length; i++) {
                        let card = $("<div>").addClass("card");
                        let cardBody = $("<div>").addClass("card-body");
                        card.append(cardBody);
    
                        let cardTitle = $("<h5>").addClass("card-title");
                        cardTitle.text(data[i].UserId);
                        cardBody.append(cardTitle);
    
                        let cardText = $("<p>").addClass("card-text");
                        cardText.text(data[i].text);
                        cardBody.append(cardText);
    
                        statusArea.prepend(card);
                    }
                });
            });
        });
    });
});