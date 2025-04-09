
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog } from "@/components/ui/dialog";
import { courses } from "@/data/coursesData";
import { Course } from "@/types/course";
import { toast } from "sonner";

// Import our new components
import CourseHeader from "@/components/admin/courses/CourseHeader";
import CourseSearch from "@/components/admin/courses/CourseSearch";
import CourseTable from "@/components/admin/courses/CourseTable";
import EditCourseDialog from "@/components/admin/courses/EditCourseDialog";

const AdminCourses = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [managedCourses, setManagedCourses] = useState([...courses]);

  const filteredCourses = managedCourses.filter(course => 
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.department.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleEditCourse = (course: Course) => {
    setSelectedCourse(course);
    setIsEditDialogOpen(true);
  };

  const handleDeleteCourse = (courseId: string) => {
    // In a real app, this would be an API call
    setManagedCourses(managedCourses.filter(course => course.id !== courseId));
    toast.success("Course deleted successfully");
  };

  const handleStatusChange = (courseId: string, newStatus: "Open" | "Closing Soon" | "Closed") => {
    // In a real app, this would be an API call
    setManagedCourses(managedCourses.map(course => 
      course.id === courseId ? {...course, enrollmentStatus: newStatus} : course
    ));
    toast.success(`Course status updated to ${newStatus}`);
  };

  return (
    <div>
      <CourseHeader 
        isAddDialogOpen={isAddDialogOpen}
        setIsAddDialogOpen={setIsAddDialogOpen}
      />
      
      <Card className="mb-6">
        <CardContent className="pt-6">
          <CourseSearch 
            searchQuery={searchQuery} 
            onSearchChange={setSearchQuery} 
          />
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>All Courses</CardTitle>
          <CardDescription>
            Showing {filteredCourses.length} of {managedCourses.length} total courses
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CourseTable 
            courses={filteredCourses}
            onEditCourse={handleEditCourse}
            onDeleteCourse={handleDeleteCourse}
            onStatusChange={handleStatusChange}
          />
        </CardContent>
      </Card>
      
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <EditCourseDialog 
          isOpen={isEditDialogOpen}
          onOpenChange={setIsEditDialogOpen}
          selectedCourse={selectedCourse}
        />
      </Dialog>
    </div>
  );
};

export default AdminCourses;
