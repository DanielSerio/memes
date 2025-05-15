import { Box } from "../../Core/components";
import { DimensionsForm } from "./forms/DimensionsForm";

export function Sidebar() {
  return (
    <Box component="aside" id="sidebar" className="sidebar">
      <h2>Sidebar</h2>
      <DimensionsForm />
    </Box>
  );
}
