import { Workspace } from "../../Workspace/components";
import { Box } from "./Box";

export function Page() {
  return (
    <Box component="main" id="content" className="content">
      <Workspace />
    </Box>
  );
}
