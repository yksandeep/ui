import styled from "styled-components";

/**
 * Props for the classes function
 *
 * @prop {number} backgroundOpacity The opacity of the background
 * @prop {string} bgColor The color of the background
 */
interface LoaderStyleProp {
  backgroundOpacity: number;
  bgColor: string;
}

/**
 * Creates a set of CSS classes for the Loader component.
 *
 * @param {Theme} theme - The current theme.
 * @param {LoaderStyleProp} props - The props for the function.
 * @param {number} props.backgroundOpacity - The opacity of the background.
 * @param {string} props.bgColor - The color of the background.
 * @returns {Record<string, string>} The CSS classes for the component.
 */

export const MyloaderOverlay = styled.div<LoaderStyleProp>`
  &:before {
    z-index: -1,;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: ${(props) => `${props.backgroundOpacity}`};
    background-color: ${(props) => `${props.bgColor}`};
  },
`;
