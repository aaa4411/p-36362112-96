
import React from "react";
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import AddCourseDialog from "./AddCourseDialog";

interface CourseHeaderProps {
  isAddDialogOpen: boolean;
  setIsAddDialogOpen: (isOpen: boolean) => void;
}

const CourseHeader = ({ isAddDialogOpen, setIsAddDialogOpen }: CourseHeaderProps) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold">Course Management</h1>
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogTrigger asChild>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" /> Add Course
          </Button>
        </DialogTrigger>
        <AddCourseDialog 
          isOpen={isAddDialogOpen} 
          onOpenChange={setIsAddDialogOpen}
        />
      </Dialog>
    </div>
  );
};

export default CourseHeader;
