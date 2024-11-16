"use client";

import {
  createContext,
  forwardRef,
  ForwardRefExoticComponent,
  HTMLAttributes,
  ReactNode,
  Ref,
  RefAttributes,
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
import { mergeRefs } from "../../utils";

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

export interface AccordionProps<T extends string | string[]>
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  multiple?: boolean;
  defaultValue?: T;
  value?: T;
  onChange?: (value: T) => void;
}

const AccordionInner = <T extends string | string[]>(
  props: AccordionProps<T>,
  ref: Ref<HTMLDivElement>
) => {
  const {
    children,
    multiple = false,
    defaultValue,
    value,
    onChange,
    style,
    className,
    ...rest
  } = props;

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
      onChange(multiple ? (newValues as T) : ((newValues[0] ?? "") as T));
    }
  };
  return (
    <AccordionContext.Provider
      value={{ activeValues: currentValues, multiple }}
    >
      <AccordionDispatch.Provider value={{ toggleItem }}>
        <AccordionContainer
          className={className}
          style={style}
          ref={ref}
          {...rest}
        >
          {children}
        </AccordionContainer>
      </AccordionDispatch.Provider>
    </AccordionContext.Provider>
  );
};

interface AccordionItemProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  value: string;
  className?: string;
  style?: React.CSSProperties;
}

interface AccordionItemContextProps {
  value: string;
}

const AccordionItemContext = createContext<AccordionItemContextProps | null>(
  null
);

const useAccordionItem = () => {
  const context = useContext(AccordionItemContext);
  if (!context) {
    throw new Error("useAccordionItem must be used within AccordionItem");
  }
  return context;
};

const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  (
    { children, value, className, style, ...props }: AccordionItemProps,
    ref
  ) => {
    return (
      <AccordionItemContext.Provider value={{ value }}>
        <AccordionItemContainer
          className={className}
          style={style}
          {...props}
          ref={ref}
        >
          {children}
        </AccordionItemContainer>
      </AccordionItemContext.Provider>
    );
  }
);

interface AccordionHeaderProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const expandIcon = (
  <polyline
    points="6 9 12 15 18 9"
    stroke={defaultTheme.colors.gray[600]}
    strokeWidth="2"
    fill="none"
  ></polyline>
);

const AccordionHeader = forwardRef<HTMLButtonElement, AccordionHeaderProps>(
  ({ children, className, style, ...props }: AccordionHeaderProps, ref) => {
    const { activeValues, toggleItem, value } = (() => {
      const { value } = useAccordionItem();
      const { activeValues } = useAccordion();
      const { toggleItem } = useAccordionDispatch();
      return { activeValues, toggleItem, value };
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
        ref={ref}
        {...props}
      >
        {children}
        <Icon viewBox="0 0 24 24" $expanded={isExpanded}>
          {expandIcon}
        </Icon>
      </AccordionHeaderButton>
    );
  }
);

interface AccordionContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const AccordionContent = forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ children, className, style, ...props }: AccordionContentProps, ref) => {
    const { activeValues } = useAccordion();
    const { value } = useAccordionItem();

    const isExpanded = activeValues.includes(value);

    const contentRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

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
        ref={mergeRefs(contentRef, ref)}
        {...props}
      >
        {children}
      </AccordionContentPanel>
    );
  }
);

interface AccordionComponent
  extends ForwardRefExoticComponent<
    AccordionProps<any> & RefAttributes<HTMLDivElement>
  > {
  Item: typeof AccordionItem;
  Header: typeof AccordionHeader;
  Content: typeof AccordionContent;
}

const Accordion = forwardRef(AccordionInner) as AccordionComponent;

Accordion.Item = AccordionItem;
Accordion.Header = AccordionHeader;
Accordion.Content = AccordionContent;

export default Accordion;
