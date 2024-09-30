import { Meta, StoryFn } from "@storybook/react";
import ImageSlider, { ImageSliderProps } from "./ImageSlider";

export default {
  title: "Components/ImageSlider",
  component: ImageSlider,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
\`ImageSlider\` 컴포넌트는 이미지 슬라이더를 구현하기 위한 컴포넌트로, 다음과 같은 기능을 제공합니다:

- **드래그 및 터치 지원**: 마우스 드래그 및 터치로 슬라이드를 이동할 수 있습니다.
- **자동 재생**: 슬라이드를 자동으로 전환할 수 있습니다.
- **무한 루프**: 마지막 슬라이드 이후에 처음 슬라이드로 이동합니다.
- **이미지 Lazy Loading**: Intersection Observer API를 사용하여 이미지 로딩을 최적화합니다.
- **접근성 준수**: 키보드 내비게이션 및 ARIA 속성을 사용하여 접근성을 향상시킵니다.

**사용법**

\`\`\`tsx
import { ImageSlider } from 'yoso-ui';

const slides = [
  { imageUrl: 'https://example.com/image1.jpg', altText: '이미지 1' },
  { imageUrl: 'https://example.com/image2.jpg', altText: '이미지 2' },
  { imageUrl: 'https://example.com/image3.jpg', altText: '이미지 3' },
];

<ImageSlider
  slides={slides}
  width={800}
  height={400}
  autoPlay={true}
  loop={true}
/>;
\`\`\`
        `,
      },
    },
  },
} as Meta<typeof ImageSlider>;

const slides = [
  {
    imageUrl: "https://via.placeholder.com/800x400?text=Slide+1",
    altText: "슬라이드 1",
  },
  {
    imageUrl: "https://via.placeholder.com/800x400?text=Slide+2",
    altText: "슬라이드 2",
  },
  {
    imageUrl: "https://via.placeholder.com/800x400?text=Slide+3",
    altText: "슬라이드 3",
  },
];

const Template: StoryFn<ImageSliderProps> = (args) => <ImageSlider {...args} />;

export const Default = Template.bind({});
Default.args = {
  slides,
  width: 400,
  height: 400,
};
Default.storyName = "기본 이미지 슬라이더";

export const AutoPlay = Template.bind({});
AutoPlay.args = {
  slides,
  width: 800,
  height: 400,
  autoPlay: true,
  autoPlayInterval: 2000,
};
AutoPlay.storyName = "자동 재생 슬라이더";
AutoPlay.parameters = {
  docs: {
    description: {
      story: `
**자동 재생 슬라이더**

\`autoPlay\`와 \`autoPlayInterval\` props를 사용하여 슬라이더를 자동으로 전환시킬 수 있습니다.

\`\`\`tsx
<ImageSlider
  slides={slides}
  width={800}
  height={400}
  autoPlay={true}
  autoPlayInterval={2000}
/>
\`\`\`
      `,
    },
  },
};

export const Looping = Template.bind({});
Looping.args = {
  slides,
  width: 800,
  height: 400,
  loop: true,
};
Looping.storyName = "무한 루프 슬라이더";
Looping.parameters = {
  docs: {
    description: {
      story: `
**무한 루프 슬라이더**

\`loop\` prop을 사용하여 슬라이더가 마지막 슬라이드 이후 첫 번째 슬라이드로 돌아가도록 설정할 수 있습니다.

\`\`\`tsx
<ImageSlider
  slides={slides}
  width={800}
  height={400}
  loop={true}
/>
\`\`\`
      `,
    },
  },
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  slides,
  width: 600,
  height: 300,
};
CustomSize.storyName = "커스텀 크기 슬라이더";

export const WithoutNavigationAndPagination = Template.bind({});
WithoutNavigationAndPagination.args = {
  slides,
  width: 800,
  height: 400,
  showNavigation: false,
  showPagination: false,
};
WithoutNavigationAndPagination.storyName = "내비게이션 및 페이지네이션 숨김";

export const ObjectFitContain = Template.bind({});
ObjectFitContain.args = {
  slides,
  width: 800,
  height: 400,
  objectFit: "contain",
};
ObjectFitContain.storyName = "object-fit: contain";
ObjectFitContain.parameters = {
  docs: {
    description: {
      story: `
**이미지 객체 맞춤 설정**

\`objectFit\` prop을 사용하여 이미지의 크기 조절 방식을 지정할 수 있습니다.

\`\`\`tsx
<ImageSlider
  slides={slides}
  width={800}
  height={400}
  objectFit="contain"
/>
\`\`\`
      `,
    },
  },
};

export const OnSlideChange = Template.bind({});
OnSlideChange.args = {
  slides,
  width: 800,
  height: 400,
  onSlideChange: (currentIndex) => {
    console.log(`현재 슬라이드 인덱스: ${currentIndex}`);
  },
};
OnSlideChange.storyName = "슬라이드 변경 이벤트";

export const CustomNavigation = Template.bind({});
CustomNavigation.args = {
  slides,
  width: 800,
  height: 400,
  renderNavigation: ({ goToNextSlide, goToPrevSlide, currentIndex }) => (
    <div
      style={{
        position: "absolute",
        top: "50%",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        transform: "translateY(-50%)",
      }}
    >
      <button
        onClick={goToPrevSlide}
        disabled={currentIndex === 0}
        style={{
          background: "transparent",
          border: "none",
          fontSize: "2rem",
          cursor: "pointer",
        }}
        aria-label="이전 슬라이드"
      >
        ⬅️
      </button>
      <button
        onClick={goToNextSlide}
        disabled={currentIndex === slides.length - 1}
        style={{
          background: "transparent",
          border: "none",
          fontSize: "2rem",
          cursor: "pointer",
        }}
        aria-label="다음 슬라이드"
      >
        ➡️
      </button>
    </div>
  ),
};
CustomNavigation.storyName = "커스텀 내비게이션";
CustomNavigation.parameters = {
  docs: {
    description: {
      story: `
**커스텀 내비게이션**

\`renderNavigation\` prop을 사용하여 내비게이션을 커스텀할 수 있습니다.

\`\`\`tsx
<ImageSlider
  slides={slides}
  width={800}
  height={400}
  renderNavigation={({ goToNextSlide, goToPrevSlide, currentIndex }) => (
    <div>
      <button
        disabled={currentIndex === 0}
        onClick={goToPrevSlide}
        style={{ cursor: "pointer" }}
        aria-label="이전 슬라이드"
      >
        ⬅️
      </button>
      <button
        disabled={currentIndex === slides.length - 1}
        onClick={goToNextSlide}
        style={{ cursor: "pointer" }}
        aria-label="다음 슬라이드"
      >
        ➡️
      </button>
    </div>
  )}
/>
\`\`\`
      `,
    },
  },
};

export const CustomPagination = Template.bind({});
CustomPagination.args = {
  slides,
  width: 800,
  height: 400,
  renderPagination: ({ slides, currentIndex, goToSlide }) => (
    <div
      style={{
        position: "absolute",
        bottom: "15px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {slides.map((_, index) => (
        <button
          key={index}
          onClick={() => goToSlide(index)}
          style={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            margin: "0 4px",
            background: index === currentIndex ? "#717171" : "#bbb",
            border: "none",
            cursor: "pointer",
          }}
          aria-label={`${index + 1}번째 슬라이드로 이동`}
        />
      ))}
    </div>
  ),
};
CustomPagination.storyName = "커스텀 페이지네이션";
CustomPagination.parameters = {
  docs: {
    description: {
      story: `
**커스텀 페이지네이션**

\`renderPagination\` prop을 사용하여 페이지네이션을 커스텀할 수 있습니다.

\`\`\`tsx
<ImageSlider
  slides={slides}
  width={800}
  height={400}
  renderPagination={({ slides, currentIndex, goToSlide }) => (
    <div>
      {slides.map((_, index) => (
        <button
          key={index}
          onClick={() => goToSlide(index)}
          style={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            margin: "0 4px",
            background: index === currentIndex ? "#717171" : "#bbb",
            border: "none",
            cursor: "pointer",
          }}
          aria-label={\`\${index + 1}번째 슬라이드로 이동\`}
        />
      ))}
    </div>
  )}
/>
\`\`\`
      `,
    },
  },
};

export const ClickableSlides = Template.bind({});
ClickableSlides.args = {
  slides,
  width: 800,
  height: 400,
  onClickImage: (index) => alert(`슬라이드 ${index + 1} 클릭됨`),
};
ClickableSlides.storyName = "이미지 클릭 이벤트";
ClickableSlides.parameters = {
  docs: {
    description: {
      story: `
**이미지 클릭 이벤트**

\`onClickImage\` prop을 사용하여 슬라이드 이미지를 클릭했을 때의 동작을 정의할 수 있습니다.

\`\`\`tsx
<ImageSlider
  slides={slides}
  width={800}
  height={400}
  onClickImage={(index) => alert(\`슬라이드 \${index + 1} 클릭됨\`)}
/>
\`\`\`
      `,
    },
  },
};
