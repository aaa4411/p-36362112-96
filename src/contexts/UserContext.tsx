
import React, { createContext, useContext, useState, ReactNode } from "react";
import { User } from "@/types/user";
import { mockUsers } from "@/data/mockUsers";
import { toast } from "sonner";

interface UserContextType {
  users: User[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filteredUsers: User[];
  handleUserAction: (action: string, userId: number) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useState<User[]>(mockUsers);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleUserAction = (action: string, userId: number) => {
    const userName = users.find(u => u.id === userId)?.name;
    
    switch (action) {
      case 'view':
        toast(`Viewing details for ${userName}`);
        break;
      case 'edit':
        toast(`Editing user: ${userName}`);
        break;
      case 'deactivate':
        setUsers(users.map(user => 
          user.id === userId ? {...user, status: 'Inactive'} : user
        ));
        toast.success(`User ${userName} has been deactivated`);
        break;
      case 'activate':
        setUsers(users.map(user => 
          user.id === userId ? {...user, status: 'Active'} : user
        ));
        toast.success(`User ${userName} has been activated`);
        break;
      case 'delete':
        setUsers(users.filter(user => user.id !== userId));
        toast.success(`User ${userName} has been deleted`);
        break;
      default:
        break;
    }
  };

  return (
    <UserContext.Provider value={{ 
      users, 
      searchQuery, 
      setSearchQuery, 
      filteredUsers,
      handleUserAction
    }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUsers = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUsers must be used within a UserProvider");
  }
  return context;
};
