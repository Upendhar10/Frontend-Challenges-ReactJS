import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";

import Home from "./Projects/Home";
import Calculator from "./Projects/Calculator";
import StarRating from "./Projects/StarRating";
import Accordian from "./Projects/Accoridan";

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
  {
    path: "/starrating",
    element: <StarRating />,
  },
  {
    path: "/accordian",
    element: <Accordian />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
