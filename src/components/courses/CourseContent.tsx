
import React from "react";
import { Course, CategoryType } from "@/types/course";
import { useCourseFilters } from "@/hooks/useCourseFilters";
import { useFavoriteCourses } from "@/hooks/useFavoriteCourses";
import CourseCategories from "./CourseCategories";
import CourseChartData from "./CourseChartData";
import AcademicSupport from "./AcademicSupport";
import CourseListing from "./CourseListing";
import CourseFilters from "@/components/CourseFilters";
import CourseGrid from "./CourseGrid";
import RegistrationInfo from "./RegistrationInfo";
import FavoriteCourses from "./FavoriteCourses";
import { categories } from "@/data/coursesData";

type CourseContentProps = {
  courses: Course[];
  coursesToCompare: Course[];
  onToggleCourseComparison: (course: Course) => void;
  onViewCourseDetails: (courseId: string) => void;
};

const CourseContent = ({ 
  courses, 
  coursesToCompare, 
  onToggleCourseComparison, 
  onViewCourseDetails 
}: CourseContentProps) => {
  const {
    searchQuery,
    selectedLevel,
    selectedDepartment,
    selectedCredits,
    sortBy,
    setSearchQuery,
    setSelectedLevel,
    setSelectedDepartment,
    setSelectedCredits,
    setSortBy,
    levelOptions,
    departmentOptions,
    creditOptions,
    sortOptions,
    filteredCourses,
    clearFilters,
    hasActiveFilters
  } = useCourseFilters(courses);

  const {
    favoriteCourses: favoriteCourseIds,
    toggleFavoriteCourse,
    isFavoriteCourse
  } = useFavoriteCourses();

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold">Course Catalog</h1>
          <span className="bg-gray-100 text-gray-600 text-sm px-2 py-0.5 rounded-full">
            {courses.length} Courses
          </span>
        </div>
        <FavoriteCourses 
          favoriteCourseIds={favoriteCourseIds}
          allCourses={courses}
          onRemoveFavorite={toggleFavoriteCourse}
          onViewCourseDetails={onViewCourseDetails}
        />
      </div>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/4 space-y-6">
          <CourseCategories categories={categories} />
          <CourseChartData courses={courses} />
          <AcademicSupport />
        </div>
        
        <CourseListing 
          courses={courses}
          filteredCoursesCount={filteredCourses.length}
          hasFilters={hasActiveFilters}
        >
          <CourseFilters
            levels={levelOptions}
            departments={departmentOptions}
            credits={creditOptions}
            sortOptions={sortOptions}
            selectedLevel={selectedLevel}
            selectedDepartment={selectedDepartment}
            selectedCredits={selectedCredits}
            selectedSort={sortBy}
            searchQuery={searchQuery}
            onLevelChange={setSelectedLevel}
            onDepartmentChange={setSelectedDepartment}
            onCreditsChange={setSelectedCredits}
            onSortChange={setSortBy}
            onSearchChange={setSearchQuery}
            onClearFilters={clearFilters}
          />
          
          <CourseGrid 
            courses={filteredCourses}
            selectedCourses={coursesToCompare}
            favoriteCourseIds={favoriteCourseIds}
            onToggleCourseComparison={onToggleCourseComparison}
            onToggleFavoriteCourse={toggleFavoriteCourse}
            onViewCourseDetails={onViewCourseDetails}
            onClearFilters={clearFilters}
          />
          
          <RegistrationInfo />
        </CourseListing>
      </div>
    </>
  );
};

export default CourseContent;
