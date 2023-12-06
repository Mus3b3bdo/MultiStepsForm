import React from "react";
import MobileSidebar from "./MobileSidebar";
import { Box } from "@mui/material";
import DesktopSidebar from "./DesktopSidebar";
export default function Sidbar({ isMobile }) {
  return (
    <Box component="div" sx={{ width: "100%" }}>
      {isMobile ? <MobileSidebar /> : <DesktopSidebar />}
    </Box>
  );
}
