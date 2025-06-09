import { ElementType } from "react";

export type ExperienceItemProps = {
  icon: ElementType;
  date: React.ReactNode;
  title: React.ReactNode;
  institution: string;
};

export type ExperienceCategory = {
  title: string;
  icon: ElementType;
  items: ExperienceItemProps[];
};