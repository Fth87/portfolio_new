// components/sections/ProjectsSection.tsx
'use client';

import { useState } from 'react';
import { allProjects } from '@/data/project';
import { ProjectCard } from './ProjectCard';

const INITIAL_DISPLAY_COUNT = 2;

const ProjectsSection = () => {
  const [displayCount, setDisplayCount] = useState(INITIAL_DISPLAY_COUNT);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleShowMore = () => {
    if (isExpanded) {
      setDisplayCount(INITIAL_DISPLAY_COUNT);
    } else {
      setDisplayCount(allProjects.length);
    }
    setIsExpanded(!isExpanded);
  };

  const visibleProjects = allProjects.slice(0, displayCount);
  const hasMoreProjects = allProjects.length > INITIAL_DISPLAY_COUNT;

  return (
    <section id="projects" className="py-12 ">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center md:text-left text-nav-link">
            My <span className="text-gradient-6-start">Project</span>
          </h2>
          <p className="text-gray-600">Check out some of my latest projects with creative ideas.</p>
        </div>

        <div className="space-y-8">
          {visibleProjects.slice(0, 2).map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}

          {visibleProjects.length > 2 && (
            <div className="grid md:grid-cols-2 gap-6">
              {visibleProjects.slice(2).map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
          )}

          {hasMoreProjects && (
            <div className="text-center mt-8 ">
              <button onClick={toggleShowMore} className="hover:cursor-pointer inline-flex items-center text-gradient-6-start hover:text-blue-800 font-medium transition-colors">
                {isExpanded ? (
                  <>
                    <span>Show Less</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                  </>
                ) : (
                  <>
                    <span>See More Projects</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
