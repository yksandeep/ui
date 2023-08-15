import { commonStyles } from "@/src/shared";
import { addDays, format } from "date-fns";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  MdCalendarMonth,
  MdDateRange,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdToday,
} from "react-icons/md";
import { TextInput } from "../../atoms";
import {
  CalendarContainer,
  CalendarDay,
  CalendarDays,
  CalendarMonthsContainer,
  CalendarYearsContainer,
  MonthHeader,
  NavigationButton,
} from "./index.styled";

export const getDaysInMonth = (month, year) => {
  return new Date(year, month + 1, 0).getDate();
};

// Week initial labels
export const weekInitials = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// Array of month names
export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Define a function to convert a Date object to a specified format
export const convertDateToFormat = (
  date: Date,
  targetFormat: string
): string => {
  try {
    // Format the input Date object according to the target format
    const formattedDate = format(date, targetFormat);
    return formattedDate;
  } catch (error) {
    console.error("Error converting date:", error);
    return "Invalid Date";
  }
};

/**
 * IDatePicker Interface
 * @interface
 * @prop {string}  sampleTextProp
 */
export interface IDatePicker {
  enableRangeSelection?: boolean;
  currentDateColor?: string;
  rangeColor?: string;
  selectedTextColor?: string;
  label?: string;
  format?: string;
  onChange?: (value: string) => void;
  name?: string;
}

/**
 * DatePicker
 *
 * @return {React.FC} DatePicker Component
 *
 * @component
 * @example
 * return(
 *    <DatePicker />
 * )
 */
export const DatePicker: React.FC<IDatePicker> = ({
  enableRangeSelection,
  currentDateColor,
  rangeColor,
  selectedTextColor,
  label = (
    <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
      <MdToday /> {"MM/dd/yyyy"}
      {enableRangeSelection ? " - MM/dd/yyyy" : ""}
    </div>
  ),
  format = "MM/dd/yyyy",
  onChange,
  name,
  ...props
}) => {
  const calendarContainer = useRef<HTMLDivElement>(null);
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
  const [hoveredDate, setHoveredDate] = useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);
  const [selectedMonth, setSelectedMonth] = useState<{
    month: number;
    year: number;
  }>({
    month: selectedStartDate
      ? selectedStartDate.getMonth()
      : new Date().getMonth(),
    year: selectedStartDate
      ? selectedStartDate.getFullYear()
      : new Date().getFullYear(),
  });
  const [yearNavigation, setYearNavigation] = useState<number>(
    selectedStartDate
      ? selectedStartDate.getFullYear()
      : new Date().getFullYear()
  );
  const [selectedYear, setSelectedYear] = useState<number>(
    selectedStartDate
      ? selectedStartDate.getFullYear()
      : new Date().getFullYear()
  );

  function handleDateChange(date: Date) {
    if (!enableRangeSelection) {
      setSelectedStartDate(date);
      setSelectedEndDate(null);
    } else if (!selectedStartDate || selectedEndDate) {
      setSelectedStartDate(date);
      setSelectedEndDate(null);
    } else if (date >= selectedStartDate) {
      setSelectedEndDate(date);
    } else {
      setSelectedStartDate(date);
      setSelectedEndDate(selectedStartDate);
    }
  }

  function navigate(direction: -1 | 1) {
    console.log("navigating");
    if (viewMode === "days") {
      const newMonthDate = new Date(
        selectedYear,
        selectedMonth.month + direction,
        1
      );
      setSelectedMonth({
        month: newMonthDate.getMonth(),
        year: newMonthDate.getFullYear(),
      });
      setSelectedYear(newMonthDate.getFullYear());
    } else if (viewMode === "month") {
      setYearNavigation(yearNavigation + direction * 12);
      setSelectedYear(selectedYear + direction);
    } else if (viewMode === "year") {
      setYearNavigation(yearNavigation + direction * 12);
    }
  }

  function renderDays(
    month = selectedMonth.month,
    currentDateColor = commonStyles.primary,
    rangeColor = commonStyles.danger,
    textColor = "#fff"
  ) {
    const yearToShow = selectedMonth.year;
    const monthToShow = month;

    const daysInMonth = getDaysInMonth(monthToShow, yearToShow);
    const firstDayOfMonth = new Date(yearToShow, monthToShow, 1).getDay();

    const daysArray = Array.from({ length: 35 }, (_, index) => {
      if (index < firstDayOfMonth) {
        const prevMonthLastDay = getDaysInMonth(monthToShow - 1, yearToShow);
        return new Date(
          yearToShow,
          monthToShow - 1,
          prevMonthLastDay - firstDayOfMonth + index + 1
        );
      } else if (
        index >= firstDayOfMonth &&
        index < firstDayOfMonth + daysInMonth
      ) {
        return new Date(yearToShow, monthToShow, index - firstDayOfMonth + 1);
      } else {
        return new Date(
          yearToShow,
          monthToShow + 1,
          index - firstDayOfMonth - daysInMonth + 1
        );
      }
    });

    return (
      <CalendarDays>
        {weekInitials.map((initial) => (
          <div
            key={initial}
            className="week-initial"
            style={{ textAlign: "center", cursor: "default" }}
          >
            {initial}
          </div>
        ))}
        {daysArray.map((date, index) => {
          const dayNumber = date.getDate();
          const isSelectedStartDate =
            selectedStartDate &&
            date.toDateString() === selectedStartDate.toDateString();
          const isSelectedEndDate =
            selectedEndDate &&
            date.toDateString() === selectedEndDate.toDateString();
          const isCurrentDate =
            dayNumber === new Date().getDate() &&
            month === new Date().getMonth() &&
            selectedYear === new Date().getFullYear();
          const isCurrentMonth =
            index >= firstDayOfMonth &&
            index < firstDayOfMonth + daysInMonth &&
            month === date.getMonth() &&
            selectedYear === date.getFullYear();

          let isInRange = false;
          if (enableRangeSelection && selectedStartDate && selectedEndDate) {
            const startDate =
              selectedStartDate < selectedEndDate
                ? selectedStartDate
                : selectedEndDate;
            const endDate =
              selectedStartDate < selectedEndDate
                ? selectedEndDate
                : selectedStartDate;
            isInRange = date >= startDate && date <= endDate;
          }

          return (
            <CalendarDay
              role="button"
              key={index}
              selected={isSelectedStartDate || isSelectedEndDate}
              rangeSelected={isInRange}
              isCurrentMonth={isCurrentMonth}
              isCurrentDate={isCurrentDate}
              textColor={textColor}
              onClick={() => {
                if (isCurrentMonth || !enableRangeSelection) {
                  if (
                    selectedStartDate?.toDateString() === date.toDateString()
                  ) {
                    setSelectedStartDate(null);
                  } else {
                    handleDateChange(date);
                  }
                }
              }}
              className={`${isCurrentDate ? "current-date" : ""} ${
                hoveredDate?.toDateString() === date?.toDateString()
                  ? "hover"
                  : ""
              }`}
              currentDateColor={currentDateColor}
              rangeColor={rangeColor}
            >
              {enableRangeSelection
                ? isCurrentMonth
                  ? dayNumber
                  : ""
                : dayNumber}
            </CalendarDay>
          );
        })}
      </CalendarDays>
    );
  }
  const [viewMode, setViewMode] = useState<"days" | "month" | "year">("days");

  // Define the available view modes: "days", "month", and "year"
  const viewModes: ("days" | "month" | "year")[] = ["days", "month", "year"];

  // Function to toggle the view mode between "days", "month", and "year"
  const toggleViewMode = useCallback(() => {
    // Find the index of the current view mode in the viewModes array
    const currentIndex = viewModes.indexOf(viewMode);

    // Calculate the index of the next view mode using modulo to wrap around
    const nextIndex = (currentIndex + 1) % viewModes.length;

    // Set the next view mode as the new view mode
    setViewMode(viewModes[nextIndex]);
  }, [viewMode]);

  function renderYears(
    currentDateColor = commonStyles.primary,
    textColor = "#fff"
  ) {
    const startYear = yearNavigation - 5;
    const yearsArray = Array.from(
      { length: 12 },
      (_, index) => startYear + index
    );

    return (
      <CalendarYearsContainer
        currentDateColor={currentDateColor}
        textColor={textColor}
        className="calendar-years"
      >
        {yearsArray.map((year) => (
          <div
            key={year}
            className={`calendar-year${
              selectedYear === year ? ` selected` : ""
            }`}
            onClick={() => {
              if (viewMode === "year") {
                setViewMode("month");
                setSelectedYear(year);
              }
            }}
          >
            {year}
          </div>
        ))}
      </CalendarYearsContainer>
    );
  }

  function renderMonths(
    currentDateColor = commonStyles.primary,
    textColor = "#fff"
  ) {
    const monthsWithYears = monthNames.map((monthName, index) => ({
      name: monthName,
      year: selectedYear, // Use the selected year for all months in the month view
    }));

    return (
      <CalendarMonthsContainer
        currentDateColor={currentDateColor}
        textColor={textColor}
        className="calendar-months"
      >
        {monthsWithYears.map((monthObj, index) => {
          const isSelected =
            selectedMonth.month === index &&
            selectedMonth.year === monthObj.year;
          return (
            <div
              key={monthObj.name}
              className={`calendar-month${isSelected ? " selected" : ""}`}
              onClick={() => {
                setViewMode("days");
                setSelectedMonth({
                  month: index,
                  year: selectedMonth.year,
                }); // Set currentMonth to the selected month index
              }}
            >
              {monthObj.name}
            </div>
          );
        })}
      </CalendarMonthsContainer>
    );
  }

  function renderCalendar(monthToShow = selectedMonth.month) {
    switch (viewMode) {
      case "days":
        return renderDays(
          monthToShow,
          currentDateColor,
          rangeColor,
          selectedTextColor
        );
      case "month":
        return renderMonths(currentDateColor, selectedTextColor);
      case "year":
        return renderYears(currentDateColor, selectedTextColor);
      default:
        return null;
    }
  }
  const [show, setShow] = useState(false);

  const handleMouseDown = (e) => {
    // Prevent mousedown event from propagating to the input element
    e.stopPropagation();

    // Get the mouse location
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Get the dimensions of the MenuWrapperElement
    const calendarWrapperElement = calendarContainer.current;
    if (calendarWrapperElement) {
      const { top, bottom, left, right } =
        calendarWrapperElement.getBoundingClientRect();

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

  useEffect(() => {
    if (onChange) {
      if (!enableRangeSelection) {
        onChange(
          convertDateToFormat(
            selectedStartDate ? selectedStartDate : new Date(),
            format
          )
        );
      } else {
        onChange(
          `${convertDateToFormat(
            selectedStartDate ? selectedStartDate : new Date(),
            format
          )}-${convertDateToFormat(
            selectedEndDate
              ? selectedEndDate
              : selectedStartDate
              ? selectedStartDate
              : new Date(),
            format
          )}`
        );
      }
    }
  }, [selectedEndDate, selectedStartDate]);

  function moveDate(daysToAdd: number) {
    const newSelectedDate = addDays(
      hoveredDate ? hoveredDate : new Date(),
      daysToAdd
    );
    // Check if the newSelectedDate is within the current month
    const currentMonth = selectedMonth.month;
    if (newSelectedDate.getMonth() < currentMonth) {
      // Moving to the previous month
      navigate(-1);
    } else if (newSelectedDate.getMonth() > currentMonth) {
      // Moving to the next month
      navigate(+1);
    }
    setHoveredDate(newSelectedDate);
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (viewMode !== "days") return; // Ensure you're in the days view
      console.log(event.key);
      switch (event.key) {
        case "ArrowLeft":
          event.preventDefault();
          moveDate(-1); // Move to previous day
          break;
        case "ArrowRight":
          event.preventDefault();
          moveDate(1); // Move to next day
          break;
        case "ArrowUp":
          event.preventDefault();
          moveDate(-7); // Move to same day of previous week
          break;
        case "ArrowDown":
          event.preventDefault();
          moveDate(7); // Move to same day of next week
          break;
        case "Enter":
          event.preventDefault();
          console.log(selectedStartDate, hoveredDate);
          if (
            selectedStartDate?.toDateString() === hoveredDate?.toDateString()
          ) {
            console.log("setting null");
            setSelectedStartDate(null);
          } else {
            setSelectedStartDate(hoveredDate);
          }
          break;
        default:
          return;
      }
    };
    if (show) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      if (show) {
        document.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, [
    selectedYear,
    selectedMonth.month,
    viewMode,
    show,
    hoveredDate,
    selectedStartDate,
  ]);

  return (
    <div style={{ position: "relative" }}>
      <TextInput
        name={name}
        readOnly
        value={
          !enableRangeSelection
            ? selectedStartDate
              ? convertDateToFormat(selectedStartDate, format)
              : ""
            : `${convertDateToFormat(
                selectedStartDate ? selectedStartDate : new Date(),
                format
              )} - ${convertDateToFormat(
                selectedEndDate
                  ? selectedEndDate
                  : selectedStartDate
                  ? selectedStartDate
                  : new Date(),
                format
              )}`
        }
        label={label}
        onBlur={() => setShow(!show)}
        onFocus={() => setShow(true)}
      />
      <CalendarContainer ref={calendarContainer} show={show}>
        <div>
          <MonthHeader>
            <div
              role="button"
              onClick={() => toggleViewMode()}
              style={{
                marginRight: "auto",
                display: "flex",
                cursor: "pointer",
                gap: commonStyles.gap,
              }}
            >
              <div>
                {viewMode === "days" ? (
                  <MdCalendarMonth />
                ) : viewMode === "month" ? (
                  <MdToday />
                ) : (
                  <MdDateRange />
                )}
              </div>
              {viewMode === "days"
                ? new Intl.DateTimeFormat("en-US", {
                    month: "long",
                    year: "numeric",
                  }).format(new Date(selectedYear, selectedMonth.month))
                : viewMode === "month"
                ? selectedYear
                : `${yearNavigation - 5}-${yearNavigation + 6}`}
            </div>
            {!enableRangeSelection && viewMode === "days" && (
              <>
                <NavigationButton role="button" onClick={() => navigate(-1)}>
                  <MdKeyboardArrowLeft />
                </NavigationButton>
                <NavigationButton role="button" onClick={() => navigate(+1)}>
                  <MdKeyboardArrowRight />
                </NavigationButton>
              </>
            )}
          </MonthHeader>
          {renderCalendar()}
        </div>
        {enableRangeSelection &&
          viewMode === "days" &&
          selectedMonth.month < 12 && (
            <div>
              <MonthHeader>
                {viewMode === "days" &&
                  new Intl.DateTimeFormat("en-US", {
                    month: "long",
                    year: "numeric",
                  }).format(new Date(selectedYear, selectedMonth.month + 1))}
                <NavigationButton
                  style={{ marginLeft: "auto" }}
                  role="button"
                  onClick={() => navigate(-1)}
                >
                  <MdKeyboardArrowLeft />
                </NavigationButton>
                <NavigationButton role="button" onClick={() => navigate(+1)}>
                  <MdKeyboardArrowRight />
                </NavigationButton>
              </MonthHeader>
              {renderCalendar(selectedMonth.month + 1)}
            </div>
          )}
      </CalendarContainer>
    </div>
  );
};

export default DatePicker;
