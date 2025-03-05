
import { Book, GraduationCap, Code, Shield, Database, Server, Globe, Layers, Users } from "lucide-react";
import { Course, CategoryType } from "@/types/course";

export const courses: Course[] = [
  {
    id: "cs101",
    code: "CS 101",
    title: "Introduction to Computer Science",
    description: "A foundational course covering basic concepts in computer science, programming fundamentals, and problem-solving techniques.",
    level: "Undergraduate",
    credits: 3,
    prerequisites: [],
    department: "Computer Science",
    icon: <Code className="h-8 w-8 text-primary" />,
    instructor: "Dr. Alex Morgan",
    enrollmentStatus: "Open",
    startDate: "September 15, 2024",
    popularity: "High"
  },
  {
    id: "cs201",
    code: "CS 201",
    title: "Data Structures and Algorithms",
    description: "Study of fundamental data structures and algorithms, including arrays, linked lists, stacks, queues, trees, graphs, sorting, and searching.",
    level: "Undergraduate",
    credits: 4,
    prerequisites: ["CS 101"],
    department: "Computer Science",
    icon: <Layers className="h-8 w-8 text-primary" />,
    instructor: "Prof. James Wilson",
    enrollmentStatus: "Open",
    startDate: "September 12, 2024",
    popularity: "High"
  },
  {
    id: "cs301",
    code: "CS 301",
    title: "Database Systems",
    description: "Introduction to database design, development, and management. Covers relational database principles, SQL, and data modeling.",
    level: "Undergraduate",
    credits: 3,
    prerequisites: ["CS 201"],
    department: "Computer Science",
    icon: <Database className="h-8 w-8 text-primary" />,
    instructor: "Dr. Maya Patel",
    enrollmentStatus: "Closing Soon",
    startDate: "September 10, 2024",
    popularity: "Medium"
  },
  {
    id: "cs401",
    code: "CS 401",
    title: "Artificial Intelligence",
    description: "Fundamentals of artificial intelligence including search algorithms, knowledge representation, machine learning, and neural networks.",
    level: "Undergraduate",
    credits: 4,
    prerequisites: ["CS 201", "MATH 250"],
    department: "Computer Science",
    icon: <GraduationCap className="h-8 w-8 text-primary" />,
    instructor: "Prof. Sarah Johnson",
    enrollmentStatus: "Closing Soon",
    startDate: "September 18, 2024",
    popularity: "High"
  },
  {
    id: "is101",
    code: "IS 101",
    title: "Information Systems Fundamentals",
    description: "Overview of information systems in organizations, including hardware, software, databases, networks, and system development.",
    level: "Undergraduate",
    credits: 3,
    prerequisites: [],
    department: "Information Systems",
    icon: <Server className="h-8 w-8 text-primary" />,
    instructor: "Dr. Kevin Zhang",
    enrollmentStatus: "Open",
    startDate: "September 20, 2024",
    popularity: "Medium"
  },
  {
    id: "is201",
    code: "IS 201",
    title: "Web Development",
    description: "Introduction to web technologies, focusing on HTML, CSS, JavaScript, and responsive design principles.",
    level: "Undergraduate",
    credits: 3,
    prerequisites: ["IS 101"],
    department: "Information Systems",
    icon: <Globe className="h-8 w-8 text-primary" />,
    instructor: "Prof. Emily Chen",
    enrollmentStatus: "Open",
    startDate: "September 25, 2024",
    popularity: "High"
  },
  {
    id: "is301",
    code: "IS 301",
    title: "Information Security",
    description: "Introduction to computer and network security principles, cryptography, authentication, and secure system design.",
    level: "Undergraduate",
    credits: 3,
    prerequisites: ["IS 201"],
    department: "Information Systems",
    icon: <Shield className="h-8 w-8 text-primary" />,
    instructor: "Dr. Robert Stevens",
    enrollmentStatus: "Closed",
    startDate: "October 5, 2024",
    popularity: "Medium"
  },
  {
    id: "is401",
    code: "IS 401",
    title: "IT Project Management",
    description: "Principles, techniques, and tools for project planning, scheduling, resource allocation, and risk management in IT projects.",
    level: "Undergraduate",
    credits: 3,
    prerequisites: ["IS 301"],
    department: "Information Systems",
    icon: <Users className="h-8 w-8 text-primary" />,
    instructor: "Prof. Lisa Moore",
    enrollmentStatus: "Closing Soon",
    startDate: "October 10, 2024",
    popularity: "Low"
  },
];

export const categories: CategoryType[] = [
  { name: "Computer Science", count: courses.filter(c => c.department === "Computer Science").length },
  { name: "Information Systems", count: courses.filter(c => c.department === "Information Systems").length },
  { name: "Artificial Intelligence", count: courses.filter(c => c.title.includes("Artificial Intelligence")).length },
  { name: "Database", count: courses.filter(c => c.title.includes("Database")).length },
  { name: "Web Development", count: courses.filter(c => c.title.includes("Web")).length },
];

export const featuredCourse = courses[3]; // CS 401 - Artificial Intelligence
