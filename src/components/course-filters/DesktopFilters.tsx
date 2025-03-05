
import React from "react";
import { FilterSelect } from "./FilterSelect";

type FilterOption = {
  value: string;
  label: string;
};

interface DesktopFiltersProps {
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

const DesktopFilters = ({
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
}: DesktopFiltersProps) => {
  return (
    <div className="hidden md:block">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <FilterSelect
          title="Level"
          options={levels}
          value={selectedLevel}
          onChange={onLevelChange}
        />
        <FilterSelect
          title="Department"
          options={departments}
          value={selectedDepartment}
          onChange={onDepartmentChange}
        />
        <FilterSelect
          title="Credits"
          options={credits}
          value={selectedCredits}
          onChange={onCreditsChange}
        />
        <FilterSelect
          title="Sort By"
          options={sortOptions}
          value={selectedSort}
          onChange={onSortChange}
        />
      </div>
    </div>
  );
};

export default DesktopFilters;
