import generated from '@tailwindcss/container-queries';
import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        grayscale:{
          lightest:"var(--lightest)",
          hardest:"var(--hardest)",
          light:"var(--light)",
          hard:"var(--hard)",
        },
        pallete:{
          warning:"var(--warning)",
          success:"var(--success)",
          error:"var(--error)",
          info:"var(--info)",
        },
        backgroundText: "var(--background-text)",
        secondaryMuted:"var(--secondary-muted)",
        secondaryText:"var(--secondary-text)",
        primaryText:"var(--primary-text)",
        surfaceText:"var(--surface-text)",
        background: "var(--background)",
        secondary:"var(--secondary)",
        surface:"var(--surface)",
        primary:"var(--primary)"
      },
      keyframes: {
        "collapsible-down": {
          to: { height: 'var(--radix-collapsible-content-height)' },
          from: { height: 0 },
        },
        "collapsible-up": {
          from: { height: 'var(--radix-collapsible-content-height)' },
          to: { height: 0 },
        },
        "accordion-down": {
          to: { height: "var(--radix-accordion-content-height)" },
          from: { height: 0 },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "fade-opacity": {
          '100%': { opacity: '0.8' },
          '0%': { opacity: '1' },
        },
      },
      boxShadow:{
        'secondary-xs':'var(--secondary-xs)',
        'secondary-xl':'var(--secondary-xl)',
        'secondary-s':'var(--secondary-s)',
        'secondary-m':'var(--secondary-m)',
        'secondary-l':'var(--secondary-l)',
        'default-xs':'var(--default-xs)',
        'default-xl':'var(--default-xl)',
        'primary-xs':'var(--primary-xs)',
        'primary-xl':'var(--primary-xl)',
        'default-s':'var(--default-s)',
        'default-m':'var(--default-m)',
        'default-l':'var(--default-l)',
        'primary-s':'var(--primary-s)',
        'primary-m':'var(--primary-m)',
        'primary-l':'var(--primary-l)',
      },
      animation: {
        "collapsible-down": "collapsible-down 1s ease-in-out",
        "collapsible-up": "collapsible-up 0.2s ease-in-out",
        "accordion-down": "accordion-down 0.2s ease-out",
        "fade-opacity": "fade-opacity 0.2s ease-in-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
     
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        lg: "var(--radius)",
      },
      screens: {
        '2xl': '1208px',
        xl: '1208px',
        lg: '1208px',
        sm: '360px',
        md: '768px',  // контейнер 100% ширины на малых экранах
      },

    },
    fontSize: {
      '2xl_bold': ['var(--fs-2xl)', {
        fontWeight: 'var(--fw-bold)',
        lineHeight: 'var(--lh-2xl)',
      }],
      xs_bold: ['var(--fs-xs)', {
        fontWeight: 'var(--fw-bold)',
        lineHeight: 'var(--lh-xs)',
      }],
      xl_bold: ['var(--fs-xl)',{
        fontWeight: 'var(--fw-bold)',
        lineHeight: 'var(--lh-xl)',
      }],
      m_bold: ['var(--fs-md)', {
        fontWeight: 'var(--fw-bold)',
        lineHeight: 'var(--lh-md)',
      }],
      l_bold: ['var(--fs-lg)', {
        fontWeight: 'var(--fw-bold)',
        lineHeight: 'var(--lh-l)',
      }],
      s_bold: ['var(--fs-s)', {
        fontWeight: 'var(--fw-bold)',
        lineHeight: 'var(--lh-s)',
      }],
      xs_mob: ['var(--fs-m-xs)', 'var(--lh-m-xs)'],
      xl_mob: ['var(--fs-m-xl)', 'var(--lh-m-xl)'],
      s_mob: ['var(--fs-m-s)', 'var(--lh-m-s)'],
      m_mob: ['var(--fs-m-m)', 'var(--lh-m-m)'],
      l_mob: ['var(--fs-m-l)', 'var(--lh-m-l)'],
      '2xl':['var(--fs-2xl)','var(--lh-2xl)'],
      xs: ['var(--fs-xs)', 'var(--lh-xs)'],
      xl: ['var(--fs-xl)', 'var(--lh-xl)'],
      s: ['var(--fs-s)', 'var(--lh-s)'],
      m: ['var(--fs-m)', 'var(--lh-m)'],
      l: ['var(--fs-l)', 'var(--lh-l)'],
    },
    container: {
      screens: {
        '2xl': '1208px',
        xl: '1208px',
        lg: '1208px',
        md: '728px',  // контейнер 100% ширины на малых экранах
        sm: '100%',
      },
      padding: {
        DEFAULT: '20px',
        '2xl': '20px',
        xl: '20px',
        lg: '20px',
        md: '16px',
        sm: '16px',
      },
      center: true,
    },
  },
  content: [
    './pages/**/*.{ts,tsx,vue}',
    './components/**/*.{ts,tsx,vue}',
    './app/**/*.{ts,tsx,vue}',
    './src/**/*.{ts,tsx,vue}',
	],
  plugins: [animate, generated],
  
  darkMode: ["class"],
  
  safelist: ["dark"],
  prefix: "",
}


