'use strict';

var utils = require('../utils/writer.js');
var Balance = require('../service/BalanceService');

module.exports.balance = function balance (req, res, next) {
  Balance.balance()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
