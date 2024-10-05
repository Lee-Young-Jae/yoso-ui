<div align="center">
<img
 src="https://young-jae.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2%2Fc69ede6d-993f-48d5-82e1-e45028b1c670%2Flogo.webp?table=block&id=10981b43-34ec-80c3-909c-f1575d566455&spaceId=4bf4eb4a-0971-4aa4-9f87-8592bbbcf3f2&width=1420&userId=&cache=v2"
  alt="YOSO UI Logo"
  width="200"
  height="200"
>
<h1
  style="font-size: 2.5rem; font-weight: 700; margin-top: 0;"
>YOSO UI</h1>

YOSO UI는 한국어 `요소`에서 따온 이름으로, 일관된 디자인을 가진 웹 UI를 만들기 위한 React 컴포넌트 라이브러리입니다.

</div>

## 📦 Installation

```bash
npm install yoso-ui@latest
```

## 🚀 Usage

### 기본 테마 적용

```jsx
import React from "react";
import { YosoThemeProvider } from "yoso-ui";

const App = () => {
  return (
    <YosoThemeProvider>
      <YourApp />
    </YosoThemeProvider>
  );
};
```

### 컴포넌트 사용

```jsx
import React from "react";
import { Button } from "yoso-ui";

const YourComponent = () => {
  return <Button>Click me!</Button>;
};
```

## 📚 Documentation

[storybook](https://lee-young-jae.github.io/yoso-ui/)에서 확인할 수 있습니다.
