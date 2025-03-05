
import React from "react";
import { Check } from "lucide-react";
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

interface MobileFilterAccordionProps {
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

const MobileFilterAccordion = ({
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
}: MobileFilterAccordionProps) => {
  return (
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
  );
};

export default MobileFilterAccordion;
