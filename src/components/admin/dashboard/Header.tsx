
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  BellRing,
  ChevronDown,
  Menu,
  LogOut,
  Settings
} from "lucide-react";
import { Button } from "@/components/ui/button";
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
import { SheetTrigger } from "@/components/ui/sheet";

interface HeaderProps {
  setIsMobileMenuOpen: (isOpen: boolean) => void;
  handleLogout: () => void;
  getPageTitle: () => string;
}

const Header = ({ setIsMobileMenuOpen, handleLogout, getPageTitle }: HeaderProps) => {
  const location = useLocation();
  
  return (
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
  );
};

export default Header;
