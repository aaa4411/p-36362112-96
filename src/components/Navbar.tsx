
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
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
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
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
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
