
import React, { useState } from "react";
import { UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import UserSearch from "@/components/admin/users/UserSearch";
import UserList from "@/components/admin/users/UserList";
import { User } from "@/types/user";

// Mock user data
const mockUsers: User[] = [
  { 
    id: 1, 
    name: "Alex Johnson", 
    email: "alex@example.com", 
    role: "Student", 
    status: "Active",
    lastActive: "Today, 2:30 PM",
    enrolledCourses: 3,
    avatarUrl: "https://i.pravatar.cc/150?img=1"
  },
  { 
    id: 2, 
    name: "Sarah Williams", 
    email: "sarah@example.com", 
    role: "Student", 
    status: "Active",
    lastActive: "Today, 10:15 AM",
    enrolledCourses: 2,
    avatarUrl: "https://i.pravatar.cc/150?img=2"
  },
  { 
    id: 3, 
    name: "Dr. Michael Chen", 
    email: "michael@example.com", 
    role: "Instructor", 
    status: "Active",
    lastActive: "Yesterday",
    enrolledCourses: 0,
    avatarUrl: "https://i.pravatar.cc/150?img=3"
  },
  { 
    id: 4, 
    name: "Emma Rodriguez", 
    email: "emma@example.com", 
    role: "Student", 
    status: "Inactive",
    lastActive: "2 weeks ago",
    enrolledCourses: 1,
    avatarUrl: "https://i.pravatar.cc/150?img=4"
  },
  { 
    id: 5, 
    name: "Prof. James Wilson", 
    email: "james@example.com", 
    role: "Instructor", 
    status: "Active",
    lastActive: "Today, 9:45 AM",
    enrolledCourses: 0,
    avatarUrl: "https://i.pravatar.cc/150?img=5"
  },
  { 
    id: 6, 
    name: "Admin User", 
    email: "admin@example.com", 
    role: "Admin", 
    status: "Active",
    lastActive: "Just now",
    enrolledCourses: 0,
    avatarUrl: "https://i.pravatar.cc/150?img=6"
  },
];

const AdminUsers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [users, setUsers] = useState<User[]>(mockUsers);

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
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">User Management</h1>
        <Button>
          <UserPlus className="mr-2 h-4 w-4" /> Add User
        </Button>
      </div>
      
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

export default AdminUsers;
