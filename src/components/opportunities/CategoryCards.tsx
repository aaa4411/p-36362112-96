
import React from "react";
import { 
  Briefcase, 
  BookOpen, 
  Users, 
  Award,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

interface CategoryCardsProps {
  handleFilterClick: (type: string) => void;
}

const CategoryCards: React.FC<CategoryCardsProps> = ({ handleFilterClick }) => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8">Browse by Category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="text-center hover:shadow-md transition-shadow group hover:border-primary/50">
          <CardHeader>
            <div className="mx-auto bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
              <Briefcase className="h-8 w-8 text-blue-600" />
            </div>
            <CardTitle className="mt-4">Internships</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Gain practical experience in the technology industry through our partner companies.
            </p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button 
              variant="outline" 
              onClick={() => handleFilterClick("internship")}
              className="group-hover:border-blue-600 group-hover:text-blue-600 transition-colors"
            >
              View All Internships
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </CardFooter>
        </Card>
        
        <Card className="text-center hover:shadow-md transition-shadow group hover:border-primary/50">
          <CardHeader>
            <div className="mx-auto bg-purple-100 p-3 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-purple-200 transition-colors">
              <BookOpen className="h-8 w-8 text-purple-600" />
            </div>
            <CardTitle className="mt-4">Research</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Work alongside faculty members on cutting-edge research projects in various computing fields.
            </p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button 
              variant="outline"
              onClick={() => handleFilterClick("research")}
              className="group-hover:border-purple-600 group-hover:text-purple-600 transition-colors"
            >
              View Research Opportunities
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </CardFooter>
        </Card>
        
        <Card className="text-center hover:shadow-md transition-shadow group hover:border-primary/50">
          <CardHeader>
            <div className="mx-auto bg-green-100 p-3 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-green-200 transition-colors">
              <Users className="h-8 w-8 text-green-600" />
            </div>
            <CardTitle className="mt-4">Campus Jobs</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Find part-time positions that fit your schedule and help you develop professional skills.
            </p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button 
              variant="outline"
              onClick={() => handleFilterClick("job")}
              className="group-hover:border-green-600 group-hover:text-green-600 transition-colors"
            >
              View Campus Jobs
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </CardFooter>
        </Card>
        
        <Card className="text-center hover:shadow-md transition-shadow group hover:border-primary/50">
          <CardHeader>
            <div className="mx-auto bg-amber-100 p-3 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-amber-200 transition-colors">
              <Award className="h-8 w-8 text-amber-600" />
            </div>
            <CardTitle className="mt-4">Scholarships</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Explore financial support opportunities available to computing and information students.
            </p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button 
              variant="outline"
              onClick={() => handleFilterClick("scholarship")}
              className="group-hover:border-amber-600 group-hover:text-amber-600 transition-colors"
            >
              View Scholarships
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default CategoryCards;
