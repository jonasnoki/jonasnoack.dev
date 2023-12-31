/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            aspectRatio: {
                thumbnail: "1.5",
            },
            fontFamily: {
                sans: ["Fira Mono", "Courier"],
            },
        },
        colors: {
            white: "#ffffff",
            tiffany_blue: {
                DEFAULT: "#99ddc8",
                100: "#13382c",
                200: "#257058",
                300: "#38a884",
                400: "#60caa8",
                500: "#99ddc8",
                600: "#ace3d2",
                700: "#c1eadd",
                800: "#d6f1e9",
                900: "#eaf8f4",
            },
            pistachio: {
                DEFAULT: "#95bf74",
                100: "#1d2a13",
                200: "#3a5427",
                300: "#577e3a",
                400: "#74a84d",
                500: "#95bf74",
                600: "#a9cc8f",
                700: "#bfd8ab",
                800: "#d4e5c7",
                900: "#eaf2e3",
            },
            asparagus: {
                DEFAULT: "#659b5e",
                100: "#141f13",
                200: "#293e26",
                300: "#3d5d39",
                400: "#527c4c",
                500: "#659b5e",
                600: "#84b07e",
                700: "#a3c49e",
                800: "#c1d7be",
                900: "#e0ebdf",
            },
            fern_green: {
                DEFAULT: "#556f44",
                100: "#11160e",
                200: "#222c1b",
                300: "#334229",
                400: "#445936",
                500: "#556f44",
                600: "#75985d",
                700: "#97b384",
                800: "#bacdad",
                900: "#dce6d6",
            },
            dark_slate_gray: {
                DEFAULT: "#283f3b",
                100: "#080c0c",
                200: "#101917",
                300: "#182523",
                400: "#20322f",
                500: "#283f3b",
                600: "#487069",
                700: "#6aa097",
                800: "#9bbfb9",
                900: "#cddfdc",
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
}
