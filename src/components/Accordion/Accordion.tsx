import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  AccordionContainer,
  AccordionContentPanel,
  AccordionHeaderButton,
  AccordionItemContainer,
  Icon,
} from "./Accordion.styles";
import defaultTheme from "../../styles/theme";

export interface AccordionContextProps {
  activeValues: string[];
  multiple: boolean;
}

export interface AccordionDispatchProps {
  toggleItem: (value: string) => void;
}

const AccordionContext = createContext<AccordionContextProps>({
  activeValues: [],
  multiple: false,
});
const AccordionDispatch = createContext<AccordionDispatchProps>({
  toggleItem: () => {},
});

export const useAccordion = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("useAccordion must be used within AccordionProvider");
  }
  return context;
};

export const useAccordionDispatch = () => {
  const context = useContext(AccordionDispatch);
  if (!context) {
    throw new Error(
      "useAccordionDispatch must be used within AccordionProvider"
    );
  }
  return context;
};

export interface AccordionSingleProps {
  children: ReactNode;
  multiple?: false;
  defaultValue?: string;
  value?: string;
  onChange?: (value: string) => void;
  style?: React.CSSProperties;
  className?: string;
}

export interface AccordionMultipleProps {
  children: ReactNode;
  multiple: true;
  defaultValue?: string[];
  value?: string[];
  onChange?: (value: string[]) => void;
}

export type AccordionProps = (AccordionSingleProps | AccordionMultipleProps) & {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
};

const Accordion = ({
  children,
  multiple = false,
  defaultValue,
  value,
  onChange,
  style,
  className,
}: AccordionProps) => {
  const [activeValues, setActiveValues] = useState<string[]>(
    multiple
      ? (defaultValue as string[]) ?? []
      : defaultValue !== undefined
      ? [defaultValue as string]
      : []
  );

  // 전처리
  const isControlled = value !== undefined;
  const currentValues = isControlled
    ? multiple
      ? (value as string[])
      : [value as string]
    : activeValues;

  const toggleItem = (itemValue: string) => {
    let newValues: string[];

    if (currentValues.includes(itemValue)) {
      newValues = multiple
        ? currentValues.filter((val) => val !== itemValue)
        : [];
    } else {
      newValues = multiple ? [...currentValues, itemValue] : [itemValue];
    }

    if (!isControlled) {
      setActiveValues(newValues);
    }

    if (onChange) {
      if (multiple) {
        (onChange as (value: string[]) => void)(newValues);
      } else {
        (onChange as (value: string) => void)(newValues[0] ?? "");
      }
    }
  };
  return (
    <AccordionContext.Provider
      value={{ activeValues: currentValues, multiple }}
    >
      <AccordionDispatch.Provider value={{ toggleItem }}>
        <AccordionContainer className={className} style={style}>
          {children}
        </AccordionContainer>
      </AccordionDispatch.Provider>
    </AccordionContext.Provider>
  );
};

interface AccordionItemProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const AccordionItem = ({ children, className, style }: AccordionItemProps) => {
  return (
    <AccordionItemContainer className={className} style={style}>
      {children}
    </AccordionItemContainer>
  );
};

interface AccordionHeaderProps {
  children: ReactNode;
  value: string;
  className?: string;
  style?: React.CSSProperties;
}

const expandIcon = (
  <polyline
    points="6 9 12 15 18 9"
    stroke={defaultTheme.colors.GRAY_600}
    strokeWidth="2"
    fill="none"
  ></polyline>
);

const AccordionHeader = ({
  children,
  value,
  className,
  style,
}: AccordionHeaderProps) => {
  const { activeValues, toggleItem } = (() => {
    const { activeValues } = useAccordion();
    const { toggleItem } = useAccordionDispatch();
    return { activeValues, toggleItem };
  })();

  const isExpanded = activeValues.includes(value);

  return (
    <AccordionHeaderButton
      $expanded={isExpanded}
      onClick={() => toggleItem(value)}
      aria-expanded={isExpanded}
      aria-controls={`accordion-content-${value}`}
      id={`accordion-header-${value}`}
      role="button"
      className={className}
      style={style}
    >
      {children}
      <Icon viewBox="0 0 24 24" $expanded={isExpanded}>
        {expandIcon}
      </Icon>
    </AccordionHeaderButton>
  );
};

interface AccordionContentProps {
  children: ReactNode;
  value: string;
  className?: string;
  style?: React.CSSProperties;
}

const AccordionContent = ({
  children,
  value,
  className,
  style,
}: AccordionContentProps) => {
  const { activeValues } = useAccordion();

  const isExpanded = activeValues.includes(value);

  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    if (contentRef.current) {
      if (isExpanded) {
        setHeight(contentRef.current.scrollHeight);
      } else {
        setHeight(0);
      }
    }
  }, [isExpanded]);

  return (
    <AccordionContentPanel
      $expanded={isExpanded}
      $height={height}
      role="region"
      id={`accordion-content-${value}`}
      aria-labelledby={`accordion-header-${value}`}
      className={className}
      style={style}
      ref={contentRef}
    >
      {children}
    </AccordionContentPanel>
  );
};

Accordion.Item = AccordionItem;
Accordion.Header = AccordionHeader;
Accordion.Content = AccordionContent;

export default Accordion;
