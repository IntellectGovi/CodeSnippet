const stats = [
  {
    title: "Total Revenue",
    value: "$2,847,392",
    change: "+12.5%",
    trend: "up",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <line x1="12" x2="12" y1="1" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    description: "vs last month",
  },
  {
    title: "Active Customers",
    value: "1,429",
    change: "+8.2%",
    trend: "up",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    description: "vs last month",
  },
  {
    title: "Products in Stock",
    value: "8,247",
    change: "-2.1%",
    trend: "down",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
        <path d="M3.3 7 12 12l8.7-5" />
        <path d="M12 22V12" />
      </svg>
    ),
    description: "vs last month",
  },
  {
    title: "Pending Orders",
    value: "156",
    change: "+15.3%",
    trend: "up",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M7 4V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2" />
        <path d="M5 4h14l-1 10H6L5 4Z" />
        <path d="M9 10h6" />
      </svg>
    ),
    description: "vs last month",
  },
];

export function DashboardStats() {
  return (
    <div className="stats-grid">
      {stats.map((stat) => (
        <div key={stat.title} className="card">
          <div className="card-header stat-card-header">
            <div className="card-title stat-card-title">{stat.title}</div>
            <div className="stat-card-icon">{stat.icon}</div>
          </div>
          <div className="card-content">
            <div className="stat-value">{stat.value}</div>
            <div className="stat-change">
              <div
                className={`badge stat-badge ${
                  stat.trend === "up" ? "badge-default" : "badge-destructive"
                }`}
              >
                <div className="stat-icon">
                  {stat.trend === "up" ? (
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="22,7 13.5,15.5 8.5,10.5 2,17" />
                      <polyline points="16,7 22,7 22,13" />
                    </svg>
                  ) : (
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="22,17 13.5,8.5 8.5,13.5 2,7" />
                      <polyline points="16,17 22,17 22,11" />
                    </svg>
                  )}
                </div>
                <span>{stat.change}</span>
              </div>
              <span>{stat.description}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
