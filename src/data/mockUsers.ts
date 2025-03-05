
import { User } from "@/types/user";

// Mock user data
export const mockUsers: User[] = [
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
