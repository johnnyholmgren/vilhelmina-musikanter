module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./src/components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
      extend: { padding: { "fluid-video": "56.25%" } },
    },
  variants: {},
  plugins: [require('@tailwindcss/ui')],
}
