"use client";

import { useState, useEffect, useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface Slide {
    id: number;
    title: string;
    subtitle: string;
    highlight: string;
    ctaPrimary: string;
    ctaPrimaryHref: string;
    ctaSecondary: string;
    ctaSecondaryHref: string;
    bgImage: string;
}

export default function HeroSlider() {
    const slides: Slide[] = [
        {
            id: 1,
            title: "Discover Second-Hand Books",
            subtitle: "Premium quality books at 70% OFF with India-wide delivery!",
            highlight: "Second-Hand Books",
            ctaPrimary: "Shop Now",
            ctaPrimaryHref: "/products",
            ctaSecondary: "Donate Books",
            ctaSecondaryHref: "/donate",
            bgImage: "/banner1.png",
        },
        {
            id: 2,
            title: "Explore Rare Collections",
            subtitle: "Find out-of-print editions and collector's items at amazing prices!",
            highlight: "Rare Collections",
            ctaPrimary: "Browse Rare Books",
            ctaPrimaryHref: "/rare-books",
            ctaSecondary: "Sell Your Books",
            ctaSecondaryHref: "/sell-books",
            bgImage: "/banner2.png",
        },
        {
            id: 3,
            title: "Join Our Reading Community",
            subtitle: "Exchange books, join discussions, and meet fellow book lovers!",
            highlight: "Reading Community",
            ctaPrimary: "Join Now",
            ctaPrimaryHref: "/community",
            ctaSecondary: "Learn More",
            ctaSecondaryHref: "/about",
            bgImage: "/banner3.png",
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [isHovering, setIsHovering] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    // Reset timeout when slide changes
    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    // Auto-rotate slides
    useEffect(() => {
        resetTimeout();
        if (isAutoPlaying && !isHovering) {
            timeoutRef.current = setTimeout(() => {
                nextSlide();
            }, 5000);
        }

        return () => {
            resetTimeout();
        };
    }, [currentSlide, isAutoPlaying, isHovering]);

    // Animation variants
    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const buttonVariants = {
        hover: {
            scale: 1.05,
        },
        tap: { scale: 0.95 }
    };

    const highlightVariants = {
        hidden: { backgroundSize: "0% 100%" },
        visible: {
            backgroundSize: "100% 100%",
            transition: {
                duration: 0.6,
                ease: "easeInOut"
            }
        }
    };

    return (
        <section
            className="relative h-[80vh] w-full flex items-center justify-center text-white overflow-hidden"
            onMouseEnter={() => {
                setIsAutoPlaying(false);
                setIsHovering(true);
            }}
            onMouseLeave={() => {
                setIsAutoPlaying(true);
                setIsHovering(false);
            }}
        >
            {/* Background Slides with Parallax Effect */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={slides[currentSlide].id}
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url(${slides[currentSlide].bgImage})`,
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6 }}
                    />
                </AnimatePresence>
            </div>


            {/* Slide Content */}
            <div className="container mx-auto px-4 text-center z-10 relative">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={slides[currentSlide].id}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={textVariants}
                        transition={{ duration: 0.8 }}
                        className="mb-8"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            {slides[currentSlide].title.split(slides[currentSlide].highlight)[0]}
                            <motion.span
                                className="relative inline-block px-2 mx-1"
                                variants={highlightVariants}
                                initial="hidden"
                                animate="visible"
                                style={{
                                    backgroundImage: "linear-gradient(to right, #6d28d9, #4c1d95)",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "left center",
                                    backgroundClip: "text",
                                    WebkitBackgroundClip: "text",
                                    color: "transparent",
                                }}
                                whileHover={{
                                    backgroundImage: "linear-gradient(to right, #8b5cf6, #6d28d9)",
                                    transition: { duration: 0.2 }
                                }}
                            >
                                {slides[currentSlide].highlight}
                                <motion.span
                                    className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-blue-400"
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ duration: 0.8, delay: 0.3 }}
                                />
                            </motion.span>
                        </h1>
                        <motion.p
                            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-100"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.4 }}
                        >
                            {slides[currentSlide].subtitle}
                        </motion.p>
                    </motion.div>
                </AnimatePresence>

                <div className="flex gap-4 justify-center">
                    <motion.div
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                    >
                        <Link
                            href={slides[currentSlide].ctaPrimaryHref}
                            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-all"
                        >
                            {slides[currentSlide].ctaPrimary}
                        </Link>
                    </motion.div>
                    <motion.div
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                    >
                        <Link
                            href={slides[currentSlide].ctaSecondaryHref}
                            className="inline-block border-2 border-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-blue-600 transition-all"
                        >
                            {slides[currentSlide].ctaSecondary}
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Navigation Arrows */}
            <motion.button
                onClick={prevSlide}
                className="absolute left-4 md:left-8 z-10 p-3 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition"
                aria-label="Previous slide"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <FiChevronLeft className="text-2xl md:text-3xl" />
            </motion.button>
            <motion.button
                onClick={nextSlide}
                className="absolute right-4 md:right-8 z-10 p-3 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition"
                aria-label="Next slide"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <FiChevronRight className="text-2xl md:text-3xl" />
            </motion.button>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-10">
                {slides.map((_, index) => (
                    <motion.button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-gradient-to-r from-purple-400 to-blue-400 w-8' : 'bg-white bg-opacity-50'}`}
                        aria-label={`Go to slide ${index + 1}`}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                    />
                ))}
            </div>


            {/* Decorative Gradient Overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
        </section>
    );
}