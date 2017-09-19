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

var _redboxReact2 = require('redbox-react');

var _redboxReact3 = _interopRequireDefault(_redboxReact2);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _reactTransformCatchErrors3 = require('react-transform-catch-errors');

var _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);

var _class, _temp;

var _reactFoundation = require('react-foundation');

var _booshReactComponents = require('boosh-react-components');

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  ErrorPage: {
    displayName: 'ErrorPage'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src/Containers/404.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
}
/* React */


/* Components */


var ErrorPage = _wrapComponent('ErrorPage')((_temp = _class = function (_React$Component) {
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

      return _react3.default.createElement(
        'div',
        { className: 'page page-error-404' },
        _react3.default.createElement(_booshReactComponents.VideoBackground, null),
        _react3.default.createElement(
          _reactFoundation.Row,
          { className: 'display' },
          _react3.default.createElement(
            _reactFoundation.Column,
            { small: 12, medium: 6, centerOnMedium: true },
            _react3.default.createElement(_booshReactComponents.Portlet, { className: 'portlet-grey', title: code + ' - ' + title, items: _react3.default.createElement(
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
}(_react3.default.Component), _class.propTypes = {
  error: _react3.default.PropTypes.object
}, _temp));

exports.default = ErrorPage;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Db250YWluZXJzLzQwNC5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsInRpdGxlIiwicHJvcHMiLCJlcnJvciIsInN0YXR1cyIsImNvbnNvbGUiLCJjb2RlIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiRXJyb3JQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTkE7OztBQUdBOzs7Ozs7Ozs7Ozs7O3dDQVdzQjtBQUNsQkEsZUFBU0MsS0FBVCxHQUFpQixLQUFLQyxLQUFMLENBQVdDLEtBQVgsSUFBb0IsS0FBS0QsS0FBTCxDQUFXQyxLQUFYLENBQWlCQyxNQUFqQixLQUE0QixHQUFoRCxHQUNmLGdCQURlLEdBQ0ksT0FEckI7QUFFRDs7OzZCQUVRO0FBQ1AsVUFBSSxLQUFLRixLQUFMLENBQVdDLEtBQWYsRUFBc0JFLFFBQVFGLEtBQVIsQ0FBYyxLQUFLRCxLQUFMLENBQVdDLEtBQXpCLEVBRGYsQ0FDK0M7O0FBRC9DLGlCQUdlLEtBQUtELEtBQUwsQ0FBV0MsS0FBWCxJQUFvQixLQUFLRCxLQUFMLENBQVdDLEtBQVgsQ0FBaUJDLE1BQWpCLEtBQTRCLEdBQWhELEdBQ3BCLENBQUMsS0FBRCxFQUFRLGdCQUFSLENBRG9CLEdBRXBCLENBQUMsT0FBRCxFQUFVLDRCQUFWLENBTEs7QUFBQTtBQUFBLFVBR0FFLElBSEE7QUFBQSxVQUdNTCxLQUhOOztBQU9QLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxxQkFBZjtBQUNFLGtGQURGO0FBRUU7QUFBQTtBQUFBLFlBQUssV0FBVSxTQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQVEsT0FBTyxFQUFmLEVBQW1CLFFBQVEsQ0FBM0IsRUFBOEIsb0JBQTlCO0FBQ0UsMkVBQVMsV0FBVSxjQUFuQixFQUFrQyxPQUFPSyxPQUFPLEtBQVAsR0FBZUwsS0FBeEQsRUFBK0QsT0FDN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBREY7QUFERjtBQUZGLE9BREY7QUFZRDs7O0VBOUJxQixnQkFBTU0sUyxVQUVyQkMsUyxHQUFZO0FBQ2pCTCxTQUFPLGdCQUFNTSxTQUFOLENBQWdCQztBQUROLEM7O2tCQWdDTkMsUyIsImZpbGUiOiI0MDQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qIFJlYWN0ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IFJvdywgQ29sdW1uIH0gZnJvbSAncmVhY3QtZm91bmRhdGlvbidcbmltcG9ydCB7IFBvcnRsZXQsIFZpZGVvQmFja2dyb3VuZCB9IGZyb20gJ2Jvb3NoLXJlYWN0LWNvbXBvbmVudHMnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG5jbGFzcyBFcnJvclBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgZXJyb3I6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBkb2N1bWVudC50aXRsZSA9IHRoaXMucHJvcHMuZXJyb3IgJiYgdGhpcy5wcm9wcy5lcnJvci5zdGF0dXMgPT09IDQwNCA/XG4gICAgICAnUGFnZSBOb3QgRm91bmQnIDogJ0Vycm9yJztcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5lcnJvcikgY29uc29sZS5lcnJvcih0aGlzLnByb3BzLmVycm9yKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcblxuICAgIGNvbnN0IFtjb2RlLCB0aXRsZV0gPSB0aGlzLnByb3BzLmVycm9yICYmIHRoaXMucHJvcHMuZXJyb3Iuc3RhdHVzID09PSA0MDQgP1xuICAgICAgWyc0MDQnLCAnUGFnZSBub3QgZm91bmQnXSA6XG4gICAgICBbJ0Vycm9yJywgJ091cHMsIHNvbWV0aGluZyB3ZW50IHdyb25nJ107XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlIHBhZ2UtZXJyb3ItNDA0XCI+XG4gICAgICAgIDxWaWRlb0JhY2tncm91bmQvPlxuICAgICAgICA8Um93IGNsYXNzTmFtZT1cImRpc3BsYXlcIj5cbiAgICAgICAgICA8Q29sdW1uIHNtYWxsPXsxMn0gbWVkaXVtPXs2fSBjZW50ZXJPbk1lZGl1bT5cbiAgICAgICAgICAgIDxQb3J0bGV0IGNsYXNzTmFtZT1cInBvcnRsZXQtZ3JleVwiIHRpdGxlPXtjb2RlICsgJyAtICcgKyB0aXRsZX0gaXRlbXM9e1xuICAgICAgICAgICAgICA8cD5UaGUgcGFnZSBkb2VzIG5vdCBleGlzdCBvciBhbiBhbm90aGVyIGVycm9yIG9jY3VycmVkLjwvcD5cbiAgICAgICAgICAgIH0gLz5cbiAgICAgICAgICA8L0NvbHVtbj5cbiAgICAgICAgPC9Sb3c+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXJyb3JQYWdlO1xuIl19