
import React from "react";
import { GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const CareerCallToAction: React.FC = () => {
  return (
    <section>
      <div className="bg-primary rounded-lg p-8 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <GraduationCap className="h-12 w-12 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Ready to Launch Your Career?</h2>
          <p className="text-xl mb-8">
            Our Career Services team is here to help you find the perfect opportunity and prepare for success.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="secondary">Schedule Advising</Button>
            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
              Upload Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerCallToAction;
