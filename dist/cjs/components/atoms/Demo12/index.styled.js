"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardLink = exports.Card = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.Card = styled_components_1.default.div `
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
const CLink = exports.Card.withComponent("a");
exports.CardLink = (0, styled_components_1.default)(CLink) `
  display: block;

  &:hover {
    border-color: slategray;
  }
`;
//# sourceMappingURL=index.styled.js.map