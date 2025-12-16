import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./Routes/Router";
import { RouterProvider } from "react-router";
import AuthProvider from "./Context/AuthProvider";
import { MotionConfig } from "motion/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <MotionConfig viewport={{ once: true }}>
        <RouterProvider router={router} />
      </MotionConfig>
    </AuthProvider>
  </StrictMode>
);
