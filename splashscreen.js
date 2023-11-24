$(document).ready(function () {
    $('#splashscreen').css('opacity', '1')

    $("#splashscreen").click(function () {
        $("#splashscreen").fadeOut(1200); // you could also use $(this).fadeOut('slow');
    });
});
