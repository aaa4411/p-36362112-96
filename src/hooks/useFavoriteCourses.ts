
import { useState, useEffect } from "react";
import { Course } from "@/types/course";
import { toast } from "sonner";

export const useFavoriteCourses = () => {
  const [favoriteCourses, setFavoriteCourses] = useState<string[]>(() => {
    // Load favorites from localStorage on initialization
    const saved = localStorage.getItem("favoriteCourses");
    return saved ? JSON.parse(saved) : [];
  });

  // Save to localStorage whenever favoriteCourses changes
  useEffect(() => {
    localStorage.setItem("favoriteCourses", JSON.stringify(favoriteCourses));
  }, [favoriteCourses]);

  const toggleFavoriteCourse = (courseId: string, courseName: string) => {
    setFavoriteCourses(prev => {
      if (prev.includes(courseId)) {
        toast(`Removed ${courseName} from favorites`);
        return prev.filter(id => id !== courseId);
      } else {
        toast(`Added ${courseName} to favorites`);
        return [...prev, courseId];
      }
    });
  };

  const isFavoriteCourse = (courseId: string) => {
    return favoriteCourses.includes(courseId);
  };

  return {
    favoriteCourses,
    toggleFavoriteCourse,
    isFavoriteCourse
  };
};
