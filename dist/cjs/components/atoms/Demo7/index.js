"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Demo7 = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const index_styled_1 = require("./index.styled");
/**
 * Demo7
 *
 * @prop string variant
 * @prop {string} sampleTextProp
 * @return {React.FC} Demo7 Component
 *
 * @component
 * @example
 * return(
 *    <Demo7 sampleTextProp="Demo7"/>
 * )
 */
const Demo7 = ({ sampleTextProp }) => {
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ style: {
            width: "100%",
            height: "100%",
            background: "#fff",
            padding: "20px",
        } }, { children: [(0, jsx_runtime_1.jsx)("p", { children: "Card with DIV HTML Tag" }), (0, jsx_runtime_1.jsx)(index_styled_1.Card, { children: "Demo7 Component " }), (0, jsx_runtime_1.jsx)("p", { children: "Card with Anchor link (a) HTML Tag" }), (0, jsx_runtime_1.jsxs)(index_styled_1.CardLink, Object.assign({ href: "#" }, { children: [sampleTextProp, " Link"] }))] })));
};
exports.Demo7 = Demo7;
exports.default = exports.Demo7;
//# sourceMappingURL=index.js.map