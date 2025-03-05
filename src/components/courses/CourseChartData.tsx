
import React, { useMemo } from "react";
import CourseDistributionChart from "@/components/CourseDistributionChart";
import { Course } from "@/types/course";
import { generateChartColors } from "@/lib/utils";

type CourseChartDataProps = {
  courses: Course[];
};

const CourseChartData = ({ courses }: CourseChartDataProps) => {
  const chartData = useMemo(() => {
    const departments = Array.from(new Set(courses.map(c => c.department)));
    
    const data = departments.map(dept => {
      const count = courses.filter(c => c.department === dept).length;
      return {
        name: dept,
        value: count
      };
    });
    
    const colors = generateChartColors(departments.length);
    
    return data.map((item, index) => ({
      ...item,
      color: colors[index]
    }));
  }, [courses]);

  return <CourseDistributionChart data={chartData} />;
};

export default CourseChartData;
