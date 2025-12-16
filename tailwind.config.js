module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', // Ensure this includes your JSX/TSX files
  ],
  theme: {
    extend: { colors: {
        First: '#1D1955',
        Second:"#417DC0",
        Third:"#33469B",
        Four:"#2A3590",
        Five:"#E01F26",
      },},
  },
  plugins: [],
}
