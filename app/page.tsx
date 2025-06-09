import ExperienceSection from '@/components/sections/Experience';
import ProfilSection from '@/components/sections/Profile';
import ProjectsSection from '@/components/sections/project/Project';
import SkillsSection from '@/components/sections/Skill';

export default function Home() {
  return (
    <>
      <ProfilSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
    </>
  );
}
