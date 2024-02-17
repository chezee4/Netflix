import type { Config } from 'tailwindcss'
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'gradient-linear':
          'linear-gradient(90deg, rgba(90,9,9,0.15738795518207283) 2%, rgba(172,9,9,0.8548669467787114) 19%, rgba(138,13,13,0.8856792717086834) 42%, rgba(110,11,11,0.36747198879551823) 72%, rgba(110,11,11,0.12097338935574231) 94%)',
        'bg-cva': "url('../../public/bgCTA.png')",
      }),
      backgroundColor: {
        primary: '#141414',
      },
      colors: {
        gray: {
          60: '#999999',
          65: '#A6A6A6',
          70: '#B3B3B3',
          75: '#BFBFBF',
          90: '#E4E4E7',
          95: '#F1F1F3',
          97: '#F7F7F8',
          99: '#FCFCFD',
        },
        black: {
          6: '#0F0F0F',
          8: '#141414',
          10: '#1A1A1A',
          12: '#1F1F1F',
          15: '#262626',
          20: '#333333',
          25: '#404040',
          35: '#4C4C4C',
        },
        red: {
          hover: '#c10b0b',
          45: '#E50000',
          50: '#FF0000',
          55: '#FF1919',
          60: '#FF3333',
          80: '#FF9999',
          90: '#FFCCCC',
          95: '#FFE5E5',
          99: '#FFFAFA',
        },
      },
      screens: {
        mm: '400px',
        xs: '480px',
      },
    },
    plugins: [],
  },
}
export default config
