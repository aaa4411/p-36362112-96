
import React from "react";
import { Button } from "@/components/ui/button";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle, 
} from "@/components/ui/dialog";
import { Course } from "@/types/course";
import { toast } from "sonner";

interface EditCourseDialogProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  selectedCourse: Course | null;
}

const EditCourseDialog = ({ isOpen, onOpenChange, selectedCourse }: EditCourseDialogProps) => {
  return (
    <DialogContent className="sm:max-w-[600px]">
      <DialogHeader>
        <DialogTitle>Edit Course</DialogTitle>
        <DialogDescription>
          Update the course details. Click save when you're done.
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        {selectedCourse && (
          <div className="border p-4 rounded-md bg-gray-50">
            <p className="font-semibold">{selectedCourse.title}</p>
            <p className="text-sm text-gray-600">{selectedCourse.code}</p>
          </div>
        )}
        {/* Edit course form would go here */}
        <p className="text-gray-500 text-center">Course editing form would be implemented here</p>
      </div>
      <DialogFooter>
        <Button variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
        <Button onClick={() => {
          onOpenChange(false);
          toast.success("Course updated successfully");
        }}>Save Changes</Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default EditCourseDialog;
