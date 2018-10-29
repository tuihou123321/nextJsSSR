'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = require('_babel-runtime@6.26.0@babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('_babel-runtime@6.26.0@babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('_babel-runtime@6.26.0@babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('_babel-runtime@6.26.0@babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _document = require('_next@4.2.3@next\\dist\\server\\document.js');

var _document2 = _interopRequireDefault(_document);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\web\\gitlab\\gitlab\\nextJsSSR\\pages\\_document.js?entry';


var pro = process.env.NODE_ENV === 'production';
var test = process.env.NODE_TEST === 'test';
var path = pro ? test ? '' : 'http://public.duduapp.net/finance/static' : '';

var MyDocument = function (_Document) {
  (0, _inherits3.default)(MyDocument, _Document);

  function MyDocument() {
    (0, _classCallCheck3.default)(this, MyDocument);

    return (0, _possibleConstructorReturn3.default)(this, (MyDocument.__proto__ || (0, _getPrototypeOf2.default)(MyDocument)).apply(this, arguments));
  }

  (0, _createClass3.default)(MyDocument, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('html', { lang: 'en', __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement(_document.Head, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement('meta', { charSet: 'utf-8', __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }), _react2.default.createElement('meta', { name: 'version', content: '1.0.0', __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }), _react2.default.createElement('link', { rel: 'stylesheet', href: path + '/static/styles/antd_mobile_min.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }), _react2.default.createElement('link', { rel: 'stylesheet', href: path + '/static/styles/app_min.css?8', __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }), _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, '\u561F\u561Fe\u8D37')), _react2.default.createElement('body', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, this.props.customValue, _react2.default.createElement(_document.Main, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }), _react2.default.createElement(_document.NextScript, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }), _react2.default.createElement('script', { src: 'http://res.wx.qq.com/open/js/jweixin-1.2.0.js', __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }), _react2.default.createElement('script', { src: path + '/static/scripts/hd.js', __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }), _react2.default.createElement('script', { src: path + '/static/scripts/local-storage.js', __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      })));
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var renderPage = _ref.renderPage;

      var _renderPage = renderPage(),
          html = _renderPage.html,
          head = _renderPage.head,
          errorHtml = _renderPage.errorHtml,
          chunks = _renderPage.chunks;

      return {
        html: html, head: head, errorHtml: errorHtml, chunks: chunks
      };
    }
  }]);

  return MyDocument;
}(_document2.default);

exports.default = MyDocument;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxfZG9jdW1lbnQuanMiXSwibmFtZXMiOlsiRG9jdW1lbnQiLCJIZWFkIiwiTWFpbiIsIk5leHRTY3JpcHQiLCJwcm8iLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJ0ZXN0IiwiTk9ERV9URVNUIiwicGF0aCIsIk15RG9jdW1lbnQiLCJwcm9wcyIsImN1c3RvbVZhbHVlIiwicmVuZGVyUGFnZSIsImh0bWwiLCJoZWFkIiwiZXJyb3JIdG1sIiwiY2h1bmtzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFZLEFBQU0sQUFBTTs7Ozs7Ozs7O0FBRS9CLElBQU0sTUFBTSxRQUFBLEFBQVEsSUFBUixBQUFZLGFBQXhCLEFBQXFDO0FBQ3JDLElBQU0sT0FBTyxRQUFBLEFBQVEsSUFBUixBQUFZLGNBQXpCLEFBQXVDO0FBQ3ZDLElBQU0sT0FBTyxNQUFPLE9BQUEsQUFBTyxLQUFkLEFBQW1CLDZDQUFoQyxBQUE4RTs7SSxBQUV6RDs7Ozs7Ozs7Ozs7NkJBU1YsQUFDUDs2QkFDRSxjQUFBLFVBQU0sTUFBTixBQUFXO29CQUFYO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLGlEQUNRLFNBQU4sQUFBYztvQkFBZDtzQkFERixBQUNFLEFBQ0E7QUFEQTtrREFDTSxNQUFOLEFBQVcsV0FBVSxTQUFyQixBQUE2QjtvQkFBN0I7c0JBRkYsQUFFRSxBQUNBO0FBREE7a0RBQ00sS0FBTixBQUFVLGNBQWEsTUFBQSxBQUFTLE9BQWhDO29CQUFBO3NCQUhGLEFBR0UsQUFDQTtBQURBO2tEQUNNLEtBQU4sQUFBVSxjQUFhLE1BQUEsQUFBUyxPQUFoQztvQkFBQTtzQkFKRixBQUlFLEFBQ0E7QUFEQTswQkFDQSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FOSixBQUNFLEFBS0UsQUFFRix5Q0FBQSxjQUFBOztvQkFBQTtzQkFBQSxBQUNHO0FBREg7QUFBQSxjQUNHLEFBQUssTUFEUixBQUNjLEFBQ1osNkJBQUEsQUFBQzs7b0JBQUQ7c0JBRkYsQUFFRSxBQUNBO0FBREE7QUFBQSwwQkFDQSxBQUFDOztvQkFBRDtzQkFIRixBQUdFLEFBQ0E7QUFEQTtBQUFBLG9EQUNRLEtBQVIsQUFBWTtvQkFBWjtzQkFKRixBQUlFLEFBQ0E7QUFEQTtvREFDUSxLQUFBLEFBQVEsT0FBaEI7b0JBQUE7c0JBTEYsQUFLRSxBQUNBO0FBREE7b0RBQ1EsS0FBQSxBQUFRLE9BQWhCO29CQUFBO3NCQWZOLEFBQ0UsQUFRRSxBQU1FLEFBSVA7QUFKTzs7Ozs7MENBeEIrQjtVQUFkLEFBQWMsa0JBQWQsQUFBYzs7d0JBQUEsQUFHakM7VUFIaUMsQUFFbkMsbUJBRm1DLEFBRW5DO1VBRm1DLEFBRTdCLG1CQUY2QixBQUU3QjtVQUY2QixBQUV2Qix3QkFGdUIsQUFFdkI7VUFGdUIsQUFFWixxQkFGWSxBQUVaLEFBRXpCOzs7Y0FBTyxNQUNDLE1BREQsTUFDTyxXQURQLFdBQ2tCLFFBRHpCLEFBQU8sQUFHUjtBQUhRLEFBQ0w7Ozs7O0FBTmtDLEE7O2tCQUFuQixBIiwiZmlsZSI6Il9kb2N1bWVudC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJFOi93ZWIvZ2l0bGFiL2dpdGxhYi9uZXh0SnNTU1IifQ==