import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import LoginV2 from "../pages/LoginV2";
import RegistrationV2 from "../pages/RegistrationV2";
import ProfilePage from "../pages/Profile";
import ProtectedLayout from "../components/layout/ProtectedLayout";
import UserList from "../pages/Users/UserList";
import DashboardPage from "../pages/Dashboard";
import RolesPage from "../pages/Roles";
import DepartmentsPage from "../pages/Departments";
import ReportsPage from "../pages/Reports";
import ActivityLogPage from "../pages/ActivityLog";

const ApplicationRouter: React.FC = () => (
  <Router>
    {/* <Layout> */}
    <Routes>
      <Route path="/login" element={<LoginV2 />} />
      <Route path="/register" element={<RegistrationV2 />} />

      {/* Protected Routes */}
      <Route element={<ProtectedLayout />}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/roles" element={<RolesPage />} />
        <Route path="/departments" element={<DepartmentsPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/activity-log" element={<ActivityLogPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
      {/* <Route path="/" element={<HomePage />} />
      
      <Route path="/register" element={<RegistrationPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/dashboard" element={<DashboardPage />} /> */}
    </Routes>
    {/* </Layout> */}
  </Router>
);

export default ApplicationRouter;
