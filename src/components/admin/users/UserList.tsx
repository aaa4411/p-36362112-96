
import React from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import UserTable from "./UserTable";
import { User } from "@/types/user";

interface UserListProps {
  users: User[];
  onUserAction: (action: string, userId: number) => void;
}

const UserList = ({ users, onUserAction }: UserListProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>All Users</CardTitle>
        <CardDescription>
          Manage system users, their roles and permissions
        </CardDescription>
      </CardHeader>
      <CardContent>
        <UserTable users={users} onUserAction={onUserAction} />
      </CardContent>
    </Card>
  );
};

export default UserList;
