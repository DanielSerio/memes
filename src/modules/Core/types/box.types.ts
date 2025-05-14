import type { AreaHTMLAttributes } from "react";

export type Size = "xs" | "sm" | "md" | "lg" | "xl";
export type UseableSize = Size | number;

export type PaddingPropName = "p" | "px" | "py" | "pt" | "pr" | "pb" | "pl";
export type MarginPropName = "m" | "mx" | "my" | "mt" | "mr" | "mb" | "ml";
export type UseableMarginSize = UseableSize | "auto";

export type ElmPadding = Partial<Record<PaddingPropName, UseableSize>>;
export type ElmMargin = Partial<Record<MarginPropName, UseableMarginSize>>;

export interface BoxProps<C extends keyof HTMLElementTagNameMap>
  extends AreaHTMLAttributes<HTMLElementTagNameMap[C]>,
  ElmPadding,
  ElmMargin {
  component?: C;
}
