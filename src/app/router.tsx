import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./pages/home-page";
import BaseLayout from "@/features/base-layout/base-layout";

const routes = createBrowserRouter([
  { element: <BaseLayout />, children: [{ element: <HomePage />, path: "/" }] },
]);

export default function Router() {
  return <RouterProvider router={routes} />;
}
