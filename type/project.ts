export type ProjectLayout = 'textLeft' | 'textRight' | 'imageBottom';

export interface ProjectItem {
  id: string;
  bgColor: string;
  category: string;
  categoryColor: string;
  title: string;
  description:string;
  linkHref: string;
  imageUrl: string;
  layoutType: ProjectLayout;
  imageAlt: string;
}
