import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelloPage } from "src/pages/hello";
import { DashboardLayout } from "src/layouts/DashboardLayout";
import { MainSection } from "src/pages/dashboard/main";
import { RequestSection } from "src/pages/dashboard/request";
import { PatientSection } from "src/pages/dashboard/patient";
import { DoctorSection } from "src/pages/dashboard/doctor";

export default function UserRouterPage() {
  return (
    <BrowserRouter>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<MainSection />} />
          <Route path="/dashboard" element={<MainSection />} />
          <Route path="/request" element={<RequestSection />} />
          <Route path="/patient" element={<PatientSection />} />
          <Route path="/doctor" element={<DoctorSection />} />

          <Route path="/hello" element={<HelloPage />} />
          <Route path="*" element={<HelloPage />} />
        </Routes>
      </DashboardLayout>
    </BrowserRouter>
  );
}
