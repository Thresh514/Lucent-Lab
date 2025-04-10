// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#121212', // 自定义名为 dark 的颜色
      },
      textShadow: {
        glow: '0 0 30px rgb(248, 255, 152)',  // sky-400 蓝光
        pink: '0 0 10px #ec4899', // pink-500 粉光
        neon: '0 0 12px #0ff',    // 青绿色霓虹光
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
  ],
};
