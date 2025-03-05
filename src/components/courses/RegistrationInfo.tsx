
import React from "react";
import { Button } from "@/components/ui/button";

const RegistrationInfo = () => {
  return (
    <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
      <h3 className="text-xl font-bold mb-3">Registration Information</h3>
      <p className="text-gray-700 mb-6">
        Course registration for the Fall 2024 semester opens on July 1, 2024. Continuing students may register online through the student portal. New students should contact the registrar's office for assistance.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button>Registration Portal</Button>
        <Button variant="outline">Academic Calendar</Button>
        <Button variant="outline">Contact Registrar</Button>
      </div>
    </div>
  );
};

export default RegistrationInfo;
