$(function() {
  $('#register-form-link').click(function(e) {
    $("#register-form").delay(100).fadeIn(100);
    $("#login-form").fadeOut(100);
    $('#login-form-link').removeClass('active');
    $(this).addClass('active');
    e.preventDefault();
  });

  // {"credentials": {username: xxx, password: xxx} }
  $('#register-form').on('submit',function(e){
    e.preventDefault();
    var credentials = form2object(this);
    console.log(credentials);
    var registerCallback = function(error, data){
      if(error){
        console.log(error);
      } else {
        console.log('success');
        console.log(data);
      }
    };
    api.register(credentials, registerCallback);

  });

  $('#login-form-link').click(function(e) {
    $("#login-form").delay(100).fadeIn(100);
    $("#register-form").fadeOut(100);
    $('#register-form-link').removeClass('active');
    $(this).addClass('active');
    e.preventDefault();
  });


  $('#login-form').on('submit', function(e) {
    e.preventDefault();
    var credentials = form2object(this);
    var loginCallback = function(error, data) {
      if(error){
        console.log(error);
      } else {
        console.log('success');
        console.log(data);
      }
    };
    api.login(credentials, loginCallback);
    window.location.href = '/createsurvey.html'
  });

})
