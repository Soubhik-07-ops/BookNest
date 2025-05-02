'use client';

import { FiBook, FiHeart, FiLoader, FiShoppingCart } from 'react-icons/fi';
import { useState, useEffect } from 'react';

export default function WishlistTab() {
    const [isLoading, setIsLoading] = useState(true);
    const [wishlist, setWishlist] = useState<any[]>([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setWishlist([
                {
                    id: "1",
                    title: "The 5 AM Club",
                    author: "Robin Sharma",
                    price: 299,
                    originalPrice: 599,
                    image: "/5am-club.jpg"
                },
                {
                    id: "2",
                    title: "Think Like a Monk",
                    author: "Jay Shetty",
                    price: 249,
                    originalPrice: 499,
                    image: "/think-like-monk.jpg"
                },
                {
                    id: "3",
                    title: "Deep Work",
                    author: "Cal Newport",
                    price: 199,
                    originalPrice: 399,
                    image: "/deep-work.jpg"
                }
            ]);
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
            <div className="border-b dark:border-gray-700 px-6 py-4">
                <h2 className="text-xl font-bold dark:text-white flex items-center">
                    {isLoading ? (
                        <FiLoader className="animate-spin mr-2" />
                    ) : (
                        <FiHeart className="mr-2 text-pink-500" />
                    )}
                    Your Wishlist {!isLoading && `(${wishlist.length})`}
                </h2>
            </div>

            {isLoading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={i}
                            className="border dark:border-gray-700 rounded-lg p-4 animate-pulse"
                        >
                            <div className="flex space-x-4">
                                <div className="h-24 w-16 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
                                <div className="flex-1 space-y-3">
                                    <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                                    <div className="h-3 w-1/2 bg-gray-200 dark:bg-gray-700 rounded"></div>
                                    <div className="h-5 w-1/3 bg-gray-200 dark:bg-gray-700 rounded"></div>
                                    <div className="h-8 w-full bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                    {wishlist.map((item) => (
                        <div
                            key={item.id}
                            className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div className="flex">
                                <div className="flex-shrink-0 mr-4">
                                    <div className="w-16 h-24 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden flex items-center justify-center shadow-inner">
                                        <FiBook className="w-8 h-8 text-gray-400 dark:text-gray-500" />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-medium dark:text-white line-clamp-2">{item.title}</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">by {item.author}</p>
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="text-lg font-bold text-blue-600 dark:text-blue-400">₹{item.price}</span>
                                        <span className="text-sm text-gray-500 dark:text-gray-400 line-through">₹{item.originalPrice}</span>
                                        <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-2 py-1 rounded animate-pulse">
                                            {Math.round((1 - item.price / item.originalPrice) * 100)}% OFF
                                        </span>
                                    </div>
                                    <div className="flex gap-2">
                                        <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-all hover:shadow-md flex items-center justify-center">
                                            <FiShoppingCart className="mr-1" /> Add to Cart
                                        </button>
                                        <button className="w-10 h-10 flex items-center justify-center text-pink-500 hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
                                            <FiHeart className="w-5 h-5 fill-current" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}