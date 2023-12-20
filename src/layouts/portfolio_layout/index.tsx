import { FC, ReactNode } from "react";
import { Outlet } from "react-router-dom";

interface PortfolioLayoutProps {
  children?: ReactNode;
}

const PortfolioLayout: FC<PortfolioLayoutProps> = ({ children }) => {
  return (
    <div>
      {children || <Outlet />}
    </div>
  );
};

export default PortfolioLayout;
