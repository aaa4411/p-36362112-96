
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Opportunity } from "@/types/opportunity";

interface ApplicationDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  selectedOpportunity: Opportunity | null;
  isApplying: boolean;
  onSubmit: () => void;
}

const ApplicationDialog: React.FC<ApplicationDialogProps> = ({
  isOpen,
  onOpenChange,
  selectedOpportunity,
  isApplying,
  onSubmit
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Apply for {selectedOpportunity?.title}</DialogTitle>
          <DialogDescription>
            Complete this form to submit your application for this opportunity.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="resume" className="text-right text-sm font-medium col-span-1">
              Resume
            </label>
            <Input id="resume" type="file" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="coverLetter" className="text-right text-sm font-medium col-span-1">
              Cover Letter
            </label>
            <Input id="coverLetter" type="file" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="email" className="text-right text-sm font-medium col-span-1">
              Email
            </label>
            <Input id="email" type="email" placeholder="your.email@example.com" className="col-span-3" />
          </div>
        </div>
        <DialogFooter className="sm:justify-end">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>
          <Button
            onClick={onSubmit}
            isLoading={isApplying}
          >
            {isApplying ? "Submitting..." : "Submit Application"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ApplicationDialog;
