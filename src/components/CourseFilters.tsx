
import React, { useState } from "react";
import { Check, ChevronsUpDown, Filter, Search, SlidersHorizontal, X, SortAsc } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FilterOption = {
  value: string;
  label: string;
};

type FilterProps = {
  title: string;
  options: FilterOption[];
  value: string;
  onChange: (value: string) => void;
};

export const FilterSelect = ({
  title,
  options,
  value,
  onChange,
}: FilterProps) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {value
            ? options.find((option) => option.value === value)?.label
            : title}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder={`Search ${title.toLowerCase()}...`} />
          <CommandEmpty>No {title.toLowerCase()} found.</CommandEmpty>
          <CommandGroup>
            {options.map((option) => (
              <CommandItem
                key={option.value}
                value={option.value}
                onSelect={() => {
                  onChange(option.value === value ? "" : option.value);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === option.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {option.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
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
  const hasActiveFilters = selectedLevel || selectedDepartment || selectedCredits || searchQuery || (selectedSort && selectedSort !== "default");
  const [isFilterExpanded, setIsFilterExpanded] = useState(false);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  const toggleMobileFilters = () => {
    setIsMobileFiltersOpen(!isMobileFiltersOpen);
  };

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
      <div className="relative mb-4">
        <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Search courses by title, code or description..."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        {searchQuery && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-2 h-6 w-6"
            onClick={() => onSearchChange("")}
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      {/* Desktop filters */}
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

      {/* Mobile filters toggle */}
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
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="level">
                <AccordionTrigger>Level</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    {levels.map((level) => (
                      <div 
                        key={level.value} 
                        className="flex items-center"
                        onClick={() => onLevelChange(level.value === selectedLevel ? "" : level.value)}
                      >
                        <div className={`w-4 h-4 mr-2 rounded-sm border ${level.value === selectedLevel ? 'bg-primary border-primary' : 'border-gray-300'} flex items-center justify-center`}>
                          {level.value === selectedLevel && <Check className="h-3 w-3 text-white" />}
                        </div>
                        <span>{level.label}</span>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="department">
                <AccordionTrigger>Department</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    {departments.map((dept) => (
                      <div 
                        key={dept.value} 
                        className="flex items-center"
                        onClick={() => onDepartmentChange(dept.value === selectedDepartment ? "" : dept.value)}
                      >
                        <div className={`w-4 h-4 mr-2 rounded-sm border ${dept.value === selectedDepartment ? 'bg-primary border-primary' : 'border-gray-300'} flex items-center justify-center`}>
                          {dept.value === selectedDepartment && <Check className="h-3 w-3 text-white" />}
                        </div>
                        <span>{dept.label}</span>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="credits">
                <AccordionTrigger>Credits</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    {credits.map((credit) => (
                      <div 
                        key={credit.value} 
                        className="flex items-center"
                        onClick={() => onCreditsChange(credit.value === selectedCredits ? "" : credit.value)}
                      >
                        <div className={`w-4 h-4 mr-2 rounded-sm border ${credit.value === selectedCredits ? 'bg-primary border-primary' : 'border-gray-300'} flex items-center justify-center`}>
                          {credit.value === selectedCredits && <Check className="h-3 w-3 text-white" />}
                        </div>
                        <span>{credit.label}</span>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="sort">
                <AccordionTrigger>Sort By</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    {sortOptions.map((option) => (
                      <div 
                        key={option.value} 
                        className="flex items-center"
                        onClick={() => onSortChange(option.value === selectedSort ? "default" : option.value)}
                      >
                        <div className={`w-4 h-4 mr-2 rounded-sm border ${option.value === selectedSort ? 'bg-primary border-primary' : 'border-gray-300'} flex items-center justify-center`}>
                          {option.value === selectedSort && <Check className="h-3 w-3 text-white" />}
                        </div>
                        <span>{option.label}</span>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        )}
      </div>

      {/* Active filters display */}
      {hasActiveFilters && (
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
      )}
    </div>
  );
};

export default CourseFilters;
