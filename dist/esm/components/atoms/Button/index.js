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
import { jsx as _jsx } from "react/jsx-runtime";
/**
 * Button (ATOM Component)
 *
 * @prop {'primary' | 'secondary' | 'danger'} variant
 * @prop {string} children
 * @return {React.ReactElement} Button Component
 *
 * @component
 * @example
 * return(
 *    <Button variant="primary" children="Submit"/>
 * )
 */
export const Button = (_a) => {
    var { variant = 'primary' } = _a, props = __rest(_a, ["variant"]);
    const { children, style } = props;
    const _style = style || {};
    switch (variant) {
        case 'primary':
            _style.backgroundColor = '#006E7F';
            _style.color = '#fff';
            break;
        case 'secondary':
            _style.backgroundColor = '#F8CB2E';
            _style.color = '#000';
            break;
        case 'danger':
            _style.backgroundColor = '#B22727';
            _style.color = '#fff';
            break;
    }
    _style.padding = '5px 10px';
    return (_jsx("button", Object.assign({ style: _style }, props, { children: children })));
};
//# sourceMappingURL=index.js.map