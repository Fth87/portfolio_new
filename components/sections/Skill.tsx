// components/sections/SkillsSection.tsx
'use client';

import Image from 'next/image';
import { createElement } from 'react';
// import ReactLogoIcon from '../icons/ReactLogoIcon'; // Sesuaikan path jika perlu

interface SkillItem {
  name: string;
  logo: string | React.ElementType;
  logoType: 'img' | 'component';
  experience: any;
  logoSizeClass?: string; // Kelas Tailwind untuk ukuran, e.g., 'w-16 h-16 md:w-20 md:h-20'
  // Atribut width asli seperti "5em", "80em" tidak standar untuk pixel.
  // Akan kita kontrol dengan logoSizeClass.
}

const skillsData: SkillItem[] = [
  { name: 'React', logo: '/', logoType: 'component', experience: <><span className="text-gradient gradient-6"> ± 1 </span> Years</>, logoSizeClass: 'w-16 h-16 md:w-20 md:h-20 text-[#61DAFB]' }, // text-[#61DAFB] untuk warna fill SVG
  { name: 'Laravel', logo: '/img/me/laravel.svg', logoType: 'img', experience: <><span className="text-gradient gradient-6"> ± 2 </span> Years</>, logoSizeClass: 'w-16 h-16 md:w-20 md:h-20' },
  { name: 'Tailwind', logo: '/img/me/tailwindcss.svg', logoType: 'img', experience: <><span className="text-gradient gradient-6"> ± 1 </span> Years</>, logoSizeClass: 'w-24 md:w-28 h-auto' }, // Tailwind logo cenderung lebih lebar
  { name: 'Bootstrap', logo: '/img/me/bootstrap.svg', logoType: 'img', experience: <><span className="text-gradient gradient-6"> ± 3 </span> Years</>, logoSizeClass: 'w-16 h-16 md:w-20 md:h-20' },
  { name: 'C++', logo: '/img/me/c.svg', logoType: 'img', experience: <><span className="text-gradient gradient-6"> ± 3 </span> Years</>, logoSizeClass: 'w-16 h-16 md:w-20 md:h-20' },
  { name: 'Github', logo: '/img/me/github.svg', logoType: 'img', experience: <><span className="text-gradient gradient-6"> ± 3 </span> Years</>, logoSizeClass: 'w-16 h-16 md:w-20 md:h-20' },
  { name: 'Typescript', logo: '/img/me/typescript.svg', logoType: 'img', experience: <><span className="text-gradient gradient-6">On</span> Progress</>, logoSizeClass: 'w-16 h-16 md:w-20 md:h-20' },
  { name: 'Python', logo: '/img/me/python.svg', logoType: 'img', experience: <><span className="text-gradient gradient-6"> ± 1 </span> Years</>, logoSizeClass: 'w-16 h-16 md:w-20 md:h-20' },
  { name: 'Next.Js', logo: '/img/me/next-js.svg', logoType: 'img', experience: <><span className="text-gradient gradient-6">On </span> Progress</>, logoSizeClass: 'w-16 h-16 md:w-20 md:h-20' },
];

const SkillItemCard: React.FC<SkillItem> = ({ name, logo, logoType, experience, logoSizeClass }) => {
  const defaultSize = 'w-16 h-16 md:w-20 md:h-20'; // Ukuran default jika logoSizeClass tidak ada
  const currentSizeClass = logoSizeClass || defaultSize;

  return (
    <div className="flex flex-col items-center text-center">
      <div className={`flex items-center justify-center mb-3 ${currentSizeClass}`}>
        {logoType === 'component' && typeof logo === 'function' ? (
          createElement(logo as React.ElementType, { className: `w-full h-full object-contain ${name === 'React' ? 'text-[#61DAFB]' : ''}` })
        ) : (
          <Image
            src={logo as string}
            alt={`${name} logo`}
            width={80} // Nilai default, akan di-scale oleh object-contain dan parent size
            height={80} // Nilai default
            className="w-full h-full object-contain"
          />
        )}
      </div>
      {/* display-5 di Sandbox kira-kira text-xl atau text-2xl, font-semibold */}
      <p className="text-xl font-semibold text-nav-link mb-1">{name}</p>
      <p className="text-sm text-body-color mb-2">
        {/* display-5 pada span di HTML asli, di sini kita buat lebih kecil dari nama skillnya */}
        <span className="text-base md:text-lg font-semibold">{experience}</span>
      </p>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="wrapper wrapper-border bg-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        {/* Baris Judul */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 xl:gap-x-12 mb-10">
          <div className="lg:col-span-8">
            {/* display-4 di Sandbox kira-kira text-3xl hingga text-5xl, font-bold */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-nav-link">
              My <span className="text-gradient gradient-7">Skills</span>
            </h2>
            {/* <p className="text-lg md:text-xl text-body-color mb-5">
              Deskripsi singkat tentang skill Anda bisa ditaruh di sini.
            </p> */}
          </div>
        </div>

        {/* Grid untuk Skills */}
        {/* HTML asli menggunakan col-md-6 col-lg-3, berarti 2 kolom di md, 4 di lg.
            Kita bisa gunakan grid responsif Tailwind. */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-x-6 lg:gap-x-8 xl:gap-x-10 gap-y-8 md:gap-y-10 text-center">
          {skillsData.map((skill) => (
            <SkillItemCard key={skill.name} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;