
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";
import CourseComparison from "@/components/CourseComparison";
import { FeaturedCourse } from "@/components/FeaturedCourse";
import CourseBanner from "@/components/courses/CourseBanner";
import CourseCategories from "@/components/courses/CourseCategories";
import AcademicSupport from "@/components/courses/AcademicSupport";
import CourseListing from "@/components/courses/CourseListing";
import CourseFilters from "@/components/CourseFilters";
import CourseGrid from "@/components/courses/CourseGrid";
import RegistrationInfo from "@/components/courses/RegistrationInfo";
import CourseComparisonBar from "@/components/courses/CourseComparisonBar";
import CourseChartData from "@/components/courses/CourseChartData";
import FavoriteCourses from "@/components/courses/FavoriteCourses";
import SkipToContent from "@/components/SkipToContent";
import { useCourseFilters } from "@/hooks/useCourseFilters";
import { useCourseComparison } from "@/hooks/useCourseComparison";
import { useFavoriteCourses } from "@/hooks/useFavoriteCourses";
import { courses, categories, featuredCourse } from "@/data/coursesData";

const Courses = () => {
  const [searchParams] = useSearchParams();
  
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
    coursesToCompare,
    isComparisonOpen,
    toggleCourseComparison,
    openComparison,
    closeComparison,
    clearComparison
  } = useCourseComparison();

  const {
    favoriteCourses: favoriteCourseIds,
    toggleFavoriteCourse,
    isFavoriteCourse
  } = useFavoriteCourses();

  // Apply search param from URL
  useEffect(() => {
    const searchFromUrl = searchParams.get("search");
    if (searchFromUrl) {
      setSearchQuery(searchFromUrl);
    }
  }, [searchParams, setSearchQuery]);

  const handleViewCourseDetails = (courseId: string) => {
    toast(`Viewing details for course ${courseId}`, {
      description: "Feature coming soon",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SkipToContent />
      <Navbar />
      
      <CourseBanner />
      
      <main id="main-content" className="container mx-auto px-4 py-12 md:py-20">
        <CourseComparisonBar 
          coursesToCompare={coursesToCompare}
          onClearComparison={clearComparison}
          onOpenComparison={openComparison}
        />

        {isComparisonOpen && (
          <CourseComparison 
            courses={coursesToCompare} 
            onClose={closeComparison}
          />
        )}
        
        <div className="mb-16">
          <FeaturedCourse course={featuredCourse} />
        </div>

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
            onViewCourseDetails={handleViewCourseDetails}
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
              onToggleCourseComparison={toggleCourseComparison}
              onToggleFavoriteCourse={toggleFavoriteCourse}
              onViewCourseDetails={handleViewCourseDetails}
              onClearFilters={clearFilters}
            />
            
            <RegistrationInfo />
          </CourseListing>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Courses;
