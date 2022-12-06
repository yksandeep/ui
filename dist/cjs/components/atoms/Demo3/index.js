"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Demo3 = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const index_styled_1 = require("./index.styled");
// export const Demo3: React.FC<IDemo3> = ({ sampleTextProp }) => {
//   return <div className={styles.container}>{sampleTextProp}</div>;
// };
const Demo3 = ({ sampleTextProp }) => {
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ style: {
            width: "100%",
            height: "100%",
            background: "#fff",
            padding: "20px",
        } }, { children: [(0, jsx_runtime_1.jsx)("p", { children: "Card with DIV HTML Tag" }), (0, jsx_runtime_1.jsx)(index_styled_1.Card, { children: "Demo3 Component " }), (0, jsx_runtime_1.jsx)("p", { children: "Card with Anchor link (a) HTML Tag" }), (0, jsx_runtime_1.jsxs)(index_styled_1.CardLink, Object.assign({ href: "#" }, { children: [sampleTextProp, " Link"] }))] })));
};
exports.Demo3 = Demo3;
exports.default = exports.Demo3;
//# sourceMappingURL=index.js.map