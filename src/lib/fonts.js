// src/lib/fonts.js
import localFont from 'next/font/local'

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
            weight: '800',
            style: 'normal',
        },
        

    ],
    variable: '--font-satoshi',
    display: 'swap',
})