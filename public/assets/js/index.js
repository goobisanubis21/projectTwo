$(document).ready(function () {
    const statusArea = $("#statuses");

<<<<<<< HEAD
    $.get("/api/status/").then(function (data) {
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            let card = $("<div>").addClass("card");
            let cardBody = $("<div>").addClass("card-body").attr("id", "centerThis");
            card.append(cardBody);

            let cardTitle = $("<h5>").addClass("card-title");
            cardTitle.text(data[i].User.email);
            cardBody.append(cardTitle);
=======
    var userId;
    var statusData;
    var points;
>>>>>>> c7027a660b3c840d928dcec0c3287c2f3406a071

    $.get("/api/user/", function (res) {
        userId = res.id;
    }).then(function () {
        getStatus ()
        getPoints(userId)
    });

    $("#btnSubmit").on("click", function () {
        $.post("/api/status/", {
            text: $("#statusUpdate").val(),
            id: userId
        }).then(function () {
            statusArea.empty();
            storePoints (userId,points - $("#statusUpdate").val().length)
            getStatus ()
        });
    });

    function getStatus () {
        $.get("/api/status/").then(function (data) {

<<<<<<< HEAD
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

=======
            statusData = data;

            for (let i = 0; i < statusData.length; i++) {
    
                let card = $("<div>").addClass("card");
                let cardBody = $("<div>").addClass("card-body");
                card.append(cardBody);

                let cardTitle = $("<h5>").addClass("card-title");
                cardTitle.text(statusData[i].User.email);
                let cardImg = $("<img>").addClass("profilePic");
                cardImg.attr("src", "https://davismarketingcompany.com/wp-content/uploads/2016/01/avatar_placeholder_small.png")
                cardBody.append(cardImg);
                cardBody.append(cardTitle);

                let cardText = $("<p>").addClass("card-text");
                cardText.text(statusData[i].text);
                cardBody.append(cardText);

                if (statusData[i].User.id == userId) {
                    let delBtn = $("<button>").addClass("btn btn-warning");
                    delBtn.attr("type", "button");
                    delBtn.attr("data-statusId", statusData[i].id)
                    delBtn.attr("data-userId", statusData[i].User.id)
                    delBtn.text("Delete Post")
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
>>>>>>> c7027a660b3c840d928dcec0c3287c2f3406a071
        });
    }

    function getPoints(userId) {
        $.get("/api/users/" + userId, function(data) {
            points = data.availablePoints
            console.log(points);
        }).then(function() {
            let pointEl = $("<p>");
            pointEl.text(points)
            pointEl.css("text-align", "center");
            pointEl.css("color", "white");
            pointEl.attr("id", "pointEl");
            $("#statusUpdate").attr("maxlength", points)
            $("body").append(pointEl);
        })
    }

    $("#statusUpdate").on("keyup", function() {
        var wordLen = $(this).val().length;
        console.log(wordLen)
        $("#pointEl").text(points - wordLen)
    })

    function storePoints (id,points) {
        $.ajax({
            method: "PUT",
            url:"/api/user-points/" + id + "/" + points,
        }).then(function(res){

        })
    }
});