export type DateValue = Date | null;

export interface DateRange {
  startDate: DateValue;
  endDate: DateValue;
}

export type DatePickerMode = "single" | "range";

export interface DatePickerProps {
  selectedDate?: DateValue;
  selectedRange?: DateRange;
  mode?: DatePickerMode;
  onDateChange?: (date: DateValue) => void;
  onRangeChange?: (range: DateRange) => void;
  minDate?: Date;
  maxDate?: Date;
  disabledDates?: Date[];
  locale?: string;
  className?: string;
  style?: React.CSSProperties;
}
