/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#1152d4',
                gold: '#C5A059',
                'navy-deep': '#0f172a',
                'navy-text': '#1e293b',
                'navy-light': '#334155',
            },
            fontFamily: {
                display: ['Manrope', 'sans-serif'],
                serif: ['"Playfair Display"', 'serif'],
                serif: ['"Playfair Display"', 'serif'],
                sans: ['Manrope', 'sans-serif'],
                handwriting: ['"Indie Flower"', '"Caveat"', 'cursive'],
            },
        },
    },
    plugins: [],
}
