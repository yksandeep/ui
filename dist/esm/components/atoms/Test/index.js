import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardLink } from "./index.styled";
export const Test = ({ sampleTextProp }) => {
    return (_jsxs("div", Object.assign({ style: {
            padding: "20px",
            textAlign: "center",
        } }, { children: [_jsx("h4", { children: "Basic Template to start with creating components" }), _jsx("p", { children: "Example Card with DIV HTML Tag" }), _jsx(Card, { children: "Test Component " }), _jsx("p", { children: "Example Card with Anchor link (a) HTML Tag" }), _jsxs(CardLink, Object.assign({ href: "#" }, { children: [sampleTextProp, " Link"] }))] })));
};
export default Test;
//# sourceMappingURL=index.js.map