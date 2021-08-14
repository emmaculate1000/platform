//sign up constructor
function signUp(f_name,l_name,email,password1,password2){
	this.f_name=f_name;
	this.l_name=l_name;
	this.email=email;
	this.password1=password1;
	this.password2=password2;
}
//method to valide data
signUp.prototype.validateData=function(){
	if(this.f_name!==""&&this.email!==""&&this.l_name!==""&&this.password1!==""&&this.password2!=="")
	{
		return 1;
	}else{
		return 0;
	}
}
signUp.prototype.passwordCheck=function(){
	if(this.password1===this.password2){
		return 1;
	}else{
		return 0;
	}
}
//method to submit form
signUp.prototype.submitForm=function(){
	$.ajax({
		url:'register.php',
		type:'post',
		data:{
			purpose:'registration',
			f_name:this.f_name,
			l_name:this.l_name,
			email:this.email,
			password:this.password2
		},
		success:function(data){
			console.log(data);
			if(data==1){
				$(".validate-form").slideUp(6000);
				$(".message2").show(100);
			}
		}
	})
}
//bind event to form
$(".validate-form").submit(function(e){
	e.preventDefault();
	let fname=$("#f-name").val();
	let lname=$("#l-name").val();
	let email=$("#email").val();
	let password1=$("#password-1").val();
	let password2=$("#password-2").val();
	let signUp_Obj=new signUp(fname,lname,email,password1,password2);
	if(signUp_Obj.validateData()){
		if(signUp_Obj.passwordCheck()){
			signUp_Obj.submitForm();
		}else{
			$(".message1").html("passwords don't match!")
			.show(100,function(){
				$(this).fadeOut(8000);
			});
			$("#password-2").css('color','red');
		}
	}else{
		confirm("Incomplete form details!");
	}
})
$("#password-2").keyup(function(){
	let password1=$("#password-1").val();
	let password2=$("#password-2").val();
	if(password1!==password2){
		$(".message1").html("passwords don't match!")
		.show(100,function(){
				$(this).fadeOut(8000);
			});
		$("#password-2").css('color','red');
	}else{
		$("#password-2").css('color','black');
		$(".message1").html("passwords match!")
		.css('backgroundColor','green')
		.fadeOut(5000);
	}
})