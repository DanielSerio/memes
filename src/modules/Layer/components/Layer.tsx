import { forwardRef, type ForwardedRef } from "react";
import type { LayerProps } from "../types";

function LayerComponent(
  { width, height }: LayerProps,
  ref?: ForwardedRef<HTMLCanvasElement>
) {
  return <canvas ref={ref} width={width} height={height} />;
}

export const Layer = forwardRef(LayerComponent);
