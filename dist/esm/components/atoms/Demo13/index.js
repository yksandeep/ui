import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardLink } from "./index.styled";
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
export const Demo13 = ({ sampleTextProp }) => {
    return (_jsxs("div", Object.assign({ style: {
            width: "100%",
            height: "100%",
            background: "#fff",
            padding: "20px",
        } }, { children: [_jsx("p", { children: "Card with DIV HTML Tag" }), _jsx(Card, { children: "Demo13 Component " }), _jsx("p", { children: "Card with Anchor link (a) HTML Tag" }), _jsxs(CardLink, Object.assign({ href: "#" }, { children: [sampleTextProp, " Link"] }))] })));
};
export default Demo13;
//# sourceMappingURL=index.js.map