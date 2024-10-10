import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Accordion from "./Accordion";
import Button from "../Button/Button";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    docs: {
      description: {
        component: `
**Accordion 컴포넌트**

\`Accordion\` 컴포넌트는 콘텐츠의 섹션을 접고 펼칠 수 있는 UI 요소를 제공합니다. 단일 및 다중 확장, 컨트롤드 및 언컨트롤드 모드를 모두 지원하며, 다양한 옵션을 통해 커스터마이징할 수 있습니다.

### 주요 기능

- **단일 및 다중 확장 지원**: \`multiple\` prop을 통해 한 번에 하나 또는 여러 개의 아이템을 확장할 수 있습니다.
- **컨트롤드 및 언컨트롤드 모드 지원**: \`value\`와 \`onChange\`를 통해 외부에서 상태를 제어하거나 내부 상태를 사용할 수 있습니다.
- **접근성 향상**: WAI-ARIA 가이드라인을 따라 제작되었으며, 키보드 내비게이션을 지원합니다.
- **스타일 커스터마이징 가능**: \`className\`과 \`style\`을 사용하여 커스텀 스타일을 적용할 수 있습니다.

### 사용법

\`\`\`tsx
import {Accordion} from 'yoso-ui';

const YourComponent = () => (
  <Accordion>
    <Accordion.Item value="item1">
      <Accordion.Header>Header 1</Accordion.Header>
      <Accordion.Content>Content 1</Accordion.Content>
    </Accordion.Item>
    {/* 다른 아이템들 */}
  </Accordion>
);
\`\`\`
          `,
      },
    },
  },
  argTypes: {
    multiple: {
      control: "boolean",
      description: "여러 아이템을 동시에 확장할 수 있도록 허용합니다.",
      table: {
        category: "Behavior",
      },
    },
    value: {
      control: "object",
      description: "컨트롤드 모드에서 확장된 아이템의 값입니다.",
      table: {
        category: "Behavior",
      },
    },
    defaultValue: {
      control: "object",
      description: "언컨트롤드 모드에서 초기 확장된 아이템의 값입니다.",
      table: {
        category: "Behavior",
      },
    },
    onChange: {
      action: "changed",
      description: "확장된 아이템이 변경될 때 호출되는 콜백 함수입니다.",
      table: {
        category: "Events",
      },
    },
    className: {
      control: "text",
      description: "Accordion 컨테이너의 커스텀 클래스입니다.",
      table: {
        category: "Style",
      },
    },
    style: {
      control: "object",
      description: "Accordion 컨테이너의 인라인 스타일입니다.",
      table: {
        category: "Style",
      },
    },
  },
  args: {
    multiple: false,
    className: "",
    style: {},
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  name: "기본 아코디언",
  render: (args) => (
    <Accordion {...args}>
      <Accordion.Item value="item1">
        <Accordion.Header>
          "결국 중요한 건 인생을 얼마나 살았느냐가 아니다. 그동안 살아간
          삶이다."
        </Accordion.Header>
        <Accordion.Content>
          이 영감을 주는 명언은 우리가 삶을 평가하는 방식을 생각하게 하는 교묘한
          단어 유희를 사용합니다.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  ),

  parameters: {
    docs: {
      description: {
        story: `
**기본**

\`Accordion\` 컴포넌트는 아이템을 확장할 수 있는 UI 요소입니다.

\`\`\`tsx
<Accordion>
  <Accordion.Item value="item1">
    <Accordion.Header>헤더 1</Accordion.Header>
    <Accordion.Content>콘텐츠 1</Accordion.Content>
  </Accordion.Item>
  {/* 다른 아이템들 */}
</Accordion>
\`\`\`
          `,
      },
    },
  },
};

export const UncontrolledSingle: Story = {
  name: "단일 확장 (언컨트롤드)",
  render: (args) => (
    <Accordion {...args}>
      <Accordion.Item value="item1">
        <Accordion.Header>
          제 인생의 사명은 단순히 생존하는 것이 아니라 번창하는 것입니다."
        </Accordion.Header>
        <Accordion.Content>
          <h2>마야 안젤루</h2>
          인생에 대한 영감을 주는 이 명언은 카드에 특히 적합합니다. 적절한
          시기에 다른 사람에게 이 명언이 적힌 카드를 선물하면 어려움 속에서도 잘
          살아나갈 동기를 부여할 수 있습니다.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item2">
        <Accordion.Header>일 때문에 삶을 포기해서는 안 된다."</Accordion.Header>
        <Accordion.Content>
          <h2>존 우든</h2> 워라밸이라고 하죠?
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item3">
        <Accordion.Header>
          더 나은 것을 위해 좋은 것을 포기하는 것을 두려워하지 마라.
        </Accordion.Header>
        <Accordion.Content>
          <h2>존 D. 록펠러</h2>
          인생에 대한 영감을 주는 명언으로, '충분히 좋은 것'에 안주하는 것과는
          정반대의 의미를 담고 있습니다.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  ),
  parameters: {
    docs: {
      description: {
        story: `
**단일 확장 (언컨트롤드)**

\`multiple\`이 \`false\`인 기본 모드에서는 한 번에 하나의 아이템만 확장됩니다.

\`\`\`tsx
<Accordion>
  {/* Accordion 아이템들 */}
</Accordion>
\`\`\`
          `,
      },
    },
  },
};

export const UncontrolledMultiple: Story = {
  name: "다중 확장 (언컨트롤드)",
  args: {
    multiple: true,
  },
  render: (args) => (
    <Accordion {...args}>
      <Accordion.Item value="item1">
        <Accordion.Header>
          "우리가 반복해서 행하는 것이 자신이다. 따라서 탁월함은 행동이 아니라
          습관이라 할 수 있다."
        </Accordion.Header>
        <Accordion.Content>
          <sub>
            아리스토텔레스의 이 명언은 우리가 무엇을 반복하는지가 우리의
            정체성을 결정한다는 것을 강조합니다.
          </sub>
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item2">
        <Accordion.Header>
          "당신의 시간은 한정되어 있으니 다른 사람의 삶을 살면서 시간을 낭비하지
          마세요. 다른 사람의 생각에 따라 살아야 한다는 고정관념에 갇히지
          마세요."
        </Accordion.Header>
        <Accordion.Content>
          <sub>
            스티브 잡스의 이 명언은 자신만의 삶을 살아가야 한다는 메시지를
            전달합니다.
          </sub>
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item3">
        <Accordion.Header>
          "시작하고 싶다면 말은 그만두고 실천해야 한다."
        </Accordion.Header>
        <Accordion.Content>
          <sub>
            월트 디즈니의 이 명언은 시작이 중요하다는 것을 강조합니다. 말로만
            계획을 세우지 말고 실천으로 옮기세요.
          </sub>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  ),
  parameters: {
    docs: {
      description: {
        story: `
**다중 확장 (언컨트롤드)**

\`multiple\`을 \`true\`로 설정하여 여러 아이템을 동시에 확장할 수 있습니다.

\`\`\`tsx
<Accordion multiple>
  {/* Accordion 아이템들 */}
</Accordion>
\`\`\`
          `,
      },
    },
  },
};

export const ControlledSingle: Story = {
  name: "단일 확장 (컨트롤드)",
  render: (args) => {
    const [activeValue, setActiveValue] = useState<string | null>(null);

    return (
      <>
        <Button
          size="small"
          onClick={() => setActiveValue((prev) => (prev ? null : "item1"))}
          style={{ marginBottom: "10px" }}
        >
          {activeValue ? "Close Panel" : "Open Panel 1"}
        </Button>
        <Accordion {...args} value={activeValue} onChange={setActiveValue}>
          <Accordion.Item value="item1">
            <Accordion.Header>헤더 1</Accordion.Header>
            <Accordion.Content>콘텐츠 1</Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="item2">
            <Accordion.Header>헤더 2</Accordion.Header>
            <Accordion.Content>콘텐츠 2</Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `
**단일 확장 (컨트롤드)**

\`value\`와 \`onChange\`를 사용하여 확장된 아이템을 외부에서 제어할 수 있습니다.

\`\`\`tsx
const [activeValue, setActiveValue] = useState<string | null>(null);

<>
  <Button
    onClick={() => setActiveValue((prev) => (prev ? null : "item1"))}
  >
    {activeValue ? "Close Panel" : "Open Panel 1"}
  </Button>
  <Accordion value={activeValue} onChange={setActiveValue}>
    {/* Accordion 아이템들 */}
  </Accordion>
</>
\`\`\`
          `,
      },
    },
  },
};

export const ControlledMultiple: Story = {
  name: "다중 확장 (컨트롤드)",
  args: {
    multiple: true,
  },
  render: (args) => {
    const [activeValues, setActiveValues] = useState<string[]>([]);

    return (
      <>
        <Button
          size="small"
          onClick={() =>
            setActiveValues((prev) => (prev.length ? [] : ["item1", "item2"]))
          }
          style={{ marginBottom: "10px" }}
        >
          {activeValues.length ? "Close All" : "Open item1 and item2"}
        </Button>
        <Accordion
          {...args}
          value={activeValues}
          onChange={(values) => {
            setActiveValues(values as string[]);
            args.onChange && args.onChange(values);
          }}
        >
          <Accordion.Item value="item1">
            <Accordion.Header>
              인생은 여러 가지를 시도해보고 효과가 있는지 확인하는 과정이다."
            </Accordion.Header>
            <Accordion.Content>
              <sub>
                이 영감을 주는 짧은 명언은 실패에 대한 두려움에 집중하지 않고
                도전할 수 있는 용기를 줍니다.
              </sub>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="item2">
            <Accordion.Header>
              "촬영하지 않은 장면은 100% 놓치게 된다."
            </Accordion.Header>
            <Accordion.Content>
              <sub>
                이 명언은 기회를 놓치지 않고 적극적으로 행동해야 한다는 메시지를
                전달합니다.
              </sub>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="item3">
            <Accordion.Header>
              "열심히 하면 행운도 따라오는 것 같다."
            </Accordion.Header>
            <Accordion.Content>
              <sub>
                토머스 제퍼슨은 일과 관련된 표현을 바꾸는 데 탁월한 재능이
                있었습니다. 이 영감을 주는 명언으로 하루를 시작하면 열심히
                일하는 것이 하루를 보내는 최고의 방법처럼 느껴질 것입니다.
              </sub>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `
**다중 확장 (컨트롤드)**

\`multiple\` 모드에서 \`value\`와 \`onChange\`를 사용하여 확장된 아이템의 배열을 제어할 수 있습니다.

\`\`\`tsx
const [activeValues, setActiveValues] = useState<string[]>([]);

<>
  <Button
    onClick={() => setActiveValues((prev) => (prev.length ? [] : ["item1", "item2"]))}
  >
    {activeValues.length ? "Close All" : "Open item1 and item2"}
  </Button>
  <Accordion value={activeValues} onChange={setActiveValues}>
    {/* Accordion 아이템들 */}
  </Accordion>
</>
\`\`\`
          `,
      },
    },
  },
};

export const CustomStyling: Story = {
  name: "커스텀 스타일 적용",
  render: (args) => (
    <Accordion {...args}>
      <Accordion.Item value="item1">
        <Accordion.Header
          style={{ backgroundColor: "lightblue", color: "white" }}
        >
          헤더 1
        </Accordion.Header>
        <Accordion.Content
          style={{ backgroundColor: "lightblue", color: "white" }}
        >
          콘텐츠 1
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  ),
  parameters: {
    docs: {
      description: {
        story: `
**커스텀 스타일 적용**

\`className\`과 \`style\`을 사용하여 컴포넌트에 커스텀 스타일을 적용할 수 있습니다.

\`\`\`tsx
<Accordion className="custom-accordion">
  <Accordion.Item value="item1">
     <Accordion.Header
          style={{ backgroundColor: "lightblue", color: "white" }}
        >
          헤더 1
        </Accordion.Header>
        <Accordion.Content
          style={{ backgroundColor: "lightblue", color: "white" }}
        >
          콘텐츠 1
        </Accordion.Content>
  </Accordion.Item>
</Accordion>
\`\`\`
          `,
      },
    },
  },
};
