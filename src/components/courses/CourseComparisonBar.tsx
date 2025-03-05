
import React from "react";
import { ScaleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Course } from "@/types/course";

type CourseComparisonBarProps = {
  coursesToCompare: Course[];
  onClearComparison: () => void;
  onOpenComparison: () => void;
};

const CourseComparisonBar = ({ 
  coursesToCompare, 
  onClearComparison, 
  onOpenComparison 
}: CourseComparisonBarProps) => {
  if (coursesToCompare.length === 0) {
    return null;
  }
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t z-30 p-4 animate-slide-in-bottom">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
        <div className="flex items-center gap-2">
          <ScaleIcon className="h-5 w-5 text-primary" />
          <span className="font-medium">Comparing {coursesToCompare.length} courses</span>
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={onClearComparison}
            className="flex-1 sm:flex-initial"
          >
            Clear
          </Button>
          <Button 
            size="sm" 
            onClick={onOpenComparison}
            disabled={coursesToCompare.length < 2}
            className="flex-1 sm:flex-initial"
          >
            Compare Courses
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseComparisonBar;
