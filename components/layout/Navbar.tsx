// components/layout/Navbar.tsx
'use client'

import Link from 'next/link';
import Image from 'next/image'; // Untuk logo
import { useState, useEffect, useRef } from 'react';

// Menggunakan Feather Icons (fi)
import {
  FiHome,
  FiUser,
  FiFileText,
  FiBriefcase,
  FiMessageSquare,
  FiLinkedin,
  FiGithub,
  FiInstagram,
  FiX,    // Untuk tombol close offcanvas
  FiMenu  // Untuk ikon hamburger jika diperlukan (meskipun kita buat custom)
} from 'react-icons/fi';

interface NavLinkItem {
  href: string;
  label: string;
  icon: React.ElementType; // Untuk ikon di mobile offcanvas
  idTarget: string; // Untuk scroll spy
}

const mainNavLinks: NavLinkItem[] = [
  { href: '#profil', label: 'Profil', icon: FiHome, idTarget: 'profil' },
  { href: '#experience', label: 'Experience', icon: FiUser, idTarget: 'experience' },
  { href: '#skills', label: 'Skills', icon: FiFileText, idTarget: 'skills' },
  { href: '#projects', label: 'Projects', icon: FiBriefcase, idTarget: 'projects' }, // ID target disamakan dengan href
  { href: '#contact', label: 'Contact', icon: FiMessageSquare, idTarget: 'contact' }, // ID target disamakan dengan href
];

const socialLinks = [
  { href: 'https://www.linkedin.com/in/fatih-fawwaz-a44b35310/', icon: FiLinkedin, label: 'LinkedIn' },
  { href: 'https://github.com/Fth87', icon: FiGithub, label: 'GitHub' },
  { href: 'https://instagram.com/fatihfwz', icon: FiInstagram, label: 'Instagram' },
];

// Komponen Hamburger Icon (dari Sandbox style.css)
const HamburgerIcon = ({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) => (
  <button
    className={`hamburger animate plain ${isOpen ? 'active' : ''}`}
    aria-label={isOpen ? 'Close menu' : 'Open menu'}
    onClick={onClick}
  >
    <span className="block w-[24px] h-[3px] bg-nav-link-color my-[5px] transition-all duration-200 ease-in-out"></span>
    <span className="block w-[24px] h-[3px] bg-nav-link-color my-[5px] transition-all duration-200 ease-in-out"></span>
    <span className="block w-[24px] h-[3px] bg-nav-link-color my-[5px] transition-all duration-200 ease-in-out"></span>
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

// Tombol Close untuk Offcanvas
const OffcanvasCloseButton = ({ onClick }: { onClick: () => void }) => (
  <button
    type="button"
    className="p-2 text-white hover:text-gray-300" // btn-close-white styling equivalent
    aria-label="Close"
    onClick={onClick}
  >
    <FiX className="w-6 h-6" />
  </button>
);

const Navbar = () => {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeLink, setActiveLink] = useState(''); // Inisialisasi dengan link pertama atau kosong
  const headerRef = useRef<HTMLElement>(null);

  // Sticky Header Logic
  useEffect(() => {
    const fixedNav = headerRef.current;
    if (!fixedNav) return;
    const stickyOffset = 100; // Sesuaikan offset jika perlu (Headhesive default 300, Sandbox mungkin beda)

    const scrollHandler = () => {
      setIsSticky(window.pageYOffset > stickyOffset);
    };
    window.addEventListener('scroll', scrollHandler);
    scrollHandler(); // Panggil sekali untuk set state awal
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  // Active Link Highlighting
   useEffect(() => {
    if (typeof window === "undefined") return; // Pastikan hanya berjalan di client-side

    const sections = mainNavLinks.map(link => document.getElementById(link.idTarget));
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -60% 0px", // Lebih agresif agar link aktif saat section mulai masuk
      threshold: 0,
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
            const correspondingNavLink = mainNavLinks.find(link => link.idTarget === entry.target.id);
            if (correspondingNavLink) {
                setActiveLink(correspondingNavLink.href);
            }
        }
      });
    }, observerOptions);

    let activeByDefaultSet = false;
    sections.forEach(section => {
      if (section) {
        observer.observe(section);
        // Set default active link jika section pertama terlihat
        if (!activeByDefaultSet && section.id === mainNavLinks[0].idTarget && section.getBoundingClientRect().top >=0 && section.getBoundingClientRect().top < window.innerHeight/2) {
            setActiveLink(mainNavLinks[0].href);
            activeByDefaultSet = true;
        }
      }
    });
     if (!activeByDefaultSet && sections[0] && sections[0].getBoundingClientRect().top > window.innerHeight/2 && window.scrollY === 0) {
        setActiveLink(mainNavLinks[0].href);
     }


    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);


  const toggleOffcanvas = () => setIsOffcanvasOpen(!isOffcanvasOpen);
  const closeOffcanvas = () => setIsOffcanvasOpen(false);

  const headerBaseClasses = "wrapper bg-soft-blue w-full z-fixed transition-all duration-300 ease-in-out";
  const headerPositionClasses = isSticky ? "fixed top-0 left-0 shadow-lg" : "relative"; // Atau `absolute` jika itu desainnya

  return (
    <header ref={headerRef} className={`${headerBaseClasses} ${headerPositionClasses}`}>
      <nav className="navbar navbar-expand-lg fancy navbar-light">
        {/* Container Tailwind untuk .container Bootstrap */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* .navbar-collapse-wrapper: bg-white, flex, justify-between, items-center */}
          <div className="navbar-collapse-wrapper bg-white flex flex-row flex-nowrap w-full justify-between items-center md:py-0 py-3">
            <div className="navbar-brand flex-shrink-0"> {/* w-100 di HTML asli, tapi mungkin perlu disesuaikan */}
              <Link href="/#" onClick={closeOffcanvas}>
                <Image src="/img/me/logoku2trans.png" alt="Logo" width={50} height={50} priority />
              </Link>
            </div>

            {/* Desktop Navigation: .navbar-collapse.offcanvas-nav (tapi ini untuk mobile), jadi kita buat .navbar-nav biasa */}
            <div className="hidden lg:flex navbar-collapse">
              <ul className="navbar-nav flex flex-row space-x-1"> {/* space-x-1 atau sesuai .nav-link padding */}
                {mainNavLinks.map((link) => (
                  <li key={link.label} className="nav-item">
                    <Link
                      href={link.href}
                      onClick={() => setActiveLink(link.href)}
                      className={`nav-link px-3 py-5 text-sm font-bold transition-colors
                        ${activeLink === link.href ? 'text-bs-blue' : 'text-nav-link-color'}
                        hover:text-bs-blue`}
                        // style.css .nav-link: padding: 1.2rem 1rem; font-size: .8rem; font-weight: 700;
                        // Tailwind approx: px-4 py-[1.2rem] text-[.8rem] font-bold
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links & Hamburger: .navbar-other */}
            <div className="navbar-other flex items-center space-x-3 ml-auto"> {/* ml-auto untuk mendorong ke kanan */}
              <ul className="navbar-nav flex-row items-center" data-sm-skip="true">
                <li className="nav-item hidden lg:block"> {/* Sembunyikan di mobile, tampil di desktop */}
                  <nav className="nav social social-muted flex space-x-3 text-social-muted">
                    {socialLinks.map((social) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.label}
                          className="hover:text-bs-blue transition-colors"
                        >
                          <Icon className="w-5 h-5" /> {/* Sesuaikan ukuran jika perlu */}
                        </a>
                      );
                    })}
                  </nav>
                </li>
                <li className="nav-item lg:hidden"> {/* Tombol Hamburger hanya di mobile */}
                  <div className="navbar-hamburger">
                    <HamburgerIcon isOpen={isOffcanvasOpen} onClick={toggleOffcanvas} />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Offcanvas Navigation */}
      {isOffcanvasOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={closeOffcanvas}
        ></div>
      )}
      <div
        className={`offcanvas-nav fixed top-0 h-full bg-offcanvas-bg w-[15rem] p-6 transition-transform duration-300 ease-in-out z-50
                    ${isOffcanvasOpen ? 'transform translate-x-0' : 'transform -translate-x-full'} lg:hidden`}
        aria-hidden={!isOffcanvasOpen}
      >
        <div className="offcanvas-header flex justify-between items-center pb-8 mb-4 border-b border-gray-700">
          <Link href="/#" onClick={closeOffcanvas}>
            <Image src="/img/me/logoku2trans.png" alt="Logo Offcanvas" width={50} height={50} />
          </Link>
          <OffcanvasCloseButton onClick={closeOffcanvas} />
        </div>
        <ul className="navbar-nav flex flex-col space-y-2">
          {mainNavLinks.map((link) => {
            const Icon = link.icon;
            return (
              <li key={link.label} className="nav-item">
                <Link
                  href={link.href}
                  onClick={() => { setActiveLink(link.href); closeOffcanvas(); }}
                  className={`nav-link flex items-center space-x-3 py-2 text-offcanvas-text hover:text-bs-blue transition-colors
                    ${activeLink === link.href ? 'text-bs-blue' : ''}`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{link.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;