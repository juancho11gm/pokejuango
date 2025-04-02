export type ProjectExperience = {
  name: string;
  role: string;
  description: string;
  tags: string[];
  iconUrl: string;
};

export type Company = {
  name: string;
  type: string;
  startDate: string;
  endDate?: string;
  iconUrl: string;
  href: string;
  projects: ProjectExperience[];
};
