'use client';

import { FiLinkedin, FiGithub, FiInstagram } from 'react-icons/fi';

const socialLinks = [
  { href: 'https://www.linkedin.com/in/fatih-fawwaz-a44b35310/', icon: FiLinkedin, label: 'LinkedIn' },
  { href: 'https://github.com/Fth87', icon: FiGithub, label: 'GitHub' },
  { href: 'https://instagram.com/fatihfwz', icon: FiInstagram, label: 'Instagram' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="container mx-auto px-4 sm:px-6 lg:px-8 pb-7">
      <div className="md:flex md:items-center md:justify-between text-center md:text-left">
        <p className="mb-2 lg:mb-0 text-sm text-gray-600">
          &copy; {currentYear} Fatih. All rights reserved.
        </p>
        <nav className="flex justify-center space-x-4">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-gray-500 hover:text-blue-600 transition-colors"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;