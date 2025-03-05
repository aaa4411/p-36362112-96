
import React from "react";
import { Heart, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { Course } from "@/types/course";

type FavoriteCoursesProps = {
  favoriteCourseIds: string[];
  allCourses: Course[];
  onRemoveFavorite: (courseId: string, courseName: string) => void;
  onViewCourseDetails: (courseId: string) => void;
};

const FavoriteCourses = ({
  favoriteCourseIds,
  allCourses,
  onRemoveFavorite,
  onViewCourseDetails,
}: FavoriteCoursesProps) => {
  const favoriteCourses = allCourses.filter(course => 
    favoriteCourseIds.includes(course.id)
  );

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button 
          variant="outline" 
          size="sm"
          className="flex items-center gap-2"
        >
          <Heart className={`h-4 w-4 ${favoriteCourseIds.length > 0 ? 'fill-red-500 text-red-500' : ''}`} />
          <span>Favorites</span>
          {favoriteCourseIds.length > 0 && (
            <span className="bg-primary/10 text-primary text-xs px-1.5 py-0.5 rounded-full">
              {favoriteCourseIds.length}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-red-500" /> 
            Favorite Courses
          </SheetTitle>
          <SheetDescription>
            Your saved courses for quick access.
          </SheetDescription>
        </SheetHeader>
        
        <div className="mt-6 flex flex-col gap-4 max-h-[calc(100vh-200px)] overflow-y-auto">
          {favoriteCourses.length === 0 ? (
            <div className="text-center py-8">
              <Heart className="h-12 w-12 mx-auto text-gray-300 mb-3" />
              <p className="text-gray-500">You haven't favorited any courses yet.</p>
              <p className="text-gray-400 text-sm mt-1">Click the heart icon on any course to add it to your favorites.</p>
              <SheetClose asChild>
                <Button className="mt-4">Browse Courses</Button>
              </SheetClose>
            </div>
          ) : (
            favoriteCourses.map(course => (
              <div key={course.id} className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-xs text-gray-500">{course.code}</span>
                    <h4 className="font-medium">{course.title}</h4>
                    <div className="text-sm text-gray-600 mt-1">
                      {course.department} · {course.credits} Credits
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-500 hover:text-red-500 p-1 h-auto"
                    onClick={() => onRemoveFavorite(course.id, course.title)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <div className="mt-3">
                  <Button 
                    variant="link" 
                    className="p-0 h-auto text-sm"
                    onClick={() => {
                      onViewCourseDetails(course.id);
                    }}
                  >
                    View Course Details
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>
        
        <SheetFooter className="mt-6">
          <SheetClose asChild>
            <Button variant="outline" className="w-full">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default FavoriteCourses;
