// const { on } = require("nodemon");
$(() => {

    // really need this to be onclick, if 0, change to 1, if 1, change to 0. shouldn't that be easy?
    $(".menu-change").on("click", function (event) {
        var id = $(this).data("id");
        var newMenu = $(this).data("newmenu");

        var newMenuState = {
            current_menu: newMenu
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newMenuState
        }).then(
            function () {
                console.log(newMenu);
                console.log("changed menu to", newMenu);
                location.reload();
            }
        );
    });

    $(".burger-edit").on("click", function (event) {
        var id = $(this).data("burger_id");

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
