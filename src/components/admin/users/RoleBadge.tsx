
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
          className: "bg-purple-100 text-purple-800 border-purple-200 flex items-center gap-1",
          icon: <Shield className="h-3 w-3" />
        };
      case "Instructor":
        return {
          className: "bg-blue-100 text-blue-800 border-blue-200 flex items-center gap-1",
          icon: <GraduationCap className="h-3 w-3" />
        };
      default: // Student
        return {
          className: "bg-gray-100 text-gray-800 border-gray-200 flex items-center gap-1",
          icon: <UserCircle2 className="h-3 w-3" />
        };
    }
  };

  const { className, icon } = getRoleBadgeProps();
  
  return (
    <Badge variant="outline" className={className}>
      {icon}
      {role}
    </Badge>
  );
};

export default RoleBadge;
