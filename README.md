# About Project

This project learn create simple form with vitereact form by using tailwindcss & formik  

## Create Project

npm create vite my-project-name --template react-ts

## Change to project directory

cd my-project-name

## install project:

npm install > react > typescript

## run project:

npm run dev

# Tailwind CSS

https://tailwindcss.com/docs/guides/vite

## Install Tailwind CSS dan dependencies

npm install -D tailwindcss postcss autoprefixer

## Inisialisasi konfigurasi Tailwind CSS

npx tailwindcss init -p

## Configure your template paths

Open file `tailwind.config.js` & add plugin Tailwind CSS.

    // Add the paths to all of your template files in your tailwind.config.js file.

    export default {
        content: [
            "./index.html",
            "./src/**/*.{js,ts,jsx,tsx}",
        ],
        theme: {
            extend: {},
        },
        plugins: [],
        }