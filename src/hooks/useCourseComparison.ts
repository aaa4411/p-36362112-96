
import { useState } from "react";
import { Course } from "@/types/course";
import { toast } from "sonner";

export const useCourseComparison = () => {
  const [coursesToCompare, setCoursesToCompare] = useState<Course[]>([]);
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);

  const toggleCourseComparison = (course: Course) => {
    if (coursesToCompare.some(c => c.id === course.id)) {
      setCoursesToCompare(coursesToCompare.filter(c => c.id !== course.id));
      toast(`Removed ${course.title} from comparison`);
    } else {
      if (coursesToCompare.length >= 3) {
        toast("You can compare up to 3 courses at a time", {
          description: "Please remove a course before adding another."
        });
        return;
      }
      setCoursesToCompare([...coursesToCompare, course]);
      toast(`Added ${course.title} to comparison`);
    }
  };

  const openComparison = () => {
    if (coursesToCompare.length < 2) {
      toast("Please select at least 2 courses to compare", {
        description: "You can select up to 3 courses."
      });
      return;
    }
    setIsComparisonOpen(true);
  };

  const closeComparison = () => {
    setIsComparisonOpen(false);
  };

  const clearComparison = () => {
    setCoursesToCompare([]);
    toast("Comparison cleared");
  };

  return {
    coursesToCompare,
    isComparisonOpen,
    toggleCourseComparison,
    openComparison,
    closeComparison,
    clearComparison
  };
};
