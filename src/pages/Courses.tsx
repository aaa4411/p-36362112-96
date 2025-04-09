
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { courses, featuredCourse } from "@/data/coursesData";
import CoursePageLayout from "@/components/courses/CoursePageLayout";

const Courses = () => {
  const [searchParams] = useSearchParams();
  
  // Apply search param from URL to be handled by children components
  useEffect(() => {
    // This effect will be passed down to child components via props if needed
    // It's kept here for handling URL parameters at the page level
  }, [searchParams]);

  return <CoursePageLayout courses={courses} featuredCourse={featuredCourse} />;
};

export default Courses;
