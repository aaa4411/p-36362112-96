
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { UserProvider, useUsers } from "@/contexts/UserContext";
import UserSearch from "@/components/admin/users/UserSearch";
import UserList from "@/components/admin/users/UserList";
import UsersHeader from "@/components/admin/users/UsersHeader";

const UsersContent = () => {
  const { filteredUsers, searchQuery, setSearchQuery, handleUserAction } = useUsers();

  return (
    <div>
      <UsersHeader />
      
      <Card className="mb-6">
        <CardContent className="pt-6">
          <UserSearch 
            searchQuery={searchQuery} 
            setSearchQuery={setSearchQuery} 
          />
        </CardContent>
      </Card>
      
      <UserList 
        users={filteredUsers} 
        onUserAction={handleUserAction} 
      />
    </div>
  );
};

const AdminUsers = () => {
  return (
    <UserProvider>
      <UsersContent />
    </UserProvider>
  );
};

export default AdminUsers;
