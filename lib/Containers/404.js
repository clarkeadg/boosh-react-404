'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFoundation = require('react-foundation');

var _booshReactComponents = require('boosh-react-components');

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* React */
var ErrorPage = function (_React$Component) {
  (0, _inherits3.default)(ErrorPage, _React$Component);

  function ErrorPage() {
    (0, _classCallCheck3.default)(this, ErrorPage);
    return (0, _possibleConstructorReturn3.default)(this, (ErrorPage.__proto__ || (0, _getPrototypeOf2.default)(ErrorPage)).apply(this, arguments));
  }

  (0, _createClass3.default)(ErrorPage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.title = this.props.error && this.props.error.status === 404 ? 'Page Not Found' : 'Error';
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.props.error) console.error(this.props.error); // eslint-disable-line no-console

      var _ref = this.props.error && this.props.error.status === 404 ? ['404', 'Page not found'] : ['Error', 'Oups, something went wrong'],
          _ref2 = (0, _slicedToArray3.default)(_ref, 2),
          code = _ref2[0],
          title = _ref2[1];

      return _react2.default.createElement(
        'div',
        { className: 'page page-error-404' },
        _react2.default.createElement(_booshReactComponents.VideoBackground, null),
        _react2.default.createElement(
          _reactFoundation.Row,
          { className: 'display' },
          _react2.default.createElement(
            _reactFoundation.Column,
            { small: 12, medium: 6, centerOnMedium: true },
            _react2.default.createElement(_booshReactComponents.Portlet, { className: 'portlet-grey', title: code + ' - ' + title, items: _react2.default.createElement(
                'p',
                null,
                'The page does not exist or an another error occurred.'
              ) })
          )
        )
      );
    }
  }]);
  return ErrorPage;
}(_react2.default.Component);

/* Components */


ErrorPage.propTypes = {
  error: _react2.default.PropTypes.object
};
exports.default = ErrorPage;