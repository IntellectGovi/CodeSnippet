const activities = [
  {
    id: 1,
    user: "John Smith",
    action: "Created new sales order",
    target: "SO-2024-001",
    time: "2 minutes ago",
    type: "sales",
    avatar: "JS",
  },
  {
    id: 2,
    user: "Sarah Johnson",
    action: "Updated inventory for",
    target: "Product ABC-123",
    time: "15 minutes ago",
    type: "inventory",
    avatar: "SJ",
  },
  {
    id: 3,
    user: "Mike Davis",
    action: "Processed payment for",
    target: "Invoice INV-2024-045",
    time: "1 hour ago",
    type: "finance",
    avatar: "MD",
  },
  {
    id: 4,
    user: "Emily Chen",
    action: "Added new employee",
    target: "Robert Wilson",
    time: "2 hours ago",
    type: "hr",
    avatar: "EC",
  },
  {
    id: 5,
    user: "David Brown",
    action: "Generated monthly report",
    target: "Sales Analytics",
    time: "3 hours ago",
    type: "reports",
    avatar: "DB",
  },
];

const getTypeColor = (type) => {
  switch (type) {
    case "sales":
      return "status-green";
    case "inventory":
      return "status-blue";
    case "finance":
      return "status-yellow";
    case "hr":
      return "status-purple";
    case "reports":
      return "status-gray";
    default:
      return "status-gray";
  }
};

export function RecentActivities() {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title">Recent Activities</div>
        <div className="card-description">
          Latest actions across your ERP system
        </div>
      </div>
      <div className="card-content">
        <div className="activity-list">
          {activities.map((activity) => (
            <div key={activity.id} className="activity-item">
              <div className="avatar">
                <img
                  src={`/placeholder.svg?height=32&width=32`}
                  alt={activity.user}
                  className="avatar-image"
                />
                <div className="avatar-fallback">{activity.avatar}</div>
              </div>
              <div className="activity-content">
                <div className="activity-user">
                  <p className="activity-user-name">{activity.user}</p>
                  <div
                    className={`badge activity-type-badge ${getTypeColor(
                      activity.type
                    )}`}
                  >
                    {activity.type}
                  </div>
                </div>
                <p className="activity-action">
                  {activity.action}{" "}
                  <span className="activity-target">{activity.target}</span>
                </p>
              </div>
              <div className="activity-time">{activity.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
