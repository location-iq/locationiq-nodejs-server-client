'use strict';

var utils = require('../utils/writer.js');
var Reverse = require('../service/ReverseService');

module.exports.reverse = function reverse (req, res, next) {
  var lat = req.swagger.params['lat'].value;
  var lon = req.swagger.params['lon'].value;
  var format = req.swagger.params['format'].value;
  var normalizecity = req.swagger.params['normalizecity'].value;
  var addressdetails = req.swagger.params['addressdetails'].value;
  var acceptLanguage = req.swagger.params['accept-language'].value;
  var namedetails = req.swagger.params['namedetails'].value;
  var extratags = req.swagger.params['extratags'].value;
  var statecode = req.swagger.params['statecode'].value;
  Reverse.reverse(lat,lon,format,normalizecity,addressdetails,acceptLanguage,namedetails,extratags,statecode)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
