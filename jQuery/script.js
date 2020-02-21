$(document).ready(function () {

    $("#events-box").css("background-color", "peachPuff");


    $(".advertisement").hide();


    $("#profile").find(".fa").addClass("w3-text-theme");


    $("#alertBox").find(".close-button").click(function (event) {
        $(event.target).parents("#alertBox").hide();
    });

    $.getJSON(
        'https://oxomi.com/service/json/references/random?includedTags=%23top',
        {limit: 1},
        function (json) {
            $('#oxomi').find(".fa-bug").replaceWith('<img src=' + json.providers[0].logo + '/><br>' + json.providers[0].name);
        })
});

