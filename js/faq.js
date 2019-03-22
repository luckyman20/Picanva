$(document).ready(function () {
    $('.collapsible').collapsible();
    $('.scrollspy').scrollSpy({
        scrollOffset: 200,
    });
    $('#serv-sel').click(function () {
        $('#sub-head').text('Services');
        $('#services').css("display", "block");
        $('#del').css("display", "none");
        $('#rtrn').css("display", "none");
        $('#pay').css("display", "none");
    })
    $('#del-sel').click(function () {
        $('#sub-head').text('Deliver & Pick-up');
        $('#services').css("display", "none");
        $('#del').css("display", "block");
        $('#rtrn').css("display", "none");
        $('#pay').css("display", "none");
    })
    $('#rtrn-sel').click(function () {
        $('#sub-head').text('Return & Refund');
        $('#services').css("display", "none");
        $('#del').css("display", "none");
        $('#rtrn').css("display", "block");
        $('#pay').css("display", "none");
    })
    $('#pay-sel').click(function () {
        $('#sub-head').text('Payment & Billing');
        $('#services').css("display", "none");
        $('#del').css("display", "none");
        $('#rtrn').css("display", "none");
        $('#pay').css("display", "block");
    })
});