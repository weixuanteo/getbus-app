'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _logo = require('../../assets/images/logo.png');

var _logo2 = _interopRequireDefault(_logo);

var _Logo = require('./Logo.css');

var _Logo2 = _interopRequireDefault(_Logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logo = function logo(props) {
    return _react2.default.createElement(
        'div',
        { className: _Logo2.default.Logo },
        _react2.default.createElement('img', { src: _logo2.default, alt: 'GetBusLogo', style: { height: props.height } })
    );
};

exports.default = logo;

//# sourceMappingURL=Logo.js.map