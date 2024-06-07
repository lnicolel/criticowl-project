import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Main from "./components/Main/Main";
import Registration from "./pages/Registration";
import Dashboard from "./pages/Dashboard";
import TemplatesList from "./pages/TemplatesList";
import Analysis from "./pages/Analysis";
import NosavedPage from "./components/Saved/NotSaved";
import SavedPage from "./components/Saved/Saved.jsx"; // Імпорт нової сторінки

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Registration />,
  },
  {
    element: <Main />,
    children: [
      {
        path: "/app",
        element: <Dashboard />,
      },
      {
        path: "/app/templates",
        element: <TemplatesList />,
      },
      {
        path: "/app/analysis",
        element: <Analysis />,
      },
      {
        path: "/app/nosaved",
        element: <NosavedPage />,
      },
      {
        path: "/app/saved",
        element: <SavedPage />,
      },
    ],
  },
]);
