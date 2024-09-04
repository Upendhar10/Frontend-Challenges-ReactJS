import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";

import Home from "./Projects/Home";
import Calculator from "./Projects/Calculator";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>Error Page</h1>,
  },
  {
    path: "/calculator",
    element: <Calculator />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
