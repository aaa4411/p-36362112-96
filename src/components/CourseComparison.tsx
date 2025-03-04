
import React from "react";
import { X, Check, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
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
};

interface CourseComparisonProps {
  courses: Course[];
  onClose: () => void;
}

const CourseComparison = ({ courses, onClose }: CourseComparisonProps) => {
  const compareAttributes = [
    { name: "Course Code", getValue: (course: Course) => course.code },
    { name: "Title", getValue: (course: Course) => course.title },
    { name: "Department", getValue: (course: Course) => course.department },
    { name: "Level", getValue: (course: Course) => course.level },
    { name: "Credits", getValue: (course: Course) => course.credits.toString() },
    {
      name: "Prerequisites",
      getValue: (course: Course) => 
        course.prerequisites.length > 0 
          ? course.prerequisites.join(", ") 
          : "None"
    }
  ];

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl">Course Comparison</DialogTitle>
          <DialogDescription>
            Compare course details side-by-side to help you make informed decisions.
          </DialogDescription>
        </DialogHeader>

        <div className="overflow-x-auto pb-4">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="py-4 px-2 text-left w-1/4 font-medium text-gray-500">
                  Feature
                </th>
                {courses.map((course) => (
                  <th 
                    key={course.id}
                    className="py-4 px-2 text-left w-1/4 border-l border-gray-200"
                  >
                    <div className="flex items-center gap-2">
                      <div className="bg-primary/10 p-1 rounded">
                        {course.icon}
                      </div>
                      <div className="font-semibold">{course.code}</div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {compareAttributes.map((attribute) => (
                <tr 
                  key={attribute.name} 
                  className="border-t border-gray-200 hover:bg-gray-50"
                >
                  <td className="py-4 px-2 font-medium">{attribute.name}</td>
                  {courses.map((course) => (
                    <td 
                      key={course.id}
                      className="py-4 px-2 border-l border-gray-200"
                    >
                      {attribute.getValue(course)}
                    </td>
                  ))}
                </tr>
              ))}
              <tr className="border-t border-gray-200 hover:bg-gray-50">
                <td className="py-4 px-2 font-medium">Description</td>
                {courses.map((course) => (
                  <td 
                    key={course.id}
                    className="py-4 px-2 border-l border-gray-200"
                  >
                    <p className="text-sm text-gray-700">{course.description}</p>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Close Comparison
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CourseComparison;
