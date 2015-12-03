'use strict';

var currentToken = null;
var currentId = null;
var first_name, last_name;

var resultIndexTemplate;


//$(document).ready(...
$(function() {
    var callback = function callback(error, data) {
      if (error) {
        console.error(error);
        $('#result').val('status: ' + error.status + ', error: ' +error.error);
        return;
      }
      console.log(JSON.stringify(data, null, 4));
    };

    var processResultsCallback = function processResultsCallback(error, data) {
      if (error) {
        console.error(error);
        $('#result').val('status: ' + error.status + ', error: ' +error.error);
        return;
      }
      console.log(JSON.stringify(data, null, 4));
      var question = data["surveyQuestion"];
      $("#question").html("").append("<p>" + question + "</p>");

      var results =[];
      if (data)
        results = data["takerAnswers"];
      var newHTML  = resultIndexTemplate({results: results});
      $("#result-list").html(newHTML);
    };

    $('#showSurvey').on("submit",function(e) {
      e.preventDefault();

        var sName = $("#surveyName").val();
        api.getResults(sName,processResultsCallback);

    });

    $('#deleteSurvey').on("click",function(e) {
      e.preventDefault();

        var sName = $("#surveyName").val();
        api.deleteResults(sName,processResultsCallback);
        api.deleteSurvey(sName,callback);

    });

    resultIndexTemplate = Handlebars.compile($('#result-index').html());
  });


