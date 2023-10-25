import { commonStyles } from "@/src/shared";
import { SVGProps, useEffect, useRef, useState } from "react";
import { MyloaderOverlay } from "./index.style";

/**
 * Props for the Loader component
 *
 * @interface LoaderProps
 * @prop {number} [backgroundOpacity] The opacity of the background. Default value is 0.5.
 * @prop {string} [bgColor] The color of the background. Default value is "#fff".
 * @prop {string} [text] The text to display below the loading spinner.
 * @prop {string} [loaderColor] The color of the loading spinner. Default value is "#000000".
 * @prop {string} [textSize] The font size of the text. Default value is "16px".
 * @prop {string} [textColor] The color of the text. Default value is "#000000".
 */
interface LoaderProps {
  backgroundOpacity?: number;

  bgColor?: string;

  text?: string;

  loaderColor?: string;

  textSize?: string;

  textColor?: string;
}

/**
 * Loader is a React component that displays a loading spinner and text while
 * data is being fetched or processed.
 *
 * @param {LoaderProps} props - The props for the component.
 * @param {number} props.backgroundOpacity - The opacity of the background.
 * @param {string} props.text - The text to display below the loading spinner.
 * @param {string} props.loaderColor - The color of the loading spinner.
 * @param {string} props.textSize - The font size of the text.
 * @param {string} props.textColor - The color of the text.
 * @param {string} props.bgColor - The color of the background.
 * @param {SVGProps<SVGSVGElement>} props.otherProps - Other props to pass to the SVG element.
 * @returns {JSX.Element} The rendered Loader component.
 *
 * @component
 */
const Loader: React.FC<LoaderProps & SVGProps<SVGSVGElement>> = ({
  // Default values for the props
  text,
  bgColor = "#fff",
  backgroundOpacity = 0.5,
  loaderColor = "#000000",
  textSize = "16px",
  textColor = "#000000",
  ...props
}) => {
  // Create a ref for the parent element
  const loaderRef = useRef<HTMLDivElement>(null);
  // State for the dimensions of the parent element
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  });
  // State for the rotation of the loading spinner
  const [rotation, setRotation] = useState(0);
  // Ref for the interval ID
  const intervalId = useRef<number | undefined>();

  // Use effect to start an interval that updates the rotation of the loading spinner every 100ms
  useEffect(() => {
    intervalId.current = window.setInterval(() => {
      setRotation((rotation) => rotation + 45);
    }, 100);

    // Return a cleanup function to clear the interval when the component is unmounted
    return () => {
      clearInterval(intervalId.current);
    };
  }, []);

  // Use effect to set the dimensions of the parent element
  useEffect(() => {
    // Get the dimensions of the parent element
    if (loaderRef && loaderRef.current && loaderRef.current.parentElement) {
      const { width, height, left, right, top, bottom } =
        loaderRef.current.parentElement.getBoundingClientRect();
      // let parentStyle = window.getComputedStyle(
      //   loaderRef.current.parentElement
      // );
      setDimensions((prevState) => {
        let newState = { ...prevState };
        newState.width = width;
        newState.height = height;
        if (newState.height == 0) {
          newState.width = 100;
          newState.height = 100;
        }
        newState.left = left;
        newState.right = right;
        newState.top = top;
        newState.bottom = bottom;
        return newState;
      });
    }
  }, [loaderRef]);

  useEffect(() => {
    const handleResize = () => {
      // Get the dimensions of the parent element
      if (loaderRef && loaderRef.current && loaderRef.current.parentElement) {
        const { width, height, left, right, top, bottom } =
          loaderRef.current.parentElement.getBoundingClientRect();
        console.log(loaderRef.current.parentElement.getBoundingClientRect());
        // let parentStyle = window.getComputedStyle(
        //   loaderRef.current.parentElement
        // );
        setDimensions((prevState) => {
          let newState = { ...prevState };
          newState.width = width;
          newState.height = height;
          if (newState.height == 0) {
            newState.width = 100;
            newState.height = 100;
          }
          newState.left = left;
          newState.right = right;
          newState.top = top;
          newState.bottom = bottom;
          return newState;
        });
      }
    };
    window.addEventListener("resize", handleResize);

    // Return a cleanup function to remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Return the rendered component
  return (
    <MyloaderOverlay
      ref={loaderRef}
      backgroundOpacity={backgroundOpacity}
      bgColor={bgColor}
      style={{
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        top: dimensions.top,
        left: dimensions.left,
        width: dimensions.width,
        height: dimensions.height,
        right: dimensions.right,
        bottom: dimensions.bottom,
        color: commonStyles.primary,
        zIndex: 9999,
      }}
    >
      {/* Only render the loading spinner and text if the dimensions state is set */}
      {dimensions.width > 0 && dimensions.height > 0 && (
        <>
          {/* Render the loading spinner as an SVG element  */}
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            {...props}
            // Use the rotation state for the rotation and the loaderColor prop for the fill color
            style={{
              transform: `rotate(${rotation}deg)`,
              fill: loaderColor,
            }}
          >
            {/* Render a circle and a path as the loading spinner */}
            <circle cx="25" cy="25" r="20" fill="none" />
            <path d="M20,25 L30,25" />
          </svg>
          {/* Render the text as a div element */}
          {text && (
            <div
              // Styles for the text element
              style={{
                fontSize: textSize,
                color: textColor,
                marginTop: "20px",
              }}
            >
              {text}
            </div>
          )}
        </>
      )}
    </MyloaderOverlay>
  );
};

export default Loader;
