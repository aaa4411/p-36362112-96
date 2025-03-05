
import React from "react";
import { Link } from "react-router-dom";
import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const AdminButton = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link to="/admin">
            <Button variant="outline" size="icon" className="ml-2">
              <Settings className="h-[1.2rem] w-[1.2rem]" />
              <span className="sr-only">Admin Dashboard</span>
            </Button>
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>Admin Dashboard</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default AdminButton;
