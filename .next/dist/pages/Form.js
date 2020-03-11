"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require("babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _mdbreact = require("mdbreact");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "F:\\Project2\\Doc-ters\\pages\\Form.js?entry";

//import 'bootstrap/dist/css/bootstrap.css';

var Form = function (_React$Component) {
  (0, _inherits3.default)(Form, _React$Component);

  function Form(props) {
    var _this2 = this;

    (0, _classCallCheck3.default)(this, Form);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Form.__proto__ || (0, _getPrototypeOf2.default)(Form)).call(this, props));

    _this.handleSubmit = function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var f_name, l_name, email, city, state, zip;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                event.target.className += " was-validated";

                if (!(_this.state.fname === '' || _this.state.lname === '' || _this.state.email === '' || _this.state.city === '' || _this.state.state === '' || _this.state.zip === '')) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return");

              case 4:
                f_name = _this.state.fname;
                l_name = _this.state.l_name;
                email = _this.state.email;
                city = _this.state.city;
                state = _this.state.state;
                zip = _this.state.zip;

              //make a post request over here to add data

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.changeHandler = function (event) {
      _this.setState((0, _defineProperty3.default)({}, event.target.name, event.target.value));
    };

    _this.state = {
      fname: "",
      lname: "",
      email: "",
      city: "",
      state: "",
      zip: ""
    };
    return _this;
  }

  (0, _createClass3.default)(Form, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement("div", { style: {
          position: 'absolute', left: '50%', top: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%'
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react2.default.createElement("form", {
        className: "needs-validation",
        onSubmit: this.submitHandler,
        noValidate: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement(_mdbreact.MDBRow, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, _react2.default.createElement(_mdbreact.MDBCol, { md: "4", className: "mb-3", __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, _react2.default.createElement("label", {
        htmlFor: "defaultFormRegisterNameEx",
        className: "grey-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, "First name"), _react2.default.createElement("input", {
        value: this.state.fname,
        name: "fname",
        onChange: this.changeHandler,
        type: "text",
        id: "defaultFormRegisterNameEx",
        className: "form-control",
        placeholder: "First name",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }), _react2.default.createElement("div", { className: "valid-feedback", __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, "Looks good!")), _react2.default.createElement(_mdbreact.MDBCol, { md: "4", className: "mb-3", __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, _react2.default.createElement("label", {
        htmlFor: "defaultFormRegisterEmailEx2",
        className: "grey-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, "Last name"), _react2.default.createElement("input", {
        value: this.state.lname,
        name: "lname",
        onChange: this.changeHandler,
        type: "text",
        id: "defaultFormRegisterEmailEx2",
        className: "form-control",
        placeholder: "Last name",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }), _react2.default.createElement("div", { className: "valid-feedback", __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, "Looks good!")), _react2.default.createElement(_mdbreact.MDBCol, { md: "4", className: "mb-3", __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, _react2.default.createElement("label", {
        className: "grey-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, "Email"), _react2.default.createElement("input", {
        value: this.state.email,
        onChange: this.changeHandler,
        type: "email",
        id: "defaultFormRegisterConfirmEx3",
        className: "form-control",
        name: "email",
        placeholder: "Your Email address",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }), _react2.default.createElement("small", { id: "emailHelp", className: "form-text text-muted", __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, "We'll never share your email with anyone else."))), _react2.default.createElement(_mdbreact.MDBRow, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, _react2.default.createElement(_mdbreact.MDBCol, { md: "4", className: "mb-3", __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, _react2.default.createElement("label", {
        htmlFor: "defaultFormRegisterPasswordEx4",
        className: "grey-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, "City"), _react2.default.createElement("input", {
        value: this.state.city,
        onChange: this.changeHandler,
        type: "text",
        id: "defaultFormRegisterPasswordEx4",
        className: "form-control",
        name: "city",
        placeholder: "City",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }), _react2.default.createElement("div", { className: "invalid-feedback", __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }, "Please provide a valid city."), _react2.default.createElement("div", { className: "valid-feedback", __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }, "Looks good!")), _react2.default.createElement(_mdbreact.MDBCol, { md: "4", className: "mb-3", __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }, _react2.default.createElement("label", {
        htmlFor: "defaultFormRegisterPasswordEx4",
        className: "grey-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }, "State"), _react2.default.createElement("input", {
        value: this.state.state,
        onChange: this.changeHandler,
        type: "text",
        id: "defaultFormRegisterPasswordEx4",
        className: "form-control",
        name: "state",
        placeholder: "State",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      }), _react2.default.createElement("div", { className: "invalid-feedback", __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      }, "Please provide a valid state."), _react2.default.createElement("div", { className: "valid-feedback", __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      }, "Looks good!")), _react2.default.createElement(_mdbreact.MDBCol, { md: "4", className: "mb-3", __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        }
      }, _react2.default.createElement("label", {
        htmlFor: "defaultFormRegisterPasswordEx4",
        className: "grey-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        }
      }, "Zip"), _react2.default.createElement("input", {
        value: this.state.zip,
        onChange: this.changeHandler,
        type: "text",
        id: "defaultFormRegisterPasswordEx4",
        className: "form-control",
        name: "zip",
        placeholder: "Zip",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        }
      }), _react2.default.createElement("div", { className: "invalid-feedback", __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        }
      }, "Please provide a valid zip."), _react2.default.createElement("div", { className: "valid-feedback", __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        }
      }, "Looks good!"))), _react2.default.createElement(_mdbreact.MDBCol, { md: "4", className: "mb-3", __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        }
      }, _react2.default.createElement("div", { className: "custom-control custom-checkbox pl-3", __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        }
      }, _react2.default.createElement("input", {
        className: "custom-control-input",
        type: "checkbox",
        value: "",
        id: "invalidCheck",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        }
      }), _react2.default.createElement("label", { className: "custom-control-label", htmlFor: "invalidCheck", __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        }
      }, "Agree to terms and conditions"), _react2.default.createElement("div", { className: "invalid-feedback", __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        }
      }, "You must agree before submitting."))), _react2.default.createElement(_mdbreact.MDBBtn, { color: "primary", type: "submit", __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        }
      }, "Submit Form")));
    }
  }]);

  return Form;
}(_react2.default.Component);

exports.default = Form;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxGb3JtLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTURCUm93IiwiTURCQ29sIiwiTURCQnRuIiwiRm9ybSIsInByb3BzIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsImNsYXNzTmFtZSIsInN0YXRlIiwiZm5hbWUiLCJsbmFtZSIsImVtYWlsIiwiY2l0eSIsInppcCIsImZfbmFtZSIsImxfbmFtZSIsImNoYW5nZUhhbmRsZXIiLCJzZXRTdGF0ZSIsIm5hbWUiLCJ2YWx1ZSIsInBvc2l0aW9uIiwibGVmdCIsInRvcCIsInRyYW5zZm9ybSIsIndpZHRoIiwic3VibWl0SGFuZGxlciIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUyxBQUFRLEFBQVE7Ozs7OztBQUN6Qjs7SSxBQUVNO2dDQUNKOztnQkFBQSxBQUFZLE9BQ1o7aUJBQUE7O3dDQUFBOztrSUFBQSxBQUNROztVQURSLEFBWUEsMkJBWkE7MEZBWWUsaUJBQUEsQUFBTSxPQUFOO2dEQUFBO3NFQUFBO29CQUFBOzZDQUFBO21CQUNiO3NCQUFBLEFBQU0sQUFDTjtzQkFBQSxBQUFNLE9BQU4sQUFBYSxhQUZBLEFBRWIsQUFBMEI7O3NCQUV2QixNQUFBLEFBQUssTUFBTCxBQUFXLFVBQVgsQUFBcUIsTUFBTSxNQUFBLEFBQUssTUFBTCxBQUFXLFVBQXRDLEFBQWdELE1BQU0sTUFBQSxBQUFLLE1BQUwsQUFBVyxVQUFqRSxBQUEyRSxNQUFNLE1BQUEsQUFBSyxNQUFMLEFBQVcsU0FBNUYsQUFBcUcsTUFBTSxNQUFBLEFBQUssTUFBTCxBQUFXLFVBQXRILEFBQWdJLE1BQU0sTUFBQSxBQUFLLE1BQUwsQUFBVyxRQUp2SSxBQUkrSSxLQUovSTtrQ0FBQTtBQUFBO0FBQUE7O3VDQUFBOzttQkFRVDtBQVJTLHlCQVFBLE1BQUEsQUFBSyxNQVJMLEFB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V0FBTCxBQUFlO29CQUFmO3NCQUFBO0FBQUE7U0FqQkYsQUFpQkUsQUFHQSxrREFBQSxjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBO0FBQUE7U0EzQ0osQUF1QkUsQUFvQkUsQUFFRixpQ0FBQSxBQUFDLGtDQUFPLElBQVIsQUFBVyxLQUFJLFdBQWYsQUFBeUI7b0JBQXpCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBO2lCQUFBLEFBQ1UsQUFDUjttQkFGRixBQUVZOztvQkFGWjtzQkFBQTtBQUFBO0FBQ0UsU0FGSixBQUNFLEFBTUE7ZUFDUyxLQUFBLEFBQUssTUFEZCxBQUNvQixBQUNsQjtrQkFBVSxLQUZaLEFBRWlCLEFBQ2Y7Y0FIRixBQUdPLEFBQ0w7WUFKRixBQUlLLEFBQ0g7bUJBTEYsQUFLWSxBQUNWO2NBTkYsQUFNTyxBQUNMO3FCQVBGLEFBT2MsQUFDWjtrQkFSRjs7b0JBQUE7c0JBUEYsQUFPRSxBQVVBO0FBVkE7QUFDRSwwQkFTRixjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBO0FBQUE7U0FqQkYsQUFpQkUsQUFHQSxnREFBQSxjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBO0FBQUE7U0FsSU4sQUFpRUUsQUE2Q0UsQUFvQkUsQUFHSixrQ0FBQSxBQUFDLGtDQUFPLElBQVIsQUFBVyxLQUFJLFdBQWYsQUFBeUI7b0JBQXpCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBLEFBQ0U7QUFERjs7bUJBQ0UsQUFDWSxBQUNWO2NBRkYsQUFFTyxBQUNMO2VBSEYsQUFHUSxBQUNOO1lBSkYsQUFJSyxBQUNIO2tCQUxGOztvQkFBQTtzQkFERixBQUNFLEFBT0E7QUFQQTtBQUNFLDBCQU1GLGNBQUEsV0FBTyxXQUFQLEFBQWlCLHdCQUF1QixTQUF4QyxBQUFnRDtvQkFBaEQ7c0JBQUE7QUFBQTtTQVJGLEFBUUUsQUFHQSxrREFBQSxjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBO0FBQUE7U0FqSk4sQUFxSUUsQUFDRSxBQVdFLEFBS0osd0RBQUEsQUFBQyxrQ0FBTyxPQUFSLEFBQWMsV0FBVSxNQUF4QixBQUE2QjtvQkFBN0I7c0JBQUE7QUFBQTtTQTdKTixBQUNFLEFBTUUsQUFzSkUsQUFNUDs7Ozs7RUExTWdCLGdCQUFNLEEsQUE2TXpCOztrQkFBQSxBQUFlIiwiZmlsZSI6IkZvcm0uanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRjovUHJvamVjdDIvRG9jLXRlcnMifQ==