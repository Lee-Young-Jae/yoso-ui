import { CSSProperties, useEffect, useState } from "react";
import {
  Container,
  DigitWrapper,
  DigitList,
  Digit,
} from "./RollingNumber.styles";

interface RollingNumberProps {
  value: number | string;
  digits?: number;
  padWithZero?: boolean;
  duration?: number;
  timingFunction?: string;
  digitClassName?: string;
  digitStyle?: CSSProperties;
  onComplete?: () => void;
  useGrouping?: boolean;
}

const RollingNumber = ({
  value,
  digits = -1,
  padWithZero = false,
  duration = 1,
  timingFunction = "ease-out",
  digitClassName,
  digitStyle,
  onComplete,
  useGrouping = false,
}: RollingNumberProps) => {
  const [prevValue, setPrevValue] = useState<string>("");
  const [currentValue, setCurrentValue] = useState<string>("");

  useEffect(() => {
    const valueNumber = typeof value === "number" ? value : parseFloat(value);
    const formattedValue = useGrouping
      ? valueNumber.toLocaleString()
      : valueNumber.toString();

    setPrevValue(currentValue);
    setCurrentValue(formattedValue);
  }, [value, useGrouping]);

  useEffect(() => {
    if (onComplete) {
      const timer = setTimeout(() => {
        onComplete();
      }, duration * 1000);
      return () => clearTimeout(timer);
    }
  }, [onComplete, duration, currentValue]);

  const maxLength = digits || Math.max(prevValue.length, currentValue.length);

  const currentDigits = padWithZero
    ? currentValue.padStart(maxLength, "0").split("")
    : currentValue.padStart(maxLength).split("");

  return (
    <Container>
      {currentDigits.map((digit, index) => {
        const currentDigit = parseInt(digit, 10) || 0;

        // 쉼표나 기타 구분자인 경우 그대로 표시
        if (isNaN(parseInt(digit))) {
          return (
            <DigitWrapper
              key={index}
              className={digitClassName}
              style={{
                marginRight: "0.05em",
                ...digitStyle,
              }}
              $duration={duration}
              $timingFunction={timingFunction}
              $currentDigit={currentDigit}
            >
              <Digit>{digit}</Digit>
            </DigitWrapper>
          );
        }

        return (
          <DigitWrapper
            key={index}
            className={digitClassName}
            style={digitStyle}
            $duration={duration}
            $timingFunction={timingFunction}
            $currentDigit={currentDigit}
          >
            <DigitList>
              {Array.from({ length: 10 }, (_, i) => (
                <Digit key={i}>{i}</Digit>
              ))}
            </DigitList>
          </DigitWrapper>
        );
      })}
    </Container>
  );
};

export default RollingNumber;
