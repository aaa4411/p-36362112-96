
import React from "react";
import { useNavigate, Link, Outlet } from "react-router-dom";
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
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const AdminDashboard = () => {
  const navigate = useNavigate();

  // In a real app, this would check authentication
  const isAuthenticated = true;

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

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white py-6 flex flex-col">
        <div className="px-6 mb-8">
          <h1 className="text-xl font-bold flex items-center">
            <GraduationCap className="mr-2" />
            Admin Dashboard
          </h1>
        </div>
        
        <nav className="flex-1">
          <div className="px-4 mb-2 text-xs uppercase tracking-wider text-gray-400">Main</div>
          <Link to="/admin" className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-800 hover:text-white">
            <BarChart3 className="h-5 w-5 mr-3" />
            Overview
          </Link>
          <Link to="/admin/courses" className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-800 hover:text-white">
            <GraduationCap className="h-5 w-5 mr-3" />
            Courses
          </Link>
          <Link to="/admin/users" className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-800 hover:text-white">
            <Users className="h-5 w-5 mr-3" />
            Users
          </Link>
          <Link to="/admin/events" className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-800 hover:text-white">
            <Calendar className="h-5 w-5 mr-3" />
            Events
          </Link>
          
          <div className="px-4 mt-6 mb-2 text-xs uppercase tracking-wider text-gray-400">System</div>
          <Link to="/admin/settings" className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-800 hover:text-white">
            <Settings className="h-5 w-5 mr-3" />
            Settings
          </Link>
          
          <div className="mt-auto px-6 py-4">
            <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-white" onClick={() => navigate("/")}>
              <Home className="h-5 w-5 mr-2" />
              View Site
            </Button>
            <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-white">
              <LogOut className="h-5 w-5 mr-2" />
              Logout
            </Button>
          </div>
        </nav>
      </div>
      
      {/* Main content */}
      <div className="flex-1 bg-gray-100">
        <div className="py-4 px-6 bg-white border-b">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium">Admin Portal</h2>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Admin User</span>
            </div>
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
