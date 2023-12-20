import { FC, ReactNode } from "react";
import { Outlet } from "react-router-dom";

interface BlogLayoutProps {
  children?: ReactNode;
}

const BlogLayout: FC<BlogLayoutProps> = ({ children }) => {
  return (
    <div>
      {children || <Outlet />}
    </div>
  );
};

export default BlogLayout;
