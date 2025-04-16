import flowbiteReact from "flowbite-react/plugin/tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ".flowbite-react/class-list.json"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#011825',
        
      },
      zIndex: {
        '-1': '-1',
      },
    },
  },
  plugins: [flowbiteReact],
  
}