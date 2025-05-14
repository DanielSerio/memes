import type { AreaHTMLAttributes } from "react";

export interface LayerSetProps extends AreaHTMLAttributes<HTMLDivElement> {
  namespace: 'text' | 'image';
}
