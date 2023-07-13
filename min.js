$(document).ready(function () {
    $('.fa-bars').click(function () {
        $(this).toggleClass('fa-times');
        $('header .navbar').toggleClass('nav-toggle');
    })
})