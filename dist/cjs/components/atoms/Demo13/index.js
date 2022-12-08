"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Demo13 = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const index_styled_1 = require("./index.styled");
/**
 * Demo13
 *
 * @prop string variant
 * @prop {string} sampleTextProp
 * @return {React.FC} Demo13 Component
 *
 * @component
 * @example
 * return(
 *    <Demo13 sampleTextProp="Demo13"/>
 * )
 */
const Demo13 = ({ sampleTextProp }) => {
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ style: {
            width: "100%",
            height: "100%",
            background: "#fff",
            padding: "20px",
        } }, { children: [(0, jsx_runtime_1.jsx)("p", { children: "Card with DIV HTML Tag" }), (0, jsx_runtime_1.jsx)(index_styled_1.Card, { children: "Demo13 Component " }), (0, jsx_runtime_1.jsx)("p", { children: "Card with Anchor link (a) HTML Tag" }), (0, jsx_runtime_1.jsxs)(index_styled_1.CardLink, Object.assign({ href: "#" }, { children: [sampleTextProp, " Link"] }))] })));
};
exports.Demo13 = Demo13;
exports.default = exports.Demo13;
//# sourceMappingURL=index.js.map