//emailjs.init('9ccjcU8IM7t7EiTmT');
emailjs.init({
  publicKey: '9ccjcU8IM7t7EiTmT',
  limitRate: {
    // Set the limit rate for the application
    id: 'app',
    // Allow 1 request per 10s
    throttle: 10000,
  },
});

$('.php-email-form').on('submit', function(event) {
    event.preventDefault();
    
    $('.loading').addClass('d-block');
    $('#kirim').prop('disabled', true);

    emailjs.sendForm('default_service', 'template_r26astr', this)
    .then((response) => {
        $('.loading').removeClass('d-block');
        if (response.status == 200) {
            $('.sent-message').addClass('d-block');
            $('.php-email-form').trigger('reset');
        } else {
            response.json().then((data) => {
                $('.error-message').addClass('d-block');
                if (Object.hasOwn(data, 'errors')) {
                    $('.error-message').html( data["errors"].map(error => error["message"]).join(", ") );
                } else {
                     $('.error-message').html("Maaf! Terjadi masalah saat akan mengirim pesan.");
                }
            })
        }
        $('#kirim').prop('disabled', false);
    }).catch((error) => {
        $('.loading').removeClass('d-block');
        $('.error-message').html("Maaf! Terjadi masalah saat akan mengirim pesan.");
        $('#kirim').prop('disabled', false);
    });
  
  setTimeout(function(){
    $('.error-message').removeClass('d-block');
    $('.sent-message').removeClass('d-block');
  }, 1500);
  
});








/*
let nama = $('#name').val(),
email = $('#email').val(),
subjek = $('#subject').val(),
pesan = $('#message').val();

$('#kirim').click(function () {
    Email.send({
        SecureToken : "ad9fc324-a7c9-4513-b661-aeb97ae827a5",
        To : 'putrakuruliff1980@gmail.com',
        From : nama + email,
        Subject : subjek,
        Body : pesan
    }).then(
      message => alert(message)
    );
});

$('#kirim').click(function () {
    var form = $('.php-email-form');

    $('.loading').addClass('d-block');
    $('.error-message').removeClass('d-block');
    $('.sent-message').removeClass('d-block');
    
    async function handleSubmit(event) {
        event.preventDefault();
        var data = new FormData(event.target);
        fetch(event.target.action, {
          method: form.method,
          body: data,
          headers: {
              'Accept': 'application/json'
          }
        }).then(response => {
            $('.loading').removeClass('d-block');
            if (response.ok) {
                //status.innerHTML = "Thanks for your submission!";
                $('.sent-message').addClass('d-block');
                $('.error-message').removeClass('d-block');
                form.reset();
              } else {
                response.json().then(data => {
                    $('.error-message').addClass('d-block');
                    $('.sent-message').removeClass('d-block');
                    if (Object.hasOwn(data, 'errors')) {
                        $('.error-message').html( data["errors"].map(error => error["message"]).join(", ") );
                    } else {
                        $('.error-message').html("Oops! There was a problem submitting your form");
                    }
                })
              }
        }).catch(error => {
          $('.error-message').html("Oops! There was a problem submitting your form");
        });
    }
    form.addEventListener("submit", handleSubmit);
});

*/
