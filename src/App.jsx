import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import First from "./pages/First";
import Home from "./pages/Home";
import Quote from "./pages/Quote";
import Contact from "./pages/Contact";
import Restaurant from "./pages/Resturent";
import Notfound from "./pages/Notfound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <First />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/quote",
        element: <Quote />,
      },
      {
        path: "/contacts",
        element: <Contact />,
      },
      {
        path: "/restaurants",
        element: <Restaurant />,
      },
      {
        path: "*",
        element: <Notfound />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;