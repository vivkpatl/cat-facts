'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _requests = require('requests');

var _requests2 = _interopRequireDefault(_requests);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.get('/', function (req, res, resp) {
  res.send("LET'S SEND SOME CAT FACTS GANG");
});

app.listen(3000, function () {
  console.log("App is now listening on port 3000");
});