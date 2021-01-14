// const { on } = require("nodemon");
$(() => {


    $(".menu-change").on("click", function (event) {
        var id = $(this).data("id");
        var newMenu = $(this).data("newMenu");

        var newMenuState = {
            menu: newMenu
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newMenuState
        }).then(
            function () {
                console.log("changed menu to", newMenu);
                location.reload();
            }
        );
    });

    $(".edit-burger").on("click", function (event) {
        var id = $(this).data("burger_id");
        var newMenu = $(this).data("newMenu");

        var newMenuState = {
            menu: newMenu
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newMenuState
        }).then(
            function () {
                console.log("changed menu to", newMenu);
                location.reload();
            }
        );
    });
});
