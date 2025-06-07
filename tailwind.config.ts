// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        // Tetap menggunakan variabel CSS dari next/font/google untuk font utama
        sans: ['var(--font-manrope)', 'sans-serif'],
      },
      colors: {
        // Mapping nama warna Tailwind ke CSS Custom Properties dari globals.css
        primary: 'var(--color-primary)',
        'soft-blue': 'var(--color-soft-blue)',
        'body-bg': 'var(--color-body-bg)',
        'body-color': 'var(--color-body-color)',
        'nav-link': 'var(--color-nav-link)',
        'nav-link-hover': 'var(--color-nav-link-hover)',
        'offcanvas-bg': 'var(--color-offcanvas-bg)',
        'offcanvas-text': 'var(--color-offcanvas-text)',
        'social-muted': 'var(--color-social-muted)',
        'gradient-7-start': 'var(--color-gradient-7-start)',
        'teal-gradient-end': 'var(--color-teal-gradient-end)',
        'gradient-6-start': 'var(--color-gradient-6-start)',
        'green-gradient-end': 'var(--color-green-gradient-end)',

               'light': 'var(--bs-light, #fefefe)',      // Untuk bg-light

        // Warna dari Sandbox style.css untuk project cards
        'bs-red': '#e2626b',
        'soft-red': '#fdf3f4',
        'bs-yellow': '#fab758',
        'soft-yellow': '#fff8ef', // style.css punya dua, saya pilih ini
        'bs-leaf': '#7cb798',
        'soft-leaf': '#f5faf7',
        'bs-purple': '#747ed1',
        'soft-purple': '#f5f5fc',

        // Jika Anda mendefinisikan warna --bs-* lainnya di @theme,
        // Anda bisa mapping mereka juga di sini jika ingin utilitas Tailwindnya
        // Contoh: 'bs-blue': 'var(--bs-blue-color-variable-name-from-theme)'
      },
      borderRadius: {
        sandbox: 'var(--radius-sandbox)',
        // 'pill': '50rem', // Jika tidak didefinisikan di @theme, bisa langsung atau pakai var()
      },
      boxShadow: {
        'sandbox-sm': 'var(--shadow-sandbox-sm)',
        sandbox: 'var(--shadow-sandbox)',
        'sandbox-lg': 'var(--shadow-sandbox-lg)',
      },
      fontSize: {
        'nav-link': 'var(--text-nav-link)',
        'body-base': 'var(--text-body-base)',
        // Anda bisa menambahkan ukuran font lain dari @theme jika ada
      },
      zIndex: {
        navbar: 'var(--z-navbar)',
        offcanvas: 'var(--z-offcanvas)',
        dropdown: 'var(--z-dropdown)',
      },
    },
  },
  plugins: [
    // require('@tailwindcss/forms'), // Opsional
  ],
};
export default config;
