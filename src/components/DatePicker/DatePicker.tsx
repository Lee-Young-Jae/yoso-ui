import { DatePickerProps } from "./DatePicker.types";
import {
  DatePickerContainer,
  Header,
  MonthYear,
  NavLeftButton,
  NavRightButton,
} from "./DatePicker.styles";
import useDatePicker from "./useDatePicker";
import Month from "./Month";
import { forwardRef, KeyboardEvent } from "react";

const DatePicker = forwardRef<HTMLDivElement, DatePickerProps>(
  (props: DatePickerProps, ref) => {
    const {
      currentMonth,
      setCurrentMonth,
      currentYear,
      setCurrentYear,
      handlePrevMonth,
      handleNextMonth,
      handleDateSelect,
      isDateDisabled,
      isSameDay,
      hoveredDate,
      setHoveredDate,
      focusedDate,
      setFocusedDate,
    } = useDatePicker(props);

    const monthName = new Date(currentYear, currentMonth).toLocaleDateString(
      props.locale || "default",
      { month: "long", year: "numeric" }
    );

    const keyEventMap: Partial<
      Record<KeyboardEvent<HTMLDivElement>["key"], (date: Date) => void>
    > = {
      ArrowUp: (date) => {
        date.setDate(date.getDate() - 7);
      },
      ArrowDown: (date) => {
        date.setDate(date.getDate() + 7);
      },
      ArrowLeft: (date) => {
        date.setDate(date.getDate() - 1);
      },
      ArrowRight: (date) => {
        date.setDate(date.getDate() + 1);
      },
      Enter: (date) => {
        handleDateSelect(date);
      },
      " ": (date) => {
        handleDateSelect(date);
      },
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
      if (!focusedDate) return;

      const handler = keyEventMap[e.key];
      if (handler) {
        e.preventDefault();
        let newDate = new Date(focusedDate);
        handler(newDate);

        if (newDate.getMonth() !== currentMonth) {
          setCurrentMonth(newDate.getMonth());
          setCurrentYear(newDate.getFullYear());
        }

        setFocusedDate(newDate);
      }
    };

    return (
      <DatePickerContainer
        className={props.className}
        style={props.style}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        ref={ref}
      >
        <Header>
          <NavLeftButton onClick={handlePrevMonth} />
          <MonthYear>{monthName}</MonthYear>
          <NavRightButton onClick={handleNextMonth} />
        </Header>
        <Month
          year={currentYear}
          month={currentMonth}
          selectedDate={props.selectedDate}
          selectedRange={props.selectedRange}
          onDateSelect={handleDateSelect}
          isDateDisabled={isDateDisabled}
          isSameDay={isSameDay}
          hoveredDate={hoveredDate}
          setHoveredDate={setHoveredDate}
          focusedDate={focusedDate}
          setFocusedDate={setFocusedDate}
          locale={props.locale}
        />
      </DatePickerContainer>
    );
  }
);

export default DatePicker;
