import { FC, ReactNode } from "react";
import { Outlet } from "react-router-dom";

interface SpecialLayoutProps {
  children?: ReactNode;
}

const SpecialLayout: FC<SpecialLayoutProps> = ({ children }) => {
  return (
    <div>
      {children || <Outlet />}
    </div>
  );
};

export default SpecialLayout;
