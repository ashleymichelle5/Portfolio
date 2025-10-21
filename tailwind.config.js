/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
       animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'spin-slow': 'spin 3s linear infinite',
        'glow': 'glow 1.5s ease-in-out infinite',
        'particle-1': 'particle-1 2s ease-in-out infinite',
        'particle-2': 'particle-2 2s ease-in-out infinite',
        'particle-3': 'particle-3 2s ease-in-out infinite',
        'particle-4': 'particle-4 2s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': { 
            filter: 'drop-shadow(0 0 8px rgba(34,211,238,0.8)) brightness(1)' 
          },
          '50%': { 
            filter: 'drop-shadow(0 0 20px rgba(34,211,238,1)) brightness(1.2)' 
          },
        },
      },
        'particle-1': {
          '0%': { 
            transform: 'translate(-50%, 0) scale(0)',
            opacity: '0' 
          },
          '50%': { 
            transform: 'translate(-50%, -30px) scale(1)',
            opacity: '1' 
          },
          '100%': { 
            transform: 'translate(-50%, -60px) scale(0)',
            opacity: '0' 
          },
        },
        'particle-2': {
          '0%': { 
            transform: 'translate(-50%, 0) scale(0)',
            opacity: '0' 
          },
          '50%': { 
            transform: 'translate(-50%, 30px) scale(1)',
            opacity: '1' 
          },
          '100%': { 
            transform: 'translate(-50%, 60px) scale(0)',
            opacity: '0' 
          },
        },
        'particle-3': {
          '0%': { 
            transform: 'translate(0, -50%) scale(0)',
            opacity: '0' 
          },
          '50%': { 
            transform: 'translate(-30px, -50%) scale(1)',
            opacity: '1' 
          },
          '100%': { 
            transform: 'translate(-60px, -50%) scale(0)',
            opacity: '0' 
          },
        },
        'particle-4': {
          '0%': { 
            transform: 'translate(0, -50%) scale(0)',
            opacity: '0' 
          },
          '50%': { 
            transform: 'translate(30px, -50%) scale(1)',
            opacity: '1' 
          },
          '100%': { 
            transform: 'translate(60px, -50%) scale(0)',
            opacity: '0' 
          },
        },
    },
  },
  plugins: [],
  };