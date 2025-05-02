// app/profile/_components/OrdersTab.tsx
'use client';

import { FiBook, FiLoader, FiCheckCircle, FiTruck, FiShoppingBag } from 'react-icons/fi';
import { useState, useEffect } from 'react';

export default function OrdersTab() {
    const [isLoading, setIsLoading] = useState(true);
    const [orders, setOrders] = useState<any[]>([]);

    useEffect(() => {
        // Simulate API call with beautiful loading
        const timer = setTimeout(() => {
            setOrders([
                {
                    id: "1",
                    title: "Atomic Habits",
                    author: "James Clear",
                    image: "/atomic-habits.jpg",
                    purchaseDate: "March 5, 2023",
                    price: 199,
                    status: "Delivered",
                    deliveryDate: "March 8, 2023"
                },
                {
                    id: "2",
                    title: "The Psychology of Money",
                    author: "Morgan Housel",
                    image: "/psychology-money.jpg",
                    purchaseDate: "February 18, 2023",
                    price: 249,
                    status: "Shipped",
                    estimatedDelivery: "February 25, 2023"
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
                        <FiShoppingBag className="mr-2" />
                    )}
                    Recent Purchases
                </h2>
            </div>

            {isLoading ? (
                <div className="p-6 space-y-6">
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="animate-pulse bg-gray-100 dark:bg-gray-700/50 p-6 rounded-lg">
                            <div className="flex space-x-4">
                                <div className="h-28 w-20 bg-gray-300 dark:bg-gray-600 rounded-lg"></div>
                                <div className="flex-1 space-y-3">
                                    <div className="h-5 w-3/4 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                                    <div className="h-4 w-1/2 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                                    <div className="flex space-x-4">
                                        <div className="h-4 w-1/3 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                                        <div className="h-4 w-1/3 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                                        <div className="h-4 w-1/3 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                    {orders.map((order) => (
                        <div
                            key={order.id}
                            className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div className="flex flex-col sm:flex-row">
                                <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
                                    <div className="w-20 h-28 bg-gray-200 dark:bg-gray-600 rounded-lg overflow-hidden flex items-center justify-center shadow-inner">
                                        <FiBook className="w-10 h-10 text-gray-400 dark:text-gray-500" />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-medium dark:text-white">{order.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-2">by {order.author}</p>
                                    <div className="flex flex-wrap items-center gap-4 text-sm mb-3">
                                        <div>
                                            <span className="text-gray-500 dark:text-gray-400">Purchased:</span>{' '}
                                            <span className="font-medium">{order.purchaseDate}</span>
                                        </div>
                                        <div>
                                            <span className="text-gray-500 dark:text-gray-400">Price:</span>{' '}
                                            <span className="font-medium text-blue-600 dark:text-blue-400">₹{order.price}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        {order.status === 'Delivered' ? (
                                            <FiCheckCircle className="text-green-500 mr-2" />
                                        ) : (
                                            <FiTruck className="text-yellow-500 mr-2 animate-pulse" />
                                        )}
                                        <span className={`font-medium ${order.status === 'Delivered'
                                            ? 'text-green-600 dark:text-green-400'
                                            : 'text-yellow-600 dark:text-yellow-400'
                                            }`}>
                                            {order.status}{' '}
                                            {order.status === 'Delivered'
                                                ? `on ${order.deliveryDate}`
                                                : `- Estimated ${order.estimatedDelivery}`}
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-4 sm:mt-0 flex sm:flex-col justify-between sm:justify-start gap-2">
                                    <button className="text-sm px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition shadow-md hover:shadow-lg">
                                        Track Order
                                    </button>
                                    <button className="text-sm px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}