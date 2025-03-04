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
  ScaleIcon
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
import CourseFilters from "@/components/CourseFilters";
import { toast } from "sonner";
import CourseComparison from "@/components/CourseComparison";

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
  },
];

const categories = [
  { name: "Computer Science", count: courses.filter(c => c.department === "Computer Science").length },
  { name: "Information Systems", count: courses.filter(c => c.department === "Information Systems").length },
  { name: "Artificial Intelligence", count: courses.filter(c => c.title.includes("Artificial Intelligence")).length },
  { name: "Database", count: courses.filter(c => c.title.includes("Database")).length },
  { name: "Web Development", count: courses.filter(c => c.title.includes("Web")).length },
];

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

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Course Catalog</h1>
          <p className="text-xl max-w-3xl">
            Explore our comprehensive range of computing and information technology courses designed to prepare you for success in the digital world.
          </p>
        </div>
      </div>
      
      <main className="container mx-auto px-4 py-16">
        {coursesToCompare.length > 0 && (
          <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t z-30 p-4 animate-slide-in-bottom">
            <div className="container mx-auto flex justify-between items-center">
              <div className="flex items-center gap-2">
                <ScaleIcon className="h-5 w-5 text-primary" />
                <span className="font-medium">Comparing {coursesToCompare.length} courses</span>
              </div>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={clearComparison}
                >
                  Clear
                </Button>
                <Button 
                  size="sm" 
                  onClick={openComparison}
                  disabled={coursesToCompare.length < 2}
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
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h2 className="text-xl font-bold mb-4">Course Categories</h2>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category.name}>
                    <Link 
                      to={`#${category.name.toLowerCase().replace(/\s+/g, '-')}`} 
                      className="flex items-center justify-between text-gray-700 hover:text-primary"
                    >
                      <span>{category.name}</span>
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                        {category.count}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold mb-4">Need Help?</h2>
              <p className="text-gray-700 mb-4">
                Contact our academic advisors for course selection guidance or registration assistance.
              </p>
              <Button className="w-full">Contact Advisor</Button>
            </div>
          </div>
          
          <div className="lg:w-3/4">
            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-4">Course Listings</h2>
              <p className="text-gray-700 mb-2">
                Browse through our available courses. Click on any course for detailed information including syllabus, instructors, and registration details.
              </p>
              
              <div className="flex items-center text-sm text-gray-500 mt-4">
                <Clock size={16} className="mr-2" />
                <span>Last updated: June 15, 2024</span>
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
            
            <div className="mb-6 text-gray-700">
              Found <span className="font-medium">{filteredCourses.length}</span> courses
              {(selectedLevel || selectedDepartment || selectedCredits || searchQuery) && 
                " matching your criteria"}
            </div>
            
            {filteredCourses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {filteredCourses.map((course) => (
                  <Card key={course.id} className="overflow-hidden">
                    <CardHeader className="pb-4">
                      <div className="flex justify-between items-start">
                        <div className="bg-primary/10 rounded-lg p-2">{course.icon}</div>
                        <div className="flex gap-2">
                          <div className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                            {course.level}
                          </div>
                          <button 
                            onClick={() => toggleCourseComparison(course)}
                            className={`p-1 rounded-full ${coursesToCompare.some(c => c.id === course.id) 
                              ? 'bg-primary/10 text-primary' 
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                            aria-label={coursesToCompare.some(c => c.id === course.id) 
                              ? `Remove ${course.title} from comparison` 
                              : `Add ${course.title} to comparison`}
                          >
                            {coursesToCompare.some(c => c.id === course.id) 
                              ? <Check className="h-4 w-4" /> 
                              : <PlusCircle className="h-4 w-4" />}
                          </button>
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="text-sm font-medium text-gray-500">{course.code}</div>
                        <CardTitle className="mt-1">{course.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{course.description}</CardDescription>
                      <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="font-medium text-gray-500">Department</div>
                          <div>{course.department}</div>
                        </div>
                        <div>
                          <div className="font-medium text-gray-500">Credits</div>
                          <div>{course.credits}</div>
                        </div>
                      </div>
                      {course.prerequisites.length > 0 && (
                        <div className="mt-4 text-sm">
                          <div className="font-medium text-gray-500">Prerequisites</div>
                          <div>{course.prerequisites.join(", ")}</div>
                        </div>
                      )}
                    </CardContent>
                    <CardFooter>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full flex items-center justify-center"
                        onClick={() => handleViewCourseDetails(course.id)}
                      >
                        <span>View Course Details</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="bg-gray-100 rounded-lg p-8 text-center mb-8">
                <div className="text-gray-500 mb-2">No courses match your filters</div>
                <Button onClick={clearFilters} variant="outline" size="sm">
                  Clear Filters
                </Button>
              </div>
            )}
            
            <div className="bg-primary/5 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Registration Information</h3>
              <p className="text-gray-700 mb-4">
                Course registration for the Fall 2024 semester opens on July 1, 2024. Continuing students may register online through the student portal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button>Registration Portal</Button>
                <Button variant="outline">Academic Calendar</Button>
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
