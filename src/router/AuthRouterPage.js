import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignInPage } from "src/pages/auth/sign-in";
import { SignUpPage } from "src/pages/auth/sign-up";
import { LandingPage } from "src/pages/landing";

export default function AuthRouterPage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} exact />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="*" element={<SignInPage />} exact />
      </Routes>
    </BrowserRouter>
  );
}
