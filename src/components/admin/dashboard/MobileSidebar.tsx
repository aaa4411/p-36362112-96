
import React from "react";
import { Link } from "react-router-dom";
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
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

interface MobileSidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  handleLogout: () => void;
  isActive: (path: string) => boolean;
}

const MobileSidebar = ({ isOpen, setIsOpen, handleLogout, isActive }: MobileSidebarProps) => {
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
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
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
                onClick={() => setIsOpen(false)}
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
                onClick={() => setIsOpen(false)}
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
                setIsOpen(false);
                window.location.href = "/";
              }}>
                <Home className="h-5 w-5 mr-2 text-gray-500" />
                View Site
              </Button>
              <Button variant="outline" className="w-full justify-start text-gray-700" onClick={() => {
                setIsOpen(false);
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
  );
};

export default MobileSidebar;
