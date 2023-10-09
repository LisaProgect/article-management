import * as React from "react";
import { createBrowserRouter } from "react-router-dom";

import Home from "../modules/home/home.component";
import { RouterKeys } from "./keys";
import ErrorPage from "../modules/error-page/error-page.component";
import Auth from "../modules/auth/auth.components";
import App from "../modules/app/app.component";
import { ProtectedLayout } from "../modules/protected-layout/protected-layout.component";
import Dashboard from "../modules/dashboard/dashboard.component";
import Rss from "../modules/rss/rss.component";

export const router = createBrowserRouter([
  {
    path: RouterKeys.ROOT,
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: RouterKeys.RSS, element: <Rss /> },
      {
        path: RouterKeys.LOGIN,
        element: <Auth />,
      },
      {
        path: RouterKeys.REGISTER,
        element: <Auth />,
      },
      {
        path: RouterKeys.DASHBOARD,
        element: <ProtectedLayout />,
        children: [{ index: true, element: <Dashboard /> }],
      },
    ],
  },
]);
