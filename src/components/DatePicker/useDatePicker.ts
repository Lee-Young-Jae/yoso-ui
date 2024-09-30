import { useState } from "react";
import { DatePickerProps } from "./DatePicker.types";

const useDatePicker = ({
  mode = "single",
  selectedDate,
  selectedRange,
  onDateChange,
  onRangeChange,
  minDate,
  maxDate,
  disabledDates = [],
}: DatePickerProps) => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [hoveredDate, setHoveredDate] = useState<Date | null>(null);

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const isDateDisabled = (date: Date) => {
    if (minDate && date < minDate) return true;
    if (maxDate && date > maxDate) return true;
    if (disabledDates.some((d) => isSameDay(d, date))) return true;
    return false;
  };

  const isSameDay = (d1: Date, d2: Date) =>
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate();

  const handleDateSelect = (date: Date) => {
    if (isDateDisabled(date)) return;

    if (mode === "single") {
      onDateChange && onDateChange(date);
    } else if (mode === "range") {
      if (selectedRange?.startDate && !selectedRange.endDate) {
        if (date < selectedRange.startDate) {
          onRangeChange &&
            onRangeChange({
              startDate: date,
              endDate: selectedRange.startDate,
            });
        } else {
          onRangeChange &&
            onRangeChange({
              startDate: selectedRange.startDate,
              endDate: date,
            });
        }
      } else {
        onRangeChange && onRangeChange({ startDate: date, endDate: null });
      }
    }
  };

  return {
    selectedDate,
    currentMonth,
    currentYear,
    handlePrevMonth,
    handleNextMonth,
    handleDateSelect,
    isDateDisabled,
    isSameDay,
    hoveredDate,
    setHoveredDate,
  };
};

export default useDatePicker;
