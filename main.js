$(document).ready(function () {
  $('.sidenav').sidenav();
  $(".carousel.carousel-slider").carousel({
    fullWidth: true,
    indicators: true,
    duration: 300
  });
});

AOS.init({
  duration: 500,
  easing: 'ease-in-sine',
});

$('.carousel').carousel();
setInterval(function () {
  $('.carousel').carousel('next');
}, 7000);

function sendMail() {
  var value = "First Name: " + document.getElementById('first_name').value
  + "\n Last Name: " + document.getElementById('last_name').value
  + "\n Email: " + document.getElementById('email').value 
  + "\n State: " + document.getElementById('state').value
  + "\n Phone Number: " + document.getElementById('phone').value
  + "\n Message: " + document.getElementById('msg').value;
  xmlhttp = new XMLHttpRequest();
  var API_KEY = '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';
  var url = 'https://api.sendgrid.com/v3/mail/send';
  xmlhttp.open("POST", url, true);
  xmlhttp.setRequestHeader("Authorization", "Bearer " + API_KEY);
  var body = {
    "personalizations": [
      {
        "to": [
          {
            "email": "guptachirag2002@gmail.com"
          }
        ],
        "subject": "Ding Dong! Another Consultation Request"
      }
    ],
    "from": {
      "email": "gchirag@apache.org"
    },
    "content": [
      {
        "type": "text/plain",
        "value": value
      }
    ] 
  };
  xmlhttp.send(body);
  return false;
}
