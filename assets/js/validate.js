//emailjs.init('9ccjcU8IM7t7EiTmT');
emailjs.init({
  publicKey: '9ccjcU8IM7t7EiTmT',
  limitRate: {
    // Set the limit rate for the application
    id: 'app',
    // Allow 1 request per 10s
    throttle: 60000,
  },
});

$('.buy-proteus').on('submit', function(event) {
    event.preventDefault();
    
    $('.loading').addClass('d-block');
    $('#beli').prop('disabled', true);

    /*emailjs.sendForm('service_k1vmc1w', 'template_b6h8fco', this)
    .then((response) => {
        $('.loading').removeClass('d-block');
        if (response.status == 200) {
            $('.sent-message').addClass('d-block');
            $('.buy-proteus').trigger('reset');
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
        $('#beli').prop('disabled', false);
    }).catch((error) => {
        $('.loading').removeClass('d-block');
        $('.error-message').html("Maaf! Terjadi masalah saat akan mengirim pesan.");
        $('#beli').prop('disabled', false);
    }); */

	var file = $('.input').prop('files')[0];
    	let url;
   	let fr = new FileReader();
	fr.readAsDataURL(file);
	fr.addEventListener('load', () => {
		url = fr.result;
                //$('.url').html(url);
	});
	
	$.ajax({
        url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeMiy4K2HjmijDUInoztUgru8HvYthrqKMc45isBCJw9rT3Rg/formResponse",
        data: {
          "entry.62458308": $('#nama').val(),
          "entry.94953025": $('#email').val(),
          "entry.771906646": $('#formFile').val(),
	  //"entry.771906646": $('#formFile').prop('files')[0],
	  "entry.724604614": url,
          "entry.1165680788": $('#token').val()
        },
        type: "POST",
        dataType: "xml",
        success: function () {
        },
        error: function () {
        }
      });
	 
	/*const email = {
		SecureToken : "ad9fc324-a7c9-4513-b661-aeb97ae827a5",
	 	From: $('#email').val(),
	 	To: "putrakuruliff1980@gmail.com",
		Subject: "Pesan pembelian Proteus dari "+$('#nama').val(),
	 	Html: `<p>Halo <strong>R26</strong>,</p>
			<p>こんにちは&nbsp;<strong>R26</strong>、</p>
			<p>Anda mendapat pesan pembelian software Proteus.</p>
			<p>Nama : $$('#nama').val()</p>
			<p>Email : $$('#email').val()</p>
			<p>&nbsp;</p>
			<p style="padding: 12px; border-left: 4px solid #d0d0d0; font-style: italic;">$$('#token').val()</p>
			<p>&nbsp;</p>`,
		Attachments: [
			{content: $('#formFile').val()}
		] 
	}

	Email.send({
        	/*SecureToken : "ad9fc324-a7c9-4513-b661-aeb97ae827a5",
        	To : 'putrakuruliff1980@gmail.com',
        	From : $('#nama').val(),
        	Subject : 'Pesan pembelian Proteus dari '+$('#nama').val(),
        	Body : pesan* email
    	}).then(
      message => alert(message)
    );*/
});


generate_token();
	
var token;
	
function generate_token(){
	let length = 14;
	var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890\/.,!?@#$%^&*".split("");
	var b = [];  
	for (var i = 0; i < length; i++) {
		var j = (Math.random() * (a.length-1)).toFixed(0);
		b[i] = a[j];
	}
	token = b.join("");
	$('#token').val(token);
}
