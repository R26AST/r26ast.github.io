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
*/
$('#kirim').click(function () {
    var form = $('.php-email-form');
    async function handleSubmit(event) {
        event.preventDefault();
        var status = $('.sent-message');
        var err_stat = $('.error-message");
        var data = new FormData(event.target);
        fetch(event.target.action, {
          method: form.method,
          body: data,
          headers: {
              'Accept': 'application/json'
          }
        }).then(response => {
          if (response.ok) {
            status.innerHTML = "Thanks for your submission!";
            form.reset();
          } else {
            response.json().then(data => {
              if (Object.hasOwn(data, 'errors')) {
                err_stat.innerHTML = data["errors"].map(error => error["message"]).join(", ")
              } else {
                err_stat.innerHTML = "Oops! There was a problem submitting your form";
              }
            })
          }
        }).catch(error => {
          err_stat.innerHTML = "Oops! There was a problem submitting your form";
        });
    }
    form.addEventListener("submit", handleSubmit);
}
