'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const Button = ({ onClick, children }) => (
    <button
        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
        onClick={onClick}
    >
        {children}
    </button>
);

const Page = ({ children, isVisible, zIndex }) => (
    <AnimatePresence>
        {isVisible && (
            <motion.div
                initial={{ rotateY: -90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: 90, opacity: 0 }}
                transition={{ duration: 0.5, type: 'spring', stiffness: 50 }}
                style={{ zIndex }}
                className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 rounded-r-lg shadow-lg overflow-hidden flex flex-col items-center justify-center p-8 text-center"
            >
                {children}
            </motion.div>
        )}
    </AnimatePresence>
);

const BookStyleBirthdayCard = () => {
    const [currentPage, setCurrentPage] = useState(0);

    const nextPage = () => {
        setCurrentPage((prev) => Math.min(prev + 1, 3));
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 to-pink-500 p-4">
            <div className="relative w-full max-w-lg aspect-[2/3] bg-white rounded-lg shadow-2xl overflow-hidden">
                  <Image
                    src="/HeroSection/wedding-Night-2.jpg"
                    alt="Hero background"
                    fill
                    style={{ objectFit: 'cover' }}
                    quality={100}
                    priority
                  />
                <AnimatePresence>
                    {currentPage === 0 && (
                        <motion.div
                            initial={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
                        >
                            <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                                Happy Birthday
                                <br />
                                Dear Brother!
                            </h1>
                            <Button onClick={nextPage}>Open Card</Button>
                        </motion.div>
                    )}
                </AnimatePresence>

                <Page isVisible={currentPage >= 1} zIndex={1}>
                    <h2 className="text-3xl font-bold mb-6 text-purple-600">My Wonderful Brother</h2>
                    <p className="mb-8 text-lg text-gray-700">
                        On this special day, I want to celebrate the incredible bond we share. Your presence in my life is a gift I cherish every day.
                    </p>
                    <Button onClick={nextPage}>Next</Button>
                </Page>

                <Page isVisible={currentPage >= 2} zIndex={2}>
                    <h2 className="text-3xl font-bold mb-6 text-pink-600">A Brother's Love</h2>
                    <p className="mb-8 text-lg text-gray-700">
                        Your kindness, humor, and unwavering support have been my strength through thick and thin. Thank you for being not just a brother, but also my best friend.
                    </p>
                    <Button onClick={nextPage}>Next</Button>
                </Page>

                <Page isVisible={currentPage >= 3} zIndex={3}>
                    <h2 className="text-3xl font-bold mb-6 text-purple-600">Birthday Wishes</h2>
                    <p className="mb-8 text-lg text-gray-700">
                        May this year bring you endless joy, success in all your endeavors, and countless reasons to smile. Here's to another year of laughter and unforgettable moments together!
                    </p>
                    <p className="text-xl font-bold text-pink-600 mb-8">With love, Your Sibling ❤️</p>
                    <Button onClick={() => setCurrentPage(0)}>Close Card</Button>
                </Page>
            </div>
        </div>
    );
};

export default BookStyleBirthdayCard;
