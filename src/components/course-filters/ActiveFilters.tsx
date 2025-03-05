
import React from "react";

type FilterOption = {
  value: string;
  label: string;
};

interface ActiveFiltersProps {
  searchQuery: string;
  selectedLevel: string;
  selectedDepartment: string;
  selectedCredits: string;
  selectedSort: string;
  levels: FilterOption[];
  departments: FilterOption[];
  credits: FilterOption[];
  sortOptions: FilterOption[];
  onSearchChange: (search: string) => void;
  onLevelChange: (level: string) => void;
  onDepartmentChange: (department: string) => void;
  onCreditsChange: (credits: string) => void;
  onSortChange: (sort: string) => void;
}

const ActiveFilters = ({
  searchQuery,
  selectedLevel,
  selectedDepartment,
  selectedCredits,
  selectedSort,
  levels,
  departments,
  credits,
  sortOptions,
  onSearchChange,
  onLevelChange,
  onDepartmentChange,
  onCreditsChange,
  onSortChange,
}: ActiveFiltersProps) => {
  const hasActiveFilters = !!(
    searchQuery || 
    selectedLevel || 
    selectedDepartment || 
    selectedCredits || 
    (selectedSort && selectedSort !== "default")
  );

  if (!hasActiveFilters) return null;

  return (
    <div className="mt-4 flex gap-2 flex-wrap">
      {searchQuery && (
        <div className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full flex items-center">
          Search: {searchQuery.length > 20 ? searchQuery.substring(0, 20) + '...' : searchQuery}
          <button 
            onClick={() => onSearchChange("")}
            className="ml-2 hover:text-primary/80"
          >
            ×
          </button>
        </div>
      )}
      {selectedLevel && (
        <div className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full flex items-center">
          Level: {levels.find(l => l.value === selectedLevel)?.label}
          <button 
            onClick={() => onLevelChange("")}
            className="ml-2 hover:text-primary/80"
          >
            ×
          </button>
        </div>
      )}
      {selectedDepartment && (
        <div className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full flex items-center">
          Department: {departments.find(d => d.value === selectedDepartment)?.label}
          <button 
            onClick={() => onDepartmentChange("")}
            className="ml-2 hover:text-primary/80"
          >
            ×
          </button>
        </div>
      )}
      {selectedCredits && (
        <div className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full flex items-center">
          Credits: {credits.find(c => c.value === selectedCredits)?.label}
          <button 
            onClick={() => onCreditsChange("")}
            className="ml-2 hover:text-primary/80"
          >
            ×
          </button>
        </div>
      )}
      {selectedSort && selectedSort !== "default" && (
        <div className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full flex items-center">
          Sort: {sortOptions.find(s => s.value === selectedSort)?.label}
          <button 
            onClick={() => onSortChange("default")}
            className="ml-2 hover:text-primary/80"
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
};

export default ActiveFilters;
