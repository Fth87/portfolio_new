'use client';

// components/layout/Footer.tsx
import Link from 'next/link';
import Image from 'next/image'; // Untuk SVG icon

// Menggunakan Feather Icons sebagai contoh
import { FiLinkedin, FiGithub, FiInstagram } from 'react-icons/fi';
// Jika Anda berhasil dengan Unicons:
// import { UilLinkedin, UilGithub, UilInstagram } from 'react-icons/uil';

const socialLinksFooter = [
  { href: 'https://www.linkedin.com/in/fatih-fawwaz-a44b35310/', icon: FiLinkedin, label: 'LinkedIn' },
  { href: 'https://github.com/Fth87', icon: FiGithub, label: 'GitHub' },
  { href: 'https://instagram.com/fatihfwz', icon: FiInstagram, label: 'Instagram' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Logika untuk form (contoh dasar, perlu implementasi penuh)
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Tambahkan validasi 'needs-validation' Bootstrap jika diperlukan
    // atau gunakan library validasi React
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      form.classList.add('was-validated'); // Untuk styling validasi Bootstrap-like jika Anda mempertahankannya
      return;
    }
    form.classList.remove('was-validated');

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log('Form data:', data);
    // Kirim data ke API route Anda di sini
    // Misalnya: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) });
    alert('Pesan terkirim (simulasi)! Cek console.');
    form.reset();
  };

  return (
    <footer id="contact"> {/* ID untuk navigasi scroll */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-14 md:pt-18 pb-7">
        <div className="card bg-soft-blue mb-8 rounded-lg"> {/* .rounded-lg dari Sandbox .card */}
          <div className="card-body p-8 md:p-12"> {/* p-12 dari HTML, p-8 untuk mobile */}
            <div className="grid lg:grid-cols-2 gap-x-8 xl:gap-x-12 gap-y-10 items-center">
              {/* Kolom Kiri */}
              <div className="col-lg-6">
                {/*
                  SVGInject akan meng-inline SVG. Di React, kita bisa impor SVG sebagai komponen
                  atau gunakan <img> jika tidak perlu manipulasi properti SVG.
                  Untuk ./assets/img/icons/email.svg, pastikan ada di public/img/icons/email.svg
                */}
                <Image
                  src="/img/icons/email.svg" // Sesuaikan path jika perlu
                  alt="Email Icon"
                  width={48} // icon-svg-sm di sandbox mungkin punya ukuran spesifik, sesuaikan
                  height={48}
                  className="mb-4" // icon-svg icon-svg-sm mb-4
                />
                <h2 className="text-3xl md:text-4xl font-bold mb-3 lg:pr-10"> {/* display-4 mb-3 pe-lg-10 */}
                  If you <span className="text-gradient-7">Like</span> what you see, let's work <span className="text-gradient-7">together.</span>
                </h2>
                {/* <p className="text-lg text-gray-700 lg:pr-12 mb-0"> {/* lead pe-lg-12 mb-0 */}
                {/* I bring rapid solutions...
                </p> */}
              </div>

              {/* Kolom Kanan - Form Kontak */}
              <div className="col-lg-6">
                <form className="contact-form needs-validation" onSubmit={handleSubmit} noValidate>
                  {/* <div className="messages"></div> Tempat untuk pesan sukses/error */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                    <div className="col-md-6">
                      <div className="form-floating relative mb-4">
                        <input
                          id="form_name"
                          type="text"
                          name="name"
                          className="form-control peer block w-full px-3 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-bs-blue focus:outline-none placeholder-transparent"
                          placeholder="Name"
                          required
                        />
                        <label
                          htmlFor="form_name"
                          className="absolute text-gray-500 duration-300 transform -translate-y-3 scale-75 top-1.5 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-bs-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                        >
                          Name *
                        </label>
                        {/* Feedback validasi bisa ditambahkan di sini jika pakai validasi sisi client Bootstrap-like */}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating relative mb-4">
                        <input
                          id="form_email"
                          type="email"
                          name="email"
                          className="form-control peer block w-full px-3 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-bs-blue focus:outline-none placeholder-transparent"
                          placeholder="jane.doe@example.com"
                          required
                        />
                        <label
                          htmlFor="form_email"
                           className="absolute text-gray-500 duration-300 transform -translate-y-3 scale-75 top-1.5 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-bs-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                        >
                          Email *
                        </label>
                      </div>
                    </div>
                    <div className="col-span-1 md:col-span-2">
                      <div className="form-floating relative mb-4">
                        <textarea
                          id="form_message"
                          name="message"
                          className="form-control peer block w-full px-3 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-bs-blue focus:outline-none placeholder-transparent"
                          placeholder="Your message"
                          rows={4} // Sandbox style="height: 150px"
                          required
                        ></textarea>
                        <label
                          htmlFor="form_message"
                           className="absolute text-gray-500 duration-300 transform -translate-y-3 scale-75 top-1.5 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-bs-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                        >
                          Message *
                        </label>
                      </div>
                    </div>
                    <div className="col-span-1 md:col-span-2">
                       {/* Menggunakan class custom untuk tombol gradient */}
                      <button type="submit" className="btn-custom-gradient-7 mb-3">
                        <span>Send message</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright dan Social Links bawah */}
        <div className="md:flex md:items-center md:justify-between">
          <p className="mb-2 lg:mb-0 text-sm text-gray-600"> {/* Sesuaikan warna teks jika perlu */}
            &copy; {currentYear} Fatih. All rights reserved.
          </p>
          <nav className="nav social social-muted flex space-x-3 text-social-muted md:justify-end">
            {socialLinksFooter.map((social) => {
              const Icon = social.icon; // atau social.iconFallback jika menggunakan itu
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="hover:text-bs-blue transition-colors"
                >
                  <Icon className="w-5 h-5" /> {/* Sesuaikan ukuran ikon */}
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;