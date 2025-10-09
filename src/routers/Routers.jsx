import { createBrowserRouter } from "react-router"
import Home from "../pages/Home";
import RootLayout from "../layout/RootLayout";
import Installation from "../pages/Installation";
import ErrorPage from "../pages/ErrorPage";
import { lazy, Suspense } from "react";
import Loading from "../components/Loading";

const Apps = lazy(() => import("../pages/Apps"));
const AppDetails = lazy(() => import("../pages/AppDetails"));

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,

    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "/home",
        Component: Home
      },
      {
        path: "/apps",
        loader: () =>fetch('/data.json'),
        element: (<Suspense fallback={<Loading />}><Apps /></Suspense>)
      },
      {
        path: "/apps/:appId",
        loader: () =>fetch('/data.json'),
        element: (<Suspense fallback={<Loading />}><AppDetails /></Suspense>)
      },
      {
        path: "/installation",
        Component: Installation
      },
      {
        path: "*",
        Component: ErrorPage
      }
    ]
  }
])

export default router;