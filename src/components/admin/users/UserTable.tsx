
import React from "react";
import { Table, TableBody } from "@/components/ui/table";
import UserTableHeader from "./UserTableHeader";
import UserRow from "./UserRow";
import { User } from "@/types/user";

interface UserTableProps {
  users: User[];
  onUserAction: (action: string, userId: number) => void;
}

const UserTable = ({ users, onUserAction }: UserTableProps) => {
  return (
    <Table>
      <UserTableHeader />
      <TableBody>
        {users.map((user) => (
          <UserRow 
            key={user.id} 
            user={user} 
            onUserAction={onUserAction} 
          />
        ))}
      </TableBody>
    </Table>
  );
};

export default UserTable;
