'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function AnimatedCarousel() {
    const [isHovered, setIsHovered] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const scrollerRef = useRef(null);

    const images = [
        '/Carousel/appDesigning.webp',
        '/Carousel/branding.webp',
        '/Carousel/illustration.webp',
        '/Carousel/posterdesign.webp',
        '/Carousel/productDesigning.webp',
        '/Carousel/websiteLandingPage.webp',
    ];

    const allImages = [...images, ...images];

    useEffect(() => {
        const scroller = scrollerRef.current;
        if (scroller) {
            const scrollWidth = scroller.scrollWidth;
            const animationDuration = 60; // Decreased from 45 to 30 seconds for even faster speed

            scroller.style.setProperty('--scroll-width', `${scrollWidth / 2}px`);
            scroller.style.setProperty('--animation-duration', `${animationDuration}s`);

            // Set initial scroll position to the end
            scroller.scrollLeft = scroller.scrollWidth / 2;

            // Add a small delay to start the animation
            setTimeout(() => {
                scroller.classList.add('scrolling');
            }, 100);
        }
    }, []);

    return (
        <div className="w-full bg-[#7D40FF] overflow-hidden py-6 relative">
            <div className="absolute inset-0 bg-[#7D40FF]" /> {/* Background color filler */}
            <div
                ref={scrollerRef}
                className={`flex gap-4 py-4 w-max will-change-transform relative z-0 ${isHovered ? 'paused' : 'scrolling'
                    }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => {
                    setIsHovered(false);
                    setHoveredIndex(null);
                }}
            >
                {allImages.map((image, index) => (
                    <div
                        key={index}
                        className={`relative w-[280px] sm:w-[320px] md:w-[280px] h-[200px] sm:h-[240px] md:h-[240px] 
                             overflow-hidden flex-shrink-0 transition-all duration-500 ease-in-out lg:rounded-[22px] rounded-[20px]
                            ${hoveredIndex === index ? 'scale-95 shadow-xl' : 'scale-100'}`}
                        onMouseEnter={() => {
                            setHoveredIndex(index);
                        }}
                    >
                        <Image
                            src={image}
                            alt={`Carousel image ${index + 1}`}
                            fill
                            className="object-cover transition-transform duration-500 ease-in-out"
                            priority={index < images.length}
                        />
                    </div>
                ))}
            </div>

            <style jsx global>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(calc(-50% - 1rem));
                    }
                    100% {
                        transform: translateX(0);
                    }
                }

                .scrolling {
                    animation: scroll var(--animation-duration) linear infinite;
                    animation-direction: normal;
                }

                .paused {
                    animation-play-state: paused;
                }

                .scrolling > div,
                .paused > div {
                    transition: all 0.5s ease-in-out;
                }

                .scrolling > div:hover,
                .paused > div:hover {
                    z-index: 10;
                }
            `}</style>
        </div>
    );
}

