import { Box } from "@mui/material";
import { FC, ReactNode } from "react";
import { Outlet } from "react-router-dom";

interface SpecialLayoutProps {
  children?: ReactNode;
}

const SpecialLayout: FC<SpecialLayoutProps> = ({ children }) => {
  return (
    <Box
      sx={{
        flex: 1,
        height: "100%",
      }}
    >
      {children || <Outlet />}
    </Box>
  );
};

export default SpecialLayout;
