import styled from "styled-components";

import { commonStyles } from "@/src/shared";
import { MdDateRange } from "react-icons/md";

export const CalendarContainer = styled.div<{ show: boolean }>`
  position: absolute;
  display: ${(props) => (props.show ? "flex" : "none")};
  flex-direction: row;
  gap: 12px;
  align-items: start;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 12px;
  background-color: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  width: max-content;
`;

export const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  box-sizing: border-box;
  width: 100%;
`;

export const CalendarIcon = styled(MdDateRange)`
  font-size: 24px;
  color: #888;
  box-sizing: border-box;
`;

export const NavigationButton = styled.div`
  cursor: pointer;
  box-sizing: border-box;
`;

export const CalendarDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 6px;
  box-sizing: border-box;
`;

export const MonthHeader = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 12px;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: flex-end;
  gap: ${commonStyles.gap};
`;

interface CalendarDayProps {
  selected: boolean | null;
  rangeSelected: boolean | null;
  isCurrentMonth: boolean;
  isCurrentDate: boolean;
  currentDateColor: string;
  rangeColor: string;
  textColor: string;
}

export const CalendarDay = styled.div<CalendarDayProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  font-size: 14px;
  cursor: ${(props) => (props.children ? "pointer" : "initial")};
  border-radius: 50%;
  width: 32px;
  box-sizing: border-box;
  font-size: ${commonStyles.textBodyFont};
  background-color: ${(props) =>
    props.rangeSelected
      ? props.children && props.rangeColor
      : props.selected
      ? props.children && props.rangeColor
      : "transparent"};
  color: ${(props) => {
    if (props.selected || props.rangeSelected || props.isCurrentDate) {
      return props.textColor;
    } else if (props.isCurrentMonth) {
      return "#000"; // Use black for non-selected dates in the current month
    } else {
      return "#ccc"; // Use gray for non-selected dates in other months
    }
  }};
  transition: background-color 0.1s ease-in-out;

  :hover {
    background-color: ${(props) =>
      props.isCurrentMonth && !props.selected && !props.rangeSelected
        ? "#f0f0f0"
        : props.rangeSelected
        ? props.children && props.rangeColor
        : props.selected
        ? props.children && props.rangeColor
        : "transparent"};
  }

  &.hover {
    background-color: ${(props) =>
      props.isCurrentMonth && !props.selected && !props.rangeSelected
        ? "#f0f0f0"
        : props.rangeSelected
        ? props.children && props.rangeColor
        : props.selected
        ? props.children && props.rangeColor
        : "transparent"};
  }

  &.current-date {
    background-color: ${(props) =>
      props.isCurrentMonth
        ? props.rangeSelected
          ? props.rangeColor
          : props.currentDateColor
        : "transparent"};
  }
`;

interface ICalendarYearsContainer {
  currentDateColor?: string;
  textColor?: string;
}

export const CalendarYearsContainer = styled.div<ICalendarYearsContainer>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  width: 100%;
  text-align: center;
  .calendar-year {
    height: 32px;
    display: flex;
    align: center;
    justify: center;
    box-sizing: border-box;
    padding: 3px 5px;
    border: none;
    border-radius: ${commonStyles.borderRadius};
    cursor: pointer;
    margin: auto;
    align-items: center;
    &:hover {
      background-color: ${(props) =>
        props.currentDateColor || commonStyles.primary};
      color: ${(props) => props.textColor || commonStyles.background};
    }
  }

  .selected {
    border-radius: ${commonStyles.borderRadius};
    color: ${(props) => props.textColor || commonStyles.background};
    background-color: ${(props) =>
      props.currentDateColor || commonStyles.primary};
  }
`;

export const CalendarMonthsContainer = styled.div<ICalendarYearsContainer>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  width: 100%;
  text-align: center;
  .calendar-month {
    height: 32px;
    display: flex;
    align: center;
    justify: center;
    box-sizing: border-box;
    padding: 3px 5px;
    border: none;
    border-radius: ${commonStyles.borderRadius};
    cursor: pointer;
    margin: auto;
    align-items: center;
    &:hover {
      background-color: ${(props) =>
        props.currentDateColor || commonStyles.primary};
      color: ${(props) => props.textColor || commonStyles.background};
    }
  }

  .selected {
    border-radius: ${commonStyles.borderRadius};
    color: ${(props) => props.textColor || commonStyles.background};
    background-color: ${(props) =>
      props.currentDateColor || commonStyles.primary};
  }
`;
