import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelloPage } from "src/pages/hello";

export default function UserRouterPage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HelloPage />} />

        <Route path="*" element={<HelloPage />} />
      </Routes>
    </BrowserRouter>
  );
}
