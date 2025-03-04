import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { 
  Briefcase, 
  Calendar, 
  GraduationCap, 
  Globe, 
  ArrowRight, 
  Clock,
  BookOpen,
  Award,
  Users,
  Check,
  Filter,
  Search,
  X,
  Heart,
  Share,
  Download,
  AlertCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

type Opportunity = {
  id: string;
  title: string;
  type: "internship" | "research" | "job" | "scholarship";
  organization: string;
  location: string;
  description: string;
  deadline: string;
  requirements: string[];
  link: string;
  featured?: boolean;
  saved?: boolean;
  applicationStatus?: "not_applied" | "in_progress" | "applied" | "interview" | "rejected" | "accepted";
};

const opportunitiesData: Opportunity[] = [
  {
    id: "int-001",
    title: "Software Development Intern",
    type: "internship",
    organization: "TechCorp",
    location: "San Francisco, CA (Remote Option)",
    description: "Join our engineering team to work on real-world projects using cutting-edge technologies. Gain experience in full-stack development, DevOps, and agile methodologies.",
    deadline: "March 15, 2024",
    requirements: ["Junior or Senior status", "Proficiency in JavaScript", "Experience with React", "Basic knowledge of databases"],
    link: "#",
    featured: true
  },
  {
    id: "res-001",
    title: "Research Assistant - AI Lab",
    type: "research",
    organization: "College of Computing",
    location: "On Campus",
    description: "Work with faculty researchers on cutting-edge AI projects. Assist with data collection, algorithm development, and experimental evaluation.",
    deadline: "Rolling Basis",
    requirements: ["GPA of 3.5 or higher", "Completed courses in AI and Machine Learning", "Python programming skills", "Background in statistics"],
    link: "#",
    featured: true
  },
  {
    id: "job-001",
    title: "Graduate Teaching Assistant",
    type: "job",
    organization: "Department of Computer Science",
    location: "On Campus",
    description: "Support faculty members in undergraduate courses. Responsibilities include leading lab sessions, grading assignments, and holding office hours.",
    deadline: "April 30, 2024",
    requirements: ["Graduate student status", "Strong academic record", "Excellent communication skills", "Prior teaching experience preferred"],
    link: "#"
  },
  {
    id: "sch-001",
    title: "Computing Excellence Scholarship",
    type: "scholarship",
    organization: "College of Computing Foundation",
    location: "N/A",
    description: "Merit-based scholarship for outstanding students pursuing degrees in computer science or information systems. Covers partial tuition and provides mentorship opportunities.",
    deadline: "February 28, 2024",
    requirements: ["GPA of 3.7 or higher", "Demonstrated leadership", "Involvement in extracurricular activities", "Financial need considered"],
    link: "#"
  },
  {
    id: "int-002",
    title: "Data Science Intern",
    type: "internship",
    organization: "AnalyticsPro",
    location: "Boston, MA (Hybrid)",
    description: "Apply data science techniques to solve real business problems. Work with large datasets, develop predictive models, and create data visualizations.",
    deadline: "March 30, 2024",
    requirements: ["Junior or Senior status", "Proficiency in Python", "Experience with data analysis libraries", "Knowledge of statistical methods"],
    link: "#"
  },
  {
    id: "res-002",
    title: "Undergraduate Research Program - Cybersecurity",
    type: "research",
    organization: "Network Security Lab",
    location: "On Campus",
    description: "Participate in cybersecurity research projects focused on network security, vulnerability assessment, and penetration testing.",
    deadline: "May 15, 2024",
    requirements: ["Sophomore, Junior, or Senior status", "Coursework in network security", "Programming experience", "Interest in cybersecurity"],
    link: "#"
  },
  {
    id: "job-002",
    title: "IT Help Desk Assistant",
    type: "job",
    organization: "Campus IT Services",
    location: "On Campus",
    description: "Provide technical support to students and faculty. Troubleshoot hardware and software issues, assist with network connectivity, and support campus technology resources.",
    deadline: "Ongoing",
    requirements: ["Basic IT knowledge", "Strong customer service skills", "Problem-solving abilities", "Work-study eligible preferred"],
    link: "#"
  },
  {
    id: "int-003",
    title: "UX/UI Design Intern",
    type: "internship",
    organization: "DesignHub",
    location: "Chicago, IL (In-person)",
    description: "Work with our design team to create user-centered digital experiences. Participate in the entire design process from research to prototyping and testing.",
    deadline: "April 10, 2024",
    requirements: ["UI/UX coursework or portfolio", "Familiarity with design tools", "Understanding of design principles", "Strong visual communication skills"],
    link: "#"
  }
];

const Opportunities = () => {
  const { toast } = useToast();
  const [opportunities, setOpportunities] = useState<Opportunity[]>(opportunitiesData);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState<string | null>(null);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [selectedOpportunity, setSelectedOpportunity] = useState<Opportunity | null>(null);
  const [isApplying, setIsApplying] = useState(false);
  const [isApplicationDialogOpen, setIsApplicationDialogOpen] = useState(false);
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  
  const filterOpportunities = () => {
    let filtered = [...opportunitiesData];
    
    if (searchQuery) {
      filtered = filtered.filter(
        opp => 
          opp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          opp.organization.toLowerCase().includes(searchQuery.toLowerCase()) ||
          opp.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    if (filterType) {
      filtered = filtered.filter(opp => opp.type === filterType);
    }
    
    return filtered;
  };
  
  const filteredOpportunities = filterOpportunities();
  
  const handleFilterClick = (type: string) => {
    if (filterType === type) {
      setFilterType(null);
      setActiveFilters(activeFilters.filter(filter => filter !== type));
    } else {
      setFilterType(type);
      if (!activeFilters.includes(type)) {
        setActiveFilters([...activeFilters, type]);
      }
    }
  };
  
  const handleClearFilters = () => {
    setFilterType(null);
    setSearchQuery("");
    setActiveFilters([]);
  };
  
  const handleSaveOpportunity = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    setOpportunities(prev => 
      prev.map(opp => 
        opp.id === id ? { ...opp, saved: !opp.saved } : opp
      )
    );
    
    const opportunity = opportunities.find(opp => opp.id === id);
    if (opportunity) {
      toast({
        title: opportunity.saved ? "Removed from saved" : "Saved to favorites",
        description: opportunity.saved ? "Opportunity removed from your saved list" : "Opportunity added to your saved list",
        variant: opportunity.saved ? "destructive" : "default",
      });
    }
  };
  
  const handleShareOpportunity = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const opportunity = opportunities.find(opp => opp.id === id);
    if (opportunity) {
      toast({
        title: "Link copied to clipboard",
        description: `Share link for "${opportunity.title}" has been copied`,
      });
    }
  };
  
  const handleApplyNow = (opportunity: Opportunity) => {
    setSelectedOpportunity(opportunity);
    setIsApplicationDialogOpen(true);
  };
  
  const handleSubmitApplication = () => {
    setIsApplying(true);
    
    setTimeout(() => {
      setIsApplying(false);
      setIsApplicationDialogOpen(false);
      
      if (selectedOpportunity) {
        setOpportunities(prev => 
          prev.map(opp => 
            opp.id === selectedOpportunity.id ? { ...opp, applicationStatus: "applied" } : opp
          )
        );
        
        toast({
          title: "Application submitted!",
          description: `Your application for "${selectedOpportunity.title}" has been sent.`,
          variant: "success",
        });
      }
    }, 1500);
  };
  
  const handleDownloadDetails = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const opportunity = opportunities.find(opp => opp.id === id);
    if (opportunity) {
      toast({
        title: "Downloading opportunity details",
        description: `Details for "${opportunity.title}" are being prepared for download.`,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Student Opportunities</h1>
          <p className="text-xl max-w-3xl">
            Discover internships, research positions, scholarships, and job opportunities that will help you gain valuable experience and advance your career in technology.
          </p>
          
          <div className="mt-8 flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                type="text"
                placeholder="Search for opportunities..."
                value={searchQuery}
                onChange={handleSearch}
                className="pl-10 bg-white text-black rounded-lg w-full"
              />
            </div>
            <div className="flex gap-2">
              <Button 
                variant={filterType === "internship" ? "secondary" : "outline"} 
                onClick={() => handleFilterClick("internship")}
                className="bg-white text-primary hover:bg-gray-100"
              >
                <Briefcase size={16} className="mr-2" /> Internships
              </Button>
              <Button 
                variant={filterType === "research" ? "secondary" : "outline"} 
                onClick={() => handleFilterClick("research")}
                className="bg-white text-primary hover:bg-gray-100"
              >
                <BookOpen size={16} className="mr-2" /> Research
              </Button>
              <Button 
                variant={filterType === "scholarship" ? "secondary" : "outline"} 
                onClick={() => handleFilterClick("scholarship")}
                className="bg-white text-primary hover:bg-gray-100"
              >
                <Award size={16} className="mr-2" /> Scholarships
              </Button>
            </div>
          </div>
          
          {activeFilters.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {activeFilters.map(filter => (
                <Badge key={filter} variant="secondary" className="px-3 py-1 bg-white/20">
                  {filter}
                  <button 
                    onClick={() => handleFilterClick(filter)}
                    className="ml-2 rounded-full hover:bg-white/20 p-1"
                  >
                    <X size={12} />
                  </button>
                </Badge>
              ))}
              <Button 
                variant="link" 
                onClick={handleClearFilters} 
                className="text-white/80 hover:text-white p-0 h-auto"
              >
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </div>
      
      <main className="container mx-auto px-4 py-16">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Featured Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredOpportunities
              .filter(opportunity => opportunity.featured)
              .map(opportunity => (
                <Card key={opportunity.id} className="border-2 border-primary/40 hover:shadow-lg transition-shadow group">
                  <CardHeader className="pb-2">
                    <div className="mb-2">
                      {opportunity.type === 'internship' && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          <Briefcase className="mr-1 h-3 w-3" /> Internship
                        </span>
                      )}
                      {opportunity.type === 'research' && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                          <BookOpen className="mr-1 h-3 w-3" /> Research
                        </span>
                      )}
                      {opportunity.type === 'job' && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          <Briefcase className="mr-1 h-3 w-3" /> Job
                        </span>
                      )}
                      {opportunity.type === 'scholarship' && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                          <Award className="mr-1 h-3 w-3" /> Scholarship
                        </span>
                      )}
                    </div>
                    <div className="flex justify-between items-start">
                      <CardTitle>{opportunity.title}</CardTitle>
                      <div className="flex space-x-1">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button 
                                variant="ghost" 
                                size="icon" 
                                className="h-8 w-8"
                                onClick={(e) => handleSaveOpportunity(opportunity.id, e)}
                              >
                                <Heart className={`h-4 w-4 ${opportunity.saved ? 'fill-red-500 text-red-500' : 'text-gray-500'}`} />
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{opportunity.saved ? 'Remove from favorites' : 'Save to favorites'}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                        
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button 
                                variant="ghost" 
                                size="icon" 
                                className="h-8 w-8"
                                onClick={(e) => handleShareOpportunity(opportunity.id, e)}
                              >
                                <Share className="h-4 w-4 text-gray-500" />
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Share opportunity</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500 flex items-center mt-1">
                      <span className="mr-3">{opportunity.organization}</span>
                      <span className="flex items-center">
                        <Globe className="mr-1 h-3 w-3" />
                        {opportunity.location}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-2">
                    <CardDescription className="text-base">{opportunity.description}</CardDescription>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium text-gray-700">Requirements:</h4>
                      <ul className="mt-2 space-y-1">
                        {opportunity.requirements.map((req, index) => (
                          <li key={index} className="flex items-start">
                            <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                            <span className="text-sm">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center text-sm text-red-600 mt-4">
                      <Calendar className="mr-2 h-4 w-4" />
                      Application Deadline: {opportunity.deadline}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <Button
                      variant="outline" 
                      size="sm"
                      onClick={(e) => handleDownloadDetails(opportunity.id, e)}
                      className="text-gray-600"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Details
                    </Button>
                    <Button 
                      onClick={() => handleApplyNow(opportunity)}
                      className="w-2/3 flex items-center justify-center group-hover:bg-primary/90 transition-colors"
                    >
                      <span>Apply Now</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </section>
        
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Browse by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-md transition-shadow group hover:border-primary/50">
              <CardHeader>
                <div className="mx-auto bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <Briefcase className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="mt-4">Internships</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Gain practical experience in the technology industry through our partner companies.
                </p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button 
                  variant="outline" 
                  onClick={() => handleFilterClick("internship")}
                  className="group-hover:border-blue-600 group-hover:text-blue-600 transition-colors"
                >
                  View All Internships
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="text-center hover:shadow-md transition-shadow group hover:border-primary/50">
              <CardHeader>
                <div className="mx-auto bg-purple-100 p-3 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                  <BookOpen className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="mt-4">Research</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Work alongside faculty members on cutting-edge research projects in various computing fields.
                </p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button 
                  variant="outline"
                  onClick={() => handleFilterClick("research")}
                  className="group-hover:border-purple-600 group-hover:text-purple-600 transition-colors"
                >
                  View Research Opportunities
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="text-center hover:shadow-md transition-shadow group hover:border-primary/50">
              <CardHeader>
                <div className="mx-auto bg-green-100 p-3 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="mt-4">Campus Jobs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Find part-time positions that fit your schedule and help you develop professional skills.
                </p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button 
                  variant="outline"
                  onClick={() => handleFilterClick("job")}
                  className="group-hover:border-green-600 group-hover:text-green-600 transition-colors"
                >
                  View Campus Jobs
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="text-center hover:shadow-md transition-shadow group hover:border-primary/50">
              <CardHeader>
                <div className="mx-auto bg-amber-100 p-3 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-amber-200 transition-colors">
                  <Award className="h-8 w-8 text-amber-600" />
                </div>
                <CardTitle className="mt-4">Scholarships</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Explore financial support opportunities available to computing and information students.
                </p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button 
                  variant="outline"
                  onClick={() => handleFilterClick("scholarship")}
                  className="group-hover:border-amber-600 group-hover:text-amber-600 transition-colors"
                >
                  View Scholarships
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>
        
        <section className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">All Opportunities</h2>
            <div className="flex items-center">
              <span className="text-sm text-gray-500 mr-3">Sort by:</span>
              <select className="border border-gray-300 rounded-md py-1 px-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                <option>Latest</option>
                <option>Deadline (Earliest)</option>
                <option>Deadline (Latest)</option>
                <option>Alphabetical</option>
              </select>
            </div>
          </div>
          
          {filteredOpportunities.length === 0 ? (
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-12 text-center">
              <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <AlertCircle className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-medium text-gray-700 mb-2">No opportunities found</h3>
              <p className="text-gray-500 mb-6 max-w-md mx-auto">
                We couldn't find any opportunities matching your search criteria. Try adjusting your filters or search term.
              </p>
              <Button onClick={handleClearFilters}>Clear All Filters</Button>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredOpportunities.map(opportunity => (
                <Card key={opportunity.id} className="overflow-hidden hover:shadow-md transition-shadow group hover:border-primary/50">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-3/4 p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="mb-2">
                            {opportunity.type === 'internship' && (
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                <Briefcase className="mr-1 h-3 w-3" /> Internship
                              </span>
                            )}
                            {opportunity.type === 'research' && (
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                                <BookOpen className="mr-1 h-3 w-3" /> Research
                              </span>
                            )}
                            {opportunity.type === 'job' && (
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                <Briefcase className="mr-1 h-3 w-3" /> Job
                              </span>
                            )}
                            {opportunity.type === 'scholarship' && (
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                                <Award className="mr-1 h-3 w-3" /> Scholarship
                              </span>
                            )}
                            {opportunity.applicationStatus === 'applied' && (
                              <span className="ml-2 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-800">
                                <Check className="mr-1 h-3 w-3" /> Applied
                              </span>
                            )}
                          </div>
                          <h3 className="text-xl font-semibold mb-1">{opportunity.title}</h3>
                        </div>
                        <div className="flex space-x-1">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button 
                                  variant="ghost" 
                                  size="icon" 
                                  className="h-8 w-8"
                                  onClick={(e) => handleSaveOpportunity(opportunity.id, e)}
                                >
                                  <Heart className={`h-4 w-4 ${opportunity.saved ? 'fill-red-500 text-red-500' : 'text-gray-500'}`} />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>{opportunity.saved ? 'Remove from favorites' : 'Save to favorites'}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                          
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button 
                                  variant="ghost" 
                                  size="icon" 
                                  className="h-8 w-8"
                                  onClick={(e) => handleShareOpportunity(opportunity.id, e)}
                                >
                                  <Share className="h-4 w-4 text-gray-500" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Share opportunity</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      </div>
                      <div className="text-sm text-gray-500 flex items-center mb-4">
                        <span className="mr-3">{opportunity.organization}</span>
                        <span className="flex items-center">
                          <Globe className="mr-1 h-3 w-3" />
                          {opportunity.location}
                        </span>
                      </div>
                      <p className="text-gray-700 text-sm">{opportunity.description}</p>
                    </div>
                    
                    <div className="md:w-1/4 bg-gray-50 p-6 flex flex-col justify-between">
                      <div>
                        <div className="text-sm text-red-600 mb-4 flex items-center">
                          <Calendar className="mr-2 h-4 w-4" /> 
                          <span>Deadline: {opportunity.deadline}</span>
                        </div>
                        <ul className="text-xs text-gray-600 mb-6">
                          {opportunity.requirements.slice(0, 2).map((req, index) => (
                            <li key={index} className="flex items-start mb-1">
                              <Check className="h-3 w-3 text-gray-500 mr-1 mt-0.5 flex-shrink-0" />
                              <span>{req}</span>
                            </li>
                          ))}
                          {opportunity.requirements.length > 2 && (
                            <li className="text-xs text-gray-500 ml-4">
                              +{opportunity.requirements.length - 2} more requirements
                            </li>
                          )}
                        </ul>
                      </div>
                      
                      <div className="space-y-2">
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="w-full flex items-center justify-center"
                          onClick={(e) => handleDownloadDetails(opportunity.id, e)}
                        >
                          <Download className="mr-2 h-3 w-3" />
                          <span>Download Details</span>
                        </Button>
                        
                        <Button 
                          size="sm" 
                          className="w-full flex items-center justify-center"
                          onClick={() => handleApplyNow(opportunity)}
                          disabled={opportunity.applicationStatus === 'applied'}
                        >
                          {opportunity.applicationStatus === 'applied' ? (
                            <>
                              <Check className="mr-2 h-3 w-3" />
                              <span>Applied</span>
                            </>
                          ) : (
                            <>
                              <span>Apply Now</span>
                              <ArrowRight className="ml-2 h-3 w-3" />
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
          
          <div className="mt-8 flex justify-center">
            <Button variant="outline" className="mr-2">
              Previous
            </Button>
            <Button variant="outline" className="mx-1">1</Button>
            <Button className="mx-1">2</Button>
            <Button variant="outline" className="mx-1">3</Button>
            <Button variant="outline" className="ml-2">
              Next
            </Button>
          </div>
        </section>
        
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Student Success Stories</h2>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">From Intern to Full-Time Engineer</h3>
                  <p className="text-gray-600 italic">"The internship opportunity I found through the college's platform led to my dream job at a top tech company. The experience I gained was invaluable."</p>
                </div>
                <div className="flex items-center">
                  <div className="mr-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                      <img src="https://i.pravatar.cc/100?img=33" alt="Student" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div>
                    <div className="font-medium">Alex Johnson</div>
                    <div className="text-sm text-gray-500">Computer Science, Class of 2023</div>
                  </div>
                </div>
              </div>
              <div className="p-8 bg-gray-50">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">Research Led to Publication</h3>
                  <p className="text-gray-600 italic">"The undergraduate research opportunity allowed me to co-author a paper that was published in a prestigious conference. This opened many doors for my graduate studies."</p>
                </div>
                <div className="flex items-center">
                  <div className="mr-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                      <img src="https://i.pravatar.cc/100?img=32" alt="Student" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div>
                    <div className="font-medium">Samantha Lee</div>
                    <div className="text-sm text-gray-500">Data Science, Class of 2022</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section>
          <div className="bg-primary rounded-lg p-8 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <GraduationCap className="h-12 w-12 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Ready to Launch Your Career?</h2>
              <p className="text-xl mb-8">
                Our Career Services team is here to help you find the perfect opportunity and prepare for success.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button variant="secondary">Schedule Advising</Button>
                <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                  Upload Resume
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Dialog open={isApplicationDialogOpen} onOpenChange={setIsApplicationDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Apply for {selectedOpportunity?.title}</DialogTitle>
            <DialogDescription>
              Complete this form to submit your application for this opportunity.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="resume" className="text-right text-sm font-medium col-span-1">
                Resume
              </label>
              <Input id="resume" type="file" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="coverLetter" className="text-right text-sm font-medium col-span-1">
                Cover Letter
              </label>
              <Input id="coverLetter" type="file" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="email" className="text-right text-sm font-medium col-span-1">
                Email
              </label>
              <Input id="email" type="email" placeholder="your.email@example.com" className="col-span-3" />
            </div>
          </div>
          <DialogFooter className="sm:justify-end">
            <Button
              variant="outline"
              onClick={() => setIsApplicationDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button
              onClick={handleSubmitApplication}
              isLoading={isApplying}
            >
              {isApplying ? "Submitting..." : "Submit Application"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>
  );
};

export default Opportunities;
