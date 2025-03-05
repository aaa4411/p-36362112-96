
import React from "react";
import { Code, Layers, Database, GraduationCap, Server, Globe, Shield, Users, Book } from "lucide-react";

export const getIconComponent = (iconName: string, size: "sm" | "md" | "lg" = "md") => {
  const sizeMap = {
    sm: 16,
    md: 20,
    lg: 24
  };
  
  const iconSize = sizeMap[size];
  
  switch (iconName) {
    case "code": return <Code className={`h-${iconSize} w-${iconSize} text-primary`} />;
    case "layers": return <Layers className={`h-${iconSize} w-${iconSize} text-primary`} />;
    case "database": return <Database className={`h-${iconSize} w-${iconSize} text-primary`} />;
    case "graduationCap": return <GraduationCap className={`h-${iconSize} w-${iconSize} text-primary`} />;
    case "server": return <Server className={`h-${iconSize} w-${iconSize} text-primary`} />;
    case "globe": return <Globe className={`h-${iconSize} w-${iconSize} text-primary`} />;
    case "shield": return <Shield className={`h-${iconSize} w-${iconSize} text-primary`} />;
    case "users": return <Users className={`h-${iconSize} w-${iconSize} text-primary`} />;
    case "book": return <Book className={`h-${iconSize} w-${iconSize} text-primary`} />;
    default: return <Book className={`h-${iconSize} w-${iconSize} text-primary`} />;
  }
};
