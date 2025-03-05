
import React from "react";
import { TableCell, TableRow } from "@/components/ui/table";
import UserAvatar from "./UserAvatar";
import RoleBadge from "./RoleBadge";
import StatusBadge from "./StatusBadge";
import UserActions from "./UserActions";
import { User } from "@/types/user";

interface UserRowProps {
  user: User;
  onUserAction: (action: string, userId: number) => void;
}

const UserRow = ({ user, onUserAction }: UserRowProps) => {
  return (
    <TableRow key={user.id}>
      <TableCell>
        <UserAvatar 
          name={user.name} 
          email={user.email} 
          avatarUrl={user.avatarUrl} 
        />
      </TableCell>
      <TableCell>
        <RoleBadge role={user.role} />
      </TableCell>
      <TableCell>
        <StatusBadge status={user.status} />
      </TableCell>
      <TableCell className="text-sm text-gray-600">{user.lastActive}</TableCell>
      <TableCell>{user.enrolledCourses}</TableCell>
      <TableCell className="text-right">
        <UserActions 
          userId={user.id} 
          userName={user.name}
          status={user.status}
          onUserUpdate={onUserAction}
        />
      </TableCell>
    </TableRow>
  );
};

export default UserRow;
