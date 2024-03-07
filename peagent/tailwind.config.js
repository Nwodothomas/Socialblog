// tailwind.config.js
module.exports = {
  purge: ['./public/**/*.html', './src/**/*.js'],

  theme: {
    extend: {
      colors: {
        // Update custom colors
        primary: '#3366FF', // Blue
        secondary: '#FF4500', // Orange
        accent: '#4A90E2', // Light Blue
        background: '#F5F5F5', // Light Gray
        text: '#333333', // Dark Gray
      },
      fontFamily: {
        // Update custom fonts
        sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
      },
      spacing: {
        // Add custom spacing
        '1/2': '0.125rem', // 2px
        '1/3': '0.3333rem', // 4px
        '2/3': '0.6667rem', // 8px
        '1/4': '0.25rem', // 4px
        '2/4': '0.5rem', // 8px
        '3/4': '0.75rem', // 12px
        '1/5': '0.2rem', // 3.2px
        '2/5': '0.4rem', // 6.4px
        '3/5': '0.6rem', // 9.6px
        '4/5': '0.8rem', // 12.8px
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover', 'focus'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};