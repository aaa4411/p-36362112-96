
import React from "react";
import { Check, ChevronsUpDown, Filter } from "lucide-react";
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
  selectedLevel: string;
  selectedDepartment: string;
  selectedCredits: string;
  onLevelChange: (level: string) => void;
  onDepartmentChange: (department: string) => void;
  onCreditsChange: (credits: string) => void;
  onClearFilters: () => void;
};

const CourseFilters = ({
  levels,
  departments,
  credits,
  selectedLevel,
  selectedDepartment,
  selectedCredits,
  onLevelChange,
  onDepartmentChange,
  onCreditsChange,
  onClearFilters,
}: CourseFiltersProps) => {
  const hasActiveFilters = selectedLevel || selectedDepartment || selectedCredits;

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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
      </div>
      {hasActiveFilters && (
        <div className="mt-4 flex gap-2 flex-wrap">
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
        </div>
      )}
    </div>
  );
};

export default CourseFilters;
