
import { useState, useMemo } from "react";
import { Course } from "@/types/course";
import { toast } from "sonner";

type FilterOption = {
  value: string;
  label: string;
};

export type SortOption = "default" | "title-asc" | "title-desc" | "credits-asc" | "credits-desc" | "popularity";

export const useCourseFilters = (courses: Course[]) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedCredits, setSelectedCredits] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("default");

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

  const sortOptions = [
    { value: "default", label: "Default Order" },
    { value: "title-asc", label: "Title (A-Z)" },
    { value: "title-desc", label: "Title (Z-A)" },
    { value: "credits-asc", label: "Credits (Low to High)" },
    { value: "credits-desc", label: "Credits (High to Low)" },
    { value: "popularity", label: "Popularity" },
  ];

  const filteredCourses = useMemo(() => {
    // First apply filters
    const filtered = courses.filter(course => {
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

    // Then sort the filtered results
    return [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "title-asc":
          return a.title.localeCompare(b.title);
        case "title-desc":
          return b.title.localeCompare(a.title);
        case "credits-asc":
          return a.credits - b.credits;
        case "credits-desc":
          return b.credits - a.credits;
        case "popularity":
          const popularityWeight = { "High": 3, "Medium": 2, "Low": 1, undefined: 0 };
          return (popularityWeight[b.popularity ?? undefined] || 0) - (popularityWeight[a.popularity ?? undefined] || 0);
        default:
          return 0;
      }
    });
  }, [courses, searchQuery, selectedLevel, selectedDepartment, selectedCredits, sortBy]);

  const clearFilters = () => {
    setSelectedLevel("");
    setSelectedDepartment("");
    setSelectedCredits("");
    setSearchQuery("");
    setSortBy("default");
    toast("All filters have been cleared");
  };

  // Convert to a proper boolean by checking if any filter has a value
  const hasActiveFilters = !!(selectedLevel || selectedDepartment || selectedCredits || searchQuery || sortBy !== "default");

  // Custom handler for setting sort by string value
  const handleSortChange = (sort: string) => {
    setSortBy(sort as SortOption);
  };

  return {
    searchQuery,
    selectedLevel,
    selectedDepartment,
    selectedCredits,
    sortBy,
    setSearchQuery,
    setSelectedLevel,
    setSelectedDepartment,
    setSelectedCredits,
    setSortBy: handleSortChange,
    levelOptions,
    departmentOptions,
    creditOptions,
    sortOptions,
    filteredCourses,
    clearFilters,
    hasActiveFilters
  };
};
