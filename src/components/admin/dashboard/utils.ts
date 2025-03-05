
import { useLocation } from "react-router-dom";

export const usePageTitle = () => {
  const location = useLocation();
  
  const menuItems = [
    { label: "Overview", path: "/admin" },
    { label: "Courses", path: "/admin/courses" },
    { label: "Users", path: "/admin/users" },
    { label: "Events", path: "/admin/events" },
    { label: "Settings", path: "/admin/settings" },
  ];

  const isActive = (path: string) => {
    if (path === "/admin") {
      return location.pathname === "/admin";
    }
    return location.pathname.startsWith(path);
  };

  const getPageTitle = () => {
    const item = menuItems.find(item => 
      isActive(item.path)
    );
    return item?.label || "Admin Dashboard";
  };

  return {
    getPageTitle,
    isActive
  };
};
