"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Demo2 = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const index_styled_1 = require("./index.styled");
/**
 * Demo2
 *
 * @prop string variant
 * @prop {string} sampleTextProp
 * @return {React.FC} Demo2 Component
 *
 * @component
 * @example
 * return(
 *    <Demo2 sampleTextProp="Demo2"/>
 * )
 */
const Demo2 = ({ sampleTextProp }) => {
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ style: {
            width: "100%",
            height: "100%",
            background: "#fff",
            padding: "20px",
        } }, { children: [(0, jsx_runtime_1.jsx)("p", { children: "Card with DIV HTML Tag" }), (0, jsx_runtime_1.jsx)(index_styled_1.Card, { children: "Demo2 Component " }), (0, jsx_runtime_1.jsx)("p", { children: "Card with Anchor link (a) HTML Tag" }), (0, jsx_runtime_1.jsxs)(index_styled_1.CardLink, Object.assign({ href: "#" }, { children: [sampleTextProp, " Link"] }))] })));
};
exports.Demo2 = Demo2;
exports.default = exports.Demo2;
//# sourceMappingURL=index.js.map