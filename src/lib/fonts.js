// src/lib/fonts.js
import localFont from 'next/font/local';

export const clashGrotesk = localFont({
    src: [
        {
            path: '../../public/fonts/ClashGrotesk-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/fonts/ClashGrotesk-Medium.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../public/fonts/ClashGrotesk-Bold.woff2',
            weight: '700',
            style: 'normal',
        },
    ],
    variable: '--font-clash-grotesk',
    display: 'swap',
    preload: true,
    fallback: ['system-ui', 'sans-serif'],
});

export const satoshi = localFont({
    src: [
        {
            path: '../../public/fonts/Satoshi-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Satoshi-Medium.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Satoshi-Bold.woff2',
            weight: '700',
            style: 'normal',
        },
    ],
    variable: '--font-satoshi',
    display: 'swap',
    preload: true,
    fallback: ['system-ui', 'sans-serif'],
});

// Helper function to combine font classes
export const combineFonts = (...fonts) => fonts.map(font => font.className).join(' ');
