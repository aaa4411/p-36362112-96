
import React from "react";
import { Badge } from "@/components/ui/badge";
import { UserCircle2, GraduationCap, Shield } from "lucide-react";

interface RoleBadgeProps {
  role: string;
}

const RoleBadge = ({ role }: RoleBadgeProps) => {
  const getRoleBadgeProps = () => {
    switch(role) {
      case "Admin":
        return {
          className: "bg-purple-100 text-purple-800 border border-purple-200",
          icon: <Shield className="h-3.5 w-3.5" />
        };
      case "Instructor":
        return {
          className: "bg-blue-100 text-blue-800 border border-blue-200",
          icon: <GraduationCap className="h-3.5 w-3.5" />
        };
      default: // Student
        return {
          className: "bg-gray-100 text-gray-800 border border-gray-200",
          icon: <UserCircle2 className="h-3.5 w-3.5" />
        };
    }
  };

  const { className, icon } = getRoleBadgeProps();
  
  return (
    <Badge 
      variant="outline" 
      className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full ${className}`}
    >
      {icon}
      {role}
    </Badge>
  );
};

export default RoleBadge;
