webpackHotUpdate(3,{

/***/ 123:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _regenerator = __webpack_require__(137);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	var _asyncToGenerator2 = __webpack_require__(136);
	
	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
	
	var _getPrototypeOf = __webpack_require__(87);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(92);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(93);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(95);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(94);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(107);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _head = __webpack_require__(106);
	
	var _head2 = _interopRequireDefault(_head);
	
	var _miles = __webpack_require__(121);
	
	var _miles2 = _interopRequireDefault(_miles);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _class = function (_React$Component) {
	    (0, _inherits3.default)(_class, _React$Component);
	
	    function _class() {
	        (0, _classCallCheck3.default)(this, _class);
	        return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
	    }
	
	    (0, _createClass3.default)(_class, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                totalDistance = _props.totalDistance,
	                sessions = _props.sessions,
	                avgDistance = _props.avgDistance,
	                fastest = _props.fastest,
	                longest = _props.longest;
	
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    _head2.default,
	                    null,
	                    _react2.default.createElement(
	                        'title',
	                        null,
	                        'How far I\'ve run in ' + new Date().getFullYear()
	                    ),
	                    _react2.default.createElement('meta', {
	                        name: 'viewport',
	                        content: 'width=device-width, initial-scale=1'
	                    }),
	                    _react2.default.createElement(
	                        'style',
	                        null,
	                        '\n* {\n    margin: 0;\n    padding: 0;\n}\nmain {\n    position: fixed;\n    height: 100%;\n    width: 100%;\n    background: linear-gradient(90deg, rgba(11,72,107, 0.5) 10%, rgba(245,98,23,0.5) 90%), url("/static/img/hunter-johnson-223002.jpg") no-repeat;\n    background-size: cover;\n\n    font-family: Impact, Haettenschweiler, Franklin Gothic Bold, Charcoal, Helvetica Inserat, Bitstream Vera Sans Bold, Arial Black, sans serif;\n    color: white;\n    text-stroke: 3px black;\n    -webkit-text-stroke: 3px black;\n    -moz-text-stroke: 3px black;\n    -ms-text-stoke: 3px black;\n    text-transform: uppercase;\n    font-weight: 900;\n    font-size: 3rem;\n    overflow-y: scroll;\n}\np {\n    width: 50%;\n    min-width: 360px;\n\n    margin: auto;\n    margin-top: 2rem;\n    margin-bottom: 1rem;\n}\n@media (max-width: 400px) {\n    p {\n        width: 90%;\n        min-width: 0;\n        font-size: 1em;\n    }\n}\na {\n    color: white;\n    text-stroke: 3px black;\n    -webkit-text-stroke: 3px black;\n    -moz-text-stroke: 3px black;\n    -ms-text-stoke: 3px black;\n}\na:visited {\n    color: white;\n}\n                    '
	                    )
	                ),
	                _react2.default.createElement(
	                    'main',
	                    null,
	                    _react2.default.createElement(
	                        'p',
	                        null,
	                        'In ' + new Date().getFullYear() + ' I\'ve run ' + (0, _miles2.default)(totalDistance) + ' miles, over ' + sessions + ' sessions. That\'s an average of ' + (0, _miles2.default)(avgDistance) + ' miles per session. The longest distance was ' + (0, _miles2.default)(longest) + ' miles. The fastest time was ' + (0, _miles2.default)(fastest.data.distance) + ' miles in ' + fastest.data.effduration / 60 + ' minutes.'
	                    ),
	                    _react2.default.createElement(
	                        'p',
	                        null,
	                        'Code',
	                        ' ',
	                        _react2.default.createElement(
	                            'a',
	                            { href: 'https://github.com/danreeves/how-far-ive-run' },
	                            'here'
	                        ),
	                        '.'
	                    )
	                )
	            );
	        }
	    }], [{
	        key: 'getInitialProps',
	        value: function () {
	            var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
	                return _regenerator2.default.wrap(function _callee$(_context) {
	                    while (1) {
	                        switch (_context.prev = _context.next) {
	                            case 0:
	                                return _context.abrupt('return', {
	                                    totalDistance: 1,
	                                    sessions: 1,
	                                    avgDistance: 1,
	                                    fastest: {
	                                        data: {
	                                            distance: 1,
	                                            effduration: 1
	                                        }
	                                    },
	                                    longest: 1
	                                });
	
	                            case 1:
	                            case 'end':
	                                return _context.stop();
	                        }
	                    }
	                }, _callee, this);
	            }));
	
	            function getInitialProps() {
	                return _ref.apply(this, arguments);
	            }
	
	            return getInitialProps;
	        }()
	    }]);
	    return _class;
	}(_react2.default.Component);
	
	exports.default = _class;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbInByb3BzIiwidG90YWxEaXN0YW5jZSIsInNlc3Npb25zIiwiYXZnRGlzdGFuY2UiLCJmYXN0ZXN0IiwibG9uZ2VzdCIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImRhdGEiLCJkaXN0YW5jZSIsImVmZmR1cmF0aW9uIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O2lDQWtCYTtBQUFBLHlCQU9ELEtBQUtBLEtBUEo7QUFBQSxnQkFFREMsYUFGQyxVQUVEQSxhQUZDO0FBQUEsZ0JBR0RDLFFBSEMsVUFHREEsUUFIQztBQUFBLGdCQUlEQyxXQUpDLFVBSURBLFdBSkM7QUFBQSxnQkFLREMsT0FMQyxVQUtEQSxPQUxDO0FBQUEsZ0JBTURDLE9BTkMsVUFNREEsT0FOQzs7QUFRTCxtQkFDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQSxrREFDNEIsSUFBSUMsSUFBSixHQUFXQyxXQUFYO0FBRDVCLHFCQURKO0FBSUk7QUFDSSw4QkFBSyxVQURUO0FBRUksaUNBQVE7QUFGWixzQkFKSjtBQVFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSSixpQkFESjtBQStESTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQSxnQ0FFYyxJQUFJRCxJQUFKLEdBQVdDLFdBQVgsRUFGZCxtQkFFbUQscUJBQU1OLGFBQU4sQ0FGbkQscUJBRXVGQyxRQUZ2Rix5Q0FFa0kscUJBQU1DLFdBQU4sQ0FGbEkscURBRW9NLHFCQUFNRSxPQUFOLENBRnBNLHFDQUVrUCxxQkFBTUQsUUFBUUksSUFBUixDQUFhQyxRQUFuQixDQUZsUCxrQkFFMlJMLFFBQVFJLElBQVIsQ0FBYUUsV0FBYixHQUEyQixFQUZ0VDtBQUFBLHFCQURKO0FBTUk7QUFBQTtBQUFBO0FBQUE7QUFFSywyQkFGTDtBQUdJO0FBQUE7QUFBQSw4QkFBRyxNQUFLLDhDQUFSO0FBQUE7QUFBQSx5QkFISjtBQUFBO0FBQUE7QUFOSjtBQS9ESixhQURKO0FBaUZIOzs7Ozs7Ozs7aUVBdkdVO0FBQ0hULG1EQUFlLENBRFo7QUFFSEMsOENBQVUsQ0FGUDtBQUdIQyxpREFBYSxDQUhWO0FBSUhDLDZDQUFTO0FBQ0xJLDhDQUFNO0FBQ0ZDLHNEQUFVLENBRFI7QUFFRkMseURBQWE7QUFGWDtBQURELHFDQUpOO0FBVUhMLDZDQUFTO0FBVk4saUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUZjLGdCQUFNTSxTIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9kYW4vaHRkb2NzL2hvdy1mYXItaXZlLXJ1biIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IG1pbGVzIGZyb20gJy4uL2xpYi9taWxlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdG90YWxEaXN0YW5jZTogMSxcbiAgICAgICAgICAgIHNlc3Npb25zOiAxLFxuICAgICAgICAgICAgYXZnRGlzdGFuY2U6IDEsXG4gICAgICAgICAgICBmYXN0ZXN0OiB7XG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZTogMSxcbiAgICAgICAgICAgICAgICAgICAgZWZmZHVyYXRpb246IDEsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsb25nZXN0OiAxLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgdG90YWxEaXN0YW5jZSxcbiAgICAgICAgICAgIHNlc3Npb25zLFxuICAgICAgICAgICAgYXZnRGlzdGFuY2UsXG4gICAgICAgICAgICBmYXN0ZXN0LFxuICAgICAgICAgICAgbG9uZ2VzdCxcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICB7YEhvdyBmYXIgSSd2ZSBydW4gaW4gJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9YH1cbiAgICAgICAgICAgICAgICAgICAgPC90aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8c3R5bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYFxuKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5tYWluIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgxMSw3MiwxMDcsIDAuNSkgMTAlLCByZ2JhKDI0NSw5OCwyMywwLjUpIDkwJSksIHVybChcIi9zdGF0aWMvaW1nL2h1bnRlci1qb2huc29uLTIyMzAwMi5qcGdcIikgbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cbiAgICBmb250LWZhbWlseTogSW1wYWN0LCBIYWV0dGVuc2Nod2VpbGVyLCBGcmFua2xpbiBHb3RoaWMgQm9sZCwgQ2hhcmNvYWwsIEhlbHZldGljYSBJbnNlcmF0LCBCaXRzdHJlYW0gVmVyYSBTYW5zIEJvbGQsIEFyaWFsIEJsYWNrLCBzYW5zIHNlcmlmO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LXN0cm9rZTogM3B4IGJsYWNrO1xuICAgIC13ZWJraXQtdGV4dC1zdHJva2U6IDNweCBibGFjaztcbiAgICAtbW96LXRleHQtc3Ryb2tlOiAzcHggYmxhY2s7XG4gICAgLW1zLXRleHQtc3Rva2U6IDNweCBibGFjaztcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cbnAge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWluLXdpZHRoOiAzNjBweDtcblxuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgICBwIHtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgbWluLXdpZHRoOiAwO1xuICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICB9XG59XG5hIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1zdHJva2U6IDNweCBibGFjaztcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlOiAzcHggYmxhY2s7XG4gICAgLW1vei10ZXh0LXN0cm9rZTogM3B4IGJsYWNrO1xuICAgIC1tcy10ZXh0LXN0b2tlOiAzcHggYmxhY2s7XG59XG5hOnZpc2l0ZWQge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbiAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYEluICR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSBJJ3ZlIHJ1biAke21pbGVzKHRvdGFsRGlzdGFuY2UpfSBtaWxlcywgb3ZlciAke3Nlc3Npb25zfSBzZXNzaW9ucy4gVGhhdCdzIGFuIGF2ZXJhZ2Ugb2YgJHttaWxlcyhhdmdEaXN0YW5jZSl9IG1pbGVzIHBlciBzZXNzaW9uLiBUaGUgbG9uZ2VzdCBkaXN0YW5jZSB3YXMgJHttaWxlcyhsb25nZXN0KX0gbWlsZXMuIFRoZSBmYXN0ZXN0IHRpbWUgd2FzICR7bWlsZXMoZmFzdGVzdC5kYXRhLmRpc3RhbmNlKX0gbWlsZXMgaW4gJHtmYXN0ZXN0LmRhdGEuZWZmZHVyYXRpb24gLyA2MH0gbWludXRlcy5gXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICBDb2RlXG4gICAgICAgICAgICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9kYW5yZWV2ZXMvaG93LWZhci1pdmUtcnVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVyZVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgLlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9tYWluPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuIl19
	    if (true) {
	      module.hot.accept()

	      var Component = module.exports.default || module.exports
	      Component.__route = "/"

	      if (module.hot.status() !== 'idle') {
	        var components = next.router.components
	        for (var r in components) {
	          if (!components.hasOwnProperty(r)) continue

	          if (components[r].Component.__route === "/") {
	            next.router.update(r, Component)
	          }
	        }
	      }
	    }
	  

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz9mN2VlIl0sIm5hbWVzIjpbInByb3BzIiwidG90YWxEaXN0YW5jZSIsInNlc3Npb25zIiwiYXZnRGlzdGFuY2UiLCJmYXN0ZXN0IiwibG9uZ2VzdCIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImRhdGEiLCJkaXN0YW5jZSIsImVmZmR1cmF0aW9uIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBa0JhO0FBQUEsMEJBT0QsS0FBS0EsS0FQSjtBQUFBLGlCQUVEQyxhQUZDLFVBRURBLGFBRkM7QUFBQSxpQkFHREMsUUFIQyxVQUdEQSxRQUhDO0FBQUEsaUJBSURDLFdBSkMsVUFJREEsV0FKQztBQUFBLGlCQUtEQyxPQUxDLFVBS0RBLE9BTEM7QUFBQSxpQkFNREMsT0FOQyxVQU1EQSxPQU5DOztBQVFMLG9CQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBLG1EQUM0QixJQUFJQyxJQUFKLEdBQVdDLFdBQVg7QUFENUIsc0JBREo7QUFJSTtBQUNJLCtCQUFLLFVBRFQ7QUFFSSxrQ0FBUTtBQUZaLHVCQUpKO0FBUUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJKLGtCQURKO0FBK0RJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBLGlDQUVjLElBQUlELElBQUosR0FBV0MsV0FBWCxFQUZkLG1CQUVtRCxxQkFBTU4sYUFBTixDQUZuRCxxQkFFdUZDLFFBRnZGLHlDQUVrSSxxQkFBTUMsV0FBTixDQUZsSSxxREFFb00scUJBQU1FLE9BQU4sQ0FGcE0scUNBRWtQLHFCQUFNRCxRQUFRSSxJQUFSLENBQWFDLFFBQW5CLENBRmxQLGtCQUUyUkwsUUFBUUksSUFBUixDQUFhRSxXQUFiLEdBQTJCLEVBRnRUO0FBQUEsc0JBREo7QUFNSTtBQUFBO0FBQUE7QUFBQTtBQUVLLDRCQUZMO0FBR0k7QUFBQTtBQUFBLCtCQUFHLE1BQUssOENBQVI7QUFBQTtBQUFBLDBCQUhKO0FBQUE7QUFBQTtBQU5KO0FBL0RKLGNBREo7QUFpRkg7Ozs7Ozs7OztrRUF2R1U7QUFDSFQsb0RBQWUsQ0FEWjtBQUVIQywrQ0FBVSxDQUZQO0FBR0hDLGtEQUFhLENBSFY7QUFJSEMsOENBQVM7QUFDTEksK0NBQU07QUFDRkMsdURBQVUsQ0FEUjtBQUVGQywwREFBYTtBQUZYO0FBREQsc0NBSk47QUFVSEwsOENBQVM7QUFWTixrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBRmMsZ0JBQU1NLFMiLCJmaWxlIjoiMy40YTZmOTk2ZWMwOWQ4NTVhYjY0ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgbWlsZXMgZnJvbSAnLi4vbGliL21pbGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0b3RhbERpc3RhbmNlOiAxLFxuICAgICAgICAgICAgc2Vzc2lvbnM6IDEsXG4gICAgICAgICAgICBhdmdEaXN0YW5jZTogMSxcbiAgICAgICAgICAgIGZhc3Rlc3Q6IHtcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlOiAxLFxuICAgICAgICAgICAgICAgICAgICBlZmZkdXJhdGlvbjogMSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxvbmdlc3Q6IDEsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICB0b3RhbERpc3RhbmNlLFxuICAgICAgICAgICAgc2Vzc2lvbnMsXG4gICAgICAgICAgICBhdmdEaXN0YW5jZSxcbiAgICAgICAgICAgIGZhc3Rlc3QsXG4gICAgICAgICAgICBsb25nZXN0LFxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtgSG93IGZhciBJJ3ZlIHJ1biBpbiAke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX1gfVxuICAgICAgICAgICAgICAgICAgICA8L3RpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgXG4qIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cbm1haW4ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDExLDcyLDEwNywgMC41KSAxMCUsIHJnYmEoMjQ1LDk4LDIzLDAuNSkgOTAlKSwgdXJsKFwiL3N0YXRpYy9pbWcvaHVudGVyLWpvaG5zb24tMjIzMDAyLmpwZ1wiKSBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcblxuICAgIGZvbnQtZmFtaWx5OiBJbXBhY3QsIEhhZXR0ZW5zY2h3ZWlsZXIsIEZyYW5rbGluIEdvdGhpYyBCb2xkLCBDaGFyY29hbCwgSGVsdmV0aWNhIEluc2VyYXQsIEJpdHN0cmVhbSBWZXJhIFNhbnMgQm9sZCwgQXJpYWwgQmxhY2ssIHNhbnMgc2VyaWY7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtc3Ryb2tlOiAzcHggYmxhY2s7XG4gICAgLXdlYmtpdC10ZXh0LXN0cm9rZTogM3B4IGJsYWNrO1xuICAgIC1tb3otdGV4dC1zdHJva2U6IDNweCBibGFjaztcbiAgICAtbXMtdGV4dC1zdG9rZTogM3B4IGJsYWNrO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxucCB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtaW4td2lkdGg6IDM2MHB4O1xuXG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xuICAgIHAge1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICBtaW4td2lkdGg6IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIH1cbn1cbmEge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LXN0cm9rZTogM3B4IGJsYWNrO1xuICAgIC13ZWJraXQtdGV4dC1zdHJva2U6IDNweCBibGFjaztcbiAgICAtbW96LXRleHQtc3Ryb2tlOiAzcHggYmxhY2s7XG4gICAgLW1zLXRleHQtc3Rva2U6IDNweCBibGFjaztcbn1cbmE6dmlzaXRlZCB7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgICAgIDxtYWluPlxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgSW4gJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9IEkndmUgcnVuICR7bWlsZXModG90YWxEaXN0YW5jZSl9IG1pbGVzLCBvdmVyICR7c2Vzc2lvbnN9IHNlc3Npb25zLiBUaGF0J3MgYW4gYXZlcmFnZSBvZiAke21pbGVzKGF2Z0Rpc3RhbmNlKX0gbWlsZXMgcGVyIHNlc3Npb24uIFRoZSBsb25nZXN0IGRpc3RhbmNlIHdhcyAke21pbGVzKGxvbmdlc3QpfSBtaWxlcy4gVGhlIGZhc3Rlc3QgdGltZSB3YXMgJHttaWxlcyhmYXN0ZXN0LmRhdGEuZGlzdGFuY2UpfSBtaWxlcyBpbiAke2Zhc3Rlc3QuZGF0YS5lZmZkdXJhdGlvbiAvIDYwfSBtaW51dGVzLmBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIENvZGVcbiAgICAgICAgICAgICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2RhbnJlZXZlcy9ob3ctZmFyLWl2ZS1ydW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZXJlXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAuXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L21haW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=