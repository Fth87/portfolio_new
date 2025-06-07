// components/sections/ProjectsSection.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link'; // Gunakan Link dari Next.js jika ini navigasi internal

interface ProjectItem {
  id: string;
  bgColor: string; // e.g., 'bg-soft-red', 'bg-soft-yellow'
  category: string;
  categoryColor: string; // e.g., 'text-red', 'text-yellow'
  title: string;
  description: string;
  linkHref: string;
  linkText?: string;
  imageUrl: string;
  layoutType: 'textLeft' | 'textRight' | 'imageBottom';
  imageAlt: string;
}

const projectsData: ProjectItem[] = [
  {
    id: 'qdayak',
    bgColor: 'bg-soft-red',
    category: 'Web Development',
    categoryColor: 'text-bs-red',
    title: 'QDayak',
    description: "A website I developed to introduce the Dayak culture to a broader audience. This project includes various features that showcase information about traditional foods, traditional clothing, arts, traditions, and many more.",
    linkHref: 'https://fth87.github.io/qdayak2.0/',
    imageUrl: '/img/me/Group 1.png', // Pastikan path benar: public/img/me/Group 1.png
    layoutType: 'textLeft',
    imageAlt: 'QDayak Project Screenshot'
  },
  {
    id: 'mieme',
    bgColor: 'bg-soft-yellow',
    category: 'Web Development',
    categoryColor: 'text-bs-yellow',
    title: 'Mieme',
    description: 'A website I developed to promote Mieme which sells noodles, This project aims to support local SMEs and make it easier for consumers to find and purchase quality Mieme noodle products.',
    linkHref: 'https://mieme.vercel.app/',
    imageUrl: '/img/me/mieme.png', // Pastikan path benar: public/img/me/mieme.png
    layoutType: 'textRight',
    imageAlt: 'Mieme Project Screenshot'
  },
  {
    id: 'mai',
    bgColor: 'bg-soft-leaf',
    category: 'Web Development',
    categoryColor: 'text-bs-leaf',
    title: 'MAI Amanatul Ummah',
    description: 'A Website for my school to Provides information about educational programs, curriculum, school activities, delivers the latest news, important school activities, and student achievement and many more.',
    linkHref: 'https://mai-au.sch.id/',
    imageUrl: '/img/me/mai.png', // Pastikan path benar: public/img/me/mai.png
    layoutType: 'imageBottom',
    imageAlt: 'MAI Amanatul Ummah Website Screenshot'
  },
  {
    id: 'galaxy',
    bgColor: 'bg-soft-purple',
    category: 'Web Development',
    categoryColor: 'text-bs-purple',
    title: 'GALAXY',
    description: "A Website for GALAXY (Greatest Academic in the Large Andromeda X-tion of Creativity) Event in MAI Amanatul Ummah Pacet, using Laravel, Bootstrap, and MySql. I collaborate with the team to develop from scratch and also maintain features based on requirements documents.",
    linkHref: '#', // Ganti dengan link yang benar jika ada
    imageUrl: '/img/me/mockupglx.png', // Pastikan path benar: public/img/me/mockupglx.png
    layoutType: 'imageBottom',
    imageAlt: 'GALAXY Event Website Screenshot'
  },
];

const ProjectCard: React.FC<ProjectItem> = ({
  bgColor,
  category,
  categoryColor,
  title,
  description,
  linkHref,
  imageUrl,
  layoutType,
  imageAlt
}) => {
  const textContent = (
    <>
      <div className={`post-category mb-3 font-semibold text-sm ${categoryColor}`}>{category}</div>
      {/* h1 class pada h3, gunakan text-3xl/text-4xl font-bold */}
      <h3 className="text-3xl lg:text-4xl font-bold text-nav-link mb-3">{title}</h3>
      <p className="text-body-color mb-4">{description}</p>
      <a
        href={linkHref}
        target="_blank"
        rel="noopener noreferrer"
        className={`link-more ${categoryColor.replace('text-', 'link-')} mb-8 md:mb-0`} // e.g. link-red
      >
        See Project
      </a>
    </>
  );

  const imageContent = (
    <figure>
      <Image
        className="img-fluid w-full h-auto rounded-sandbox" // .rounded-sandbox dari config
        src={imageUrl}
        alt={imageAlt}
        width={700} // Placeholder, sesuaikan rasio
        height={500} // Placeholder, sesuaikan rasio
        style={{ objectFit: 'cover' }} // Untuk memastikan gambar mengisi figure
      />
    </figure>
  );

  if (layoutType === 'imageBottom') {
    return (
      <div className={`card ${bgColor} rounded-sandbox shadow-sandbox overflow-hidden`}> {/* Tambahkan shadow dan overflow-hidden */}
        <div className="card-body p-8 md:p-10 lg:p-12 pb-0"> {/* Sesuaikan padding */}
          {textContent}
        </div>
        <div className="mt-auto"> {/* Dorong gambar ke bawah jika teks lebih pendek */}
            <Image
            className="card-img-bottom w-full h-auto object-cover"
            src={imageUrl}
            alt={imageAlt}
            width={600} // Placeholder
            height={400} // Placeholder
            />
        </div>
      </div>
    );
  }

  return (
    <div className={`card ${bgColor} rounded-sandbox shadow-sandbox`}>
      <div className="card-body p-8 md:p-10 lg:p-12"> {/* pb-0 dihapus untuk layout ini */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className={`lg:col-span-4 ${layoutType === 'textRight' ? 'lg:order-2' : ''}`}>
            {textContent}
          </div>
          <div className={`lg:col-span-7 ${layoutType === 'textRight' ? '' : 'lg:offset-1'}`}>
            {imageContent}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="wrapper bg-light wrapper-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 md:pt-18 md:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center mb-10">
          <div className="lg:col-span-8 xl:col-span-7 lg:pr-12 xl:pr-20"> {/* pe-xl-20 */}
            {/* display-4 di Sandbox ~ text-3xl/4xl/5xl, font-bold */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-nav-link">
              My <span className="text-gradient gradient-7">Project</span>
            </h2>
            {/* lead fs-20 di Sandbox ~ text-lg/xl, leading-relaxed */}
            <p className="text-lg md:text-xl text-body-color mb-0">
              Check out some of my latest projects with creative ideas.
            </p>
          </div>
          {/* Tombol "See All Projects" dikomentari sesuai HTML Anda
          <div className="col-md-4 col-lg-3 ms-md-auto text-md-end mt-5 mt-md-0">
            <a href="#" className="btn btn-outline-primary rounded-pill mb-0">See All Projects</a>
          </div>
          */}
        </div>

        <div className="space-y-10 md:space-y-12">
          {projectsData.slice(0, 2).map((project) => ( // Dua proyek pertama layout full-width
            <ProjectCard key={project.id} {...project} />
          ))}

          {/* Dua proyek berikutnya dalam grid 2 kolom */}
          <div className="grid md:grid-cols-2 gap-x-8 lg:gap-x-10 xl:gap-x-12 gap-y-10 md:gap-y-0">
            {projectsData.slice(2, 4).map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;