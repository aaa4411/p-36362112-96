
import React from "react";
import { useNavigate, Link, Outlet } from "react-router-dom";
import { 
  GraduationCap, 
  Users, 
  Calendar, 
  Settings, 
  BarChart3, 
  LogOut,
  Home,
  BellRing
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "sonner";

const AdminDashboard = () => {
  const navigate = useNavigate();

  // In a real app, this would check authentication
  const isAuthenticated = true;

  const handleLogout = () => {
    toast.success("Logged out successfully");
    navigate("/");
  };

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6">
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-4">Admin Access Required</h1>
              <p className="mb-6 text-gray-600">You need to be logged in as an administrator to access this page.</p>
              <Button onClick={() => navigate("/")} className="w-full">
                Return to Homepage
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const menuItems = [
    { icon: BarChart3, label: "Overview", path: "/admin" },
    { icon: GraduationCap, label: "Courses", path: "/admin/courses" },
    { icon: Users, label: "Users", path: "/admin/users" },
    { icon: Calendar, label: "Events", path: "/admin/events" },
  ];

  const systemItems = [
    { icon: Settings, label: "Settings", path: "/admin/settings" },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white py-6 flex flex-col">
        <div className="px-6 mb-8 flex items-center">
          <GraduationCap className="w-6 h-6 mr-2" />
          <h1 className="text-xl font-bold">Admin Portal</h1>
        </div>
        
        <nav className="flex-1">
          <div className="px-4 mb-2 text-xs uppercase tracking-wider text-gray-400">Main</div>
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
            >
              <item.icon className="h-5 w-5 mr-3" />
              {item.label}
            </Link>
          ))}
          
          <div className="px-4 mt-6 mb-2 text-xs uppercase tracking-wider text-gray-400">System</div>
          {systemItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
            >
              <item.icon className="h-5 w-5 mr-3" />
              {item.label}
            </Link>
          ))}
          
          <div className="mt-auto px-6 py-4 space-y-2">
            <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-white" onClick={() => navigate("/")}>
              <Home className="h-5 w-5 mr-2" />
              View Site
            </Button>
            <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-white" onClick={handleLogout}>
              <LogOut className="h-5 w-5 mr-2" />
              Logout
            </Button>
          </div>
        </nav>
      </div>
      
      {/* Main content */}
      <div className="flex-1 bg-gray-100">
        <div className="py-4 px-6 bg-white border-b flex items-center justify-between">
          <h2 className="text-lg font-medium">Admin Portal</h2>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative">
              <BellRing className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full" />
            </Button>
            <Separator orientation="vertical" className="h-8" />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative flex items-center space-x-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="https://github.com/shadcn.png" alt="Admin" />
                    <AvatarFallback>AD</AvatarFallback>
                  </Avatar>
                  <span>Admin User</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600" onClick={handleLogout}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
