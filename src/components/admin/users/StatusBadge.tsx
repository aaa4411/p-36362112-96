
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
      className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full ${
        isActive 
          ? "bg-green-100 text-green-800 border border-green-200" 
          : "bg-gray-100 text-gray-800 border border-gray-200"
      }`}
    >
      {isActive ? (
        <BadgeCheck className="h-3.5 w-3.5" />
      ) : (
        <BadgeX className="h-3.5 w-3.5" />
      )}
      {status}
    </Badge>
  );
};

export default StatusBadge;
