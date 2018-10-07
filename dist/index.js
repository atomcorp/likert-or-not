'use strict';

function __$styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

__$styleInject(":root {\r\n  --element-columns: 1;\r\n  --statement-width: 50%;\r\n  --column-width: auto;\r\n}\r\n\r\n._container_16ict_13 {\r\n  width: 500px;\r\n  margin: 0 auto;\r\n  border: 1px solid;\r\n}\r\n\r\n._header_16ict_25::before {\r\n  content: \" \";\r\n  width: var(--statement-width);\r\n}\r\n\r\n._column_16ict_35 {\r\n  text-align: center;\r\n  flex: 1 0 var(--column-width);\r\n}\r\n\r\n._statement_16ict_45 {\r\n  width: var(--statement-width);\r\n}\r\n\r\n._radios_16ict_53 {\r\n  /* display: flex; */\r\n  flex: 1;\r\n}\r\n\r\n._radio_16ict_53 {\r\n  flex: 1 0 var(--column-width);\r\n}\r\n", {});
var css = {"container":"_container_16ict_13","header":"_header_16ict_25","column":"_column_16ict_35","statement":"_statement_16ict_45","radios":"_radios_16ict_53","radio":"_radio_16ict_53"};

var Header = function (props) { return (React.createElement("thead", { className: css.columns }, props.children)); };
//# sourceMappingURL=Header.js.map

var Title = function (props) { return React.createElement("caption", null, props.children); };
//# sourceMappingURL=Title.js.map

var Body = function (props) { return (React.createElement("tbody", { className: css.rows }, props.children)); };
//# sourceMappingURL=Body.js.map

var Row = function (props) { return (React.createElement("tr", { className: props.className }, props.children)); };
//# sourceMappingURL=Row.js.map

/**
 * Check whether the Radio is checked
 * - If user has specified the possible Values prop we compare
 * with the current value
 * - If not, we compare with the index of the Radio in the row
 * - If value is undefined will return false
 */
var isChecked = function (props) {
    if (props.values && props.values.length > 0) {
        return props.value === props.values[props.index];
    }
    // coerce string number into a integer (eg '5' !== 5)
    if (typeof props.value === 'string') {
        return parseInt(props.value, 10) === props.index;
    }
    return props.value === props.index;
};
/**
 * If user has specified the Values prop this ensures it is used
 * Otherwise it just returns the number of the index
 */
var returnValueIfSpecifiedElseEnum = function (props) {
    if (props.values && props.values.length > 0) {
        return props.values[props.index];
    }
    return props.index;
};
/**
 * This just creates an array from 0 to the given number
 * eg returnEnumArray(3) => [0, 1, 2]
 */
var returnEnumArray = function (length) {
    return Array.from(Array(length).keys());
};

var Radio = function (props) { return (React.createElement("input", { className: css.radio, name: props.name, value: props.value, type: "radio", checked: props.checked, onChange: function (e) {
        return props.handleClick(e, {
            id: props.name,
            value: props.value
        });
    } })); };
//# sourceMappingURL=Radio.js.map

var Radios = function (props) { return (React.createElement(React.Fragment, null, returnEnumArray(props.length).map(function (index) { return (React.createElement("td", { key: index },
    React.createElement(Radio, { name: props.id, value: returnValueIfSpecifiedElseEnum({
            index: index,
            values: props.values
        }), checked: isChecked({
            value: props.value,
            values: props.values,
            index: index
        }), handleClick: props.handleClick }))); }))); };
//# sourceMappingURL=Radios.js.map

var Matrix = function (props) { return (React.createElement("table", { className: css.container },
    React.createElement(Title, null, props.title),
    React.createElement(Header, null,
        React.createElement(Row, { className: css.header }, props.labels.map(function (label) { return (React.createElement("td", { key: label, className: css.column }, label)); }))),
    React.createElement(Body, null, props.rows.map(function (row) { return (React.createElement(Row, { className: css.row, key: row.id },
        React.createElement("td", { className: css.statement }, row.statement),
        React.createElement(Radios, { length: props.labels.length, id: row.id, values: props.values || returnEnumArray(props.labels.length), value: row.value, handleClick: props.handleClick }))); })))); };
//# sourceMappingURL=index.js.map

exports.default = Matrix;
//# sourceMappingURL=index.js.map
