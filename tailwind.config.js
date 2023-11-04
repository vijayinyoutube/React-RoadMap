/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        primary: "#5c6ac4",
        btnColor: "rgb(249 115 22)",
      },
      spacing: {
        kSpace_20: "20px",
        kSpace_10: "10px",
      },
    },
    // corePlugins: {
    //   preflight: false,
    // }
  },
  plugins: [],
}

