import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        base: '77.25rem',
      },
      screens: {
        xs: '30rem',
        sm: '40rem',
        md: '48rem',
        lg: '64rem',
        xl: '80rem',
        '2xl': '90rem',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        brand: {
          blue: {
            DEFAULT: '#033559',
            1: '#023E6A',
            2: '#4E6297',
            3: '#033e6a',
            4: '#072E4D',
          },
          dark: '#232323',
          red: {
            DEFAULT: '#EB0000',
            1: '#EB0001',
          },

          yellow: '#FFC700',
          gray: {
            DEFAULT: '#898989',
            100: '#F9F9F9',
          },
        },
      },
      spacing: {
        50: '3.125rem',
        sixty: '3.75rem',
        70: '4.375rem',
        74: '4.625rem',
        90: '5.625rem',
        100: '6.25rem',
        150: '9.375rem',
        367: '22.9375rem',
        700: '43.75rem',
      },
      fontSize: {
        15: '0.9375rem',
        17: '1.0625rem',
        19: '1.1875rem',
        23: '1.4375rem',
        70: '4.375rem',
      },
      borderRadius: {
        10: '0.625rem',
        20: '1.25rem',
      },
      boxShadow: {
        base: '0px 20px 50px 0px #00000008',
        feature: '11px 11px 10px 0 rgba(0, 0, 0, 0.05)',
        review: '0px 4px 6px 0px #0000000F',
        messengerBtn: '4px 3px 9px 0px #0000000D',
        privacy: '1px 11px 20px 0px #0000000D',
      },
      backgroundImage: {
        faq: "url('/assets/images/bg-workshop.png')",
      },
    },
  },
  plugins: [],
};
export default config;
