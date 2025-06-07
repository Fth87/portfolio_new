// components/sections/ProfilSection.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation'; // Impor library animasi ketik
import { useEffect, useRef, useState } from 'react'; // Untuk Intersection Observer

const ProfilSection = () => {
  // State dan Ref untuk animasi scroll (pengganti scrollCue)
  const sectionRef = useRef<HTMLDivElement>(null);
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
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const group = entry.target.getAttribute('data-anim-group');
          if (group) {
            setIsVisible(prev => ({ ...prev, [group]: true }));
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1, // Picu saat 10% elemen terlihat
      // rootMargin: "-50px 0px -50px 0px", // Bisa disesuaikan
    });

    const refs = [
      { ref: imageColRef, group: 'image' },
      { ref: textColRef, group: 'text' },
      { ref: buttonsRef, group: 'buttons' },
    ];

    refs.forEach(({ ref, group }) => {
      if (ref.current) {
        ref.current.setAttribute('data-anim-group', group); // Tambahkan atribut untuk identifikasi
        observer.observe(ref.current);
      }
    });

    return () => {
      refs.forEach(({ ref }) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  // Fungsi untuk mendapatkan kelas animasi
  const getAnimationClasses = (groupName: keyof typeof isVisible, baseDelay = 0) => {
    // Efek slideInDown dari Animate.css: opacity 0 -> 1, transform translateY(-100%) -> translateY(0)
    // Kita bisa tiru dengan Tailwind:
    return `transition-all duration-700 ease-out ${
      isVisible[groupName]
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 -translate-y-10' // Efek awal "slide in down"
    }`;
  };


  return (
    <section id="profil" className="wrapper bg-soft-blue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-20 lg:pt-24 pb-14 md:pb-16 lg:pb-20"> {/* Padding dari HTML, disesuaikan */}
        <div className="grid lg:grid-cols-12 items-center gap-y-10 md:gap-y-12 lg:gap-x-8 xl:gap-x-12">
          {/* Kolom Gambar (Kiri) */}
          <div
            ref={imageColRef}
            className={`lg:col-span-5 md:col-span-8 md:mx-auto lg:mx-0 flex justify-center relative ${getAnimationClasses('image')}`}
            // data-cues="slideInDown" data-group="header"
          >
            {/* profilImg class dari custom.css: width responsif */}
            <Image
              className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[400px] xl:w-[450px] rounded-full shadow-xl" // XL size disesuaikan, rounded-full, shadow-xl ditambahkan
              src="/img/me/profil.png" // Pastikan path benar: public/img/me/profil.png
              alt="Foto Profil Fatih Fawwaz"
              width={450} // Lebar maksimum sebagai referensi
              height={450} // Tinggi maksimum sebagai referensi
              priority // Penting untuk LCP jika ini gambar hero
            />
          </div>

          {/* Kolom Teks (Kanan) */}
          <div
            ref={textColRef}
            className={`lg:col-span-6 lg:offset-1 text-center lg:text-left ${getAnimationClasses('text', 600)}`}
            // data-cues="slideInDown" data-group="page-title" data-delay="600"
            style={{ animationDelay: isVisible.text ? '0ms' : '600ms' }} // data-delay scrollCue
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 text-nav-link"> {/* display-1 mb-5 */}
              I'm{' '}
              <TypeAnimation
                sequence={[
                  'Tech Enthusiast.',
                  1000, // data-delay="100" (antar kata), lalu delay setelah ketik
                  'Web Developer.',
                  1000,
                  'Front End Developer.', // HTML ada spasi di akhir
                  1000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                className="typer text-gradient-7" // Kelas untuk gradien
                speed={50} // Kecepatan ketik
                deletionSpeed={60} // Kecepatan hapus
              />
              {/* Cursor dari react-type-animation sudah include, span cursor manual tidak perlu */}
            </h1>
            <p className="text-lg sm:text-xl leading-relaxed sm:leading-relaxed mb-7 md:px-10 lg:px-0 text-body-color"> {/* lead fs-20 lh-sm mb-7 px-md-10 px-lg-0 */}
              Hello! I'm <span className="text-gradient-6 font-semibold">Fatih</span>, I'm an AI Engineering student at ITS with interest in building interactive web applications. I'm currently exploring the integration of machine learning. I believe that collaboration and a thirst for knowledge are key to thriving in the tech industry.
            </p>
            <div
              ref={buttonsRef}
              className={`flex flex-col sm:flex-row justify-center lg:justify-start gap-3 ${getAnimationClasses('buttons', 900)}`}
              // data-cues="slideInDown" data-group="page-title-buttons" data-delay="900"
              style={{ animationDelay: isVisible.buttons ? '0ms' : '900ms' }}
            >
              {/*
                Struktur asli:
                <div class="col-lg-4 mb-2">
                  <span><a href="#project" class="btn btn-lg btn-gradient gradient-7 rounded-pill me-2">See My Project</a></span>
                </div>
              */}
              <Link href="#projects" className="btn-filled-gradient-7 w-full sm:w-auto text-center">
                {/* Span di dalam button akan otomatis dari CSS .btn-filled-gradient-7 jika Anda buat seperti itu */}
                {/* Jika tidak, tambahkan <span> secara manual jika btn-filled-gradient-7 tidak otomatis buat */}
                See My Project
              </Link>
              <Link href="#contact" className="btn-custom-gradient-7 w-full sm:w-auto text-center">
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