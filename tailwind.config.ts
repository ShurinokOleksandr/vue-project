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
        backgroundSecond:"var(--background-second)",
        backgroundText: "var(--background-text)",
        backgroundMain:"var(--background-main)",
        secondaryMuted:"var(--secondary-muted)",
        secondaryText:"var(--secondary-text)",
        primaryMuted:"var(--primary-muted)",
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
      // screens: {
      //   '2xl': '1208px',
      //   xl: '1208px',
      //   lg: '1208px',
      //   sm: '360px',
      //   md: '768px',  // контейнер 100% ширины на малых экранах
      // },
  // это указывает на ширину контейнера
      screens: {
        '2xl': '1208px',
        xl: '1208px',
        lg: '1208px',
        sm: '336px',
        md: '736px',  // контейнер 100% ширины на малых экранах
      },

    },
    fontSize: {
      xs_header_mob: ['var(--fs-mob-h-xs)', {
        lineHeight: 'var(--lh-mob-h-xs)',
        fontWeight: 'var(--fw-bold)',
      }],
      sm_header_mob: ['var(--fs-mob-h-sm)', {
        lineHeight: 'var(--lh-mob-h-sm)',
        fontWeight: 'var(--fw-bold)',
      }],
      md_header_mob: ['var(--fs-mob-h-md)', {
        lineHeight: 'var(--lh-mob-h-md)',
        fontWeight: 'var(--fw-bold)',
      }],
      lg_header_mob: ['var(--fs-mob-h-lg)', {
        lineHeight: 'var(--lh-mob-h-lg)',
        fontWeight: 'var(--fw-bold)',
      }],
      xl_header_mob: ['var(--fs-mob-h-xl)', {
        lineHeight: 'var(--lh-mob-h-xl)',
        fontWeight: 'var(--fw-bold)',
      }],
      xs_header: ['var(--fs-h-xs)', {
        fontWeight: 'var(--fw-bold)',
        lineHeight: 'var(--lh-h-xs)',
      }],
      sm_header: ['var(--fs-h-sm)', {
        fontWeight: 'var(--fw-bold)',
        lineHeight: 'var(--lh-h-sm)',
      }],
      md_header: ['var(--fs-h-md)', {
        fontWeight: 'var(--fw-bold)',
        lineHeight: 'var(--lh-h-md)',
      }],
      lg_header: ['var(--fs-h-lg)', {
        fontWeight: 'var(--fw-bold)',
        lineHeight: 'var(--lh-h-lg)',
      }],
      '2xl_bold': ['var(--fs-2xl)', {
        fontWeight: 'var(--fw-bold)',
        lineHeight: 'var(--lh-2xl)',
      }],
      xs_bold: ['var(--fs-xs)', {
        fontWeight: 'var(--fw-bold)',
        lineHeight: 'var(--lh-xs)',
      }],
      md_bold: ['var(--fs-md)', {
        fontWeight: 'var(--fw-bold)',
        lineHeight: 'var(--lh-md)',
      }],
      lg_bold: ['var(--fs-lg)', {
        fontWeight: 'var(--fw-bold)',
        lineHeight: 'var(--lh-lg)',
      }],
      sm_bold: ['var(--fs-sm)', {
        fontWeight: 'var(--fw-bold)',
        lineHeight: 'var(--lh-sm)',
      }],
      xl_bold: ['var(--fs-xl)',{
        fontWeight: 'var(--fw-bold)',
        lineHeight: 'var(--lh-xl)',
      }],
      xs_mob: ['var(--fs-m-xs)', 'var(--lh-m-xs)'],
      xl_mob: ['var(--fs-m-xl)', 'var(--lh-m-xl)'],
      sm_mob: ['var(--fs-m-sm)', 'var(--lh-m-sm)'],
      md_mob: ['var(--fs-m-md)', 'var(--lh-m-md)'],
      lg_mob: ['var(--fs-m-lg)', 'var(--lh-m-lg)'],
      '2xl':['var(--fs-2xl)','var(--lh-2xl)'],
      xs: ['var(--fs-xs)', 'var(--lh-xs)'],
      xl: ['var(--fs-xl)', 'var(--lh-xl)'],
      sm: ['var(--fs-sm)', 'var(--lh-sm)'],
      md: ['var(--fs-md)', 'var(--lh-md)'],
      lg: ['var(--fs-lg)', 'var(--lh-lg)'],
    },
    container: {
      // padding: {
      //         DEFAULT: '4px',
      //         '2xl': '4px',
      //         xl: '4px',
      //         lg: '4px',
      //         md: '4px',
      //         sm: '4px',
      //       },
      // width: {
      //   '2xl': '1216px',
      //   xl: '1216px',
      //   lg: '1216px',
      //   md: '776px',
      //   sm: '368px',
      // },
      width: {
        '2xl': '1208px',
        xl: '1208px',
        lg: '1208px',
        md: '736px',
        sm: '336px',
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


