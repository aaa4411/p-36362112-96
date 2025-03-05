
import React from "react";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";

interface UserActionsProps {
  userId: number;
  userName: string;
  status: string;
  onUserUpdate: (action: string, userId: number) => void;
}

const UserActions = ({ userId, userName, status, onUserUpdate }: UserActionsProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem onClick={() => onUserUpdate('view', userId)}>
          View Details
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onUserUpdate('edit', userId)}>
          Edit User
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        {status === "Active" ? (
          <DropdownMenuItem onClick={() => onUserUpdate('deactivate', userId)}>
            Deactivate
          </DropdownMenuItem>
        ) : (
          <DropdownMenuItem onClick={() => onUserUpdate('activate', userId)}>
            Activate
          </DropdownMenuItem>
        )}
        <DropdownMenuItem 
          onClick={() => onUserUpdate('delete', userId)}
          className="text-red-600"
        >
          Delete User
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserActions;
