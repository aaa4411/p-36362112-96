
import React from "react";
import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";
import { CategoryType } from "@/types/course";

type CourseCategoriesProps = {
  categories: CategoryType[];
};

const CourseCategories = ({ categories }: CourseCategoriesProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
        <BookOpen className="h-5 w-5 text-primary" />
        Course Categories
      </h2>
      <ul className="space-y-3">
        {categories.map((category) => (
          <li key={category.name}>
            <Link 
              to={`#${category.name.toLowerCase().replace(/\s+/g, '-')}`} 
              className="flex items-center justify-between text-gray-700 hover:text-primary transition-colors group"
            >
              <span className="group-hover:translate-x-1 transition-transform">{category.name}</span>
              <span className="bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full text-xs font-medium">
                {category.count}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseCategories;
