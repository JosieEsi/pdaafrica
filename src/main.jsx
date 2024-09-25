import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./pages/Contact.jsx";
import PDAAFRICA from "./pages/PDAAFRICA.jsx";
import DonateForm from "./components/DonateForm.jsx"; // Import the DonateForm component
import ThankYouPage from "./components/ThankYouPage.jsx"; // Import the ThankYou component
import DataAnalytics from "./pages/DataAnalytics.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/pdaafrica/dataanalytics",
        element: <DataAnalytics />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/pdaafrica",
        element: <PDAAFRICA />,
      },
      {
        path: "/pdaafrica/donate", // Add the route for the donation page
        element: <DonateForm />,
      },
      {
        path: "/thank-you", // Route for the thank-you page after donation
        element: <ThankYouPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
