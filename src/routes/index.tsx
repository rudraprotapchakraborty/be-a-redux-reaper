import App from "@/App";
import Counter from "@/pages/Counter";
import Tasks from "@/pages/Tasks";
import User from "@/pages/User";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <App/>,
    Component: App,
    children: [
      {
        index: true,
        Component: Counter,
      },
      {
        path: "/counter",
        Component: Counter,
      },
      {
        path: "/tasks",
        Component: Tasks,
      },
      {
        path: "/users",
        Component: User,
      },
    ],
  },
]);

export default router;
