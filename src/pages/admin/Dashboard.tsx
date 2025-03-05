
import React, { useState } from "react";
import { useNavigate, Link, Outlet, useLocation } from "react-router-dom";
import { 
  GraduationCap, 
  Users, 
  Calendar, 
  Settings, 
  BarChart3, 
  LogOut,
  Home,
  BellRing,
  ChevronDown,
  Menu,
  X
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
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { toast } from "sonner";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
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

  const isActive = (path: string) => {
    if (path === "/admin") {
      return location.pathname === "/admin";
    }
    return location.pathname.startsWith(path);
  };

  const getPageTitle = () => {
    const item = [...menuItems, ...systemItems].find(item => 
      isActive(item.path)
    );
    return item?.label || "Admin Dashboard";
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Desktop Sidebar */}
      <div className="hidden md:flex md:w-64 md:flex-col">
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
              <Button variant="outline" className="w-full justify-start text-gray-700" onClick={() => navigate("/")}>
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
      </div>
      
      {/* Mobile Menu */}
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetContent side="left" className="p-0 w-64">
          <div className="flex flex-col h-full">
            <div className="px-6 py-5 flex items-center border-b">
              <GraduationCap className="w-6 h-6 mr-2 text-primary" />
              <h1 className="text-xl font-bold">Admin Portal</h1>
            </div>
            
            <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
              <div className="px-3 mb-2 text-xs font-medium uppercase tracking-wider text-gray-500">
                Main
              </div>
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center px-4 py-2.5 text-sm font-medium rounded-md ${
                    isActive(item.path)
                      ? "bg-primary/10 text-primary"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <item.icon className={`h-5 w-5 mr-3 ${
                    isActive(item.path) ? "text-primary" : "text-gray-500"
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
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center px-4 py-2.5 text-sm font-medium rounded-md ${
                    isActive(item.path)
                      ? "bg-primary/10 text-primary"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <item.icon className={`h-5 w-5 mr-3 ${
                    isActive(item.path) ? "text-primary" : "text-gray-500"
                  }`} />
                  {item.label}
                </Link>
              ))}
            </nav>
            
            <div className="px-3 py-4 border-t">
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start text-gray-700" onClick={() => {
                  setIsMobileMenuOpen(false);
                  navigate("/");
                }}>
                  <Home className="h-5 w-5 mr-2 text-gray-500" />
                  View Site
                </Button>
                <Button variant="outline" className="w-full justify-start text-gray-700" onClick={() => {
                  setIsMobileMenuOpen(false);
                  handleLogout();
                }}>
                  <LogOut className="h-5 w-5 mr-2 text-gray-500" />
                  Logout
                </Button>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <header className="bg-white border-b shadow-sm z-10">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <div className="flex items-center -ml-2 md:hidden">
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="mr-2" onClick={() => setIsMobileMenuOpen(true)}>
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <h1 className="text-xl font-semibold">{getPageTitle()}</h1>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <ol className="flex text-sm text-gray-500">
                <li className="flex items-center">
                  <Link to="/admin" className="hover:text-primary">Admin</Link>
                </li>
                {location.pathname !== "/admin" && (
                  <>
                    <li className="flex items-center mx-2">/</li>
                    <li className="font-medium text-gray-900">{getPageTitle()}</li>
                  </>
                )}
              </ol>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="relative">
                <BellRing className="h-5 w-5" />
                <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full" />
              </Button>
              <Separator orientation="vertical" className="h-8" />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative flex items-center space-x-2 p-1 pr-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="https://github.com/shadcn.png" alt="Admin" />
                      <AvatarFallback>AD</AvatarFallback>
                    </Avatar>
                    <div className="flex items-center">
                      <span className="text-sm font-medium md:block hidden">Admin User</span>
                      <ChevronDown className="h-4 w-4 ml-1" />
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Avatar className="h-6 w-6 mr-2">
                      <AvatarImage src="https://github.com/shadcn.png" alt="Admin" />
                      <AvatarFallback>AD</AvatarFallback>
                    </Avatar>
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="h-4 w-4 mr-2" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-600" onClick={handleLogout}>
                    <LogOut className="h-4 w-4 mr-2" />
                    <span>Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>
        
        <main className="flex-1 overflow-y-auto bg-gray-50 p-4 sm:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
