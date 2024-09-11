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

$('#kirim').click(function () {
    kirimEmail();
}

function kirimEmail() {
    $('.loading').addClass('d-block');
    $('.error-message').removeClass('d-block');
    $('.sent-message').removeClass('d-block');
    
    emailjs.sendForm('service_k1vmc1w', 'template_r26astr', '.php-email-form').then(
        $('.loading').removeClass('d-block');
        (response) => {
            $('.sent-message').addClass('d-block');
            //console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
            $('.error-message').addClass('d-block');
            $('.error-message').html(error);
            //console.log('FAILED...', error);
        },
    );
}

