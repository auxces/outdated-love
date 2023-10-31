$(document).ready(function () {
    $('#splashscreen').css('opacity', '1')

    $("#splashscreen").click(function () {
        $("#splashscreen").fadeOut("slow"); // you could also use $(this).fadeOut('slow');
    });
});
