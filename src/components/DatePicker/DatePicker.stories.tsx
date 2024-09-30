import { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import DatePicker from "./DatePicker";
import { DateRange } from "./DatePicker.types";

export default {
  title: "Components/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**DatePicker 컴포넌트**

\`DatePicker\` 컴포넌트는 날짜 선택을 위한 UI 요소를 제공합니다. 단일 날짜 선택과 날짜 범위 선택을 모두 지원하며, 다양한 옵션을 통해 커스터마이징할 수 있습니다.

### 주요 기능

- **단일 날짜 선택 및 범위 선택 지원**: \`mode\` prop을 통해 단일 날짜 또는 날짜 범위 선택을 설정할 수 있습니다.
- **비활성화 날짜 지정**: \`minDate\`, \`maxDate\`, \`disabledDates\`를 통해 선택할 수 없는 날짜를 지정할 수 있습니다.
- **다국어 지원**: \`locale\` prop을 통해 월과 요일의 표시를 현지화할 수 있습니다.
- **스타일 커스터마이징 가능**: \`className\`과 \`style\`을 사용하여 커스텀 스타일을 적용할 수 있습니다.

### 사용법

\`\`\`tsx
import { DatePicker } from "yoso-ui";

const YourComponent = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return <DatePicker
    selectedDate={selectedDate}
    onDateChange={(date) => setSelectedDate(date)}
  />;
}
\`\`\`
        `,
      },
    },
  },
} as Meta<typeof DatePicker>;

const SingleTemplate: StoryFn = (args) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    args.selectedDate || null
  );

  return (
    <DatePicker
      {...args}
      selectedDate={selectedDate}
      onDateChange={(date) => {
        setSelectedDate(date);
        args.onDateChange && args.onDateChange(date);
      }}
    />
  );
};

const RangeTemplate: StoryFn = (args) => {
  const [selectedRange, setSelectedRange] = useState<DateRange>({
    startDate: args.selectedRange?.startDate || null,
    endDate: args.selectedRange?.endDate || null,
  });

  return (
    <DatePicker
      {...args}
      selectedRange={selectedRange}
      onRangeChange={(range) => {
        setSelectedRange(range);
        args.onRangeChange && args.onRangeChange(range);
      }}
    />
  );
};

export const SingleDatePicker = SingleTemplate.bind({});
SingleDatePicker.args = {
  mode: "single",
  minDate: new Date(2020, 0, 1),
  maxDate: new Date(2030, 11, 31),
  locale: "en-US",
};
SingleDatePicker.storyName = "단일 날짜 선택";

SingleDatePicker.parameters = {
  docs: {
    description: {
      story: `
**단일 날짜 선택**

\`mode="single"\`을 사용하여 단일 날짜 선택기를 생성합니다.

\`\`\`tsx
import { DatePicker } from "yoso-ui";

const [selectedDate, setSelectedDate] = useState<Date | null>(null);

<DatePicker
  mode="single"
  selectedDate={selectedDate}
  onDateChange={(date) => setSelectedDate(date)}
/>;
\`\`\`
      `,
    },
  },
};

export const RangeDatePicker = RangeTemplate.bind({});
RangeDatePicker.args = {
  mode: "range",
  minDate: new Date(2020, 0, 1),
  maxDate: new Date(2030, 11, 31),
  locale: "en-US",
};
RangeDatePicker.storyName = "날짜 범위 선택";

RangeDatePicker.parameters = {
  docs: {
    description: {
      story: `
**날짜 범위 선택**

\`mode="range"\`를 사용하여 날짜 범위 선택기를 생성합니다.

\`\`\`tsx
import { DatePicker, DateRange } from "yoso-ui";

const [selectedRange, setSelectedRange] = useState<DateRange>({
  startDate: null,
  endDate: null,
});

<DatePicker
  mode="range"
  selectedRange={selectedRange}
  onRangeChange={(range) => setSelectedRange(range)}
/>;
\`\`\`
      `,
    },
  },
};

export const DisabledDates = SingleTemplate.bind({});
DisabledDates.args = {
  mode: "single",
  minDate: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
  maxDate: new Date(new Date().getFullYear() + 1, new Date().getMonth(), 0),
  disabledDates: [
    new Date(new Date().getFullYear(), new Date().getMonth(), 5),
    new Date(new Date().getFullYear(), new Date().getMonth(), 6),
    new Date(new Date().getFullYear(), new Date().getMonth(), 7),
  ],
  locale: "en-US",
};
DisabledDates.storyName = "비활성화된 날짜";

DisabledDates.parameters = {
  docs: {
    description: {
      story: `
**비활성화된 날짜**

\`disabledDates\` prop을 사용하여 특정 날짜를 선택할 수 없도록 설정합니다.

\`\`\`tsx
<DatePicker
  mode="single"
  disabledDates={[
    new Date(new Date().getFullYear(), new Date().getMonth(), 5),
    new Date(new Date().getFullYear(), new Date().getMonth(), 6),
    new Date(new Date().getFullYear(), new Date().getMonth(), 7),
  ]}
/>
\`\`\`
      `,
    },
  },
};

export const LocaleSupport = SingleTemplate.bind({});
LocaleSupport.args = {
  mode: "single",
  locale: "ko-KR",
};
LocaleSupport.storyName = "다국어 지원";

LocaleSupport.parameters = {
  docs: {
    description: {
      story: `
**다국어 지원**

\`locale\` prop을 사용하여 월과 요일의 표시를 현지화할 수 있습니다.

\`\`\`tsx
<DatePicker
  mode="single"
  locale="ko-KR"
/>
\`\`\`
      `,
    },
  },
};

export const CustomStyle = SingleTemplate.bind({});
CustomStyle.args = {
  mode: "single",
  style: { border: "2px solid green", borderRadius: "10px" },
};
CustomStyle.storyName = "커스텀 스타일 적용";

CustomStyle.parameters = {
  docs: {
    description: {
      story: `
**커스텀 스타일 적용**

\`style\`과 \`className\`을 사용하여 컴포넌트에 커스텀 스타일을 적용할 수 있습니다.

\`\`\`tsx
<DatePicker
  mode="single"
  style={{ border: "2px solid green", borderRadius: "10px" }}
/>
\`\`\`
      `,
    },
  },
};
