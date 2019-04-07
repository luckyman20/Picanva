$(document).ready(function () {
    var event = ('ontouchstart' in window) ? 'click' : 'mouseenter mouseleave';
    $('#team1').on(event, function () {
        $('#team1 img').addClass('z-depth-5 border-grn');
        $('#team2 img').removeClass('z-depth-5 border-grn');
        $('#team3 img').removeClass('z-depth-5 border-grn');
        $('#team-1').addClass('d-block');
        $('#team-1').removeClass('d-none');
        $('#team-2').addClass('d-none');
        $('#team-2').removeClass('d-block');
        $('#team-3').addClass('d-none');
        $('#team-3').removeClass('d-block');
    });

    $('#team2').on(event, function () {
        $('#team2 img').addClass('z-depth-5 border-grn');
        $('#team1 img').removeClass('z-depth-5 border-grn');
        $('#team3 img').removeClass('z-depth-5 border-grn');
        $('#team-1').addClass('d-none');
        $('#team-1').removeClass('d-block');
        $('#team-2').addClass('d-block');
        $('#team-2').removeClass('d-none');
        $('#team-3').addClass('d-none');
        $('#team-3').removeClass('d-block');
    });
    $('#team3').on(event, function () {
        $('#team3 img').addClass('z-depth-5 border-grn');
        $('#team2 img').removeClass('z-depth-5 border-grn');
        $('#team1 img').removeClass('z-depth-5 border-grn');
        $('#team-1').addClass('d-none');
        $('#team-1').removeClass('d-block');
        $('#team-2').addClass('d-none');
        $('#team-2').removeClass('d-block');
        $('#team-3').addClass('d-block');
        $('#team-3').removeClass('d-none');
    });

    // Advisors

    $('#adv1').hover(function () {
        $('#adv1 img').addClass('z-depth-5 border-grn');
        $('#adv2 img').removeClass('z-depth-5 border-grn');
        $('#adv3 img').removeClass('z-depth-5 border-grn');
        $('#adv-1').addClass('d-block');
        $('#adv-1').removeClass('d-none');
        $('#adv-2').addClass('d-none');
        $('#adv-2').removeClass('d-block');
        $('#adv-3').addClass('d-none');
        $('#adv-3').removeClass('d-block');
    });

    $('#adv2').hover(function () {
        $('#adv2 img').addClass('z-depth-5 border-grn');
        $('#adv1 img').removeClass('z-depth-5 border-grn');
        $('#adv3 img').removeClass('z-depth-5 border-grn');
        $('#adv-1').addClass('d-none');
        $('#adv-1').removeClass('d-block');
        $('#adv-2').addClass('d-block');
        $('#adv-2').removeClass('d-none');
        $('#adv-3').addClass('d-none');
        $('#adv-3').removeClass('d-block');
    });
    $('#adv3').hover(function () {
        $('#adv3 img').addClass('z-depth-5 border-grn');
        $('#adv2 img').removeClass('z-depth-5 border-grn');
        $('#adv1 img').removeClass('z-depth-5 border-grn');
        $('#adv-1').addClass('d-none');
        $('#adv-1').removeClass('d-block');
        $('#adv-2').addClass('d-none');
        $('#adv-2').removeClass('d-block');
        $('#adv-3').addClass('d-block');
        $('#adv-3').removeClass('d-none');
    });
});