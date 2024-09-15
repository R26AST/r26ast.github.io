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

    emailjs.sendForm('default_service', 'template_b6h8fco', this)
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
    }); 
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
