
import React, { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { toast } from "sonner";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import Sidebar from "@/components/admin/dashboard/Sidebar";
import MobileSidebar from "@/components/admin/dashboard/MobileSidebar";
import Header from "@/components/admin/dashboard/Header";
import { usePageTitle } from "@/components/admin/dashboard/utils";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getPageTitle, isActive } = usePageTitle();
  
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

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Desktop Sidebar */}
      <div className="hidden md:flex md:w-64 md:flex-col">
        <Sidebar handleLogout={handleLogout} />
      </div>
      
      {/* Mobile Menu */}
      <MobileSidebar 
        isOpen={isMobileMenuOpen}
        setIsOpen={setIsMobileMenuOpen}
        handleLogout={handleLogout}
        isActive={isActive}
      />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Header 
          setIsMobileMenuOpen={setIsMobileMenuOpen} 
          handleLogout={handleLogout}
          getPageTitle={getPageTitle}
        />
        
        <main className="flex-1 overflow-y-auto bg-gray-50 p-4 sm:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
