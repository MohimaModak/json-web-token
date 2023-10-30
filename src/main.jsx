import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root.jsx";
import Home from "./Components/Home/Home.jsx";
import SignUp from "./Components/SignUp/SignUp.jsx";
import SignIn from "./Components/SignIn/SignIn.jsx";
import AuthProvider from "./Components/AuthProvider/AuthProvider.jsx";
import CheackOut from "./Components/CheackOut/CheackOut.jsx";
import Booking from "./Components/Booking/Booking.jsx";
import BookingList from "./Components/BookingList/BookingList.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/home"),
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/bookinglist",
        element: <BookingList></BookingList>,
      },
      {
        path: "cheackout/:id",
        element: <CheackOut></CheackOut>,
        // loader:({params}) => fetch(`http://localhost:5000/home/${params.id}`)
      },
      {
        path:"booking/:name",
        element:<Booking></Booking>,
        loader:({params})=> fetch(`http://localhost:5000/home/${params.name}`)
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />{" "}
    </AuthProvider>
  </React.StrictMode>
);
