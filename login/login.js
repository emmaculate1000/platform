$(document).ready(function(){
	//user submits login form
	$(".login100-form").submit(function(e){
		e.preventDefault();
		//get user info.
		let email=$("#email").val();
		let password=$("#password").val();
		if(email!==""&&password!==""){
			$.post(
				'login.php',
				{
					"email": email,
					"password":password,
				},
				function(data,status){
					console.log(data);
					if(status=='success'){
						if(data==1){
							//redirect to dashboard
							window.location="http://digitad.us-east-2.elasticbeanstalk.com";
							//log user into pi server
							$.get('http://pi:pi@18.223.184.39:3000/',
								function(data){
									console.log(data);
									if(data!==0){

									}
								}
							)
						}else{
							//clear input fields
							$(".response").show(100).html("Invalid Email / Password")
							.fadeOut(10000);
						}
					}
				}
			)
		}
	})
})