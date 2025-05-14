import type { PropsWithChildren } from "react";
import { Box } from "./Box";

export function Shell({ children }: PropsWithChildren) {
  return (
    <Box id="shell" className="shell">
      {children}
    </Box>
  );
}
