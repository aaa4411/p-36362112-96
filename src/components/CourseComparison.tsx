
import React from "react";
import { X, Check, Minus, UserCircle2, CalendarDays, Clock, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

type Course = {
  id: string;
  code: string;
  title: string;
  description: string;
  level: string;
  credits: number;
  prerequisites: string[];
  department: string;
  icon: React.ReactNode;
  instructor?: string;
  enrollmentStatus?: "Open" | "Closing Soon" | "Closed";
  startDate?: string;
  popularity?: "High" | "Medium" | "Low";
};

interface CourseComparisonProps {
  courses: Course[];
  onClose: () => void;
}

const getEnrollmentStatusColor = (status?: "Open" | "Closing Soon" | "Closed") => {
  switch (status) {
    case "Open": return "bg-green-100 text-green-800";
    case "Closing Soon": return "bg-amber-100 text-amber-800";
    case "Closed": return "bg-red-100 text-red-800";
    default: return "bg-gray-100 text-gray-800";
  }
};

const CourseComparison = ({ courses, onClose }: CourseComparisonProps) => {
  const compareAttributes = [
    { 
      name: "Course Code", 
      icon: <BookOpen className="h-4 w-4 text-primary mr-2" />,
      getValue: (course: Course) => course.code 
    },
    { 
      name: "Title", 
      icon: null,
      getValue: (course: Course) => course.title 
    },
    { 
      name: "Department", 
      icon: null,
      getValue: (course: Course) => course.department 
    },
    { 
      name: "Level", 
      icon: null,
      getValue: (course: Course) => (
        <Badge variant="outline" className={course.level === "Undergraduate" ? "text-blue-700 bg-blue-50" : "text-purple-700 bg-purple-50"}>
          {course.level}
        </Badge>
      )
    },
    { 
      name: "Credits", 
      icon: <Clock className="h-4 w-4 text-primary mr-2" />,
      getValue: (course: Course) => course.credits.toString() 
    },
    {
      name: "Prerequisites",
      icon: null,
      getValue: (course: Course) => 
        course.prerequisites.length > 0 
          ? course.prerequisites.join(", ") 
          : "None"
    },
    {
      name: "Instructor",
      icon: <UserCircle2 className="h-4 w-4 text-primary mr-2" />,
      getValue: (course: Course) => course.instructor || "TBA"
    },
    {
      name: "Start Date",
      icon: <CalendarDays className="h-4 w-4 text-primary mr-2" />,
      getValue: (course: Course) => course.startDate || "TBA"
    },
    {
      name: "Enrollment Status",
      icon: null,
      getValue: (course: Course) => course.enrollmentStatus ? (
        <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${getEnrollmentStatusColor(course.enrollmentStatus)}`}>
          {course.enrollmentStatus}
        </span>
      ) : "Unknown"
    }
  ];

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Course Comparison</DialogTitle>
          <DialogDescription>
            Compare course details side-by-side to help you make informed decisions about your academic path.
          </DialogDescription>
        </DialogHeader>

        <div className="overflow-x-auto pb-4">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="py-4 px-4 text-left font-medium text-gray-500 sticky left-0 bg-gray-50 z-10 border-b border-gray-200">
                  Feature
                </th>
                {courses.map((course) => (
                  <th 
                    key={course.id}
                    className="py-4 px-4 text-left border-l border-b border-gray-200"
                  >
                    <div className="flex items-center gap-2">
                      <div className="bg-primary/10 p-1.5 rounded-lg">
                        {course.icon}
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">{course.code}</div>
                        <div className="font-semibold">{course.title}</div>
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {compareAttributes.map((attribute) => (
                <tr 
                  key={attribute.name} 
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="py-4 px-4 font-medium sticky left-0 bg-white z-10 border-r border-gray-100 flex items-center">
                    {attribute.icon}
                    {attribute.name}
                  </td>
                  {courses.map((course) => (
                    <td 
                      key={course.id}
                      className="py-4 px-4 border-l border-gray-200"
                    >
                      {attribute.getValue(course)}
                    </td>
                  ))}
                </tr>
              ))}
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="py-4 px-4 font-medium sticky left-0 bg-white z-10 border-r border-gray-100">Description</td>
                {courses.map((course) => (
                  <td 
                    key={course.id}
                    className="py-4 px-4 border-l border-gray-200"
                  >
                    <p className="text-sm text-gray-700">{course.description}</p>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-600 mb-4">
          Compare key features across selected courses. To add or remove courses from comparison, use the checkbox on each course card.
        </div>

        <DialogFooter className="flex flex-col-reverse sm:flex-row gap-2">
          <Button variant="outline" onClick={onClose} className="w-full sm:w-auto">
            Close Comparison
          </Button>
          <Button className="w-full sm:w-auto">
            Download Comparison
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CourseComparison;
