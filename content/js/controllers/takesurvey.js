var surveyName;
$(function() {

       var loadSurveyCallback = function(error, data) {
          if(error) {
            console.log(error);
          } else {
            console.log(data);
            surveyName = data.surveyName;
            $('#question1').html('<h3>' + data.surveyQuestion + '</h3>');
            var ol = $('<ol>').appendTo('#answer-list');

            $(data.surveyAnswers).each(function(index, item) {
                ol.append(
                    $(document.createElement('li')).text(item)
                );
            });
          }
        };
        var surveyURL = location.search;
        api.loadSurvey(surveyURL, loadSurveyCallback);

          $('#update-result').on('submit', function(e) {
            e.preventDefault();
            $("#load-survey").css("display", "none");
            $("#thank-you").css("display", "block");
            $('#surveyname').val(surveyName);

            var surveyData = form2object(this);
            console.log(surveyData);

            var updateResultCallback = function (error, data) {
              if(error) {
                console.log(error);
              } else {
                console.log(data);
              }
            }
            api.updateResult(surveyData, updateResultCallback);
          });
})
