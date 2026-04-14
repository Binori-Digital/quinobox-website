/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f7f6f4',
          100: '#eeebe8',
          200: '#ddd7d0',
          300: '#ccc2b8',
          400: '#aaa099',
          500: '#89807a',
          600: '#6a6159',
          700: '#4a4238',
          800: '#2a2218',
          900: '#1a1a1a', // Dark Navy
          950: '#0f0f0f',
        },
        accent: {
          50: '#fef9f3',
          100: '#fdf4e8',
          200: '#fae8cc',
          300: '#f6dcb1',
          400: '#f1c480',
          500: '#ead04f',
          600: '#d4b840',
          700: '#b89932',
          800: '#9c7a27',
          900: '#c9a961', // Warm Gold
          950: '#6d5e1a',
        },
        neutral: {
          50: '#ffffff',
          100: '#f5f5f5',
          200: '#e0e0e0',
          300: '#d1d5db',
          400: '#999999',
          500: '#666666',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        }
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Source Sans Pro', 'sans-serif'],
      },
      fontSize: {
        xs: ['12px', { lineHeight: '16px', letterSpacing: '0.5px' }],
        sm: ['14px', { lineHeight: '20px' }],
        base: ['16px', { lineHeight: '24px' }],
        lg: ['18px', { lineHeight: '28px' }],
        xl: ['24px', { lineHeight: '32px' }],
        '2xl': ['32px', { lineHeight: '40px' }],
        '3xl': ['48px', { lineHeight: '56px' }],
        '4xl': ['64px', { lineHeight: '72px' }],
      },
      spacing: {
        0: '0',
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        6: '24px',
        8: '32px',
        12: '48px',
        16: '64px',
        20: '80px',
        24: '96px',
        32: '128px',
      },
      boxShadow: {
        none: 'none',
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        base: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        md: '0 6px 12px -2px rgba(0, 0, 0, 0.08)',
        lg: '0 12px 24px -4px rgba(0, 0, 0, 0.12)',
        xl: '0 20px 40px -6px rgba(0, 0, 0, 0.15)',
      },
      borderRadius: {
        none: '0',
        sm: '4px',
        base: '8px',
        md: '12px',
        lg: '16px',
        full: '9999px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-down': 'fadeDown 0.8s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      transitionDuration: {
        DEFAULT: '300ms',
        fast: '150ms',
        normal: '300ms',
        slow: '500ms',
      },
    },
  },
  plugins: [],
};
