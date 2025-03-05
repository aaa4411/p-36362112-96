
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface UserAvatarProps {
  name: string;
  email: string;
  avatarUrl: string;
}

const UserAvatar = ({ name, email, avatarUrl }: UserAvatarProps) => {
  return (
    <div className="flex items-center gap-3">
      <Avatar>
        <AvatarImage src={avatarUrl} />
        <AvatarFallback>{name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div>
        <p className="font-medium">{name}</p>
        <p className="text-sm text-gray-500">{email}</p>
      </div>
    </div>
  );
};

export default UserAvatar;
