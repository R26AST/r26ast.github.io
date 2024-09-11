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

$('.php-email-form').on('submit', function(event) {
    event.preventDefault();
    $('.loading').addClass('d-block');
    emailjs.sendForm('default_service', 'template_r26astr', this)
    .then(() => {
      //btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      //btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});


/*function kirimEmail() {
    var data = {
        nama: $("input[name='nama']").val(),
        email: $("input[name='email']").val(),
        subjek: $("input[name='subjek']").val(),
        pesan: $("textatea[name='pesan']").val()
    };
    $('.loading').addClass('d-block');
    $('.error-message').removeClass('d-block');
    $('.sent-message').removeClass('d-block');
    
    emailjs.send('service_k1vmc1w', 'template_r26astr', data).then(
        $('.loading').removeClass('d-block');
        (response) => {
            $('.sent-message').addClass('d-block');
            //console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
            $('.error-message').addClass('d-block');
            $('.error-message').html(error);
            //console.log('FAILED...', error);
        }
    ); 
    /
    var data = {
       service_id: 'service_k1vmc1w',
       template_id: 'template_r26astr',
       user_id: '9ccjcU8IM7t7EiTmT',
       template_params: {
        'nama': $("input[name=nama]").val(),
        'email': $("input[name=email]").val(),
        'subjek': $("input[name=subjek]").val(),
        'pesan': $("input[name=pesan]").val()      
       }
    };
 
    $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json'
    }).done(function() {
        alert('Your mail is sent!');
    }).fail(function(error) {
        alert('Oops... ' + JSON.stringify(error));
    });*
}*/

