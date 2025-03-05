
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronsUpDown, SlidersHorizontal } from "lucide-react";
import MobileFilterAccordion from "./MobileFilterAccordion";

type FilterOption = {
  value: string;
  label: string;
};

interface MobileFiltersProps {
  levels: FilterOption[];
  departments: FilterOption[];
  credits: FilterOption[];
  sortOptions: FilterOption[];
  selectedLevel: string;
  selectedDepartment: string;
  selectedCredits: string;
  selectedSort: string;
  onLevelChange: (level: string) => void;
  onDepartmentChange: (department: string) => void;
  onCreditsChange: (credits: string) => void;
  onSortChange: (sort: string) => void;
}

const MobileFilters = ({
  levels,
  departments,
  credits,
  sortOptions,
  selectedLevel,
  selectedDepartment,
  selectedCredits,
  selectedSort,
  onLevelChange,
  onDepartmentChange,
  onCreditsChange,
  onSortChange,
}: MobileFiltersProps) => {
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  const toggleMobileFilters = () => {
    setIsMobileFiltersOpen(!isMobileFiltersOpen);
  };

  return (
    <div className="md:hidden">
      <Button 
        variant="outline" 
        onClick={toggleMobileFilters}
        className="w-full flex justify-between items-center"
      >
        <span className="flex items-center">
          <SlidersHorizontal className="mr-2 h-4 w-4" />
          Filter Options
        </span>
        <ChevronsUpDown className="h-4 w-4" />
      </Button>
      
      {isMobileFiltersOpen && (
        <div className="mt-4 space-y-4">
          <MobileFilterAccordion
            levels={levels}
            departments={departments}
            credits={credits}
            sortOptions={sortOptions}
            selectedLevel={selectedLevel}
            selectedDepartment={selectedDepartment}
            selectedCredits={selectedCredits}
            selectedSort={selectedSort}
            onLevelChange={onLevelChange}
            onDepartmentChange={onDepartmentChange}
            onCreditsChange={onCreditsChange}
            onSortChange={onSortChange}
          />
        </div>
      )}
    </div>
  );
};

export default MobileFilters;
