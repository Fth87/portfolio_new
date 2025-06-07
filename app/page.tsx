import ExperienceSection from '@/components/sections/Experience';
import ProfilSection from '@/components/sections/Profile';
import ProjectsSection from '@/components/sections/Project';
import SkillsSection from '@/components/sections/Skill';
import SkillsAndExperienceSection from '@/components/sections/Skill';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <ProfilSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
    </div>
  );
}
