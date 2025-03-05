
import React from "react";
import { UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";

const UsersHeader = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold">User Management</h1>
      <Button>
        <UserPlus className="mr-2 h-4 w-4" /> Add User
      </Button>
    </div>
  );
};

export default UsersHeader;
