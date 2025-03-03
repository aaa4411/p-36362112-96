
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Mail, 
  GraduationCap, 
  BookOpen, 
  ExternalLink, 
  Github, 
  Search,
  Twitter,
  Linkedin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Define faculty data structure
type Faculty = {
  id: number;
  name: string;
  title: string;
  department: string;
  image: string;
  email: string;
  phone: string;
  office: string;
  research: string[];
  education: string[];
  bio: string;
  socialLinks?: {
    website?: string;
    github?: string;
    twitter?: string;
    linkedin?: string;
  };
};

// Sample faculty data
const facultyMembers: Faculty[] = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    title: "Professor",
    department: "Computer Science",
    image: "https://i.pravatar.cc/300?img=1",
    email: "sarah.johnson@college.edu",
    phone: "(555) 123-4567",
    office: "Building A, Room 302",
    research: ["Artificial Intelligence", "Computer Vision", "Machine Learning"],
    education: [
      "Ph.D. in Computer Science, MIT",
      "M.S. in Computer Science, Stanford University",
      "B.S. in Computer Engineering, UC Berkeley"
    ],
    bio: "Dr. Johnson is a leading researcher in AI and computer vision with over 15 years of experience in the field. She has published extensively in top-tier conferences and journals, and her work on deep learning architectures has been widely cited.",
    socialLinks: {
      website: "https://sarahjohnson.edu",
      github: "https://github.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    title: "Associate Professor",
    department: "Information Systems",
    image: "https://i.pravatar.cc/300?img=3",
    email: "michael.chen@college.edu",
    phone: "(555) 234-5678",
    office: "Building B, Room 201",
    research: ["Database Systems", "Data Mining", "Big Data Analytics"],
    education: [
      "Ph.D. in Information Systems, University of Michigan",
      "M.S. in Computer Science, Cornell University",
      "B.S. in Computer Science, UCLA"
    ],
    bio: "Dr. Chen specializes in database systems and data analytics. His research focuses on optimizing query processing and developing novel algorithms for large-scale data analysis. He has received multiple grants from the National Science Foundation for his work.",
    socialLinks: {
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    title: "Assistant Professor",
    department: "Cybersecurity",
    image: "https://i.pravatar.cc/300?img=5",
    email: "emily.rodriguez@college.edu",
    phone: "(555) 345-6789",
    office: "Building C, Room 105",
    research: ["Network Security", "Cryptography", "Secure Systems Design"],
    education: [
      "Ph.D. in Computer Security, Carnegie Mellon University",
      "M.S. in Information Security, Georgia Tech",
      "B.S. in Computer Science, University of Texas"
    ],
    bio: "Dr. Rodriguez is a cybersecurity expert focusing on network security and cryptographic protocols. Her work has been instrumental in identifying vulnerabilities in widely-used encryption methods and developing more secure alternatives.",
    socialLinks: {
      website: "https://emilyrodriguez.edu",
      github: "https://github.com",
      twitter: "https://twitter.com"
    }
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    title: "Professor",
    department: "Software Engineering",
    image: "https://i.pravatar.cc/300?img=8",
    email: "james.wilson@college.edu",
    phone: "(555) 456-7890",
    office: "Building A, Room 405",
    research: ["Software Architecture", "Agile Methodologies", "DevOps"],
    education: [
      "Ph.D. in Software Engineering, University of Washington",
      "M.S. in Computer Science, University of Illinois",
      "B.S. in Computer Science, Purdue University"
    ],
    bio: "Dr. Wilson has over 20 years of experience in software engineering, both in academia and industry. Before joining the faculty, he worked as a senior software architect at several tech companies. His research focuses on improving software development processes and architectural patterns.",
    socialLinks: {
      website: "https://jameswilson.edu",
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: 5,
    name: "Dr. Aisha Patel",
    title: "Associate Professor",
    department: "Artificial Intelligence",
    image: "https://i.pravatar.cc/300?img=10",
    email: "aisha.patel@college.edu",
    phone: "(555) 567-8901",
    office: "Building B, Room 305",
    research: ["Natural Language Processing", "Sentiment Analysis", "AI Ethics"],
    education: [
      "Ph.D. in Computer Science, Stanford University",
      "M.S. in AI, University of Edinburgh",
      "B.S. in Mathematics, Oxford University"
    ],
    bio: "Dr. Patel's research is at the intersection of natural language processing and ethical AI. Her work focuses on developing algorithms that can understand and generate human language while addressing biases in AI systems.",
    socialLinks: {
      website: "https://aishapatel.edu",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: 6,
    name: "Dr. Robert Kim",
    title: "Assistant Professor",
    department: "Human-Computer Interaction",
    image: "https://i.pravatar.cc/300?img=12",
    email: "robert.kim@college.edu",
    phone: "(555) 678-9012",
    office: "Building C, Room 210",
    research: ["User Experience Design", "Accessibility", "Virtual Reality"],
    education: [
      "Ph.D. in Human-Computer Interaction, University of California",
      "M.S. in Interaction Design, Carnegie Mellon University",
      "B.A. in Psychology, Harvard University"
    ],
    bio: "Dr. Kim specializes in human-computer interaction with a focus on designing inclusive and accessible interfaces. His research combines methods from psychology, design, and computer science to create better user experiences.",
    socialLinks: {
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    }
  }
];

// Departments for filtering
const departments = Array.from(new Set(facultyMembers.map(faculty => faculty.department)));

const Faculty = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Faculty Profiles</h1>
          <p className="text-xl max-w-3xl">
            Meet our distinguished faculty members who lead innovative research and provide exceptional education in computing and information sciences.
          </p>
        </div>
      </div>
      
      <main className="container mx-auto px-4 py-16">
        {/* Search and Filter */}
        <div className="mb-12 bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-6">Find Faculty</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Search by name, research area, or department" 
                className="w-full pl-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div className="md:w-64">
              <select 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">All Departments</option>
                {departments.map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        
        {/* Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {facultyMembers.map((faculty) => (
            <Card key={faculty.id} className="overflow-hidden hover:shadow-md transition-shadow duration-200">
              <div className="aspect-w-1 aspect-h-1 relative">
                <img 
                  src={faculty.image} 
                  alt={faculty.name}
                  className="object-cover w-full h-64"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white text-xl font-bold">{faculty.name}</h3>
                  <p className="text-white/90">{faculty.title}</p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="text-sm font-medium text-primary mb-1">Department</div>
                  <div>{faculty.department}</div>
                </div>
                
                <div className="mb-4">
                  <div className="text-sm font-medium text-primary mb-1">Research Interests</div>
                  <div className="flex flex-wrap gap-2">
                    {faculty.research.map((area, index) => (
                      <span key={index} className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center mt-6 space-x-4">
                  <Button size="sm" className="flex items-center">
                    <Mail className="mr-2 h-4 w-4" />
                    Contact
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center">
                    <GraduationCap className="mr-2 h-4 w-4" />
                    View Profile
                  </Button>
                </div>
                
                {faculty.socialLinks && (
                  <div className="flex mt-6 space-x-3">
                    {faculty.socialLinks.website && (
                      <a href={faculty.socialLinks.website} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary">
                        <ExternalLink size={18} />
                      </a>
                    )}
                    {faculty.socialLinks.github && (
                      <a href={faculty.socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary">
                        <Github size={18} />
                      </a>
                    )}
                    {faculty.socialLinks.twitter && (
                      <a href={faculty.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary">
                        <Twitter size={18} />
                      </a>
                    )}
                    {faculty.socialLinks.linkedin && (
                      <a href={faculty.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary">
                        <Linkedin size={18} />
                      </a>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Faculty Departments */}
        <div className="bg-white p-8 rounded-lg shadow-sm mb-12">
          <h2 className="text-2xl font-bold mb-6">Academic Departments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Computer Science</h3>
              <p className="text-gray-700 mb-4">
                Focusing on algorithms, programming languages, software development, and theoretical foundations of computing.
              </p>
              <Button variant="outline" size="sm">View Department</Button>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Information Systems</h3>
              <p className="text-gray-700 mb-4">
                Focusing on the application of computing and information technology in organizational contexts.
              </p>
              <Button variant="outline" size="sm">View Department</Button>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Cybersecurity</h3>
              <p className="text-gray-700 mb-4">
                Focusing on network security, cryptography, security policies, and secure system design.
              </p>
              <Button variant="outline" size="sm">View Department</Button>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Artificial Intelligence</h3>
              <p className="text-gray-700 mb-4">
                Focusing on machine learning, natural language processing, computer vision, and intelligent systems.
              </p>
              <Button variant="outline" size="sm">View Department</Button>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Software Engineering</h3>
              <p className="text-gray-700 mb-4">
                Focusing on software development methodologies, testing, maintenance, and project management.
              </p>
              <Button variant="outline" size="sm">View Department</Button>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Human-Computer Interaction</h3>
              <p className="text-gray-700 mb-4">
                Focusing on user experience design, accessibility, interactive systems, and usability engineering.
              </p>
              <Button variant="outline" size="sm">View Department</Button>
            </div>
          </div>
        </div>
        
        {/* Join Faculty Section */}
        <div className="bg-primary/10 p-8 rounded-lg">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h2 className="text-2xl font-bold mb-4">Join Our Faculty</h2>
              <p className="text-gray-700 mb-4">
                We're always looking for talented educators and researchers to join our team. Explore current faculty openings and learn about the benefits of working at the College of Computers and Information.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button>View Openings</Button>
                <Button variant="outline">Faculty Benefits</Button>
              </div>
            </div>
            <div className="md:w-1/3">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-2">Faculty Resources</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <BookOpen size={16} className="mr-2 text-primary" />
                    <a href="#" className="text-gray-700 hover:text-primary">Research Support</a>
                  </li>
                  <li className="flex items-center">
                    <BookOpen size={16} className="mr-2 text-primary" />
                    <a href="#" className="text-gray-700 hover:text-primary">Teaching Resources</a>
                  </li>
                  <li className="flex items-center">
                    <BookOpen size={16} className="mr-2 text-primary" />
                    <a href="#" className="text-gray-700 hover:text-primary">Faculty Handbook</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Faculty;
