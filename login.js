$(function() {
    $.ajaxSetup({
       xhrFields: {
         withCredentials: true
    }
    });

  var form2object = function(form) {
    var data = {};
    $(form).find("input").each(function(index, element) {
      var type = $(this).attr('type');
      if ($(this).attr('name') && type !== 'submit' && type !== 'hidden') {
        data[$(this).attr('name')] = $(this).val();
      }
    });
    return data;
  };

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
  });

  $('#create-survey').on('submit', function(e) {
    e.preventDefault();
    //create an empty survey answer array
    var surveyAnswers = [];
    //loop through surveyanswers div
    $('#surveyanswers').each(function(i, div) {
      //loop through each input div in surveyanswers
      //and push the value to surveyAnswers array
      $(div).find('input').each(function(j, element) {
          if($(this).val() !== "") {
          surveyAnswers.push($(this).val());
        } else {
          return surveyAnswers;
        }
      });
    });
    // add surveyAnswers values to a hidden input field
    $('#finalsurveyanswers').val(surveyAnswers.join('/*/'));
    var surveyData = form2object(this);
    var createSurveyCallback = function(error, data) {
      if(error) {
        console.log(error);
      } else {
        console.log(data);
      }
    };
    api.createSurvey(surveyData, createSurveyCallback);
  });

});


