
import React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface UserSearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const UserSearch = ({ searchQuery, setSearchQuery }: UserSearchProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-between">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Search users..."
          className="pl-10 w-full"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="flex gap-2">
        <Button variant="outline" size="sm">Export Users</Button>
        <Button variant="outline" size="sm">Filter</Button>
      </div>
    </div>
  );
};

export default UserSearch;
