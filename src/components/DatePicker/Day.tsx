import { useEffect, useRef } from "react";
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
  focusedDate: Date;
  setFocusedDate: (date: Date) => void;
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
  focusedDate,
  setFocusedDate,
}: DayProps) => {
  if (!date) {
    return <DayButton disabled />;
  }

  const today = new Date();
  const isToday = isSameDay(date, today);
  const isSelected = selectedDate && isSameDay(date, selectedDate);

  let rangeStart = selectedRange?.startDate;
  let rangeEnd = selectedRange?.endDate;

  if (rangeStart && rangeEnd && rangeStart > rangeEnd) {
    [rangeStart, rangeEnd] = [rangeEnd, rangeStart];
  } else if (rangeStart && !rangeEnd && (hoveredDate || focusedDate)) {
    rangeEnd = hoveredDate || focusedDate;

    if (rangeStart > rangeEnd) {
      [rangeStart, rangeEnd] = [rangeEnd, rangeStart];
    }
  }

  const isInRange =
    rangeStart && rangeEnd && date >= rangeStart && date <= rangeEnd;
  const isStartDay = rangeStart && isSameDay(date, rangeStart);
  const isEndDay = rangeEnd && isSameDay(date, rangeEnd);

  const isFocused = focusedDate && isSameDay(date, focusedDate);
  const disabled = isDateDisabled(date);

  const dayOfWeek = date.getDay();
  const isStartOfRow = dayOfWeek === 0;
  const isEndOfRow = dayOfWeek === 6;

  const dayRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isFocused && dayRef.current) {
      dayRef.current.focus();
    }
  }, [isFocused]);

  return (
    <DayButton
      ref={dayRef}
      $isSelected={!!isSelected}
      $isInRange={!!isInRange}
      $isToday={!!isToday}
      $isStartDay={!!isStartDay}
      $isEndDay={!!isEndDay}
      $isStartOfRow={isStartOfRow}
      $isEndOfRow={isEndOfRow}
      $day={date.getDate()}
      onFocus={() => setFocusedDate(date)}
      onClick={() => {
        onDateSelect(date);
        setFocusedDate(date);
      }}
      onMouseEnter={() => setHoveredDate(date)}
      onMouseLeave={() => setHoveredDate(null)}
      disabled={disabled}
      tabIndex={isFocused ? 0 : -1}
      role="gridcell"
      aria-label={date.toDateString()}
      aria-selected={!!isSelected}
    >
      {date.getDate()}
    </DayButton>
  );
};

export default Day;
