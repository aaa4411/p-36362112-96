
import { useState, useMemo } from "react";
import { Course } from "@/types/course";
import { toast } from "sonner";

type FilterOption = {
  value: string;
  label: string;
};

export const useCourseFilters = (courses: Course[]) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedCredits, setSelectedCredits] = useState("");

  const levelOptions = useMemo(() => {
    const levels = Array.from(new Set(courses.map(c => c.level)));
    return levels.map(level => ({ value: level, label: level }));
  }, [courses]);

  const departmentOptions = useMemo(() => {
    const departments = Array.from(new Set(courses.map(c => c.department)));
    return departments.map(dept => ({ value: dept, label: dept }));
  }, [courses]);

  const creditOptions = useMemo(() => {
    const credits = Array.from(new Set(courses.map(c => c.credits)));
    return credits.map(credit => ({ value: credit.toString(), label: `${credit} Credits` }));
  }, [courses]);

  const filteredCourses = useMemo(() => {
    return courses.filter(course => {
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesSearch = 
          course.title.toLowerCase().includes(query) ||
          course.code.toLowerCase().includes(query) ||
          course.description.toLowerCase().includes(query);
        
        if (!matchesSearch) return false;
      }
      
      if (selectedLevel && course.level !== selectedLevel) {
        return false;
      }
      
      if (selectedDepartment && course.department !== selectedDepartment) {
        return false;
      }
      
      if (selectedCredits && course.credits.toString() !== selectedCredits) {
        return false;
      }
      
      return true;
    });
  }, [courses, searchQuery, selectedLevel, selectedDepartment, selectedCredits]);

  const clearFilters = () => {
    setSelectedLevel("");
    setSelectedDepartment("");
    setSelectedCredits("");
    setSearchQuery("");
    toast("All filters have been cleared");
  };

  // Convert to a proper boolean by checking if any filter has a value
  const hasActiveFilters = !!(selectedLevel || selectedDepartment || selectedCredits || searchQuery);

  return {
    searchQuery,
    selectedLevel,
    selectedDepartment,
    selectedCredits,
    setSearchQuery,
    setSelectedLevel,
    setSelectedDepartment,
    setSelectedCredits,
    levelOptions,
    departmentOptions,
    creditOptions,
    filteredCourses,
    clearFilters,
    hasActiveFilters
  };
};
