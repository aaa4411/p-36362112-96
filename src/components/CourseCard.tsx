
import React from 'react';
import { Check, PlusCircle, ArrowRight, UserCircle2, CalendarDays, Heart, Code, Layers, Database, GraduationCap, Server, Globe, Shield, Users, Book } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Course } from "@/types/course";

interface CourseCardProps {
  course: Course;
  isSelected: boolean;
  isFavorite: boolean;
  onToggleComparison: () => void;
  onToggleFavorite: () => void;
  onViewDetails: () => void;
}

const getEnrollmentStatusColor = (status?: "Open" | "Closing Soon" | "Closed") => {
  switch (status) {
    case "Open": return "bg-green-100 text-green-800";
    case "Closing Soon": return "bg-amber-100 text-amber-800";
    case "Closed": return "bg-red-100 text-red-800";
    default: return "bg-gray-100 text-gray-800";
  }
};

const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case "code": return <Code className="h-8 w-8 text-primary" />;
    case "layers": return <Layers className="h-8 w-8 text-primary" />;
    case "database": return <Database className="h-8 w-8 text-primary" />;
    case "graduationCap": return <GraduationCap className="h-8 w-8 text-primary" />;
    case "server": return <Server className="h-8 w-8 text-primary" />;
    case "globe": return <Globe className="h-8 w-8 text-primary" />;
    case "shield": return <Shield className="h-8 w-8 text-primary" />;
    case "users": return <Users className="h-8 w-8 text-primary" />;
    case "book": return <Book className="h-8 w-8 text-primary" />;
    default: return <Book className="h-8 w-8 text-primary" />;
  }
};

export const CourseCard: React.FC<CourseCardProps> = ({
  course,
  isSelected,
  isFavorite,
  onToggleComparison,
  onToggleFavorite,
  onViewDetails,
}) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md hover:border-primary/20">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start">
          <div className="bg-primary/10 rounded-lg p-2">{getIconComponent(course.iconName)}</div>
          <div className="flex gap-2">
            <Badge variant="outline" className={cn(
              "font-medium", 
              course.level === "Undergraduate" ? "text-blue-700 bg-blue-50" : "text-purple-700 bg-purple-50"
            )}>
              {course.level}
            </Badge>
            <button 
              onClick={onToggleFavorite}
              className={`p-1.5 rounded-full transition-all ${isFavorite 
                ? 'bg-red-100 text-red-500' 
                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
              aria-label={isFavorite 
                ? `Remove ${course.title} from favorites` 
                : `Add ${course.title} to favorites`}
            >
              <Heart className={`h-4 w-4 ${isFavorite ? 'fill-red-500' : ''}`} />
            </button>
            <button 
              onClick={onToggleComparison}
              className={`p-1.5 rounded-full transition-all ${isSelected 
                ? 'bg-primary/10 text-primary' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              aria-label={isSelected 
                ? `Remove ${course.title} from comparison` 
                : `Add ${course.title} to comparison`}
            >
              {isSelected 
                ? <Check className="h-4 w-4" /> 
                : <PlusCircle className="h-4 w-4" />}
            </button>
          </div>
        </div>
        <div className="mt-4">
          <div className="text-sm font-medium text-gray-500">{course.code}</div>
          <CardTitle className="mt-1">{course.title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="line-clamp-3 mb-4">{course.description}</CardDescription>
        
        {course.instructor && (
          <div className="flex items-center text-sm mb-4">
            <UserCircle2 className="h-4 w-4 text-primary mr-2" />
            <span className="text-gray-700">{course.instructor}</span>
          </div>
        )}
        
        {course.startDate && (
          <div className="flex items-center text-sm mb-4">
            <CalendarDays className="h-4 w-4 text-primary mr-2" />
            <span className="text-gray-700">Starts {course.startDate}</span>
          </div>
        )}
        
        <div className="flex flex-wrap gap-y-4 gap-x-4 mt-4 mb-2">
          <div>
            <div className="text-xs uppercase tracking-wider text-gray-500 mb-1">Department</div>
            <div className="text-sm font-medium">{course.department}</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-gray-500 mb-1">Credits</div>
            <div className="text-sm font-medium">{course.credits}</div>
          </div>
          {course.enrollmentStatus && (
            <div>
              <div className="text-xs uppercase tracking-wider text-gray-500 mb-1">Status</div>
              <div className={`text-sm font-medium px-2.5 py-0.5 rounded-full inline-block ${getEnrollmentStatusColor(course.enrollmentStatus)}`}>
                {course.enrollmentStatus}
              </div>
            </div>
          )}
        </div>
        
        {course.prerequisites.length > 0 && (
          <div className="mt-4 text-sm">
            <div className="text-xs uppercase tracking-wider text-gray-500 mb-1">Prerequisites</div>
            <div className="text-sm">{course.prerequisites.join(", ")}</div>
          </div>
        )}
      </CardContent>
      <CardFooter className="pt-0">
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full flex items-center justify-center hover:border-primary hover:text-primary"
          onClick={onViewDetails}
        >
          <span>View Course Details</span>
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};
