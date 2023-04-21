import { createBrowserRouter as createRouter } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Post from "./pages/Post";
import User from "./pages/User";

const router = createRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "post/:id",
        element: <Post />,
      },
      {
        path: "user/:id",
        element: <User />,
      },
    ],
  },
]);

export default router;
