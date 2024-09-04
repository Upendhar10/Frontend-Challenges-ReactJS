import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";

import Home from "./Projects/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>Error Page</h1>,
  },
  {
    path: "/calculator",
    element: <h1>Calculator Page</h1>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
