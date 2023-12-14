import { ComponentType, Suspense, lazy } from "react";
import BaseLayout from "../../layouts/base_layout/BaseLayout";
import SuspenseLoader from "../../core/suspense_loader/SuspenseLoader";
import { RouteObject, Navigate } from "react-router-dom";
import { JSX } from "react/jsx-runtime";
import BlogLayout from "../../layouts/blog_layout/BlogLayout";
import PortfolioLayout from "../../layouts/portfolio_layout/PortfolioLayout";
import SpecialLayout from "../../layouts/special_layout/SpecialLayout";

const Loader = (Component: ComponentType) => (props: JSX.IntrinsicAttributes) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

// Pages
const HomePage = Loader(lazy(() => import("../../presentations/home")));


// Status
const Status404 = Loader(lazy(() => import("../../presentations/status/Status404")));
const StatusComingSoon = Loader(
  lazy(() => import("../../presentations/status/StatusComingSoon"))
);
const StatusMaintenance = Loader(
  lazy(() => import("../../presentations/status/StatusMaintenance"))
);

const routes: RouteObject[] = [
  {
    path: "",
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "status",
        children: [
          {
            path: "",
            element: <Navigate to="404" replace />,
          },
          {
            path: "404",
            element: <Status404 />,
          },
          {
            path: "maintenance",
            element: <StatusMaintenance />,
          },
          {
            path: "coming-soon",
            element: <StatusComingSoon />,
          },
        ],
      },
      {
        path: "*",
        element: <Status404 />,
      },
    ],
  },
  {
    path: "/blog",
    element: <BlogLayout />
  },
  {
    path: "/portfolio",
    element: <PortfolioLayout />
  },
  {
    path: "/specialgift",
    element: <SpecialLayout />
  }
];

export default routes;
