import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import AuthDialog from "@/components/Auth/AuthDialog";
import UserMenu from "@/components/Auth/UserMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [authDialogOpen, setAuthDialogOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");
  const location = useLocation();
  const { isAuthenticated } = useAuth();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const openLoginDialog = () => {
    setAuthMode("login");
    setAuthDialogOpen(true);
  };

  const openSignupDialog = () => {
    setAuthMode("signup");
    setAuthDialogOpen(true);
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-primary">College of Computing</span>
            </Link>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-8">
            <Link 
              to="/" 
              className={`px-3 py-2 text-sm font-medium ${isActive('/') 
                ? 'text-primary' 
                : 'text-gray-700 hover:text-primary'}`}
            >
              Home
            </Link>
            <Link 
              to="/courses" 
              className={`px-3 py-2 text-sm font-medium ${isActive('/courses') 
                ? 'text-primary' 
                : 'text-gray-700 hover:text-primary'}`}
            >
              Courses
            </Link>
            <Link 
              to="/faculty" 
              className={`px-3 py-2 text-sm font-medium ${isActive('/faculty') 
                ? 'text-primary' 
                : 'text-gray-700 hover:text-primary'}`}
            >
              Faculty
            </Link>
            <Link 
              to="/projects" 
              className={`px-3 py-2 text-sm font-medium ${isActive('/projects') 
                ? 'text-primary' 
                : 'text-gray-700 hover:text-primary'}`}
            >
              Projects
            </Link>
            <Link 
              to="/events" 
              className={`px-3 py-2 text-sm font-medium ${isActive('/events') 
                ? 'text-primary' 
                : 'text-gray-700 hover:text-primary'}`}
            >
              Events
            </Link>
            <Link 
              to="/opportunities" 
              className={`px-3 py-2 text-sm font-medium ${isActive('/opportunities') 
                ? 'text-primary' 
                : 'text-gray-700 hover:text-primary'}`}
            >
              Opportunities
            </Link>
            <Link 
              to="/category/research" 
              className={`px-3 py-2 text-sm font-medium ${isActive('/category/research') 
                ? 'text-primary' 
                : 'text-gray-700 hover:text-primary'}`}
            >
              Research
            </Link>
            <Link 
              to="/about" 
              className={`px-3 py-2 text-sm font-medium ${isActive('/about') 
                ? 'text-primary' 
                : 'text-gray-700 hover:text-primary'}`}
            >
              About
            </Link>

            <div className="ml-4 flex items-center space-x-2">
              {isAuthenticated ? (
                <UserMenu />
              ) : (
                <>
                  <Button variant="ghost" onClick={openLoginDialog}>
                    Sign In
                  </Button>
                  <Button onClick={openSignupDialog}>
                    Sign Up
                  </Button>
                </>
              )}
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            {isAuthenticated ? (
              <UserMenu />
            ) : (
              <Button
                variant="ghost"
                onClick={openLoginDialog}
                className="mr-2"
              >
                Sign In
              </Button>
            )}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/')
                ? 'bg-primary/10 text-primary'
                : 'text-gray-700 hover:bg-primary/5 hover:text-primary'}`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/courses"
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/courses')
                ? 'bg-primary/10 text-primary'
                : 'text-gray-700 hover:bg-primary/5 hover:text-primary'}`}
              onClick={() => setIsOpen(false)}
            >
              Courses
            </Link>
            <Link
              to="/faculty"
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/faculty')
                ? 'bg-primary/10 text-primary'
                : 'text-gray-700 hover:bg-primary/5 hover:text-primary'}`}
              onClick={() => setIsOpen(false)}
            >
              Faculty
            </Link>
            <Link
              to="/projects"
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/projects')
                ? 'bg-primary/10 text-primary'
                : 'text-gray-700 hover:bg-primary/5 hover:text-primary'}`}
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="/events"
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/events')
                ? 'bg-primary/10 text-primary'
                : 'text-gray-700 hover:bg-primary/5 hover:text-primary'}`}
              onClick={() => setIsOpen(false)}
            >
              Events
            </Link>
            <Link
              to="/opportunities"
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/opportunities')
                ? 'bg-primary/10 text-primary'
                : 'text-gray-700 hover:bg-primary/5 hover:text-primary'}`}
              onClick={() => setIsOpen(false)}
            >
              Opportunities
            </Link>
            <Link
              to="/category/research"
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/category/research')
                ? 'bg-primary/10 text-primary'
                : 'text-gray-700 hover:bg-primary/5 hover:text-primary'}`}
              onClick={() => setIsOpen(false)}
            >
              Research
            </Link>
            <Link
              to="/about"
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/about')
                ? 'bg-primary/10 text-primary'
                : 'text-gray-700 hover:bg-primary/5 hover:text-primary'}`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            {!isAuthenticated && (
              <Button
                onClick={openSignupDialog}
                className="w-full mt-2"
              >
                Sign Up
              </Button>
            )}
          </div>
        </div>
      )}

      <AuthDialog
        isOpen={authDialogOpen}
        onClose={() => setAuthDialogOpen(false)}
        initialMode={authMode}
      />
    </nav>
  );
};

export default Navbar;
