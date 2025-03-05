
import React from "react";
import { CourseCard } from "@/components/CourseCard";
import { Button } from "@/components/ui/button";
import { Course } from "@/types/course";

type CourseGridProps = {
  courses: Course[];
  selectedCourses: Course[];
  favoriteCourseIds: string[];
  onToggleCourseComparison: (course: Course) => void;
  onToggleFavoriteCourse: (courseId: string, courseName: string) => void;
  onViewCourseDetails: (courseId: string) => void;
  onClearFilters: () => void;
};

const CourseGrid = ({ 
  courses, 
  selectedCourses, 
  favoriteCourseIds,
  onToggleCourseComparison, 
  onToggleFavoriteCourse,
  onViewCourseDetails,
  onClearFilters
}: CourseGridProps) => {
  if (courses.length === 0) {
    return (
      <div className="bg-gray-50 rounded-lg p-12 text-center mb-8 border border-gray-200">
        <div className="text-gray-500 mb-4 font-medium">No courses match your search criteria</div>
        <Button onClick={onClearFilters} variant="outline" size="lg">
          Clear All Filters
        </Button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
      {courses.map((course) => (
        <CourseCard 
          key={course.id}
          course={course}
          isSelected={selectedCourses.some(c => c.id === course.id)}
          isFavorite={favoriteCourseIds.includes(course.id)}
          onToggleComparison={() => onToggleCourseComparison(course)}
          onToggleFavorite={() => onToggleFavoriteCourse(course.id, course.title)}
          onViewDetails={() => onViewCourseDetails(course.id)}
        />
      ))}
    </div>
  );
};

export default CourseGrid;
