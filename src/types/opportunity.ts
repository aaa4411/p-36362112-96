
export type Opportunity = {
  id: string;
  title: string;
  type: "internship" | "research" | "job" | "scholarship";
  organization: string;
  location: string;
  description: string;
  deadline: string;
  requirements: string[];
  link: string;
  featured?: boolean;
  saved?: boolean;
  applicationStatus?: "not_applied" | "in_progress" | "applied" | "interview" | "rejected" | "accepted";
};
