import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardLink } from "./index.styled";
/**
 * Demo10
 *
 * @prop string variant
 * @prop {string} sampleTextProp
 * @return {React.FC} Demo10 Component
 *
 * @component
 * @example
 * return(
 *    <Demo10 sampleTextProp="Demo10"/>
 * )
 */
export const Demo10 = ({ sampleTextProp }) => {
    return (_jsxs("div", Object.assign({ style: {
            width: "100%",
            height: "100%",
            background: "#fff",
            padding: "20px",
        } }, { children: [_jsx("p", { children: "Card with DIV HTML Tag" }), _jsx(Card, { children: "Demo10 Component " }), _jsx("p", { children: "Card with Anchor link (a) HTML Tag" }), _jsxs(CardLink, Object.assign({ href: "#" }, { children: [sampleTextProp, " Link"] }))] })));
};
export default Demo10;
//# sourceMappingURL=index.js.map