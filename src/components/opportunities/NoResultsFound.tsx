
import React from "react";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NoResultsFoundProps {
  handleClearFilters: () => void;
}

const NoResultsFound: React.FC<NoResultsFoundProps> = ({ handleClearFilters }) => {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-12 text-center">
      <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
        <AlertCircle className="h-8 w-8 text-gray-400" />
      </div>
      <h3 className="text-xl font-medium text-gray-700 mb-2">No opportunities found</h3>
      <p className="text-gray-500 mb-6 max-w-md mx-auto">
        We couldn't find any opportunities matching your search criteria. Try adjusting your filters or search term.
      </p>
      <Button onClick={handleClearFilters}>Clear All Filters</Button>
    </div>
  );
};

export default NoResultsFound;
