"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextField = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const TextFieldStyle = {
    padding: "5px 10px",
    display: "flex",
    alignItems: "center",
    background: "#fff",
    borderRadius: "4px",
    border: "1px solid #282c34",
    width: "100%",
};
/**
 * TextField (ATOM Component)
 * @component
 */
const TextField = (_a) => {
    var props = __rest(_a, []);
    const { style } = props;
    const _style = style || TextFieldStyle;
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ style: _style }, { children: (0, jsx_runtime_1.jsx)("input", Object.assign({ style: { outline: "none", border: "none", width: "100%" } }, props)) })));
};
exports.TextField = TextField;
//# sourceMappingURL=index.js.map