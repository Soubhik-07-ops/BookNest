"use client";
import { useState, useEffect } from "react";
import BookCard from "@/components/BookCard";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { BookCardProps } from "@/components/BookCard";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";

export default function Home() {
    const [loading, setLoading] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);
    const [displayedText, setDisplayedText] = useState("");
    const slogan = "Pustak Humse, Gyan Pustak Se...";

    useEffect(() => {
        const hasShown = sessionStorage.getItem("hasShownLoader");

        if (!hasShown) {
            setLoading(true);
            sessionStorage.setItem("hasShownLoader", "true");

            let charIndex = 0;
            const typingInterval = setInterval(() => {
                if (charIndex < slogan.length) {
                    setDisplayedText(slogan.substring(0, charIndex + 1));
                    charIndex++;
                } else {
                    clearInterval(typingInterval);
                }
            }, 100);

            const fadeTimer = setTimeout(() => {
                setFadeOut(true);
                setTimeout(() => setLoading(false), 1000);
            }, 3000);

            return () => {
                clearInterval(typingInterval);
                clearTimeout(fadeTimer);
            };
        }
    }, [slogan]);

    const categories = [
        { name: "Academic", icon: "📚" },
        { name: "Competitive Exams", icon: "📝" },
        { name: "Fiction", icon: "🖋️" },
        { name: "Non-Fiction", icon: "📖" },
        { name: "Children's Books", icon: "🧸" },
        { name: "Rare Collectibles", icon: "🔮" },
    ];

    const trendingBooks: BookCardProps[] = [
        {
            id: "1",
            title: "Atomic Habits",
            author: "James Clear",
            imageUrl: "/atomic-habits.jpg",
            sellingPrice: 199,
            originalPrice: 499,
            condition: "Like New",
        },
        {
            id: "2",
            title: "The Psychology of Money",
            author: "Morgan Housel",
            imageUrl: "/psychology-money.jpg",
            sellingPrice: 249,
            originalPrice: 599,
            condition: "Good",
        },
        {
            id: "3",
            title: "Ikigai",
            author: "Héctor García",
            imageUrl: "/ikigai.jpg",
            sellingPrice: 179,
            originalPrice: 399,
            condition: "Fair",
        },
        {
            id: "4",
            title: "Rich Dad Poor Dad",
            author: "Robert Kiyosaki",
            imageUrl: "/rich-dad.jpg",
            sellingPrice: 159,
            originalPrice: 349,
            condition: "Good",
            isPremiumOnly: true,
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 relative">
            {/* Loading Screen - Full screen overlay */}
            {loading && (
                <div
                    className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-900 text-white transition-opacity duration-1000 ${fadeOut ? "opacity-0" : "opacity-100"
                        }`}
                >
                    {/* Animated Text */}
                    <div className="relative z-10 text-center px-4">
                        <h1 className="text-4xl md:text-5xl font-extrabold leading-snug animate-glow drop-shadow-lg">
                            {displayedText}
                            <span className={`${displayedText.length < slogan.length ? "blinking-cursor" : "opacity-0"}`}>|</span>
                        </h1>
                    </div>

                    {/* Animated Book Decorations */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        {/* Floating Books */}
                        <img
                            src="/book1.png"
                            alt="book"
                            className="w-28 h-28 absolute top-1/4 left-10 animate-float opacity-90"
                        />
                        <img
                            src="/book2.png"
                            alt="book"
                            className="w-24 h-24 absolute bottom-1/4 right-10 animate-floatReverse opacity-90"
                        />
                        <img
                            src="/book3.png"
                            alt="book"
                            className="w-20 h-20 absolute top-1/3 right-1/4 animate-floatDelay opacity-80"
                        />
                        <img
                            src="/book4.png"
                            alt="book"
                            className="w-22 h-22 absolute bottom-1/3 left-1/4 animate-floatReverseDelay opacity-80"
                        />

                        {/* Decorative Book Icons */}
                        <div className="absolute top-20 right-20 text-6xl animate-bounce">📘</div>
                        <div className="absolute bottom-20 left-20 text-6xl animate-bounceDelay">📗</div>
                        <div className="absolute top-1/2 left-1/2 text-5xl animate-spinSlow">📚</div>

                        {/* Book Stack */}
                        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                            <div className="text-4xl">📚</div>
                            <div className="text-5xl -mt-4">📚</div>
                            <div className="text-6xl -mt-4">📚</div>
                        </div>
                    </div>
                </div>
            )}

            {/* Main Page Content (only renders when not loading) */}
            {!loading && (
                <>
                    <Navbar />

                    <HeroSlider />
                    {/* Categories Section */}
                    <section className="py-16 bg-white dark:bg-gray-800">
                        <div className="container mx-auto px-4">
                            <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Explore Categories</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                                {categories.map((category, index) => (
                                    <div
                                        key={index}
                                        className="bg-gray-100 dark:bg-gray-700 p-6 rounded-xl text-center cursor-pointer hover:shadow-lg transition hover:scale-105"
                                    >
                                        <span className="text-4xl mb-3 block">{category.icon}</span>
                                        <h3 className="font-semibold dark:text-white">{category.name}</h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Trending Books Section */}
                    <section className="py-16 bg-gray-50 dark:bg-gray-900">
                        <div className="container mx-auto px-4">
                            <div className="flex justify-between items-center mb-8">
                                <h2 className="text-3xl font-bold dark:text-white">Trending Books</h2>
                                <Link
                                    href="/products"
                                    className="flex items-center text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
                                >
                                    View All <FiArrowRight className="ml-2" />
                                </Link>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                {trendingBooks.map((book) => (
                                    <BookCard key={book.id} book={book} />
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Premium Membership Section */}
                    <section className="py-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
                        <div className="container mx-auto px-4 text-center">
                            <h2 className="text-4xl font-bold mb-4">Go Premium & Save More!</h2>
                            <p className="text-xl mb-8 max-w-2xl mx-auto">
                                Get <span className="font-bold">extra 20% discount</span> on every purchase + free delivery!
                            </p>
                            <Link
                                href="/premium"
                                className="inline-block bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition"
                            >
                                Join Now - ₹199/month
                            </Link>
                        </div>
                    </section>

                    {/* Newsletter Section */}
                    <section className="py-16 bg-white dark:bg-gray-800">
                        <div className="container mx-auto px-4 text-center">
                            <h2 className="text-3xl font-bold mb-4 dark:text-white">Stay Updated</h2>
                            <p className="mb-8 max-w-2xl mx-auto dark:text-gray-300">
                                Subscribe to get exclusive deals on new arrivals & donated books.
                            </p>
                            <div className="max-w-md mx-auto flex">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="flex-1 px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                />
                                <button className="bg-blue-500 text-white px-6 py-3 rounded-r-lg font-bold hover:bg-blue-600 transition">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </section>

                    <Footer />
                </>
            )}
        </div>
    );
}