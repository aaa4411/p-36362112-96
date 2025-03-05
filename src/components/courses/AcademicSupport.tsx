
import React from "react";
import { Award, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const AcademicSupport = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
        <Award className="h-5 w-5 text-primary" />
        Academic Support
      </h2>
      <p className="text-gray-700 mb-6">
        Need course selection guidance or registration assistance? Our academic advisors are here to help you succeed.
      </p>
      <div className="space-y-3">
        <Button className="w-full">Contact Advisor</Button>
        <Button variant="outline" className="w-full">View FAQ</Button>
      </div>
      
      <Separator className="my-6" />
      
      <div className="bg-primary/5 p-4 rounded-lg">
        <h3 className="font-medium text-primary mb-2">Next Registration Period</h3>
        <div className="flex items-center gap-2 text-sm">
          <CalendarDays className="h-4 w-4 text-primary" />
          <span>July 1, 2024 - August 15, 2024</span>
        </div>
      </div>
    </div>
  );
};

export default AcademicSupport;
