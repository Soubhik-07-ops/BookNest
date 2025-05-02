// app/profile/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { FiLoader } from 'react-icons/fi';

export default function ProfilePage() {
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState({
        name: "",
        email: "",
        joinDate: "",
        membership: ""
    });

    useEffect(() => {
        // Simulate data loading with beautiful animation
        const timer = setTimeout(() => {
            setUser({
                name: "Rahul Sharma",
                email: "rahul.sharma@example.com",
                joinDate: "January 15, 2023",
                membership: "Premium Member"
            });
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
                <h2 className="text-xl font-bold mb-6 dark:text-white flex items-center">
                    {isLoading ? (
                        <FiLoader className="animate-spin mr-2" />
                    ) : null}
                    Profile Information
                </h2>

                {isLoading ? (
                    <div className="space-y-6">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="animate-pulse">
                                <div className="h-5 w-32 bg-gray-200 dark:bg-gray-700 rounded-full mb-3"></div>
                                <div className="h-10 w-full bg-gray-100 dark:bg-gray-600 rounded-lg"></div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="space-y-6 animate-fadeIn">
                        <div className="transform hover:scale-[1.01] transition-transform">
                            <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Full Name</label>
                            <p className="text-lg dark:text-white font-medium">{user.name}</p>
                        </div>
                        <div className="transform hover:scale-[1.01] transition-transform">
                            <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Email Address</label>
                            <p className="text-lg dark:text-white font-medium">{user.email}</p>
                        </div>
                        <div className="transform hover:scale-[1.01] transition-transform">
                            <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Member Since</label>
                            <p className="text-lg dark:text-white font-medium">{user.joinDate}</p>
                        </div>
                        <div className="transform hover:scale-[1.01] transition-transform">
                            <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Membership Status</label>
                            <p className="text-lg dark:text-white font-medium">{user.membership}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}