$(function() {


  $('#create-survey').on('submit', function(e) {
    e.preventDefault();
    $("#create-survey-page").css("display", "none");
    $("#survey-url").css("display", "block");
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
        surveyName = data.surveyName;
        var surveyURL = data.rURL;

          var html = '';

          html += '<div>';
          html += 'Congratulations on your new survey! Share this uniquely created survey url with your friends!';
          html +='<p>';
          html += '<a href="';
          html += 'http://localhost:5000/takesurvey.html?q=';
          html += surveyURL;
          html += '">http://localhost:5000/takesurvey.html?q=';
          html += surveyURL;
          html += '</a></p>';
          html += '</div>';
          $('#survey-url').append(html);
      }
    };
    var createResultCallback = function(error, data) {
      if(error) {
        console.log(error);
      } else {
        console.log(data);
      }
    }
    api.createSurvey(surveyData, createSurveyCallback);
    api.createResult(surveyData, createResultCallback);

  });
})
