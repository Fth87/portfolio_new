// components/sections/ExperienceSection.tsx
'use client';

import {
  FiAward, // Pengganti uil-graduation-hat & uil-medal
  FiUsers, // Pengganti uil-users-alt
  FiCpu, // Pengganti uil-processor
  FiGitMerge, // Pengganti uil-sitemap
  FiImage, // Pengganti uil-image-edit (atau FiEdit3)
} from 'react-icons/fi';
import { ElementType } from 'react'; // Untuk tipe ikon

interface ExperienceItemProps {
  icon: ElementType;
  iconBgClass: 'bg-soft-blue' | 'bg-primary'; // Untuk .btn-soft-blue atau .btn-blue
  iconColorClass: 'text-primary' | 'text-white';
  date: any;
  title: any;
  institution: string;
  isLastItem?: boolean; // Untuk styling garis (jika diimplementasikan)
}

const experienceData: ExperienceItemProps[] = [
  {
    icon: FiAward, // uil-graduation-hat
    iconBgClass: 'bg-soft-blue',
    iconColorClass: 'text-primary',
    date: (
      <>
        2023 - <span className="gradient-7 text-gradient"> Present </span>
      </>
    ),
    title: 'Student of Artificial Intelligence Engineering',
    institution: 'Sepuluh Nopember Institute of Technology (ITS)',
  },
  {
    icon: FiAward, // uil-graduation-hat
    iconBgClass: 'bg-primary', // .btn-blue
    iconColorClass: 'text-white',
    date: '2021 - 2024',
    title: 'Science Major',
    institution: 'MA Amanatul Ummah',
  },
  {
    icon: FiUsers, // uil-users-alt
    iconBgClass: 'bg-soft-blue',
    iconColorClass: 'text-primary',
    date: (
      <>
        2021 - <span className="gradient-7 text-gradient"> Present </span>
      </>
    ),
    title: 'IT Team',
    institution: 'Doline',
  },
  {
    icon: FiCpu, // uil-processor
    iconBgClass: 'bg-primary',
    iconColorClass: 'text-white',
    date: '2023 - 2024',
    title: 'Programming',
    institution: 'Kiwkiw Robotics Team',
  },
  {
    icon: FiGitMerge, // uil-sitemap
    iconBgClass: 'bg-soft-blue',
    iconColorClass: 'text-primary',
    date: '2023 - 2024',
    title: 'Head of Competition systematics division',
    institution: 'GALAXY (Greatest Academic in the Large Andromeda X-tion of Creativity)',
  },
  {
    icon: FiImage, // uil-image-edit
    iconBgClass: 'bg-primary',
    iconColorClass: 'text-white',
    date: '2022 - 2024',
    title: 'IT Team',
    institution: 'MAI Productions',
  },
  {
    icon: FiAward, // uil-medal
    iconBgClass: 'bg-soft-blue',
    iconColorClass: 'text-primary',
    date: '2024',
    title: (
      <>
        First Place <span className="gradient-7 text-gradient"> Winner </span>
      </>
    ),
    institution: 'Web Development Competition UNIKAMA, Malang.',
  },
  {
    icon: FiAward, // uil-medal
    iconBgClass: 'bg-primary',
    iconColorClass: 'text-white',
    date: '2023',
    title: (
      <>
        First Place <span className="gradient-7 text-gradient"> Winner </span>
      </>
    ),
    institution: 'Robotic Competition IPB University.',
  },
  {
    icon: FiAward, // uil-medal
    iconBgClass: 'bg-soft-blue',
    iconColorClass: 'text-primary',
    date: '2023',
    title: (
      <>
        Second Place <span className="gradient-7 text-gradient"> Winner </span>
      </>
    ),
    institution: 'winner Web Design Competition Intermedia Information Technology Competition x GRAB Amikom.',
  },
  {
    icon: FiAward, // uil-medal
    iconBgClass: 'bg-primary',
    iconColorClass: 'text-white',
    date: '2023',
    title: (
      <>
        Third Place <span className="gradient-7 text-gradient"> Winner </span>
      </>
    ),
    institution: 'Front End Website Development Competition Universitas Atma Jaya Yogyakarta.',
  },
  {
    icon: FiAward, // uil-medal
    iconBgClass: 'bg-soft-blue',
    iconColorClass: 'text-primary',
    date: '2024',
    title: (
      <>
        <span className="gradient-7 text-gradient"> Best </span> Presentation
      </>
    ),
    institution: 'Techcomfest Web Design Competition Politeknik Negeri Semarang.',
  },
];

const ExperienceItemCard: React.FC<ExperienceItemProps> = ({ icon: Icon, iconBgClass, iconColorClass, date, title, institution, isLastItem }) => {
  // Ukuran .btn-lg di Sandbox sekitar w-12 h-12 (3rem), font-size 1rem-ish untuk ikonnya.
  // text-xl untuk ikon di dalam tombol.
  const iconContainerSize = 'w-14 h-14'; // Sesuaikan agar mirip .btn-lg
  const iconSize = 'w-6 h-6'; // Sesuaikan ukuran ikon di dalam tombol

  return (
    <div className="relative">
      {' '}
      {/* Untuk positioning garis jika diimplementasikan */}
      <span
        className={`icon btn btn-circle disabled mb-4 flex items-center justify-center 
                   ${iconContainerSize} ${iconBgClass} rounded-full`}
      >
        <span className={`number ${iconColorClass}`}>
          <Icon className={iconSize} />
        </span>
      </span>
      <h4 className="text-base font-medium text-body-color mb-0">{date}</h4> {/* lead class */}
      <h4 className="text-lg font-semibold text-nav-link mb-1">{title}</h4> {/* Warna default judul */}
      <p className="text-sm text-body-color mb-0">{institution}</p>
      {/*
        Placeholder untuk garis penghubung. Ini memerlukan CSS kustom yang lebih kompleks
        untuk meniru .process-wrapper.line dari Sandbox.
        Contoh:
        {!isLastItem && (
          <div className="absolute top-6 left-1/2 -translate-x-1/2 w-px h-[calc(100%+1.5rem)] bg-gray-300 md:hidden"></div> // Mobile vertical line
          <div className="absolute top-1/2 -translate-y-1/2 left-full w-[calc(50%-...)] h-px bg-gray-300 hidden md:block lg:hidden"></div> // Tablet horizontal line
          <div className="absolute top-1/2 -translate-y-1/2 left-full w-[calc(25%-...)] h-px bg-gray-300 hidden lg:block"></div> // Desktop horizontal line
        )}
      */}
    </div>
  );
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="wrapper bg-light">
      {' '}
      {/* bg-light dari config */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center md:text-left text-nav-link">
          {' '}
          {/* display-4 mb-5 */}
          Experience and <span className="gradient-7 text-gradient">Education</span>
        </h2>
        {/*
          .process-wrapper.line: Kelas 'line' menambahkan garis penghubung antar item.
          Ini kompleks untuk direplikasi murni dengan Tailwind.
          Untuk sekarang, kita akan fokus pada grid itemnya.
          Anda mungkin perlu menambahkan CSS kustom untuk efek garis tersebut.
        */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 lg:gap-x-10 xl:gap-x-12 gap-y-10 md:gap-y-12">
          {/* Responsive grid: 2 cols di md, 3 di lg, 4 di xl. Sesuaikan dengan gx-lg-8 gx-xl-12 gy-6 */}
          {experienceData.map((item, index) => (
            <ExperienceItemCard key={index} {...item} isLastItem={index === experienceData.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
