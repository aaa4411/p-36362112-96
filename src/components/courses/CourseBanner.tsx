
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, Book, Calendar, GraduationCap } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

const CourseBanner = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Add search parameter to URL
    const params = new URLSearchParams(window.location.search);
    if (searchQuery) {
      params.set("search", searchQuery);
    } else {
      params.delete("search");
    }
    navigate(`${window.location.pathname}?${params.toString()}`);
  };

  return (
    <div className="bg-gradient-to-r from-primary to-primary/80 text-white">
      <div className="container mx-auto px-4">
        <div className="py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 font-playfair">Course Catalog</h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Explore our comprehensive range of computing and information technology courses designed to prepare you for success in the digital world.
            </p>

            <form onSubmit={handleSearch} className="flex gap-2 max-w-xl mx-auto mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input 
                  type="text" 
                  placeholder="Search for courses..."
                  className="w-full pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20 focus:border-white"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button type="submit" className="bg-white text-primary hover:bg-gray-100">
                Search
              </Button>
            </form>

            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                Browse Courses
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Academic Calendar
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6 border-t border-white/20">
          <div className="flex items-center justify-center md:justify-start gap-3 text-white/90">
            <Book className="h-5 w-5" />
            <span>Over 200 specialized courses</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-white/90">
            <GraduationCap className="h-5 w-5" />
            <span>Industry-recognized certifications</span>
          </div>
          <div className="flex items-center justify-center md:justify-end gap-3 text-white/90">
            <Calendar className="h-5 w-5" />
            <span>Flexible scheduling options</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseBanner;
