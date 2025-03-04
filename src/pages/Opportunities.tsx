
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AlertCircle } from "lucide-react";
import OpportunityFilters from "@/components/opportunities/OpportunityFilters";
import OpportunityCard from "@/components/opportunities/OpportunityCard";
import CategoryCards from "@/components/opportunities/CategoryCards";
import SuccessStories from "@/components/opportunities/SuccessStories";
import CareerCallToAction from "@/components/opportunities/CareerCallToAction";
import ApplicationDialog from "@/components/opportunities/ApplicationDialog";
import NoResultsFound from "@/components/opportunities/NoResultsFound";
import Pagination from "@/components/opportunities/Pagination";
import { Opportunity } from "@/types/opportunity";

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
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3; // Mock total pages
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to first page on new search
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
    setCurrentPage(1); // Reset to first page on filter change
  };
  
  const handleClearFilters = () => {
    setFilterType(null);
    setSearchQuery("");
    setActiveFilters([]);
    setCurrentPage(1); // Reset to first page
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

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // In a real application, this would fetch the next page of results
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <OpportunityFilters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        filterType={filterType}
        activeFilters={activeFilters}
        handleFilterClick={handleFilterClick}
        handleClearFilters={handleClearFilters}
        handleSearch={handleSearch}
      />
      
      <main className="container mx-auto px-4 py-16">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Featured Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredOpportunities
              .filter(opportunity => opportunity.featured)
              .map(opportunity => (
                <OpportunityCard
                  key={opportunity.id}
                  opportunity={opportunity}
                  handleSaveOpportunity={handleSaveOpportunity}
                  handleShareOpportunity={handleShareOpportunity}
                  handleDownloadDetails={handleDownloadDetails}
                  handleApplyNow={handleApplyNow}
                  featured={true}
                />
              ))}
          </div>
        </section>
        
        <CategoryCards handleFilterClick={handleFilterClick} />
        
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
            <NoResultsFound handleClearFilters={handleClearFilters} />
          ) : (
            <div className="space-y-6">
              {filteredOpportunities.map(opportunity => (
                <OpportunityCard
                  key={opportunity.id}
                  opportunity={opportunity}
                  handleSaveOpportunity={handleSaveOpportunity}
                  handleShareOpportunity={handleShareOpportunity}
                  handleDownloadDetails={handleDownloadDetails}
                  handleApplyNow={handleApplyNow}
                />
              ))}
            </div>
          )}
          
          <Pagination 
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </section>
        
        <SuccessStories />
        
        <CareerCallToAction />
      </main>
      
      <ApplicationDialog
        isOpen={isApplicationDialogOpen}
        onOpenChange={setIsApplicationDialogOpen}
        selectedOpportunity={selectedOpportunity}
        isApplying={isApplying}
        onSubmit={handleSubmitApplication}
      />
      
      <Footer />
    </div>
  );
};

export default Opportunities;
