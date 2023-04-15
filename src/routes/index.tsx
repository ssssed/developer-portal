import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Main from "../pages/MainPage/Main";
import SearchPage from "../pages/SearchPage/SearchPage";
import Tasks from "../pages/TasksPage/Tasks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/tasks",
        element: <Tasks />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
    ],
  },
]);

export default router;
