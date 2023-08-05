import { useEffect, useRef, useState } from "react";
import {
  MdCheck,
  MdOutlineExpandLess,
  MdOutlineExpandMore,
} from "react-icons/md";
import { Menu } from "../../molecules";
import MenuItem from "../MenuItem";
import { ITextInput } from "../TextInput";
import { InputContainer, StyledInput } from "../TextInput/index.styled";
import { MenuWrapper, SelectInputContainer } from "./index.styled";
/**
 * ISelectInput Interface
 * @interface
 */
export interface ISelectInput<T>
  extends Omit<ITextInput, "onChange" | "placeholder" | "style" | "value"> {
  options: T[];
  filteringKeys?: (keyof SelectOption<T>)[];
  renderOption?: ({ item, i }: { item: T; i: number }) => React.ReactNode;
  itemToString: (item: T) => string;
  itemToValue: (item: T) => string | number;
  lable?: string;
  onChange?: (value: (string | number)[]) => void;
  style?: React.CSSProperties;
  multiple?: boolean;
  value?: string;
  showMenuItemIcon?: boolean;
}
type SelectOption<T> = {
  [key in keyof T]: string;
};

/**
 * SelectInput
 *
 * @return {React.FC} SelectInput Component
 *
 * @component
 * @example
 * return(
 *    <SelectInput options={[{key:'india',value:'IND'}]}>
 * )
 */
export const SelectInput = <T,>({
  name,
  options,
  filteringKeys,
  renderOption,
  itemToString,
  lable,
  onChange,
  style,
  multiple,
  itemToValue,
  value,
  showMenuItemIcon,
  ...props
}: ISelectInput<T>) => {
  const currentInputRef = useRef<HTMLInputElement>(null);
  const [seperator] = useState(",");
  // State to keep track of the input text
  const [text, setText] = useState("");
  // State to keep track of the currently focused item index in the menu
  const [focusedIndex, setFocusedIndex] = useState(-1);
  // Ref to store a reference to the Menu component for focusing
  const menuWrapperRef = useRef<HTMLDivElement>(null);
  // Ref to store the previous focused index
  const prevFocusedIndexRef = useRef<number>(-1);
  // State to keep track of the dropDown weather to show or not
  const [showDropDown, setShowDropDown] = useState(false);

  // tate to keep track of selected keys
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  // tate to keep track of selected values
  const [selectedValues, setSelectedValues] = useState<(string | number)[]>([]);

  // Helper function to scroll the focused item into view
  const scrollIntoViewIfNeeded = (index: number) => {
    const menuWrapperElement = menuWrapperRef.current;
    if (menuWrapperElement) {
      // Get the MenuItem element by index within the menu
      const menuItemElement = menuWrapperElement.querySelector(
        `[data-index="${index}"]`
      ) as HTMLElement | null;

      if (menuItemElement) {
        const menuWrapperRect = menuWrapperElement.getBoundingClientRect();
        const menuItemRect = menuItemElement.getBoundingClientRect();

        if (menuItemRect.top < menuWrapperRect.top) {
          // Scroll up if the item is above the visible area
          menuItemElement.scrollIntoView({
            block: "start",
            behavior: "smooth",
          });
        } else if (menuItemRect.bottom > menuWrapperRect.bottom) {
          // Scroll down if the item is below the visible area
          menuItemElement.scrollIntoView({ block: "end", behavior: "smooth" });
        }
      }
    }
  };

  // Function to filter the options based on the input text
  const filterOptions = (options: T[], text: string) => {
    if (filteringKeys?.length) {
      // If filteringKeys prop is provided, use it to filter options based on the specified keys
      if (multiple) {
        let alreadySelected = text.split(seperator);
        let currentSearch = alreadySelected[alreadySelected.length - 1];
        return options.filter((item) =>
          filteringKeys.some((key) =>
            String(item[key]).toLowerCase().includes(currentSearch)
          )
        );
      }
      return options.filter((item) =>
        filteringKeys.some((key) =>
          String(item[key]).toLowerCase().includes(text)
        )
      );
    }
    // If filteringKeys prop is not provided, use valueProp to filter options
    let currentSearch = text;
    if (multiple) {
      let alreadySelected = text.split(seperator);
      currentSearch = alreadySelected[alreadySelected.length - 1];
    }
    return options.filter((item) =>
      itemToString(item).toLowerCase().includes(currentSearch)
    );
  };

  // Get the filtered options based on the current input text
  const filteredOptions = filterOptions(options, text);

  // Handler for MenuItem click, updates the focusedIndex
  const handleMenuItemClick = (index: number) => {
    setFocusedIndex(index);
    let selected;
    let onChangeValue;
    selected = itemToString(filteredOptions[index]);
    onChangeValue = itemToValue(filteredOptions[index]);
    if (typeof onChangeValue === "object") {
      onChangeValue = JSON.stringify(onChangeValue);
    }
    if (multiple && seperator) {
      setSelectedKeys((prev) => {
        const newState = [...prev];
        if (!newState.includes(selected)) {
          newState.push(selected);
        } else {
          let prevIdx = newState.indexOf(selected);
          newState.splice(prevIdx, 1);
        }
        if (newState.length > 0) {
          setText(newState.join(seperator) + seperator);
        } else {
          setText(newState.join(seperator));
        }
        return newState;
      });
      setSelectedValues((prev) => {
        const newState = [...prev];
        if (!newState.includes(onChangeValue)) {
          newState.push(onChangeValue);
        } else {
          let prevIdx = newState.indexOf(onChangeValue);
          newState.splice(prevIdx, 1);
        }
        if (onChange) {
          onChange(newState);
        }
        return newState;
      });
    } else {
      setText(selected);
      setSelectedKeys([selected]);
      setSelectedValues([onChangeValue]);
      if (onChange) {
        onChange([onChangeValue]);
      }
    }
  };

  // Handler for keyboard arrow key events
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Backspace") {
      e.preventDefault();
      // @ts-ignore
      const cursorPosition = e.target.selectionStart;
      const previousSeparatorIndex = text.lastIndexOf(
        seperator,
        cursorPosition - 2
      );
      const nextSeparatorIndex = text.indexOf(seperator, cursorPosition);
      let newText = "";
      if (previousSeparatorIndex === -1 && nextSeparatorIndex === -1) {
        // No separators in the input, clear the input and selectedKeys
        newText = "";
      } else if (previousSeparatorIndex === -1) {
        // Cursor is at the beginning, remove characters till the first comma
        newText = text.slice(
          nextSeparatorIndex !== -1 ? nextSeparatorIndex + 1 : cursorPosition
        );
      } else if (nextSeparatorIndex === -1) {
        // Cursor is at the end, remove characters from the last comma till the end
        newText = text.slice(0, previousSeparatorIndex + 1);
      } else {
        // Cursor is in between separators, remove the whole item
        newText =
          text.slice(0, previousSeparatorIndex + 1) +
          text.slice(nextSeparatorIndex + 1);
      }
      setText(newText.length === 1 && newText === "," ? "" : newText);
      setSelectedKeys(newText ? newText.split(seperator) : []);
      setSelectedValues((prev) => {
        const newValue: (string | number)[] = [];
        newText.split(seperator).forEach((item) => {
          options.map((opt) => {
            if (itemToString(opt) === item) {
              let toPush = itemToValue(opt);
              if (typeof toPush === "object") {
                toPush = JSON.stringify(toPush);
              }
              newValue.push(toPush);
            }
          });
        });
        return newValue;
      });
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      // Move focus down in the menu
      setFocusedIndex((prevIndex) =>
        prevIndex < filteredOptions.length - 1 ? prevIndex + 1 : prevIndex
      );
      scrollIntoViewIfNeeded(focusedIndex + 1); // Scroll the next item into view
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      // Move focus up in the menu
      setFocusedIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex
      );
      scrollIntoViewIfNeeded(focusedIndex - 1); // Scroll the previous item into view
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (focusedIndex >= 0 && focusedIndex < filteredOptions.length) {
        handleMenuItemClick(focusedIndex);
      }
    }
  };

  // Handler for TextInput blur event
  const handleTextInputBlur = (e) => {
    setFocusedIndex(-1); // Clear the focusedIndex when the TextInput loses focus

    const menuWrapperElement = menuWrapperRef.current;
    if (menuWrapperElement) {
      if (
        prevFocusedIndexRef.current >= 0 &&
        prevFocusedIndexRef.current < filteredOptions.length
      ) {
        // Get the previously focused MenuItem element within the menu
        const prevMenuItemElement = menuWrapperElement.querySelector(
          `[data-index="${prevFocusedIndexRef.current}"]`
        ) as HTMLElement | null;

        if (prevMenuItemElement) {
          prevMenuItemElement.classList.remove("hover"); // Remove the "hover" class from the previously focused MenuItem
        }
      }
    }
    setShowDropDown(false);
  };

  const handleMouseDown = (e) => {
    // Prevent mousedown event from propagating to the input element
    e.stopPropagation();

    // Get the mouse location
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Get the dimensions of the MenuWrapperElement
    const menuWrapperElement = menuWrapperRef.current;
    if (menuWrapperElement) {
      const { top, bottom, left, right } =
        menuWrapperElement.getBoundingClientRect();

      // Check if the mouse location is inside the MenuWrapperElement
      if (
        mouseX >= left &&
        mouseX <= right &&
        mouseY >= top &&
        mouseY <= bottom
      ) {
        // If clicked inside the MenuWrapperElement, do not hide the dropdown
        e.preventDefault();
        return;
      }
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleMouseDown);
    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  // Effect to focus the menu or menu items when focusedIndex changes
  useEffect(() => {
    const menuWrapperElement = menuWrapperRef.current;
    if (menuWrapperElement) {
      if (
        prevFocusedIndexRef.current >= 0 &&
        prevFocusedIndexRef.current < filteredOptions.length
      ) {
        // Get the previously focused MenuItem element within the menu
        const prevMenuItemElement = menuWrapperElement.querySelector(
          `[data-index="${prevFocusedIndexRef.current}"]`
        ) as HTMLElement | null;

        if (prevMenuItemElement) {
          prevMenuItemElement.classList.remove("hover"); // Remove the "hover" class from the previously focused MenuItem
        }
      }
      if (focusedIndex >= 0 && focusedIndex < filteredOptions.length) {
        // Get the MenuItem element by index within the menu
        const menuItemElement = menuWrapperElement.querySelector(
          `[data-index="${focusedIndex}"]`
        ) as HTMLElement | null;

        if (menuItemElement) {
          menuItemElement.classList.add("hover");
        }
      }
    }
    // Update the prevFocusedIndexRef with the current focusedIndex
    prevFocusedIndexRef.current = focusedIndex;
  }, [focusedIndex, filteredOptions]);

  useEffect(() => {
    if (value) {
      setSelectedKeys((prev) => {
        const newState: any[] = [];
        String(value)
          .split(seperator)
          .forEach((val) => {
            options.forEach((item) => {
              if (itemToValue(item) == val) {
                newState.push(itemToString(item));
              }
            });
          });
        setText(newState.join(seperator) + ",");
        return newState;
      });
      setSelectedValues(value.split(seperator));
    }
  }, [value]);
  return (
    <>
      <SelectInputContainer multiple={multiple} style={style}>
        <input
          data-type={`${name}_select`}
          ref={currentInputRef}
          name={name}
          hidden
          value={String(selectedValues)}
          readOnly
        />
        <InputContainer
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <StyledInput
            placeholder={lable}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => setShowDropDown(true)}
            onBlur={handleTextInputBlur} // onBlur event handler for TextInput
            value={text}
            {...props}
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              boxSizing: "border-box",
              height: "20px",
            }}
          >
            <MdOutlineExpandLess style={{ marginBottom: "-3px" }} />
            <MdOutlineExpandMore style={{ marginTop: "-3px" }} />
          </div>
        </InputContainer>

        <MenuWrapper
          ref={menuWrapperRef}
          onKeyDown={handleKeyDown}
          style={{ zIndex: "9999" }}
        >
          <Menu vertical hoverEffect>
            {showDropDown &&
              filteredOptions.map((item, i) => {
                return (
                  <MenuItem
                    rightIcon={
                      selectedKeys.includes(itemToString(item)) ? (
                        <MdCheck />
                      ) : (
                        <></>
                      )
                    }
                    style={{ cursor: "pointer" }}
                    key={itemToString(item) + `_${i}`}
                    data-index={i} // Store the index as data attribute to retrieve later for focusing
                    onClick={() => handleMenuItemClick(i)}
                    onMouseEnter={() => setFocusedIndex(i)}
                    onBlur={handleTextInputBlur}
                  >
                    {renderOption
                      ? renderOption({ item, i })
                      : itemToString(item)}
                  </MenuItem>
                );
              })}
          </Menu>
        </MenuWrapper>
      </SelectInputContainer>
      <br />
    </>
  );
};

export default SelectInput;
