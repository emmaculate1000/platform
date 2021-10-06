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
							var user = 'pi';
							var password = 'pi';
							var base64encodedData =Buffer.from(user + ':' + password).toString('base64');
							$.ajax({
								url:'http://18.223.184.39:3000/',
								type: 'GET',
								dataType: 'json',
								headers: { 
									'Content-Type': 'application/json',
									'Authorization': `Basic ${base64encodedData}`
								},
								contentType: 'application/json; charset=utf-8',
								success: function (result) {
								   console.log(result);
								},
								error: function (error) {
									console.log(error);
								}
							});
							//delete file from pisignage
							//redirect to dashboard
							//window.location="http://digitad.us-east-2.elasticbeanstalk.com";
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