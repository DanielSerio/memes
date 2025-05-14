import { forwardRef, type ForwardedRef, type ReactNode } from "react";
import type { BoxProps } from "../types";

function BoxComponent<C extends keyof HTMLElementTagNameMap>(
  {
    component,
    p,
    px,
    py,
    pt,
    pr,
    pb,
    pl,
    m,
    mx,
    my,
    mt,
    mr,
    mb,
    ml,
    children,
    ...rest
  }: BoxProps<C>,
  ref?: ForwardedRef<HTMLElement>
) {
  const Component = (component ?? "div") as unknown as ({}: Record<
    string,
    any
  >) => ReactNode;
  const props = rest as unknown as Record<string, any>;

  return (
    <Component ref={ref} {...props}>
      {children}
    </Component>
  );
}

export const Box = forwardRef(BoxComponent);
