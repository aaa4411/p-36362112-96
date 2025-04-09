
import React from "react";
import { Button } from "@/components/ui/button";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";
import { toast } from "sonner";

interface AddCourseDialogProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

const AddCourseDialog = ({ isOpen, onOpenChange }: AddCourseDialogProps) => {
  return (
    <DialogContent className="sm:max-w-[600px]">
      <DialogHeader>
        <DialogTitle>Add New Course</DialogTitle>
        <DialogDescription>
          Enter the details for the new course. Click save when you're done.
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        {/* Add course form would go here */}
        <p className="text-gray-500 text-center">Course creation form would be implemented here</p>
      </div>
      <DialogFooter>
        <Button variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
        <Button onClick={() => {
          onOpenChange(false);
          toast.success("Course created successfully");
        }}>Save Course</Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default AddCourseDialog;
