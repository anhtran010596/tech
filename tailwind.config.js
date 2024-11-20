/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        "custom-calc-width": "calc(100% - 160px)", // Tạo giá trị calc tùy chỉnh
      },
    },
    container: {
      // you can configure the container to be centered

      // or have default horizontal padding
      padding: {
        default: "0rem",
        md: "0rem",
        lg: "1rem",
        xl: "2rem",
        "2xl": "5rem",
      },

      // default breakpoints but with 40px removed
      screens: {
        md: "728px",
        lg: "890px",
        xl: "1240px",
        "2xl": "1400px",
      },
    },
  },
  plugins: [],
};
