
import React from "react";
import { Button } from "@/components/ui/button";

const CourseBanner = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-primary/80 text-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 font-playfair">Course Catalog</h1>
          <p className="text-lg md:text-xl opacity-90">
            Explore our comprehensive range of computing and information technology courses designed to prepare you for success in the digital world.
          </p>
          <div className="flex gap-4 mt-8">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              Browse Courses
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              Academic Calendar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseBanner;
