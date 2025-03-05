
import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { 
  Book, 
  GraduationCap, 
  Code, 
  Shield, 
  Database, 
  Server, 
  Globe, 
  ArrowRight,
  Clock,
  Users,
  Layers,
  Search,
  BarChart,
  PlusCircle,
  Check,
  X,
  ScaleIcon,
  UserCircle2,
  CalendarDays,
  BookOpen,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import CourseFilters from "@/components/CourseFilters";
import { toast } from "sonner";
import CourseComparison from "@/components/CourseComparison";
import CourseDistributionChart from "@/components/CourseDistributionChart";
import { generateChartColors } from "@/lib/utils";
import { FeaturedCourse } from "@/components/FeaturedCourse";
import { CourseCard } from "@/components/CourseCard";
import { cn } from "@/lib/utils";

type Course = {
  id: string;
  code: string;
  title: string;
  description: string;
  level: string;
  credits: number;
  prerequisites: string[];
  department: string;
  icon: React.ReactNode;
  instructor?: string;
  enrollmentStatus?: "Open" | "Closing Soon" | "Closed";
  startDate?: string;
  popularity?: "High" | "Medium" | "Low";
};

const courses: Course[] = [
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

const categories = [
  { name: "Computer Science", count: courses.filter(c => c.department === "Computer Science").length },
  { name: "Information Systems", count: courses.filter(c => c.department === "Information Systems").length },
  { name: "Artificial Intelligence", count: courses.filter(c => c.title.includes("Artificial Intelligence")).length },
  { name: "Database", count: courses.filter(c => c.title.includes("Database")).length },
  { name: "Web Development", count: courses.filter(c => c.title.includes("Web")).length },
];

const featuredCourse = courses[3]; // CS 401 - Artificial Intelligence

const getEnrollmentStatusColor = (status: Course["enrollmentStatus"]) => {
  switch (status) {
    case "Open": return "bg-green-100 text-green-800";
    case "Closing Soon": return "bg-amber-100 text-amber-800";
    case "Closed": return "bg-red-100 text-red-800";
    default: return "bg-gray-100 text-gray-800";
  }
};

const getPopularityColor = (popularity: Course["popularity"]) => {
  switch (popularity) {
    case "High": return "text-green-600";
    case "Medium": return "text-amber-600";
    case "Low": return "text-blue-600";
    default: return "text-gray-600";
  }
};

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedCredits, setSelectedCredits] = useState("");
  const [coursesToCompare, setCoursesToCompare] = useState<Course[]>([]);
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);

  const levelOptions = useMemo(() => {
    const levels = Array.from(new Set(courses.map(c => c.level)));
    return levels.map(level => ({ value: level, label: level }));
  }, []);

  const departmentOptions = useMemo(() => {
    const departments = Array.from(new Set(courses.map(c => c.department)));
    return departments.map(dept => ({ value: dept, label: dept }));
  }, []);

  const creditOptions = useMemo(() => {
    const credits = Array.from(new Set(courses.map(c => c.credits)));
    return credits.map(credit => ({ value: credit.toString(), label: `${credit} Credits` }));
  }, []);

  const filteredCourses = useMemo(() => {
    return courses.filter(course => {
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesSearch = 
          course.title.toLowerCase().includes(query) ||
          course.code.toLowerCase().includes(query) ||
          course.description.toLowerCase().includes(query);
        
        if (!matchesSearch) return false;
      }
      
      if (selectedLevel && course.level !== selectedLevel) {
        return false;
      }
      
      if (selectedDepartment && course.department !== selectedDepartment) {
        return false;
      }
      
      if (selectedCredits && course.credits.toString() !== selectedCredits) {
        return false;
      }
      
      return true;
    });
  }, [courses, searchQuery, selectedLevel, selectedDepartment, selectedCredits]);

  const clearFilters = () => {
    setSelectedLevel("");
    setSelectedDepartment("");
    setSelectedCredits("");
    setSearchQuery("");
    toast("All filters have been cleared");
  };

  const handleViewCourseDetails = (courseId: string) => {
    toast(`Viewing details for course ${courseId}`, {
      description: "Feature coming soon",
    });
  };

  const toggleCourseComparison = (course: Course) => {
    if (coursesToCompare.some(c => c.id === course.id)) {
      setCoursesToCompare(coursesToCompare.filter(c => c.id !== course.id));
      toast(`Removed ${course.title} from comparison`);
    } else {
      if (coursesToCompare.length >= 3) {
        toast("You can compare up to 3 courses at a time", {
          description: "Please remove a course before adding another."
        });
        return;
      }
      setCoursesToCompare([...coursesToCompare, course]);
      toast(`Added ${course.title} to comparison`);
    }
  };

  const openComparison = () => {
    if (coursesToCompare.length < 2) {
      toast("Please select at least 2 courses to compare", {
        description: "You can select up to 3 courses."
      });
      return;
    }
    setIsComparisonOpen(true);
  };

  const closeComparison = () => {
    setIsComparisonOpen(false);
  };

  const clearComparison = () => {
    setCoursesToCompare([]);
    toast("Comparison cleared");
  };

  const chartData = useMemo(() => {
    const departments = Array.from(new Set(courses.map(c => c.department)));
    
    const data = departments.map(dept => {
      const count = courses.filter(c => c.department === dept).length;
      return {
        name: dept,
        value: count
      };
    });
    
    const colors = generateChartColors(departments.length);
    
    return data.map((item, index) => ({
      ...item,
      color: colors[index]
    }));
  }, [courses]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="bg-gradient-to-r from-primary to-primary/80 text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 font-playfair">Course Catalog</h1>
            <p className="text-lg md:text-xl opacity-90">
              Explore our comprehensive range of computing and information technology courses designed to prepare you for success in the digital world.
            </p>
            <div className="flex gap-4 mt-8">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                Browse Courses
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Academic Calendar
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <main className="container mx-auto px-4 py-12 md:py-20">
        {coursesToCompare.length > 0 && (
          <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t z-30 p-4 animate-slide-in-bottom">
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
              <div className="flex items-center gap-2">
                <ScaleIcon className="h-5 w-5 text-primary" />
                <span className="font-medium">Comparing {coursesToCompare.length} courses</span>
              </div>
              <div className="flex gap-2 w-full sm:w-auto">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={clearComparison}
                  className="flex-1 sm:flex-initial"
                >
                  Clear
                </Button>
                <Button 
                  size="sm" 
                  onClick={openComparison}
                  disabled={coursesToCompare.length < 2}
                  className="flex-1 sm:flex-initial"
                >
                  Compare Courses
                </Button>
              </div>
            </div>
          </div>
        )}

        {isComparisonOpen && (
          <CourseComparison 
            courses={coursesToCompare} 
            onClose={closeComparison}
          />
        )}
        
        <div className="mb-16">
          <FeaturedCourse course={featuredCourse} />
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Course Categories
              </h2>
              <ul className="space-y-3">
                {categories.map((category) => (
                  <li key={category.name}>
                    <Link 
                      to={`#${category.name.toLowerCase().replace(/\s+/g, '-')}`} 
                      className="flex items-center justify-between text-gray-700 hover:text-primary transition-colors group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">{category.name}</span>
                      <span className="bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full text-xs font-medium">
                        {category.count}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <CourseDistributionChart data={chartData} />
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Academic Support
              </h2>
              <p className="text-gray-700 mb-6">
                Need course selection guidance or registration assistance? Our academic advisors are here to help you succeed.
              </p>
              <div className="space-y-3">
                <Button className="w-full">Contact Advisor</Button>
                <Button variant="outline" className="w-full">View FAQ</Button>
              </div>
              
              <Separator className="my-6" />
              
              <div className="bg-primary/5 p-4 rounded-lg">
                <h3 className="font-medium text-primary mb-2">Next Registration Period</h3>
                <div className="flex items-center gap-2 text-sm">
                  <CalendarDays className="h-4 w-4 text-primary" />
                  <span>July 1, 2024 - August 15, 2024</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-3/4">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-8">
              <h2 className="text-2xl font-bold mb-2">Course Listings</h2>
              <p className="text-gray-700 mb-4">
                Browse through our available courses. Select any course for detailed information including syllabus, instructors, and registration details.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-6">
                <div className="flex items-center text-sm text-gray-600 bg-gray-50 rounded-full px-3 py-1.5">
                  <Clock size={16} className="mr-2 text-primary/70" />
                  <span>Last updated: June 15, 2024</span>
                </div>
                
                <div className="flex items-center text-sm text-gray-600 bg-gray-50 rounded-full px-3 py-1.5">
                  <Book size={16} className="mr-2 text-primary/70" />
                  <span>{courses.length} Total Courses</span>
                </div>
              </div>
            </div>
            
            <CourseFilters
              levels={levelOptions}
              departments={departmentOptions}
              credits={creditOptions}
              selectedLevel={selectedLevel}
              selectedDepartment={selectedDepartment}
              selectedCredits={selectedCredits}
              searchQuery={searchQuery}
              onLevelChange={setSelectedLevel}
              onDepartmentChange={setSelectedDepartment}
              onCreditsChange={setSelectedCredits}
              onSearchChange={setSearchQuery}
              onClearFilters={clearFilters}
            />
            
            <div className="mb-6 font-medium text-gray-600">
              Found <span className="text-primary font-semibold">{filteredCourses.length}</span> courses
              {(selectedLevel || selectedDepartment || selectedCredits || searchQuery) && 
                " matching your criteria"}
            </div>
            
            {filteredCourses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {filteredCourses.map((course) => (
                  <CourseCard 
                    key={course.id}
                    course={course}
                    isSelected={coursesToCompare.some(c => c.id === course.id)}
                    onToggleComparison={() => toggleCourseComparison(course)}
                    onViewDetails={() => handleViewCourseDetails(course.id)}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-gray-50 rounded-lg p-12 text-center mb-8 border border-gray-200">
                <div className="text-gray-500 mb-4 font-medium">No courses match your search criteria</div>
                <Button onClick={clearFilters} variant="outline" size="lg">
                  Clear All Filters
                </Button>
              </div>
            )}
            
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Registration Information</h3>
              <p className="text-gray-700 mb-6">
                Course registration for the Fall 2024 semester opens on July 1, 2024. Continuing students may register online through the student portal. New students should contact the registrar's office for assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button>Registration Portal</Button>
                <Button variant="outline">Academic Calendar</Button>
                <Button variant="outline">Contact Registrar</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Courses;
