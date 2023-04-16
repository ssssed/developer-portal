import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import { lazy, Suspense } from "react";
import Spin from "../components/Spin/Spin";

const Main = lazy(() => import("../pages/MainPage/Main"));
const SearchPage = lazy(() => import("../pages/SearchPage/SearchPage"));
const Tasks = lazy(() => import("../pages/TasksPage/Tasks"));

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <Suspense fallback={<Spin />}>
          <Layout />
        </Suspense>
      ),
      children: [
        {
          path: "/",
          element: (
            <Suspense fallback={<Spin />}>
              <Main />
            </Suspense>
          ),
        },
        {
          path: "/tasks",
          element: (
            <Suspense fallback={<Spin />}>
              <Tasks />
            </Suspense>
          ),
        },
        {
          path: "/search",
          element: (
            <Suspense fallback={<Spin />}>
              <SearchPage />
            </Suspense>
          ),
        },
      ],
    },
  ],
  {
    basename: "/developer-portal",
  }
);

export default router;
