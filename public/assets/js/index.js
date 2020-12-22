$(document).ready(function () {
    const statusArea = $("#statuses");

    var userId;
    var statusData;

    $.get("/api/user/", function (res) {
        userId = res.id;
    }).then(function () {
        getStatus () 
    
    });

    $("#btnSubmit").on("click", function () {
        $.post("/api/status/", {
            text: $("#statusUpdate").val(),
            id: userId
        }).then(function () {
            statusArea.empty();
            getStatus ()
        });
    });

    function getStatus () {
        $.get("/api/status/").then(function (data) {

            statusData = data;

            for (let i = 0; i < statusData.length; i++) {
    
                let card = $("<div>").addClass("card");
                let cardBody = $("<div>").addClass("card-body");
                card.append(cardBody);

                let cardTitle = $("<h5>").addClass("card-title");
                cardTitle.text(statusData[i].User.email);
                cardBody.append(cardTitle);

                let cardText = $("<p>").addClass("card-text");
                cardText.text(statusData[i].text);
                cardBody.append(cardText);

                if (statusData[i].User.id == userId) {
                    let delBtn = $("<button>").addClass("btn btn-warning");
                    delBtn.attr("type", "button");
                    delBtn.attr("data-statusId", statusData[i].id)
                    delBtn.attr("data-userId", statusData[i].User.id)
                    delBtn.text("Delete")
                    cardBody.append(delBtn);
                }
                
                statusArea.prepend(card);

            }

            $(".btn-warning").on("click", function () {

                if ($(this).attr("data-userId") == userId) {
                    var statusId = $(this).attr("data-statusId");
        
                    console.log(statusId)
        
                    $.ajax({
                        method: "DELETE",
                        url: "/api/status/" + statusId
                    }).then(function () {
                        window.location.replace("/");
                    })
        
                }
            })
        });
    }
});