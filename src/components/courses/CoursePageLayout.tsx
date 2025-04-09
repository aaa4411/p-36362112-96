
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SkipToContent from "@/components/SkipToContent";
import CourseComparisonBar from "./CourseComparisonBar";
import CourseComparison from "@/components/CourseComparison";
import { FeaturedCourse } from "@/components/FeaturedCourse";
import CourseBanner from "./CourseBanner";
import CourseContent from "./CourseContent";
import { Course } from "@/types/course";
import { toast } from "sonner";
import { useCourseComparison } from "@/hooks/useCourseComparison";

type CoursePageLayoutProps = {
  courses: Course[];
  featuredCourse: Course;
};

const CoursePageLayout = ({ courses, featuredCourse }: CoursePageLayoutProps) => {
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

        <CourseContent 
          courses={courses} 
          coursesToCompare={coursesToCompare}
          onToggleCourseComparison={toggleCourseComparison}
          onViewCourseDetails={handleViewCourseDetails}
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default CoursePageLayout;
