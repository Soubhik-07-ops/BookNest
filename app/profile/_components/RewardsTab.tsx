'use client';

import { FiAward, FiLoader, FiStar } from 'react-icons/fi';
import { useState, useEffect } from 'react';

export default function RewardsTab() {
    const [isLoading, setIsLoading] = useState(true);
    const [points, setPoints] = useState(0);
    const [rewards, setRewards] = useState<any[]>([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setPoints(1250);
            setRewards([
                { id: "1", title: "Welcome Bonus", points: 100, date: "Jan 15, 2023" },
                { id: "2", title: "Book Donation", points: 50, date: "Jan 20, 2023" },
                { id: "3", title: "Monthly Bonus", points: 100, date: "Feb 1, 2023" }
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
                        <FiAward className="mr-2 text-yellow-500" />
                    )}
                    Your Rewards
                </h2>
            </div>

            {isLoading ? (
                <div className="p-6 space-y-6">
                    <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-xl p-6 text-white animate-pulse h-32"></div>
                    <div className="space-y-4">
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="h-16 bg-gray-100 dark:bg-gray-700/50 rounded-lg animate-pulse"></div>
                        ))}
                    </div>
                </div>
            ) : (
                <>
                    <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-xl mx-6 mt-6 p-6 text-white shadow-lg">
                        <div className="flex justify-between items-center">
                            <div>
                                <h3 className="text-lg font-bold mb-1">Loyalty Points</h3>
                                <p className="text-yellow-100">Earn more points with every purchase</p>
                            </div>
                            <div className="text-right">
                                <div className="text-4xl font-bold flex items-center justify-end">
                                    {points} <FiStar className="ml-2 fill-current" />
                                </div>
                                <p className="text-sm text-yellow-100">Next reward at 1500 points</p>
                            </div>
                        </div>
                        <div className="mt-6 bg-white/20 rounded-full h-2">
                            <div
                                className="bg-white h-2 rounded-full"
                                style={{ width: `${Math.min(100, (points / 1500) * 100)}%` }}
                            ></div>
                        </div>
                    </div>

                    <div className="p-6">
                        <h3 className="text-lg font-bold dark:text-white mb-4">Points History</h3>
                        <div className="space-y-4">
                            {rewards.map((reward) => (
                                <div
                                    key={reward.id}
                                    className="bg-gray-50 dark:bg-gray-700/30 p-4 rounded-lg hover:shadow-md transition-all"
                                >
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h4 className="font-medium dark:text-white">{reward.title}</h4>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">{reward.date}</p>
                                        </div>
                                        <div className="text-green-600 dark:text-green-400 font-bold">
                                            +{reward.points} pts
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8">
                            <h3 className="text-lg font-bold dark:text-white mb-4">Redeem Points</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {[
                                    { points: 100, discount: "10% OFF", disabled: points < 100 },
                                    { points: 200, discount: "25% OFF", disabled: points < 200 },
                                    { points: 500, discount: "50% OFF", disabled: points < 500 }
                                ].map((offer, index) => (
                                    <div
                                        key={index}
                                        className={`border rounded-lg p-4 text-center transition-all ${offer.disabled
                                                ? 'border-gray-200 dark:border-gray-700 opacity-50'
                                                : 'border-yellow-400 bg-yellow-50 dark:bg-yellow-900/20 hover:shadow-md transform hover:-translate-y-1'
                                            }`}
                                    >
                                        <div className="text-2xl font-bold mb-1">{offer.discount}</div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                                            for {offer.points} pts
                                        </div>
                                        <button
                                            className={`w-full py-2 rounded-lg font-medium transition-all ${offer.disabled
                                                    ? 'bg-gray-100 text-gray-400 dark:bg-gray-700 dark:text-gray-500 cursor-not-allowed'
                                                    : 'bg-yellow-500 hover:bg-yellow-600 text-white hover:shadow-md'
                                                }`}
                                            disabled={offer.disabled}
                                        >
                                            Redeem
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}