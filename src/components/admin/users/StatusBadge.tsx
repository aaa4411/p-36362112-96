
import React from "react";
import { Badge } from "@/components/ui/badge";
import { BadgeCheck, BadgeX } from "lucide-react";

interface StatusBadgeProps {
  status: string;
}

const StatusBadge = ({ status }: StatusBadgeProps) => {
  const isActive = status === "Active";
  
  return (
    <Badge 
      variant={isActive ? "default" : "outline"} 
      className={isActive 
        ? "bg-green-100 text-green-800 border-green-200 flex items-center gap-1" 
        : "bg-gray-100 text-gray-800 border-gray-200 flex items-center gap-1"
      }
    >
      {isActive ? (
        <BadgeCheck className="h-3 w-3" />
      ) : (
        <BadgeX className="h-3 w-3" />
      )}
      {status}
    </Badge>
  );
};

export default StatusBadge;
