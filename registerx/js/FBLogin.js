FB.getLoginStatus(function(response) {
    //statusChangeCallback(response);
    console.log(response);
});

function checkLoginState() {
    FB.getLoginStatus(function(response) {
      //statusChangeCallback(response);
      console.log('data:'+response);
    });
  }