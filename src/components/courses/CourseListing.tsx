
import React from "react";
import { Book, Clock } from "lucide-react";
import { Course } from "@/types/course";

type CourseListingProps = {
  courses: Course[];
  filteredCoursesCount: number;
  hasFilters: boolean;
  children: React.ReactNode;
};

const CourseListing = ({ courses, filteredCoursesCount, hasFilters, children }: CourseListingProps) => {
  return (
    <div className="lg:w-3/4">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-8">
        <h2 className="text-2xl font-bold mb-2">Course Listings</h2>
        <p className="text-gray-700 mb-4">
          Browse through our available courses. Select any course for detailed information including syllabus, instructors, and registration details.
        </p>
        
        <div className="flex flex-wrap gap-4 mt-6">
          <div className="flex items-center text-sm text-gray-600 bg-gray-50 rounded-full px-3 py-1.5">
            <Clock size={16} className="mr-2 text-primary/70" />
            <span>Last updated: June 15, 2024</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600 bg-gray-50 rounded-full px-3 py-1.5">
            <Book size={16} className="mr-2 text-primary/70" />
            <span>{courses.length} Total Courses</span>
          </div>
        </div>
      </div>
      
      {children}
      
      <div className="mb-6 font-medium text-gray-600">
        Found <span className="text-primary font-semibold">{filteredCoursesCount}</span> courses
        {hasFilters && " matching your criteria"}
      </div>
    </div>
  );
};

export default CourseListing;
