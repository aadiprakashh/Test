/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}", // Include all source files
];
export const theme = {
  extend: {
    colors: {
        // 🎨 Primary Colors
        "primary-blue": "#4A90E2",
        "primary-teal": "#50BFA5",

        // 🎯 Secondary Colors
        "secondary-mint": "#A8E6CF",
        "secondary-coral": "#FF6B6B",
        "secondary-sand": "#F4A261",

        // 🌫️ Neutral Backgrounds
        "background-light": "#FAF8F2",
        "background-gray": "#EAEAEA",
        "text-dark": "#333333",

        // ✅ Status Colors
        "success-green": "#28A745",
        "warning-orange": "#FFA500",
        "error-red": "#D9534F",

        // 🎨 Additional Shades
        "primary-blue-dark": "#357ABD",
        "primary-teal-dark": "#3D8B76",
        "gray-light": "#F5F5F5",
        "gray-dark": "#888888",
      }
  },
};
export const plugins = [];
