import { ComponentType, Suspense, lazy } from "react";
import BaseLayout from "../../layouts/base_layout";
import SuspenseLoader from "../../core/suspense_loader/SuspenseLoader";
import { RouteObject, Navigate } from "react-router-dom";
import { JSX } from "react/jsx-runtime";
import BlogLayout from "../../layouts/blog_layout";
import PortfolioLayout from "../../layouts/portfolio_layout";
import SpecialLayout from "../../layouts/special_layout";
import Blog from "../../presentations/blog";
import Portfolio from "../../presentations/portfolio";
import Tet2024 from "../../presentations/special/tet2024";
import Gift from "../../presentations/special";

const Loader = (Component: ComponentType) => (props: JSX.IntrinsicAttributes) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

// Pages
const HomePage = Loader(lazy(() => import("../../presentations/home")));

// Status
const Status404 = Loader(
  lazy(() => import("../../presentations/status/status_404"))
);
const StatusComingSoon = Loader(
  lazy(() => import("../../presentations/status/status_coming_soon"))
);
const StatusMaintenance = Loader(
  lazy(() => import("../../presentations/status/status_maintenance"))
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
    path: "blog",
    element: <BlogLayout />,
    children: [
      {
        path: "",
        element: <Blog />,
      },
    ],
  },
  {
    path: "portfolio",
    element: <PortfolioLayout />,
    children: [
      {
        path: "",
        element: <Portfolio />,
      },
    ],
  },
  {
    path: "specialgift",
    element: <SpecialLayout />,
    children: [
      {
        path: "",
        element: <Gift />,
      },
      {
        path: "tet-2024",
        element: <Tet2024 />,
      },
    ],
  },
  {
    path: "sgrayk-blog",
    element: <Navigate to="/" replace />
  }
];

export default routes;
