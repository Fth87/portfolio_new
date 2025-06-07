// components/layout/Navbar.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { FiHome, FiUser, FiFileText, FiBriefcase, FiMessageSquare, FiLinkedin, FiGithub, FiInstagram, FiX, FiMenu } from 'react-icons/fi';

interface NavLinkItem {
  href: string;
  label: string;
  icon: React.ElementType;
  idTarget: string;
}

const mainNavLinks: NavLinkItem[] = [
  { href: '#profile', label: 'Profile', icon: FiUser, idTarget: 'profile' },
  { href: '#experience', label: 'Experience', icon: FiFileText, idTarget: 'experience' },
  { href: '#skills', label: 'Skills', icon: FiBriefcase, idTarget: 'skills' },
  { href: '#projects', label: 'Projects', icon: FiBriefcase, idTarget: 'projects' },
  { href: '#contact', label: 'Contact', icon: FiMessageSquare, idTarget: 'contact' },
];

const socialLinks = [
  { href: 'https://www.linkedin.com/in/fatih-fawwaz-a44b35310/', icon: FiLinkedin, label: 'LinkedIn' },
  { href: 'https://github.com/Fth87', icon: FiGithub, label: 'GitHub' },
  { href: 'https://instagram.com/fatihfwz', icon: FiInstagram, label: 'Instagram' },
];

const HamburgerIcon = ({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) => (
  <button className={`hamburger hover:cursor-pointer animate plain ${isOpen ? 'active' : ''}`} aria-label={isOpen ? 'Close menu' : 'Open menu'}  onClick={onClick}>
    <span className="block w-6 h-0.5 bg-black my-1.5 transition-all duration-200 ease-in-out" />
    <span className="block w-6 h-0.5 bg-black my-1.5 transition-all duration-200 ease-in-out" />
    <span className="block w-6 h-0.5 bg-black my-1.5 transition-all duration-200 ease-in-out" />
    <style jsx>{`
      .hamburger span {
        /* Styling dasar sudah via Tailwind, ini untuk animasi aktif */
      }
      .hamburger.active span:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
      }
      .hamburger.active span:nth-child(2) {
        transform: scale(0);
      }
      .hamburger.active span:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
      }
    `}</style>
  </button>
);

const OffcanvasCloseButton = ({ onClick }: { onClick: () => void }) => (
  <button type="button" className="p-2 text-slate-700 hover:text-slate-500 hover:cursor-pointer transition-colors" aria-label="Close" onClick={onClick}>
    <FiX className="w-6 h-6" />
  </button>
);

const Navbar = () => {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeLink, setActiveLink] = useState(mainNavLinks[0].href);
  const headerRef = useRef<HTMLElement>(null);
  const offcanvasRef = useRef<HTMLDivElement>(null);

  // Sticky Header Logic
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active Link Highlighting with IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const correspondingLink = mainNavLinks.find((link) => link.idTarget === id);
            if (correspondingLink) {
              setActiveLink(correspondingLink.href);
            }
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    );

    mainNavLinks.forEach(({ idTarget }) => {
      const section = document.getElementById(idTarget);
      if (section) observer.observe(section);
    });

    return () => {
      mainNavLinks.forEach(({ idTarget }) => {
        const section = document.getElementById(idTarget);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  // Close offcanvas when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (offcanvasRef.current && !offcanvasRef.current.contains(event.target as Node)) {
        setIsOffcanvasOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOffcanvasOpen(false);
      }
    };

    if (isOffcanvasOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOffcanvasOpen]);

  const toggleOffcanvas = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen)
    console.log('Offcanvas toggled:', isOffcanvasOpen);
  };
  const closeOffcanvas = () => setIsOffcanvasOpen(false);

  const handleNavLinkClick = (href: string) => {
    setActiveLink(href);
    closeOffcanvas();
  };

  return (
    <header ref={headerRef} className={`w-full z-50 transition-all duration-300 ease-in-out bg-transparent ${isSticky ? 'sticky top-0 left-0 pt-3' : 'relative'}`}>
      <nav className="navbar">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex justify-between items-center py-3 md:py-0 w-full` + (isSticky ? ' bg-white shadow-lg rounded-xl md:rounded-2xl md:px-0 px-5' : '')}>
            <div className="shrink-0 m-2">
              <Link href="#home" onClick={() => handleNavLinkClick('#home')}>
                <Image src="/img/me/logoku2trans.png" alt="Logo" width={50} height={50} priority className="w-[30px] md:w-[50px] hover:opacity-80 transition-opacity" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex">
              <ul className="flex space-x-1">
                {mainNavLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} onClick={() => handleNavLinkClick(link.href)} className={`px-3 py-5 text-sm font-bold transition-colors ${activeLink === link.href ? 'text-bs-blue' : 'text-gray-700'} hover:text-bs-blue`}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links & Hamburger */}
            <div className="flex items-center space-x-4">
              <ul className="hidden lg:flex items-center space-x-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <li key={social.label}>
                      <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="text-gray-600 hover:text-bs-blue transition-colors">
                        <Icon className="w-5 h-5" />
                      </a>
                    </li>
                  );
                })}
              </ul>

              <div className="lg:hidden">
                <HamburgerIcon isOpen={isOffcanvasOpen} onClick={toggleOffcanvas} />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Offcanvas Navigation */}
      <div ref={offcanvasRef} className={`fixed top-0 left-0 h-full bg-soft-blue w-64 p-6 transition-transform duration-300 ease-in-out z-50 lg:hidden ${isOffcanvasOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex justify-between items-center pb-6 mb-4 border-b border-gray-200">
          <Link href="#home" onClick={() => handleNavLinkClick('#home')}>
            <Image src="/img/me/logoku2trans.png" alt="Logo" width={50} height={50} className="hover:opacity-80 transition-opacity" />
          </Link>
          <OffcanvasCloseButton onClick={closeOffcanvas} />
        </div>

        <ul className="space-y-3">
          {mainNavLinks.map((link) => {
            const Icon = link.icon;
            return (
              <li key={link.href}>
                <Link href={link.href} onClick={() => handleNavLinkClick(link.href)} className={`flex items-center space-x-3 py-2 transition-colors ${activeLink === link.href ? 'text-bs-blue' : 'text-slate-700'} hover:text-bs-blue`}>
                  <Icon className="w-5 h-5" />
                  <span>{link.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex space-x-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="text-slate-700 hover:text-bs-blue transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
