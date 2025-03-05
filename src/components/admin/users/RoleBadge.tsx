
import React from "react";
import { Badge } from "@/components/ui/badge";

interface RoleBadgeProps {
  role: string;
}

const RoleBadge = ({ role }: RoleBadgeProps) => {
  return (
    <Badge 
      variant="outline" 
      className={
        role === "Admin" ? "bg-purple-100 text-purple-800" :
        role === "Instructor" ? "bg-blue-100 text-blue-800" :
        "bg-gray-100 text-gray-800"
      }
    >
      {role}
    </Badge>
  );
};

export default RoleBadge;
