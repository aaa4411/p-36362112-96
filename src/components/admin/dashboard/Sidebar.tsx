
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  GraduationCap, 
  Users, 
  Calendar, 
  Settings, 
  BarChart3, 
  LogOut,
  Home
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface SidebarProps {
  handleLogout: () => void;
}

const Sidebar = ({ handleLogout }: SidebarProps) => {
  const location = useLocation();
  
  const menuItems = [
    { icon: BarChart3, label: "Overview", path: "/admin" },
    { icon: GraduationCap, label: "Courses", path: "/admin/courses" },
    { icon: Users, label: "Users", path: "/admin/users" },
    { icon: Calendar, label: "Events", path: "/admin/events" },
  ];

  const systemItems = [
    { icon: Settings, label: "Settings", path: "/admin/settings" },
  ];

  const isActive = (path: string) => {
    if (path === "/admin") {
      return location.pathname === "/admin";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="flex flex-col flex-grow pt-5 overflow-y-auto bg-white border-r">
      <div className="px-6 mb-6 flex items-center">
        <GraduationCap className="w-6 h-6 mr-2 text-primary" />
        <h1 className="text-xl font-bold">Admin Portal</h1>
      </div>
      
      <nav className="flex-1 px-2 pb-4 space-y-1">
        <div className="px-3 mb-2 text-xs font-medium uppercase tracking-wider text-gray-500">
          Main
        </div>
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center px-4 py-2.5 text-sm font-medium rounded-md group transition-colors ${
              isActive(item.path)
                ? "bg-primary/10 text-primary"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <item.icon className={`h-5 w-5 mr-3 ${
              isActive(item.path) ? "text-primary" : "text-gray-500 group-hover:text-gray-600"
            }`} />
            {item.label}
          </Link>
        ))}
        
        <div className="px-3 mt-6 mb-2 text-xs font-medium uppercase tracking-wider text-gray-500">
          System
        </div>
        {systemItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center px-4 py-2.5 text-sm font-medium rounded-md group transition-colors ${
              isActive(item.path)
                ? "bg-primary/10 text-primary"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <item.icon className={`h-5 w-5 mr-3 ${
              isActive(item.path) ? "text-primary" : "text-gray-500 group-hover:text-gray-600"
            }`} />
            {item.label}
          </Link>
        ))}
      </nav>
      
      <div className="px-3 mt-6 mb-6">
        <Separator className="my-4" />
        <div className="space-y-2">
          <Button variant="outline" className="w-full justify-start text-gray-700" onClick={() => window.location.href = "/"}>
            <Home className="h-5 w-5 mr-2 text-gray-500" />
            View Site
          </Button>
          <Button variant="outline" className="w-full justify-start text-gray-700" onClick={handleLogout}>
            <LogOut className="h-5 w-5 mr-2 text-gray-500" />
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
