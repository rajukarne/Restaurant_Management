import React from "react";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "./router";


const App = () => {
  return (
    // You can wrap global providers here
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
