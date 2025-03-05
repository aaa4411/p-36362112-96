
import React from "react";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  SearchInput,
  DesktopFilters,
  MobileFilters,
  ActiveFilters
} from "@/components/course-filters";

type FilterOption = {
  value: string;
  label: string;
};

export type CourseFiltersProps = {
  levels: FilterOption[];
  departments: FilterOption[];
  credits: FilterOption[];
  sortOptions: FilterOption[];
  selectedLevel: string;
  selectedDepartment: string;
  selectedCredits: string;
  selectedSort: string;
  searchQuery: string;
  onLevelChange: (level: string) => void;
  onDepartmentChange: (department: string) => void;
  onCreditsChange: (credits: string) => void;
  onSortChange: (sort: string) => void;
  onSearchChange: (search: string) => void;
  onClearFilters: () => void;
};

const CourseFilters = ({
  levels,
  departments,
  credits,
  sortOptions,
  selectedLevel,
  selectedDepartment,
  selectedCredits,
  selectedSort,
  searchQuery,
  onLevelChange,
  onDepartmentChange,
  onCreditsChange,
  onSortChange,
  onSearchChange,
  onClearFilters,
}: CourseFiltersProps) => {
  const hasActiveFilters = !!(selectedLevel || selectedDepartment || selectedCredits || searchQuery || (selectedSort && selectedSort !== "default"));

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <Filter className="h-5 w-5" />
          Filter Courses
        </h2>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearFilters}
            className="text-sm"
          >
            Clear Filters
          </Button>
        )}
      </div>

      {/* Search box */}
      <SearchInput 
        searchQuery={searchQuery} 
        onSearchChange={onSearchChange} 
      />

      {/* Desktop filters */}
      <DesktopFilters
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

      {/* Mobile filters */}
      <MobileFilters
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

      {/* Active filters display */}
      <ActiveFilters
        searchQuery={searchQuery}
        selectedLevel={selectedLevel}
        selectedDepartment={selectedDepartment}
        selectedCredits={selectedCredits}
        selectedSort={selectedSort}
        levels={levels}
        departments={departments}
        credits={credits}
        sortOptions={sortOptions}
        onSearchChange={onSearchChange}
        onLevelChange={onLevelChange}
        onDepartmentChange={onDepartmentChange}
        onCreditsChange={onCreditsChange}
        onSortChange={onSortChange}
      />
    </div>
  );
};

export default CourseFilters;
