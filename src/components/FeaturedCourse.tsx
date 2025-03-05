import React from 'react';
import { 
  GraduationCap,
  Users,
  CalendarDays,
  Clock,
  ArrowRight,
  Code,
  Layers,
  Database,
  Server,
  Globe,
  Shield,
  Book
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Course } from "@/types/course";

interface FeaturedCourseProps {
  course: Course;
}

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

export const FeaturedCourse: React.FC<FeaturedCourseProps> = ({ course }) => {
  return (
    <div className="relative overflow-hidden bg-white rounded-xl shadow-md border border-gray-100">
      <div className="absolute top-0 right-0 px-3 py-1 bg-primary text-white text-xs font-semibold tracking-wider uppercase rounded-bl-lg">
        Featured
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-8 md:p-10">
          <div className="inline-block mb-4 p-3 bg-primary/10 rounded-lg">
            {getIconComponent(course.iconName)}
          </div>
          
          <div className="mb-3">
            <Badge variant="outline" className="text-sm font-medium">
              {course.department}
            </Badge>
            <span className="ml-2 text-sm text-gray-500">{course.code}</span>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-3">{course.title}</h2>
          <p className="text-gray-600 mb-6">
            {course.description}
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center">
              <Users className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm text-gray-600">{course.instructor}</span>
            </div>
            
            <div className="flex items-center">
              <CalendarDays className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm text-gray-600">Starts {course.startDate}</span>
            </div>
            
            <div className="flex items-center">
              <Clock className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm text-gray-600">{course.credits} Credits</span>
            </div>
          </div>
          
          <div className="space-x-3">
            <Button>
              Enroll Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline">Learn More</Button>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-primary/60 to-primary p-8 md:p-10 text-white flex items-center">
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <GraduationCap className="mr-2 h-5 w-5" />
              Why Take This Course?
            </h3>
            
            <ul className="space-y-4">
              <li className="flex">
                <div className="mr-3 flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                  <span className="text-sm font-medium">1</span>
                </div>
                <div>
                  <h4 className="font-medium">Industry-Relevant Skills</h4>
                  <p className="text-white/80 text-sm">Learn practical skills that are in high demand across industries.</p>
                </div>
              </li>
              
              <li className="flex">
                <div className="mr-3 flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                  <span className="text-sm font-medium">2</span>
                </div>
                <div>
                  <h4 className="font-medium">Expert Instruction</h4>
                  <p className="text-white/80 text-sm">Learn from renowned faculty with extensive industry experience.</p>
                </div>
              </li>
              
              <li className="flex">
                <div className="mr-3 flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                  <span className="text-sm font-medium">3</span>
                </div>
                <div>
                  <h4 className="font-medium">Hands-on Projects</h4>
                  <p className="text-white/80 text-sm">Apply concepts through practical projects and real-world case studies.</p>
                </div>
              </li>
            </ul>
            
            <div className="mt-8 p-4 bg-white/10 rounded-lg">
              <div className="text-sm font-medium mb-1">Enrollment Status</div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></span>
                  <span>{course.enrollmentStatus}</span>
                </div>
                <span className="text-sm bg-white/20 px-2 py-0.5 rounded">
                  Limited Seats
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
