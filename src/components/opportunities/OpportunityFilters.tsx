
import React from "react";
import { 
  Briefcase, 
  BookOpen, 
  Award,
  X,
  Search
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

interface OpportunityFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filterType: string | null;
  activeFilters: string[];
  handleFilterClick: (type: string) => void;
  handleClearFilters: () => void;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const OpportunityFilters: React.FC<OpportunityFiltersProps> = ({
  searchQuery,
  setSearchQuery,
  filterType,
  activeFilters,
  handleFilterClick,
  handleClearFilters,
  handleSearch
}) => {
  return (
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
  );
};

export default OpportunityFilters;
