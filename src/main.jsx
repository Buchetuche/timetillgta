import { Analytics } from "@vercel/analytics/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmbedPage from "./Pages/EmbedPage.jsx";
import Home from "./Pages/Home.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/embed" element={<EmbedPage />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  </StrictMode>
);