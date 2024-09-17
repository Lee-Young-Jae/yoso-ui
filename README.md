<div align="center">

<h1>YOSO UI</h1>

YOSO UI는 한국어 "요소"에서 따온 이름으로, 일관된 디자인을 가진 웹 UI를 만들기 위한 React 컴포넌트 라이브러리입니다.

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

작성중...

[https://yoso-ui.github.io/yoso-ui](https://yoso-ui.github.io/yoso-ui)
