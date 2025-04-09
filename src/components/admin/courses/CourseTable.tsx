
import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Course } from "@/types/course";
import CourseStatusBadge from "./CourseStatusBadge";
import CourseActions from "./CourseActions";

interface CourseTableProps {
  courses: Course[];
  onEditCourse: (course: Course) => void;
  onDeleteCourse: (courseId: string) => void;
  onStatusChange: (courseId: string, newStatus: "Open" | "Closing Soon" | "Closed") => void;
}

const CourseTable = ({ 
  courses, 
  onEditCourse, 
  onDeleteCourse, 
  onStatusChange 
}: CourseTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[120px]">Code</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Department</TableHead>
          <TableHead>Credits</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {courses.map((course) => (
          <TableRow key={course.id}>
            <TableCell className="font-medium">{course.code}</TableCell>
            <TableCell>{course.title}</TableCell>
            <TableCell>{course.department}</TableCell>
            <TableCell>{course.credits}</TableCell>
            <TableCell>
              <CourseStatusBadge 
                status={course.enrollmentStatus || "Unknown"} 
                courseId={course.id}
                onStatusChange={onStatusChange}
              />
            </TableCell>
            <TableCell className="text-right">
              <CourseActions 
                course={course} 
                onEdit={onEditCourse} 
                onDelete={onDeleteCourse} 
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CourseTable;
