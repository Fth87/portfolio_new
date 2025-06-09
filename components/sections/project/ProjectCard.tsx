import { ProjectItem } from "@/type/project";
import Image from "next/image";

export const ProjectCard = ({
  bgColor,
  category,
  categoryColor,
  title,
  description,
  linkHref,
  imageUrl,
  layoutType,
  imageAlt
}: ProjectItem) => {
  const TextContent = () => (
    <div className="space-y-3">
      <span className={`text-sm font-semibold ${categoryColor}`}>{category}</span>
      <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <a
        href={linkHref}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-block font-medium ${categoryColor} hover:underline`}
      >
        See Project →
      </a>
    </div>
  );

  const ImageContent = () => (
    <div className="relative aspect-video overflow-hidden rounded-lg">
      <Image
        src={imageUrl}
        alt={imageAlt}
        fill
        className="object-contain object-center "
      />
    </div>
  );

  if (layoutType === 'imageBottom') {
    return (
      <div className={`${bgColor} rounded-xl p-6 space-y-6`}>
        <TextContent />
        <ImageContent />
      </div>
    );
  }

  return (
    <div className={`${bgColor} rounded-xl p-6`}>
      <div className={`grid lg:grid-cols-2 gap-6 ${layoutType === 'textRight' ? 'lg:grid-flow-dense' : ''}`}>
        <div className={layoutType === 'textRight' ? 'lg:col-start-2' : ''}>
          <TextContent />
        </div>
        <div className={layoutType === 'textRight' ? 'lg:col-start-1 lg:row-start-1' : ''}>
          <ImageContent />
        </div>
      </div>
    </div>
  );
};
