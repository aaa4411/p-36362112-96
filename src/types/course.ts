
import { ReactNode } from "react";

export type Course = {
  id: string;
  code: string;
  title: string;
  description: string;
  level: string;
  credits: number;
  prerequisites: string[];
  department: string;
  iconName: string;
  instructor?: string;
  enrollmentStatus?: "Open" | "Closing Soon" | "Closed";
  startDate?: string;
  popularity?: "High" | "Medium" | "Low";
};

export type CategoryType = {
  name: string;
  count: number;
};

export const getEnrollmentStatusColor = (status?: "Open" | "Closing Soon" | "Closed") => {
  switch (status) {
    case "Open": return "bg-green-100 text-green-800";
    case "Closing Soon": return "bg-amber-100 text-amber-800";
    case "Closed": return "bg-red-100 text-red-800";
    default: return "bg-gray-100 text-gray-800";
  }
};

export const getPopularityColor = (popularity?: "High" | "Medium" | "Low") => {
  switch (popularity) {
    case "High": return "text-green-600";
    case "Medium": return "text-amber-600";
    case "Low": return "text-blue-600";
    default: return "text-gray-600";
  }
};
