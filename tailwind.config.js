/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-page-hero': "url( )",
        'fade-bg': 'linear-gradient(to right, #324CD4 0%, #324CD4 100%)',
      },
      backgroundColor:{
        primaryColor: '#373737',
        backgroundColor:'#F0F0F0',
      },
      fontFamily: {
        san_book: ['Suisse Intl Book', 'sans-serif'],
        san_bold: ['Suisse Intl Bold', 'sans-serif'],
        san_medium: ['Suisse Intl Medium','sans-serif'],
        san_regular: ['Suisse Intl Regular', 'sans-serif'],
        san_light: ['Suisse Intl Light', 'sans-serif'],
      },
      letterSpacing:{
        '1px':"-1px",
      },
      margin:{
        "144px":"144px",
        "72px":"72px",
        "24px":"24px",
      },
      screens:{
        sm:'640px',
        lg: '1280px',
        xl: '1440px',       
      },
    },
  },
};
