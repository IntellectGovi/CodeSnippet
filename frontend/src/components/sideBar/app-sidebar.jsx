import {
  Building2,
  Users,
  Package,
  DollarSign,
  ShoppingCart,
  FileText,
  BarChart3,
  Settings,
  UserCheck,
  Truck,
  CreditCard,
  PieChart,
  Plus,
  Minus,
  Home,
  Calendar,
  Clock,
  Target,
  TrendingUp,
  Warehouse,
  ShoppingBag,
  Receipt,
  Calculator,
  Banknote,
  Users2,
  UserPlus,
  Award,
  Wrench,
  Database,
  Shield,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

// ERP Menu Data
const erpMenuData = [
  {
    title: "Dashboard",
    icon: Home,
    url: "/dashboard",
    isActive: true,
  },
  {
    title: "Sales Management",
    icon: ShoppingCart,
    items: [
      { title: "Leads", url: "/sales/leads", icon: Target },
      { title: "Opportunities", url: "/sales/opportunities", icon: TrendingUp },
      { title: "Quotes", url: "/sales/quotes", icon: FileText },
      { title: "Orders", url: "/sales/orders", icon: ShoppingBag },
      { title: "Invoices", url: "/sales/invoices", icon: Receipt },
      { title: "Sales Reports", url: "/sales/reports", icon: BarChart3 },
    ],
  },
  {
    title: "Inventory Management",
    icon: Package,
    items: [
      { title: "Products", url: "/inventory/products", icon: Package },
      { title: "Stock Levels", url: "/inventory/stock", icon: Warehouse },
      { title: "Purchase Orders", url: "/inventory/purchase-orders", icon: ShoppingCart },
      { title: "Suppliers", url: "/inventory/suppliers", icon: Truck },
      { title: "Stock Reports", url: "/inventory/reports", icon: BarChart3 },
    ],
  },
  {
    title: "Financial Management",
    icon: DollarSign,
    items: [
      { title: "Accounts", url: "/finance/accounts", icon: Calculator },
      { title: "Transactions", url: "/finance/transactions", icon: CreditCard },
      { title: "Budget Planning", url: "/finance/budget", icon: PieChart },
      { title: "Tax Management", url: "/finance/tax", icon: Receipt },
      { title: "Financial Reports", url: "/finance/reports", icon: BarChart3 },
      { title: "Payments", url: "/finance/payments", icon: Banknote },
    ],
  },
  {
    title: "Human Resources",
    icon: Users,
    items: [
      { title: "Employees", url: "/hr/employees", icon: Users2 },
      { title: "Recruitment", url: "/hr/recruitment", icon: UserPlus },
      { title: "Attendance", url: "/hr/attendance", icon: Clock },
      { title: "Payroll", url: "/hr/payroll", icon: DollarSign },
      { title: "Performance", url: "/hr/performance", icon: Award },
      { title: "Leave Management", url: "/hr/leave", icon: Calendar },
    ],
  },
  {
    title: "Customer Management",
    icon: UserCheck,
    items: [
      { title: "Customers", url: "/customers/list", icon: Users },
      { title: "Customer Support", url: "/customers/support", icon: UserCheck },
      { title: "Service Tickets", url: "/customers/tickets", icon: FileText },
      { title: "Customer Reports", url: "/customers/reports", icon: BarChart3 },
    ],
  },
  {
    title: "Reports & Analytics",
    icon: BarChart3,
    items: [
      { title: "Sales Analytics", url: "/reports/sales", icon: TrendingUp },
      { title: "Financial Reports", url: "/reports/financial", icon: PieChart },
      { title: "Inventory Reports", url: "/reports/inventory", icon: Package },
      { title: "HR Analytics", url: "/reports/hr", icon: Users },
      { title: "Custom Reports", url: "/reports/custom", icon: FileText },
    ],
  },
]

const systemMenuData = [
  {
    title: "System Settings",
    icon: Settings,
    items: [
      { title: "General Settings", url: "/settings/general", icon: Wrench },
      { title: "User Management", url: "/settings/users", icon: Users },
      { title: "Data Backup", url: "/settings/backup", icon: Database },
      { title: "Security", url: "/settings/security", icon: Shield },
    ],
  },
]

export function AppSidebar({ ...props }) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#" className="flex items-center">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Building2 className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">CampusHub ERP</span>
                  <span className="truncate text-xs">Management System</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        {/* Main Dashboard */}
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={true}>
                <a href="/dashboard">
                  <Home />
                  <span>Dashboard</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        {/* ERP Modules */}
        <SidebarGroup>
          <SidebarGroupLabel>ERP Modules</SidebarGroupLabel>
          <SidebarMenu>
            {erpMenuData.slice(1).map((item, index) => (
              <Collapsible key={item.title} defaultOpen={index === 0} className="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip={item.title}>
                      <item.icon />
                      <span>{item.title}</span>
                      <Plus className="ml-auto transition-transform group-data-[state=open]/collapsible:hidden" />
                      <Minus className="ml-auto transition-transform group-data-[state=closed]/collapsible:hidden" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  {item.items?.length ? (
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items.map((subItem) => (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton asChild>
                              <a href={subItem.url}>
                                <subItem.icon className="size-4" />
                                <span>{subItem.title}</span>
                              </a>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  ) : null}
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroup>

        {/* System Administration */}
        <SidebarGroup>
          <SidebarGroupLabel>System</SidebarGroupLabel>
          <SidebarMenu>
            {systemMenuData.map((item) => (
              <Collapsible key={item.title} className="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip={item.title}>
                      <item.icon />
                      <span>{item.title}</span>
                      <Plus className="ml-auto transition-transform group-data-[state=open]/collapsible:hidden" />
                      <Minus className="ml-auto transition-transform group-data-[state=closed]/collapsible:hidden" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  {item.items?.length ? (
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items.map((subItem) => (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton asChild>
                              <a href={subItem.url}>
                                <subItem.icon className="size-4" />
                                <span>{subItem.title}</span>
                              </a>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  ) : null}
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#" className="flex items-center">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Admin" />
                  <AvatarFallback className="rounded-lg">AD</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Admin User</span>
                  <span className="truncate text-xs">admin@company.com</span>
                </div>
                <Badge variant="outline" className="ml-auto">
                  Pro
                </Badge>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}