import { Weekdays, Weekday, DaysGrid } from "./DatePicker.styles";
import Day from "./Day";
import { DateRange } from "./DatePicker.types";

interface MonthProps {
  year: number;
  month: number;
  selectedDate?: Date | null;
  selectedRange?: DateRange;
  onDateSelect: (date: Date) => void;
  isDateDisabled: (date: Date) => boolean;
  isSameDay: (d1: Date, d2: Date) => boolean;
  hoveredDate: Date | null;
  setHoveredDate: (date: Date | null) => void;
  locale?: string;
}

const Month = ({
  year,
  month,
  selectedDate,
  selectedRange,
  onDateSelect,
  isDateDisabled,
  isSameDay,
  hoveredDate,
  setHoveredDate,
  locale = "default",
}: MonthProps) => {
  const firstDayOfMonth = new Date(year, month, 1);
  const weekdayOfFirstDay = firstDayOfMonth.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const weekdays = Array.from({ length: 7 }, (_, i) =>
    new Date(2021, 7, i).toLocaleDateString(locale, { weekday: "short" })
  );

  const dates = [];

  for (let i = 0; i < weekdayOfFirstDay; i++) {
    dates.push(null);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    dates.push(new Date(year, month, i));
  }

  return (
    <>
      <Weekdays>
        {weekdays.map((weekday) => (
          <Weekday key={weekday}>{weekday}</Weekday>
        ))}
      </Weekdays>
      <DaysGrid>
        {dates.map((date, index) => (
          <Day
            key={index}
            date={date}
            selectedDate={selectedDate}
            selectedRange={selectedRange}
            onDateSelect={onDateSelect}
            isDateDisabled={isDateDisabled}
            isSameDay={isSameDay}
            hoveredDate={hoveredDate}
            setHoveredDate={setHoveredDate}
          />
        ))}
      </DaysGrid>
    </>
  );
};

export default Month;
