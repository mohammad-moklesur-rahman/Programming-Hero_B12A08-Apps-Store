import { createBrowserRouter } from "react-router"
import Home from "../pages/Home";
import RootLayout from "../layout/RootLayout";
import Apps from "../pages/Apps";
import Installation from "../pages/Installation";
import appDetails from "../pages/appDetails";

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
        Component: Apps
      },
      {
        path: "/apps/:appId",
        loader: () =>fetch('/data.json'),
        Component: appDetails
      },
      {
        path: "/installation",
        Component: Installation
      }
    ]
  }
])

export default router;