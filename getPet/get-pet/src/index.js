import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import RootLayout from "./Routes/RootLayout";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Listings from "./Components/Listings";
import ErrorPage from "./Routes/ErrorPage";
import ProfilePage from "./Routes/ProfilePage";
import AboutPage from "./Routes/AboutPage";
import Forum from "./Routes/Forum";
import FAQPage from "./Routes/FAQPage";
import Login from "./Components/Login";
import Signup from "./Routes/Signup";
import ForgotPassword from "./Routes/ForgotPassword";
import CompleteProfile from "./Routes/CompleteProfile";
import NewListing from "./Routes/NewListing";
import PostFullPage from "./Routes/PostFullPage";
import AddQuestionToForum from "./Routes/AddQuestionToForum";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Listings />,
      },
      { path: "/new-listing", element: <NewListing /> },
      { path: "/listings/:listingId", element: <PostFullPage /> },
      { path: "/profile", element: <ProfilePage /> },
      {
        path: "/about",
        element: <AboutPage />,
      },
      { path: "/forum", element: <Forum /> },
      {
        path: "/faq",
        element: <FAQPage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      { path: "/signup", element: <Signup /> },
      {
        path: "/forgotPassword",
        element: <ForgotPassword />,
      },
      {
        path: "/completeProfile",
        element: <CompleteProfile />,
      },
      { path: "/addQuestion", element: <AddQuestionToForum /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
