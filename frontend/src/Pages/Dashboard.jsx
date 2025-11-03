"use client";

import { useState } from "react";
import { AppSidebar } from "../components/sideBar/AppSidebar";
import { DashboardStats } from "../components/sideBar/DashboardStats";
import { RecentActivities } from "../components/sideBar/RecentActivity";
import { Menu, Pencil } from "lucide-react";
import "../styles/dashboard.css";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import MyProfile from "../components/Dashboard/MyProfile";
import Settings from "../components/Dashboard/Settings";

export default function Dashboard() {
  const isMobile = window.innerWidth <= 768;
  const location = useLocation();
  console.log("first", location);

  const userData = useSelector((state) => state.user);
  console.log("userData", userData?.userData);

  return (
    <div
      className="sidebar-provider"
      style={{ background: "black", color: "white" }}
    >
      <div className="sidebar-container">
        <AppSidebar />
      </div>
      {location.pathname === "/dashboard" && <MyProfile />}
      {location.pathname === "/dashboard/settings" && <Settings />}
    </div>
  );
}
