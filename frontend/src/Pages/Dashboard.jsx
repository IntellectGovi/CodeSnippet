"use client";

import { useState } from "react";
import { AppSidebar } from "../components/sideBar/AppSidebar";
import { DashboardStats } from "../components/sideBar/DashboardStats";
import { RecentActivities } from "../components/sideBar/RecentActivity";
import { Menu } from "lucide-react";
import "../styles/dashboard.css"

export default function Dashboard() {
  const [isVisible, setIsVisible] = useState(true);
  const isMobile = window.innerWidth <= 768;

  return (
    <div className="sidebar-provider">
      <div
        className={`sidebar-container ${
          isVisible ? "sidebar-visible" : "sidebar-hidden"
        }`}
      >
        <AppSidebar />
      </div>

      <div
        className={`sidebar-inset ${isVisible ? "with-sidebar" : "full-width"}`}
      >
        <header className="header">
          <div className="header-content">
            {!isMobile && (
              <>
                <Menu
                  style={{ cursor: "pointer" }}
                  onClick={() => setIsVisible(!isVisible)}
                  className="menu-toggle"
                />
                <div className="separator-vertical"></div>
              </>
            )}
            <nav className="breadcrumb">
              <a href="#" className="breadcrumb-link">
                ERP System
              </a>
              <span className="breadcrumb-separator">/</span>
              <span className="breadcrumb-current">Dashboard</span>
            </nav>
          </div>

          <div className="header-actions">
            <button className="btn btn-outline btn-icon">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </button>
            <button className="btn btn-outline btn-icon">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
              </svg>
            </button>
            <button className="btn btn-outline btn-icon">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                <line x1="16" x2="16" y1="2" y2="6" />
                <line x1="8" x2="8" y1="2" y2="6" />
                <line x1="3" x2="21" y1="10" y2="10" />
              </svg>
            </button>
          </div>
          {isMobile && (
            <Menu
              style={{ cursor: "pointer" }}
              onClick={() => setIsVisible(!isVisible)}
              className="menu-toggle"
            />
          )}
        </header>

        <div className="dashboard-content">
          <div className="dashboard-header">
            <div>
              <h1 className="dashboard-title">Dashboard</h1>
              <p className="dashboard-subtitle">
                Welcome back! Here's what's happening with your business today.
              </p>
            </div>
            <button className="btn btn-primary">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="mr-2"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
              Quick Action
            </button>
          </div>

          <DashboardStats />

          <div className="content-grid">
            <div className="card content-grid-main">
              <div className="card-header">
                <div className="card-title">Sales Overview</div>
                <div className="card-description">
                  Monthly sales performance
                </div>
              </div>
              <div className="card-content">
                <div className="chart-placeholder">
                  <p>Sales Chart Placeholder</p>
                </div>
              </div>
            </div>

            <div className="content-grid-side">
              <RecentActivities />
            </div>
          </div>

          <div className="bottom-grid">
            <div className="card">
              <div className="card-header">
                <div className="card-title">Top Products</div>
                <div className="card-description">
                  Best selling items this month
                </div>
              </div>
              <div className="card-content">
                <div className="list-items">
                  {[
                    "Wireless Headphones",
                    "Smart Watch Pro",
                    "Bluetooth Speaker",
                  ].map((product, i) => (
                    <div key={product} className="list-item">
                      <span className="list-item-label">{product}</span>
                      <span className="list-item-value">
                        {150 - i * 20} units
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <div className="card-title">Pending Tasks</div>
                <div className="card-description">
                  Items requiring attention
                </div>
              </div>
              <div className="card-content">
                <div className="list-items">
                  <div className="list-item">
                    <span className="list-item-label">
                      Approve Purchase Orders
                    </span>
                    <span className="status-badge status-red">5</span>
                  </div>
                  <div className="list-item">
                    <span className="list-item-label">Review Invoices</span>
                    <span className="status-badge status-yellow">12</span>
                  </div>
                  <div className="list-item">
                    <span className="list-item-label">Update Inventory</span>
                    <span className="status-badge status-blue">3</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <div className="card-title">System Status</div>
                <div className="card-description">Current system health</div>
              </div>
              <div className="card-content">
                <div className="list-items">
                  <div className="list-item">
                    <span className="list-item-label">Database</span>
                    <span className="status-badge status-green">Online</span>
                  </div>
                  <div className="list-item">
                    <span className="list-item-label">API Services</span>
                    <span className="status-badge status-green">Healthy</span>
                  </div>
                  <div className="list-item">
                    <span className="list-item-label">Backup Status</span>
                    <span className="status-badge status-green">Updated</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}