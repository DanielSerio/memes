import type { PropsWithChildren } from "react";
import { Box } from "./Box";
import { WorkspaceProvider } from "../hooks/useWorkspaceState";

export function Shell({ children }: PropsWithChildren) {
  return (
    <WorkspaceProvider>
      <Box id="shell" className="shell">
        {children}
      </Box>
    </WorkspaceProvider>
  );
}
