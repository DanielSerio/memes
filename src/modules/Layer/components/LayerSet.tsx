import { forwardRef, type ForwardedRef } from "react";
import type { LayerSetProps } from "../types";
import { Box } from "../../Core/components";

function LayerSetComponent(
  { namespace, children }: LayerSetProps,
  ref?: ForwardedRef<HTMLDivElement>
) {
  return (
    <Box className={`layer-set ${namespace}`} ref={ref}>
      {children}
    </Box>
  );
}

export const LayerSet = forwardRef(LayerSetComponent);
