$(document).ready(function () {
    const statusArea = $("#statuses");

    $.get("/api/status/").then(function (data) {
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            let card = $("<div>").addClass("card");
            card.attr("id", "centerThis");

            let cardBody = $("<div>").addClass("card-body");
            card.append(cardBody);

            let cardTitle = $("<h5>").addClass("card-title");
            cardTitle.text(data[i].User.email);
            cardBody.append(cardTitle);

            let cardText = $("<p>").addClass("card-text");
            cardText.text(data[i].text);
            cardBody.append(cardText);

            statusArea.prepend(card);
        }
    });

    var userId;

    $.get("/api/user/", function (data) {
        userId = data.id;
    }).then(function () {
        $("#btnSubmit").on("click", function () {
            $.post("/api/status/", {
                text: $("#statusUpdate").val(),
                id: userId
            }).then(function () {
                statusArea.empty();
                $.get("/api/status/").then(function (data) {
                    console.log(data);
                    for (let i = 0; i < data.length; i++) {
                        let card = $("<div>").addClass("card");
                        let cardBody = $("<div>").addClass("card-body");
                        card.append(cardBody);

                        let cardTitle = $("<h5>").addClass("card-title");
                        cardTitle.text(data[i].User.email);
                        cardBody.append(cardTitle);

                        let cardText = $("<p>").addClass("card-text");
                        cardText.text(data[i].text);
                        cardBody.append(cardText);

                        if (data[i].UserId === userId) {
                            let delBtn = $("<button>").addClass("btn btn-warning");
                            delBtn.attr("type", "button");
                            delBtn.text("Delete")
                            cardBody.append(delBtn);
                        }

                        statusArea.prepend(card);
                    }
                });
            });
        });

        $(".btn-warning").on("click", function () {

        });
    });
});