"use client";
import { useState, useEffect } from "react";
import BookCard from "@/components/BookCard";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { BookCardProps } from "@/components/BookCard"; // import the type

export default function Home() {
  // Loading State
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show loading screen for 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

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

  // Loading Screen
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-500 text-white text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold animate-pulse">
          Pustak hamse, gyan pustak se.....
        </h1>
      </div>
    );
  }

  // Actual Home Page
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center text-white overflow-hidden">
        <div className="container mx-auto px-4 text-center z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fadeIn">
            Discover <span className="text-yellow-300">Second-Hand Books</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Premium quality books at <span className="font-bold">70% OFF</span> with India-wide delivery!
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition">
              Shop Now
            </button>
            <button className="border-2 border-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-blue-600 transition">
              Donate Books
            </button>
          </div>
        </div>
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </section>

      {/* Categories Grid */}
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

      {/* Trending Books */}
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

      {/* Premium Membership */}
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

      {/* Newsletter */}
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
    </div>
  );
}
