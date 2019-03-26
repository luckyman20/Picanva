$(document).ready(function () {
    $('#team1').hover(function () {
        $('#team-1').addClass('d-block');
        $('#team-1').removeClass('d-none');
        $('#team-2').addClass('d-none');
        $('#team-2').removeClass('d-block');
        $('#team-3').addClass('d-none');
        $('#team-3').removeClass('d-block');
    });

    $('#team2').hover(function () {
        $('#team-1').addClass('d-none');
        $('#team-1').removeClass('d-block');
        $('#team-2').addClass('d-block');
        $('#team-2').removeClass('d-none');
        $('#team-3').addClass('d-none');
        $('#team-3').removeClass('d-block');
    });
    $('#team3').hover(function () {
        $('#team-1').addClass('d-none');
        $('#team-1').removeClass('d-block');
        $('#team-2').addClass('d-none');
        $('#team-2').removeClass('d-block');
        $('#team-3').addClass('d-block');
        $('#team-3').removeClass('d-none');
    });

    // Advisors

    $('#adv1').hover(function () {
        $('#adv-1').addClass('d-block');
        $('#adv-1').removeClass('d-none');
        $('#adv-2').addClass('d-none');
        $('#adv-2').removeClass('d-block');
        $('#adv-3').addClass('d-none');
        $('#adv-3').removeClass('d-block');
    });

    $('#adv2').hover(function () {
        $('#adv-1').addClass('d-none');
        $('#adv-1').removeClass('d-block');
        $('#adv-2').addClass('d-block');
        $('#adv-2').removeClass('d-none');
        $('#adv-3').addClass('d-none');
        $('#adv-3').removeClass('d-block');
    });
    $('#adv3').hover(function () {
        $('#adv-1').addClass('d-none');
        $('#adv-1').removeClass('d-block');
        $('#adv-2').addClass('d-none');
        $('#adv-2').removeClass('d-block');
        $('#adv-3').addClass('d-block');
        $('#adv-3').removeClass('d-none');
    });
});