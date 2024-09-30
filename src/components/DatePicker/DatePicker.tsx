import { DatePickerProps } from "./DatePicker.types";
import {
  DatePickerContainer,
  Header,
  MonthYear,
  NavButton,
} from "./DatePicker.styles";
import useDatePicker from "./useDatePicker";
import Month from "./Month";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const DatePicker = (props: DatePickerProps) => {
  const {
    currentMonth,
    currentYear,
    handlePrevMonth,
    handleNextMonth,
    handleDateSelect,
    isDateDisabled,
    isSameDay,
    hoveredDate,
    setHoveredDate,
  } = useDatePicker(props);

  const monthName = new Date(currentYear, currentMonth).toLocaleDateString(
    props.locale || "default",
    { month: "long", year: "numeric" }
  );

  return (
    <DatePickerContainer className={props.className} style={props.style}>
      <Header>
        <NavButton onClick={handlePrevMonth}>
          <FiChevronLeft />
        </NavButton>
        <MonthYear>{monthName}</MonthYear>
        <NavButton onClick={handleNextMonth}>
          <FiChevronRight />
        </NavButton>
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
        locale={props.locale}
      />
    </DatePickerContainer>
  );
};

export default DatePicker;
