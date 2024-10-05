import { Ref, RefCallback } from "react";

export function mergeRefs<T>(...refs: Ref<T>[]): RefCallback<T> {
  return (value: T) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref != null) {
        // @ts-ignore
        (ref as React.MutableRefObject<T | null>).current = value;
      }
    });
  };
}
