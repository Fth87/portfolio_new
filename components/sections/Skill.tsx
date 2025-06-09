// components/sections/SkillsSection.tsx
'use client';

import { FaReact, FaLaravel, FaBootstrap, FaGithub, FaPython, FaServer, FaCode, FaLayerGroup, FaTools } from 'react-icons/fa';
import { FaCodeBranch, FaGitAlt } from 'react-icons/fa6';
import { RiSupabaseFill, RiSupabaseLine } from 'react-icons/ri';
import { SiTailwindcss, SiTypescript, SiNextdotjs, SiCplusplus, SiExpress, SiArduino } from 'react-icons/si';

type SkillCategory = {
  name: 'Frontend' | 'Backend' | 'VCS' | 'Programming' | 'Other';
  icon: React.ReactNode;
  color: string;
};

interface SkillItem {
  name: string;
  icon: React.ReactNode;
  category: 'Frontend' | 'Backend' | 'VCS' | 'Programming' | 'Other';
  iconSizeClass?: string;
}

const categories: SkillCategory[] = [
  {
    name: 'Frontend',
    icon: <FaLayerGroup />,
    color: 'text-[#4F46E5]',
  },
  {
    name: 'Backend',
    icon: <FaServer />,
    color: 'text-[#10B981]',
  },
  {
    name: 'VCS',
    icon: <FaCodeBranch />,
    color: 'text-[#F59E0B]',
  },
  {
    name: 'Programming',
    icon: <FaCode />,
    color: 'text-[#EC4899]',
  },
  {
    name: 'Other',
    icon: <FaTools />,
    color: 'text-[#6B7280]',
  },
];

const skillsData: SkillItem[] = [
  {
    name: 'React',
    icon: <FaReact className="text-[#61DAFB]" />,
    category: 'Frontend',
    iconSizeClass: 'text-5xl md:text-6xl',
  },
  {
    name: 'Laravel',
    icon: <FaLaravel className="text-[#FF2D20]" />,
    category: 'Backend',
    iconSizeClass: 'text-5xl md:text-6xl',
  },
  {
    name: 'Express Js',
    icon: <SiExpress className="text-[#181717]" />,
    category: 'Backend',
    iconSizeClass: 'text-5xl md:text-6xl',
  },
  {
    name: 'Supabase',
    icon: <RiSupabaseFill className="text-green-700" />,
    category: 'Backend',
    iconSizeClass: 'text-5xl md:text-6xl',
  },
  {
    name: 'Tailwind',
    icon: <SiTailwindcss className="text-[#38B2AC]" />,
    category: 'Frontend',
    iconSizeClass: 'text-5xl md:text-6xl',
  },
  {
    name: 'Bootstrap',
    icon: <FaBootstrap className="text-[#7952B3]" />,
    category: 'Frontend',
    iconSizeClass: 'text-5xl md:text-6xl',
  },
  {
    name: 'C++',
    icon: <SiCplusplus className="text-[#00599C]" />,
    category: 'Programming',
    iconSizeClass: 'text-5xl md:text-6xl',
  },
  {
    name: 'Arduino',
    icon: <SiArduino className="text-[#3186a0]" />,
    category: 'Programming',
    iconSizeClass: 'text-5xl md:text-6xl',
  },
  {
    name: 'Github',
    icon: <FaGithub className="text-[#181717]" />,
    category: 'VCS',
    iconSizeClass: 'text-5xl md:text-6xl',
  },
  {
    name: 'Git',
    icon: <FaGitAlt className="text-[#f1502f]" />,
    category: 'VCS',
    iconSizeClass: 'text-5xl md:text-6xl',
  },
  {
    name: 'Typescript',
    icon: <SiTypescript className="text-[#3178C6]" />,
    category: 'Programming',
    iconSizeClass: 'text-5xl md:text-6xl',
  },
  {
    name: 'Python',
    icon: <FaPython className="text-[#3776AB]" />,
    category: 'Programming',
    iconSizeClass: 'text-5xl md:text-6xl',
  },
  {
    name: 'Next.Js',
    icon: <SiNextdotjs className="text-[#000000]" />,
    category: 'Frontend',
    iconSizeClass: 'text-5xl md:text-6xl',
  },
];

const SkillItemCard = ({ name, icon, iconSizeClass = 'text-5xl md:text-6xl' }: SkillItem) => (
  <div className="flex flex-col items-center text-center">
    <div className={`flex items-center justify-center mb-3 ${iconSizeClass}`}>{icon}</div>
    <p className="text-xl font-semibold text-nav-link mb-1">{name}</p>
  </div>
);

const CategoryHeader = ({ category }: { category: SkillCategory }) => (
  <div className="flex items-center mb-6">
    <div className={`text-2xl mr-3 ${category.color}`}>{category.icon}</div>
    <h3 className="text-2xl font-bold text-nav-link">{category.name}</h3>
  </div>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="wrapper wrapper-border bg-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 xl:gap-x-12 mb-10">
          <div className="lg:col-span-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-nav-link">
              My <span className="text-gradient gradient-7">Skills</span>
            </h2>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((category) => {
            const skillsInCategory = skillsData.filter((skill) => skill.category === category.name);
            if (skillsInCategory.length === 0) return null;
            return (
              <div key={category.name} className="mb-12">
                <CategoryHeader category={category} />
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-x-6 lg:gap-x-8 xl:gap-x-10 gap-y-8 md:gap-y-10 text-center">
                  {skillsInCategory.map((skill) => (
                    <SkillItemCard key={skill.name} {...skill} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
