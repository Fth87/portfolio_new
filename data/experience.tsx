import { ExperienceCategory } from '@/type/experience';

import { FiAward, FiUsers, FiCpu, FiGitMerge, FiImage, FiBook, FiBriefcase } from 'react-icons/fi';

export const experienceCategories: ExperienceCategory[] = [
  {
    title: 'Education',
    icon: FiBook,
    items: [
      {
        icon: FiAward,
        date: (
          <>
            2023 - <span className="gradient-7 text-gradient">Present</span>
          </>
        ),
        title: 'Student of Artificial Intelligence Engineering',
        institution: 'Sepuluh Nopember Institute of Technology (ITS)',
      },
      {
        icon: FiAward,
        date: '2021 - 2024',
        title: 'Science Major',
        institution: 'MA Amanatul Ummah',
      },
    ],
  },
  {
    title: 'Experience',
    icon: FiBriefcase,
    items: [
      {
        icon: FiCpu,      
        date: '2024',
        title: 'Front-end IT Development',
        institution: 'SCHEMATICS ITS',
      },
      {
        icon: FiCpu,
        date: '2024',
        title: 'Front-end IT Development',
        institution: 'ILITS (Ini Lho ITS) 2024',
      },
      {
        icon: FiCpu,
        date: '2024',
        title: 'Front-end IT Development',
        institution: 'PETROLIDA (Petroleum and Mining Engineering Student Association) ITS',
      },
      {
        icon: FiCpu,
        date: '2023 - 2024',
        title: 'Programming',
        institution: 'MA Amanatul Ummah Robotics Team',
      },
      {
        icon: FiGitMerge,
        date: '2023 - 2024',
        title: 'Head of Competition systematics division',
        institution: 'GALAXY (Greatest Academic in the Large Andromeda X-tion of Creativity)',
      },
      {
        icon: FiUsers,
        date: (
          <>
            2021 - <span className="gradient-7 text-gradient">Present</span>
          </>
        ),
        title: 'IT Team',
        institution: 'Doline',
      },
      {
        icon: FiImage,
        date: '2022 - 2024',
        title: 'IT Team',
        institution: 'MAI Productions',
      },
    ],
  },
  {
    title: 'Achievements',
    icon: FiAward,
    items: [
      {
        icon: FiAward,
        date: '2024',
        title: (
          <>
            First Place <span className="gradient-7 text-gradient">Winner</span>
          </>
        ),
        institution: 'Web Development Competition UNIKAMA, Malang.',
      },
      {
        icon: FiAward,
        date: '2023',
        title: (
          <>
            First Place <span className="gradient-7 text-gradient">Winner</span>
          </>
        ),
        institution: 'Robotic Competition IPB University.',
      },
      {
        icon: FiAward,
        date: '2023',
        title: (
          <>
            Second Place <span className="gradient-7 text-gradient">Winner</span>
          </>
        ),
        institution: 'Web Design Competition Intermedia Information Technology Competition x GRAB Amikom.',
      },
      {
        icon: FiAward,
        date: '2023',
        title: (
          <>
            Third Place <span className="gradient-7 text-gradient">Winner</span>
          </>
        ),
        institution: 'Front End Website Development Competition Universitas Atma Jaya Yogyakarta.',
      },
      {
        icon: FiAward,
        date: '2024',
        title: (
          <>
            <span className="gradient-7 text-gradient">Best</span> Presentation
          </>
        ),
        institution: 'Techcomfest Web Design Competition Politeknik Negeri Semarang.',
      },
      {
        icon: FiAward,
        date: '2024',
        title: (
          <>
            <span className="gradient-7 text-gradient">Best</span> Student
          </>
        ),
        institution: 'Advance Bootcamp Schematics BST ITS',
      },
    ],
  },
];
