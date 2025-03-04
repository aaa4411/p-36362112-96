
import React from "react";
import { Button } from "@/components/ui/button";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange
}) => {
  return (
    <div className="mt-8 flex justify-center">
      <Button 
        variant="outline" 
        className="mr-2"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Previous
      </Button>
      
      {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
        <Button 
          key={page}
          variant={currentPage === page ? "default" : "outline"} 
          className="mx-1"
          onClick={() => onPageChange(page)}
        >
          {page}
        </Button>
      ))}
      
      <Button 
        variant="outline" 
        className="ml-2"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
