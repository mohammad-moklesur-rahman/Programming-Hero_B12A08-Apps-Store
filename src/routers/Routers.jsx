import { createBrowserRouter } from "react-router"
import Home from "../pages/Home";
import RootLayout from "../layout/RootLayout";
import Apps from "../pages/Apps";
import Installation from "../pages/Installation";

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
        Component: Apps
      },
      {
        path: "/installation",
        Component: Installation
      }
    ]
  }
])

export default router;