import { useEffect, useRef, useState, type RefObject } from "react";

export interface UseLayerSetProps<Elm extends HTMLElement = HTMLElement> {
  parent?: RefObject<Elm | null>;
}

export function useLayerSetRefs() {
  const rootRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLCanvasElement>(null);
  const foregroundRef = useRef<HTMLCanvasElement>(null);

  return {
    rootRef,
    backgroundRef,
    foregroundRef,
  };
}
let observer: undefined | ResizeObserver;

export function useLayerSet({ parent }: UseLayerSetProps) {
  const [dimensions, setDimensions] = useState<[number, number] | null>(null);
  const refs = useLayerSetRefs();

  useEffect(() => {
    if (!observer && parent && parent.current) {
      observer = new ResizeObserver((entries) => {
        const entry = entries[0];
        const width = entry.contentRect.width;
        const height = entry.contentRect.height;

        setDimensions([width, height]);
      });

      observer.observe(parent.current);
    }

    return () => {
      if (observer && parent?.current) {
        observer.unobserve(parent.current);

        observer = undefined;
      }
    };
  }, [parent?.current]);

  const width = dimensions?.[0];
  const height = dimensions?.[1];

  return {
    width,
    height,
    refs,
  };
}
