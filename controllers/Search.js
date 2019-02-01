'use strict';

var utils = require('../utils/writer.js');
var Search = require('../service/SearchService');

module.exports.search = function search (req, res, next) {
  var q = req.swagger.params['q'].value;
  var format = req.swagger.params['format'].value;
  var normalizecity = req.swagger.params['normalizecity'].value;
  var addressdetails = req.swagger.params['addressdetails'].value;
  var viewbox = req.swagger.params['viewbox'].value;
  var bounded = req.swagger.params['bounded'].value;
  var limit = req.swagger.params['limit'].value;
  var acceptLanguage = req.swagger.params['accept-language'].value;
  var countrycodes = req.swagger.params['countrycodes'].value;
  var namedetails = req.swagger.params['namedetails'].value;
  var dedupe = req.swagger.params['dedupe'].value;
  var extratags = req.swagger.params['extratags'].value;
  var statecode = req.swagger.params['statecode'].value;
  Search.search(q,format,normalizecity,addressdetails,viewbox,bounded,limit,acceptLanguage,countrycodes,namedetails,dedupe,extratags,statecode)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
