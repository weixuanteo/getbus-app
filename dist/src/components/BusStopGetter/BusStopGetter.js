'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Logo = require('../Logo/Logo');

var _Logo2 = _interopRequireDefault(_Logo);

var _styles = require('@material-ui/core/styles');

var _TextField = require('@material-ui/core/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// To be put in a separate file
// const styles = theme => ({
//     container: {
//         display: 'flex',
//         flexWrap: 'wrap',
//     },
//     textField: {
//         marginLeft: theme.spacing.unit,
//         marginRight: theme.spacing.unit,
//     }
// })

var busStopGetter = function busStopGetter(props) {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Logo2.default, null),
        _react2.default.createElement(_TextField2.default, { placeholder: 'Input Bus Stop Code', margin: 'normal', variant: 'outlined' })
    );
};

exports.default = busStopGetter;

//# sourceMappingURL=BusStopGetter.js.map