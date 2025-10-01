"use client";

import { useState } from "react";
import "../../styles/sidebar.css";

const erpMenuData = [
  {
    title: "Dashboard",
    icon: "🏠",
    url: "/dashboard",
    isActive: true,
  },
  {
    title: "New Admission",
    icon: "🛒",
    items: [
      { title: "Application Form", url: "/sales/leads", icon: "🎯" },
      { title: "View Document", url: "/sales/opportunities", icon: "📈" },
      { title: "New Admission Status", url: "/sales/quotes", icon: "📄" },
      { title: "Orders", url: "/sales/orders", icon: "🛍️" },
      { title: "Invoices", url: "/sales/invoices", icon: "🧾" },
      { title: "Sales Reports", url: "/sales/reports", icon: "📊" },
    ],
  },
  {
    title: "New Admission Report",
    icon: "🛒",
    items: [
      { title: "Application Form", url: "/sales/leads", icon: "🎯" },
      { title: "View Document", url: "/sales/opportunities", icon: "📈" },
      { title: "New Admission Status", url: "/sales/quotes", icon: "📄" },
      { title: "Orders", url: "/sales/orders", icon: "🛍️" },
      { title: "Invoices", url: "/sales/invoices", icon: "🧾" },
      { title: "Sales Reports", url: "/sales/reports", icon: "📊" },
    ],
  },
  {
    title: "Inventory Management",
    icon: "📦",
    items: [
      { title: "Products", url: "/inventory/products", icon: "📦" },
      { title: "Stock Levels", url: "/inventory/stock", icon: "🏪" },
      {
        title: "Purchase Orders",
        url: "/inventory/purchase-orders",
        icon: "🛒",
      },
      { title: "Suppliers", url: "/inventory/suppliers", icon: "🚚" },
      { title: "Stock Reports", url: "/inventory/reports", icon: "📊" },
    ],
  },
  {
    title: "Financial Management",
    icon: "💰",
    items: [
      { title: "Accounts", url: "/finance/accounts", icon: "🧮" },
      { title: "Transactions", url: "/finance/transactions", icon: "💳" },
      { title: "Budget Planning", url: "/finance/budget", icon: "📊" },
      { title: "Tax Management", url: "/finance/tax", icon: "🧾" },
      { title: "Financial Reports", url: "/finance/reports", icon: "📊" },
      { title: "Payments", url: "/finance/payments", icon: "💵" },
    ],
  },
  {
    title: "Human Resources",
    icon: "👥",
    items: [
      { title: "Employees", url: "/hr/employees", icon: "👥" },
      { title: "Recruitment", url: "/hr/recruitment", icon: "👤" },
      { title: "Attendance", url: "/hr/attendance", icon: "⏰" },
      { title: "Payroll", url: "/hr/payroll", icon: "💰" },
      { title: "Performance", url: "/hr/performance", icon: "🏆" },
      { title: "Leave Management", url: "/hr/leave", icon: "📅" },
    ],
  },
  {
    title: "Customer Management",
    icon: "👤",
    items: [
      { title: "Customers", url: "/customers/list", icon: "👥" },
      { title: "Customer Support", url: "/customers/support", icon: "🎧" },
      { title: "Service Tickets", url: "/customers/tickets", icon: "🎫" },
      { title: "Customer Reports", url: "/customers/reports", icon: "📊" },
    ],
  },
  {
    title: "Reports & Analytics",
    icon: "📊",
    items: [
      { title: "Sales Analytics", url: "/reports/sales", icon: "📈" },
      { title: "Financial Reports", url: "/reports/financial", icon: "📊" },
      { title: "Inventory Reports", url: "/reports/inventory", icon: "📦" },
      { title: "HR Analytics", url: "/reports/hr", icon: "👥" },
      { title: "Custom Reports", url: "/reports/custom", icon: "📄" },
    ],
  },
];

const systemMenuData = [
  {
    title: "System Settings",
    icon: "⚙️",
    items: [
      { title: "General Settings", url: "/settings/general", icon: "🔧" },
      { title: "User Management", url: "/settings/users", icon: "👥" },
      { title: "Data Backup", url: "/settings/backup", icon: "💾" },
      { title: "Security", url: "/settings/security", icon: "🛡️" },
    ],
  },
];

export function AppSidebar() {
  const [expandedItems, setExpandedItems] = useState({
    "Sales Management": true,
  });

  const toggleExpanded = (title) => {
    setExpandedItems((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const renderMenuItem = (item) => {
    if (item.items) {
      const isExpanded = expandedItems[item.title];
      return (
        <li key={item.title} className="sidebar-menu-item">
          <button
            className="sidebar-menu-button collapsible-trigger"
            onClick={() => toggleExpanded(item.title)}
          >
            <div className="flex items-center gap-2">
              <span className="sidebar-menu-icon">{item.icon}</span>
              <span>{item.title}</span>
            </div>
            <span
              className={`expand-icon ${isExpanded ? "expanded" : "collapsed"}`}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="6,9 12,15 18,9"></polyline>
              </svg>
            </span>
          </button>
          <div
            className={`collapsible-content ${isExpanded ? "open" : "closed"}`}
            data-state={isExpanded ? "open" : "closed"}
          >
            <ul className="sidebar-menu-sub">
              {item.items.map((subItem) => (
                <li key={subItem.title} className="sidebar-menu-sub-item">
                  <a href={subItem.url} className="sidebar-menu-sub-button">
                    <span className="sidebar-menu-sub-icon">
                      {subItem.icon}
                    </span>
                    <span>{subItem.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </li>
      );
    }

    return (
      <li key={item.title} className="sidebar-menu-item">
        <a
          href={item.url}
          className={`sidebar-menu-button ${item.isActive ? "active" : ""}`}
        >
          <span className="sidebar-menu-icon">{item.icon}</span>
          <span>{item.title}</span>
        </a>
      </li>
    );
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <a href="#" className="sidebar-brand">
          <div className="sidebar-brand-icon">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
              <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
              <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
              <path d="M10 6h4" />
              <path d="M10 10h4" />
              <path d="M10 14h4" />
              <path d="M10 18h4" />
            </svg>
          </div>
          <div className="sidebar-brand-text">
            <span className="sidebar-brand-title">CampusHub ERP</span>
            <span className="sidebar-brand-subtitle">Management System</span>
          </div>
        </a>
      </div>

      <div className="sidebar-content">
        <div className="sidebar-group">
          <ul className="sidebar-menu">
            {erpMenuData.slice(0, 1).map(renderMenuItem)}
          </ul>
        </div>

        <div className="sidebar-group">
          <div className="sidebar-group-label">ERP Modules</div>
          <ul className="sidebar-menu">
            {erpMenuData.slice(1).map(renderMenuItem)}
          </ul>
        </div>

        <div className="sidebar-group">
          <div className="sidebar-group-label">System</div>
          <ul className="sidebar-menu">{systemMenuData.map(renderMenuItem)}</ul>
        </div>
      </div>

      <div className="sidebar-footer">
        <a href="#" className="sidebar-user">
          <div className="avatar sidebar-user-avatar">
            <img
              src="https://imgs.search.brave.com/YYbomx3TdkBImDBggPQsm5nVk16HE5_EeaD6nzHMGzo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMucHJvbXB0YmFz/ZS5jb20vREFMTEVf/SU1BR0VTL2JOakxY/R0hTUGdQZ2dkd1ZB/Z2pVdzgzbDJtaTEv/cmVzaXplZC8xNjg2/MjUzOTczMjEwXzgw/MHg4MDAud2VicD9h/bHQ9bWVkaWEmdG9r/ZW49YTI5M2ZhYzEt/ZTVkMC00NTQyLTgw/OTQtODhiNzA3OWI5/MTU1?height=12px"
              alt="Admin"
              className="avatar-image"
            />
            <div className="avatar-fallback">AD</div>
          </div>
          <div className="sidebar-user-info">
            <span className="sidebar-user-name">Admin(Govind)</span>
            <span className="sidebar-user-email">govind@company.com</span>
          </div>
          <div className="badge badge-outline sidebar-user-badge">Pro</div>
        </a>
      </div>
      <div className="sidebar-rail"></div>
    </div>
  );
}