$("#newBurgerButton").on("click", function (event) {
    event.preventDefault();

    var newBurger = {
        burger_name: $("#burgerAdd").val().trim()
    };

    $.ajax("/burgers/create", {
        type: "POST",
        data: newBurger
    }).then(
        function () {
            console.log("added new burger");
            location.reload();
        }
    );
});

$("#burgerAdd").keypress(function (e) {
    if (e.keyCode == 13)
        $("#newBurgerButton").click();
});

$(".devourButton").on("click", function (event) {
    // event.preventDefault();

    var id = $(this).data("burgerid");

    console.log(id);

    $.ajax("/burgers/update/" + id, {
        type: "PUT",
        data: { devoured: true }
    }).then(
        function () {
            console.log("updated id ", id);
            location.reload();
        }
    );
});

