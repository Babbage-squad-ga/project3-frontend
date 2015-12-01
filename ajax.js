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
};
