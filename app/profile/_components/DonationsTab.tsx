'use client';

import { FiBook, FiLoader, FiGift } from 'react-icons/fi';
import { useState, useEffect } from 'react';

export default function DonationsTab() {
    const [isLoading, setIsLoading] = useState(true);
    const [donations, setDonations] = useState<any[]>([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDonations([
                {
                    id: "1",
                    title: "The Alchemist",
                    donatedOn: "March 15, 2023",
                    status: "Received",
                    points: 50
                },
                {
                    id: "2",
                    title: "Atomic Habits",
                    donatedOn: "February 28, 2023",
                    status: "Processed",
                    points: 50
                }
            ]);
            setIsLoading(false);
        }, 1200);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
            <div className="border-b dark:border-gray-700 px-6 py-4">
                <h2 className="text-xl font-bold dark:text-white flex items-center">
                    {isLoading ? (
                        <FiLoader className="animate-spin mr-2" />
                    ) : (
                        <FiGift className="mr-2 text-purple-500" />
                    )}
                    Your Donations
                </h2>
            </div>

            {isLoading ? (
                <div className="p-6 space-y-6">
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="animate-pulse bg-gray-100 dark:bg-gray-700/50 p-6 rounded-lg">
                            <div className="flex justify-between">
                                <div className="space-y-3">
                                    <div className="h-5 w-3/4 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                                    <div className="h-4 w-1/2 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                                </div>
                                <div className="h-6 w-16 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                            </div>
                            <div className="mt-4 h-4 w-full bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                        </div>
                    ))}
                </div>
            ) : donations.length > 0 ? (
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                    {donations.map((donation) => (
                        <div
                            key={donation.id}
                            className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div className="flex flex-col sm:flex-row justify-between">
                                <div className="mb-4 sm:mb-0">
                                    <h3 className="font-medium dark:text-white">{donation.title}</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Donated on {donation.donatedOn}</p>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <span className={`px-3 py-1 rounded-full text-sm ${donation.status === 'Received'
                                            ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200'
                                            : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200'
                                        }`}>
                                        {donation.status}
                                    </span>
                                    <span className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                                        +{donation.points} pts
                                    </span>
                                </div>
                            </div>
                            <div className="mt-4 flex justify-end">
                                <button className="text-sm px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="p-12 text-center">
                    <FiGift className="mx-auto w-12 h-12 text-gray-400 dark:text-gray-600 mb-4" />
                    <h3 className="text-xl font-medium dark:text-white mb-2">No donations yet</h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-6">Your donated books will appear here</p>
                    <button className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all hover:shadow-md">
                        Donate Books Now
                    </button>
                </div>
            )}
        </div>
    );
}