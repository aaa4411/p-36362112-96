
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

interface CourseStatusBadgeProps {
  status: string;
  courseId: string;
  onStatusChange: (courseId: string, newStatus: "Open" | "Closing Soon" | "Closed") => void;
}

const CourseStatusBadge = ({ status, courseId, onStatusChange }: CourseStatusBadgeProps) => {
  return (
    <div className="flex items-center gap-2">
      <Badge variant="outline" className={
        status === "Open" ? "bg-green-100 text-green-800" :
        status === "Closing Soon" ? "bg-amber-100 text-amber-800" :
        "bg-red-100 text-red-800"
      }>
        {status || "Unknown"}
      </Badge>
      <Button 
        variant="ghost" 
        size="icon" 
        className="h-6 w-6" 
        onClick={() => status !== "Open" && onStatusChange(courseId, "Open")}
        disabled={status === "Open"}
      >
        <Check className="h-3 w-3" />
      </Button>
      <Button 
        variant="ghost" 
        size="icon" 
        className="h-6 w-6" 
        onClick={() => status !== "Closed" && onStatusChange(courseId, "Closed")}
        disabled={status === "Closed"}
      >
        <X className="h-3 w-3" />
      </Button>
    </div>
  );
};

export default CourseStatusBadge;
