
import React, { useState } from "react";
import { Search, MoreHorizontal, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

// Mock user data
const mockUsers = [
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
  const [users, setUsers] = useState(mockUsers);

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
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search users..."
                className="pl-10 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">Export Users</Button>
              <Button variant="outline" size="sm">Filter</Button>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>All Users</CardTitle>
          <CardDescription>
            Manage system users, their roles and permissions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
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
            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={user.avatarUrl} />
                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{user.name}</p>
                        <p className="text-sm text-gray-500">{user.email}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className={
                      user.role === "Admin" ? "bg-purple-100 text-purple-800" :
                      user.role === "Instructor" ? "bg-blue-100 text-blue-800" :
                      "bg-gray-100 text-gray-800"
                    }>
                      {user.role}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={user.status === "Active" ? "default" : "secondary"}>
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm text-gray-600">{user.lastActive}</TableCell>
                  <TableCell>{user.enrolledCourses}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem onClick={() => handleUserAction('view', user.id)}>
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleUserAction('edit', user.id)}>
                          Edit User
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        {user.status === "Active" ? (
                          <DropdownMenuItem onClick={() => handleUserAction('deactivate', user.id)}>
                            Deactivate
                          </DropdownMenuItem>
                        ) : (
                          <DropdownMenuItem onClick={() => handleUserAction('activate', user.id)}>
                            Activate
                          </DropdownMenuItem>
                        )}
                        <DropdownMenuItem 
                          onClick={() => handleUserAction('delete', user.id)}
                          className="text-red-600"
                        >
                          Delete User
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminUsers;
