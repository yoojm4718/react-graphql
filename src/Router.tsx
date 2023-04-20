import { createBrowserRouter as createRouter } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";

const router = createRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
]);

export default router;
