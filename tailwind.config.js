/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // colors: {
    //   'text': 'var(--text)',
    //   'background': 'var(--background)',
    //   'primary': 'var(--primary)',
    //   'secondary': 'var(--secondary)',
    //   'accent': 'var(--accent)',
    //   'bg': 'var(--secondary)',
    //  },
    
    extend: {
      fontFamily: {
        primary: ['Poppins'],
    },
    },
  },
  plugins: [],
}

