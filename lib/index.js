'use strict';

var _ = require('./Containers/404');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ErrorRoutes = require('./routes');

module.exports = {
  ErrorRoutes: ErrorRoutes.default,
  Error404: _2.default.default
};