'use client';

import { ExperienceCategory, ExperienceItemProps } from '@/type/experience';
import { experienceCategories } from '@/data/experience';

const ExperienceItemCard = ({ icon: Icon, date, title, institution, index }: ExperienceItemProps & { index: number }) => {
  const isOdd = index % 2 !== 0;
  const iconBgClass = isOdd ? 'bg-primary' : 'bg-soft-blue';
  const iconColorClass = isOdd ? 'text-white' : 'text-primary';

  return (
    <div className="relative flex sm:flex-col items-center sm:text-center gap-4 sm:gap-3">
      <div>
        <span
          className={`icon btn btn-circle disabled flex items-center justify-center 
          w-14 h-14 ${iconBgClass} rounded-full`}
        >
          <span className={`number ${iconColorClass}`}>
            <Icon className="w-6 h-6" />
          </span>
        </span>
      </div>
      <div>
        <h4 className="text-base font-medium text-body-color mb-0">{date}</h4>
        <h4 className="text-lg font-semibold text-nav-link mb-1">{title}</h4>
        <p className="text-sm text-body-color mb-0">{institution}</p>
      </div>
    </div>
  );
};

const ExperienceCategorySection = ({ category }: { category: ExperienceCategory }) => (
  <div className="mb-16">
    <div className="flex items-center mb-6">
      <category.icon className="w-6 h-6 mr-3 text-primary" />
      <h3 className="text-2xl font-bold text-nav-link">{category.title}</h3>
    </div>
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-10">
      {category.items.map((item, index) => (
        <ExperienceItemCard key={index} {...item} index={index} />
      ))}
    </div>
  </div>
);

const ExperienceSection = () => (
  <section id="experience" className="wrapper bg-light">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center md:text-left text-nav-link">
        Experience and <span className="text-gradient-7-start">Education</span>
      </h2>
      <div className="space-y-12">
        {experienceCategories.map((category, index) => (
          <ExperienceCategorySection key={index} category={category} />
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
