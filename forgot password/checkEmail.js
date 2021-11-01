$(document).ready(function(){
	//user submits login form
	$(".login100-form").submit(function(e){
		e.preventDefault();
		//get user info.
		let email=$("#email").val();
		if(email!==""){
			$.post(
				'checkEmail.php',
				{
					"email": email,
				},
				function(data,status){
					console.log(data);
					if(status=='success'){
						if(data==1){
                            $('.message2').show(100);
							$('.login100-form').slideUp(7000,function(){
                                window.location='http://digitad.us-east-2.elasticbeanstalk.com/login/'
                            });
						}else{
							//clear input fields
							$(".response").show(100).html("Invalid Email")
							.fadeOut(10000);
						}
					}
				}
			)
		}
	})
})