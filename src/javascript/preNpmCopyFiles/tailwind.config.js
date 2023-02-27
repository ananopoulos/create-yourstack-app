/** @type {import('tailwindcss').Config} */
/* eslint-env node */
module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.{js,jsx}",
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.700"),
            h2: {
              color: theme("colors.gray.800"),
            },
            h3: {
              color: theme("colors.gray.800"),
            },
            strong: {
              color: theme("colors.gray.800"),
            },
            a: {
              color: theme("colors.blue.700"),
              textDecoration: "none",
              "&:hover": {
                color: theme("colors.blue.800"),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [require(`@tailwindcss/typography`)],
};
