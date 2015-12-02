'use strict';

var api = {
  url: 'http://localhost:3000',
  ajax: function(config, cb) {
    $.ajax(config).done(function(data, textStatus, jqxhr) {
      cb(null, data);
    }).fail(function(jqxhr, status, error) {
      cb({jqxher: jqxhr, status: status, error: error});
    });
  },
  register: function(credentials, callback) {
    this.ajax({
      method: 'POST',
      url: this.url + '/signup',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(credentials)
      // dataType: 'json'
    }, callback);
  },
  login: function(credentials, callback) {
    this.ajax({
      method: 'POST',
      url: this.url + '/login',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(credentials)
    }, callback);
  },
  createSurvey: function(surveyData, callback) {
    this.ajax({
      method: 'POST',
      url: this.url + '/survey/makenew',
      contentType: 'application/json',
      data: JSON.stringify(surveyData)
    }, callback);
  },
  loadSurvey: function(surveyURL, callback) {
    this.ajax({
      method: 'GET',
      url: this.url + '/survey' + surveyURL,
      contentType: 'application/json',
      dataType: 'json'
    }, callback);
  },
  createResult: function(surveyData, callback) {
    this.ajax({
      method: 'POST',
      url: this.url + '/result/makenew',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(surveyData)
    }, callback);
  },
  updateResult: function(surveyName, callback) {

  }
};
