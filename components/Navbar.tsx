"use client";
import Link from "next/link";
import { FiSearch, FiShoppingCart, FiUser, FiSun, FiMoon } from "react-icons/fi";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [darkMode, setDarkMode] = useState(false);
    const [cartItems, setCartItems] = useState(3); // Example cart count

    // Toggle dark mode
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo & Brand */}
                <Link href="/" className="flex items-center gap-2">
                    <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                        BookNest
                    </span>
                </Link>

                {/* Search Bar */}
                <div className="hidden md:flex flex-1 max-w-md mx-4">
                    <div className="relative w-full">
                        <input
                            type="text"
                            placeholder="Search for books, authors..."
                            className="w-full px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
                        />
                        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600">
                            <FiSearch />
                        </button>
                    </div>
                </div>

                {/* Navigation Links */}
                <nav className="hidden md:flex items-center gap-6">
                    <Link href="/products" className="hover:text-blue-500 dark:hover:text-blue-400 transition">
                        Shop
                    </Link>
                    <Link href="/donate" className="hover:text-blue-500 dark:hover:text-blue-400 transition">
                        Donate
                    </Link>
                    <Link href="/free-books" className="hover:text-blue-500 dark:hover:text-blue-400 transition">
                        Free Books
                    </Link>
                    <Link href="/premium" className="hover:text-blue-500 dark:hover:text-blue-400 transition">
                        Premium
                    </Link>
                </nav>

                {/* User Actions */}
                <div className="flex items-center gap-4">
                    <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                        {darkMode ? <FiSun /> : <FiMoon />}
                    </button>
                    <Link href="/cart" className="relative p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                        <FiShoppingCart className="text-xl" />
                        {cartItems > 0 && (
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                {cartItems}
                            </span>
                        )}
                    </Link>
                    <Link href="/profile" className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                        <FiUser className="text-xl" />
                    </Link>
                </div>
            </div>
        </header>
    );
}