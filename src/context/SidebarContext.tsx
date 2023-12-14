import { FC, ReactNode, createContext, useState } from "react";

interface BaseSidebarProps {
  children?: ReactNode;
}

type SidebarContext = {
  sidebarToggle: any;
  toggleSidebar: () => void;
  closeSidebar: () => void;
};

const SidebarContext = createContext({} as SidebarContext);

const SidebarProvider: FC<BaseSidebarProps> = ({ children }) => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const toggleSidebar = () => {
    setSidebarToggle(!sidebarToggle);
  };
  const closeSidebar = () => {
    setSidebarToggle(false);
  };

  return (
    <SidebarContext.Provider
      value={{ sidebarToggle, toggleSidebar, closeSidebar }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
