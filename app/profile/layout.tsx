// app/profile/layout.tsx
'use client';

import { FiUser, FiShoppingBag, FiHeart, FiBook, FiAward, FiSettings, FiLoader, FiArrowLeft } from 'react-icons/fi';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function ProfileLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname();
    const [isLoading, setIsLoading] = useState(true);

    // Determine active tab
    const getActiveTab = () => {
        if (pathname.includes('/orders')) return 'orders';
        if (pathname.includes('/wishlist')) return 'wishlist';
        if (pathname.includes('/donations')) return 'donations';
        if (pathname.includes('/rewards')) return 'rewards';
        if (pathname.includes('/settings')) return 'settings';
        return 'profile';
    };

    const activeTab = getActiveTab();

    useEffect(() => {
        // Simulate layout loading
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 800);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <div className="absolute top-4 left-4 z-10">
                <Link href="/" className="flex items-center text-white bg-black/30 hover:bg-black/50 px-3 py-2 rounded-full transition">
                    <FiArrowLeft className="w-5 h-5 mr-2" />
                    <span className="text-sm font-medium">Back</span>
                </Link>
            </div>


            {/* Profile Header with Loading */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-500 py-16 text-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="relative mb-6 md:mb-0 md:mr-8">
                            {isLoading ? (
                                <div className="w-32 h-32 rounded-full border-4 border-white/30 bg-white/20 flex items-center justify-center">
                                    <FiLoader className="w-8 h-8 text-white animate-spin" />
                                </div>
                            ) : (
                                <>
                                    <div className="w-32 h-32 rounded-full border-4 border-white/30 bg-white flex items-center justify-center overflow-hidden">
                                        <FiUser className="w-16 h-16 text-purple-600" />
                                    </div>
                                    <div className="absolute bottom-0 right-0 bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-xs font-bold">
                                        PRO
                                    </div>
                                </>
                            )}
                        </div>
                        <div>
                            {isLoading ? (
                                <div className="space-y-3">
                                    <div className="h-8 w-48 bg-white/30 rounded animate-pulse"></div>
                                    <div className="h-4 w-64 bg-white/30 rounded animate-pulse"></div>
                                    <div className="h-4 w-56 bg-white/30 rounded animate-pulse"></div>
                                    <div className="flex gap-2">
                                        <div className="h-6 w-24 bg-white/30 rounded-full animate-pulse"></div>
                                        <div className="h-6 w-32 bg-white/30 rounded-full animate-pulse"></div>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <h1 className="text-3xl font-bold mb-2">Rahul Sharma</h1>
                                    <p className="text-blue-100 mb-1">rahul.sharma@example.com</p>
                                    <p className="text-blue-100 mb-3">Member since January 15, 2023</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Premium Member</span>
                                        <span className="bg-yellow-500/90 text-blue-900 px-3 py-1 rounded-full text-sm font-bold">
                                            ₹5,420 saved
                                        </span>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Cards with Loading */}
            <div className="container mx-auto px-4 -mt-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { icon: <FiBook className="w-6 h-6" />, title: "Books Purchased", value: "27", color: "bg-blue-500" },
                        { icon: <FiShoppingBag className="w-6 h-6" />, title: "Books Donated", value: "8", color: "bg-purple-500" },
                        { icon: <FiHeart className="w-6 h-6" />, title: "Wishlist Items", value: "12", color: "bg-pink-500" },
                        { icon: <FiAward className="w-6 h-6" />, title: "Loyalty Points", value: "1250", color: "bg-yellow-500" }
                    ].map((stat, index) => (
                        <div key={index} className={`${stat.color} text-white p-4 rounded-xl shadow-lg`}>
                            {isLoading ? (
                                <div className="animate-pulse space-y-2">
                                    <div className="h-4 w-3/4 bg-white/30 rounded"></div>
                                    <div className="h-6 w-1/2 bg-white/30 rounded"></div>
                                </div>
                            ) : (
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-sm opacity-90">{stat.title}</p>
                                        <p className="text-2xl font-bold">{stat.value}</p>
                                    </div>
                                    <div className="bg-white/20 p-2 rounded-full">
                                        {stat.icon}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Sidebar Navigation */}
                    <div className="w-full md:w-64 flex-shrink-0">
                        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 sticky top-4">
                            <nav className="space-y-2">
                                {[
                                    { id: 'profile', icon: <FiUser className="w-5 h-5" />, label: "Profile", path: "/profile" },
                                    { id: 'orders', icon: <FiShoppingBag className="w-5 h-5" />, label: "Orders", path: "/profile/orders" },
                                    { id: 'wishlist', icon: <FiHeart className="w-5 h-5" />, label: "Wishlist", path: "/profile/wishlist" },
                                    { id: 'donations', icon: <FiBook className="w-5 h-5" />, label: "Donations", path: "/profile/donations" },
                                    { id: 'rewards', icon: <FiAward className="w-5 h-5" />, label: "Rewards", path: "/profile/rewards" },
                                    { id: 'settings', icon: <FiSettings className="w-5 h-5" />, label: "Settings", path: "/profile/settings" }
                                ].map((item) => (
                                    <Link
                                        key={item.id}
                                        href={item.path}
                                        className={`flex items-center px-4 py-3 rounded-lg transition ${activeTab === item.id
                                            ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400'
                                            : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                                            }`}
                                    >
                                        <span className="mr-3">{item.icon}</span>
                                        <span>{item.label}</span>
                                    </Link>
                                ))}
                            </nav>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}