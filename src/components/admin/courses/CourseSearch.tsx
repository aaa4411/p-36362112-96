
import React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface CourseSearchProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

const CourseSearch = ({ searchQuery, onSearchChange }: CourseSearchProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-between">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Search courses..."
          className="pl-10 w-full"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      <div className="flex gap-2">
        <Button variant="outline" size="sm">Export</Button>
        <Button variant="outline" size="sm">Import</Button>
      </div>
    </div>
  );
};

export default CourseSearch;
