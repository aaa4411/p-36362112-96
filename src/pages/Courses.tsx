
import { useState } from "react";
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
import { useCourseFilters } from "@/hooks/useCourseFilters";
import { useCourseComparison } from "@/hooks/useCourseComparison";
import { courses, categories, featuredCourse } from "@/data/coursesData";

const Courses = () => {
  const {
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
  } = useCourseFilters(courses);

  const {
    coursesToCompare,
    isComparisonOpen,
    toggleCourseComparison,
    openComparison,
    closeComparison,
    clearComparison
  } = useCourseComparison();

  const handleViewCourseDetails = (courseId: string) => {
    toast(`Viewing details for course ${courseId}`, {
      description: "Feature coming soon",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <CourseBanner />
      
      <main className="container mx-auto px-4 py-12 md:py-20">
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
              selectedLevel={selectedLevel}
              selectedDepartment={selectedDepartment}
              selectedCredits={selectedCredits}
              searchQuery={searchQuery}
              onLevelChange={setSelectedLevel}
              onDepartmentChange={setSelectedDepartment}
              onCreditsChange={setSelectedCredits}
              onSearchChange={setSearchQuery}
              onClearFilters={clearFilters}
            />
            
            <CourseGrid 
              courses={filteredCourses}
              selectedCourses={coursesToCompare}
              onToggleCourseComparison={toggleCourseComparison}
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
