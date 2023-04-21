import { createBrowserRouter as createRouter } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Post from "./pages/Post";

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
    ],
  },
]);

export default router;
