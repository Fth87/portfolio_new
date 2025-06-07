// components/sections/ProfilSection.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import { useEffect, useRef, useState } from 'react';

const ProfilSection = () => {
  const imageColRef = useRef<HTMLDivElement>(null);
  const textColRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState({
    image: false,
    text: false,
    buttons: false,
  });

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const group = entry.target.getAttribute('data-anim-group');
          if (group) {
            setIsVisible((prev) => ({ ...prev, [group]: true }));
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50% 0px',
    });

    const refs = [
      { ref: imageColRef, group: 'image' },
      { ref: textColRef, group: 'text' },
      { ref: buttonsRef, group: 'buttons' },
    ];

    refs.forEach(({ ref, group }) => {
      if (ref.current) {
        ref.current.setAttribute('data-anim-group', group);
        observer.observe(ref.current);
      }
    });

    return () => {
      refs.forEach(({ ref }) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  const getAnimationClasses = (groupName: keyof typeof isVisible, baseDelay = 0) => {
    // Efek slideInDown dari Animate.css: opacity 0 -> 1, transform translateY(-100%) -> translateY(0)
    return `transition-all duration-700 ease-out ${
      isVisible[groupName] ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10' // Efek awal "slide in down"
    }`;
  };

  return (
    <section id="profil" className="wrapper bg-soft-blue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-20 lg:pt-24 pb-14 md:pb-16 lg:pb-20 min-h-[90vh] flex justify-center items-center">
        {' '}
        {/* Padding dari HTML, disesuaikan */}
        <div className="grid lg:grid-cols-12 items-center gap-y-10 md:gap-y-12 lg:gap-x-8 xl:gap-x-12">
          <div ref={imageColRef} className={`lg:col-span-5 md:col-span-8 md:mx-auto lg:mx-0 flex justify-center relative ${getAnimationClasses('image')}`}>
            <Image className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[400px] xl:w-[450px] " src="/img/me/profil.png" alt="Foto Profil Fatih Fawwaz" width={450} height={450} priority />
          </div>

          {/* Kolom Teks (Kanan) */}
          <div ref={textColRef} className={`lg:col-span-6 lg:offset-1 text-center lg:text-left ${getAnimationClasses('text', 600)}`} style={{ animationDelay: isVisible.text ? '0ms' : '600ms' }}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 text-nav-link">
    
              I'm <br />
              <TypeAnimation
                sequence={['Tech Enthusiast.', 2000, 'Web Developer.', 2000, 'Student', 1000]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                className="typer text-gradient-7" // Kelas untuk gradien
                speed={70} // Kecepatan ketik
                deletionSpeed={60} // Kecepatan hapus
              />
            </h1>
            <p className="text-lg sm:text-xl leading-relaxed sm:leading-relaxed mb-7 md:px-10 lg:px-0 text-body-color">
              Hello! I'm <span className="text-gradient-6 font-semibold">Fatih</span>, I'm an AI Engineering student at ITS with interest in building interactive web applications. I'm currently exploring the integration of machine learning.
              I believe that collaboration and a thirst for knowledge are key to thriving in the tech industry.
            </p>
            <div ref={buttonsRef} className={`flex flex-col sm:flex-row justify-center lg:justify-start gap-3 ${getAnimationClasses('buttons', 900)}`} style={{ animationDelay: isVisible.buttons ? '0ms' : '900ms' }}>
              <Link href="#projects" className="btn-filled-gradient-7 w-full sm:w-auto text-center">
                See My Project
              </Link>
              <Link href="#contact" className="btn-custom-gradient-7  w-full sm:w-auto text-center">
                <span>Contact Me</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilSection;
