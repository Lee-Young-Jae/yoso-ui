import { DayButton } from "./DatePicker.styles";
import { DateRange } from "./DatePicker.types";

interface DayProps {
  date: Date | null;
  selectedDate?: Date | null;
  selectedRange?: DateRange;
  onDateSelect: (date: Date) => void;
  isDateDisabled: (date: Date) => boolean;
  isSameDay: (d1: Date, d2: Date) => boolean;
  hoveredDate: Date | null;
  setHoveredDate: (date: Date | null) => void;
}

const Day = ({
  date,
  selectedDate,
  selectedRange,
  onDateSelect,
  isDateDisabled,
  isSameDay,
  hoveredDate,
  setHoveredDate,
}: DayProps) => {
  if (!date) {
    return <DayButton disabled />;
  }

  const today = new Date();
  const isToday = isSameDay(date, today);
  const isSelected = selectedDate && isSameDay(date, selectedDate);
  const isInRange =
    selectedRange &&
    selectedRange.startDate &&
    selectedRange.endDate &&
    date >= selectedRange.startDate &&
    date <= selectedRange.endDate;
  const isStartDay =
    selectedRange?.startDate && isSameDay(date, selectedRange.startDate);
  const isEndDay =
    selectedRange?.endDate && isSameDay(date, selectedRange.endDate);

  const isHovered = hoveredDate && isSameDay(date, hoveredDate);
  let isInHoveredRange = false;

  if (
    selectedRange?.startDate &&
    !selectedRange.endDate &&
    hoveredDate &&
    !isSameDay(selectedRange.startDate, hoveredDate)
  ) {
    const start = selectedRange.startDate;
    const end = hoveredDate;
    const [rangeStart, rangeEnd] = start < end ? [start, end] : [end, start];

    if (date >= rangeStart && date <= rangeEnd) {
      isInHoveredRange = true;
    }
  }
  const disabled = isDateDisabled(date);

  return (
    <DayButton
      $isSelected={!!isSelected}
      $isInRange={!!isInRange}
      $isInHoveredRange={!!isInHoveredRange}
      $isToday={!!isToday}
      $isHovered={!!isHovered}
      $isStartDay={!!isStartDay}
      $isEndDay={!!isEndDay}
      $day={date.getDate()}
      onClick={() => onDateSelect(date)}
      onMouseEnter={() => setHoveredDate(date)}
      onMouseLeave={() => setHoveredDate(null)}
      disabled={disabled}
    >
      {date.getDate()}
    </DayButton>
  );
};

export default Day;
