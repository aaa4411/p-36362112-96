
import React from "react";
import { 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";

const UserTableHeader = () => {
  return (
    <TableHeader>
      <TableRow>
        <TableHead>User</TableHead>
        <TableHead>Role</TableHead>
        <TableHead>Status</TableHead>
        <TableHead>Last Active</TableHead>
        <TableHead>Enrolled Courses</TableHead>
        <TableHead className="text-right">Actions</TableHead>
      </TableRow>
    </TableHeader>
  );
};

export default UserTableHeader;
