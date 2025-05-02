'use client';

import { FiSettings, FiLoader, FiUser, FiLock, FiBell, FiCreditCard } from 'react-icons/fi';
import { useState, useEffect } from 'react';

export default function SettingsTab() {
    const [isLoading, setIsLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('account');

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 800);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
            <div className="border-b dark:border-gray-700 px-6 py-4">
                <h2 className="text-xl font-bold dark:text-white flex items-center">
                    {isLoading ? (
                        <FiLoader className="animate-spin mr-2" />
                    ) : (
                        <FiSettings className="mr-2 text-blue-500" />
                    )}
                    Account Settings
                </h2>
            </div>

            {isLoading ? (
                <div className="p-6 space-y-6">
                    <div className="flex space-x-4">
                        <div className="w-1/4 space-y-4">
                            {[...Array(4)].map((_, i) => (
                                <div key={i} className="h-10 bg-gray-100 dark:bg-gray-700 rounded-lg animate-pulse"></div>
                            ))}
                        </div>
                        <div className="flex-1 space-y-4">
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="h-12 bg-gray-100 dark:bg-gray-700 rounded-lg animate-pulse"></div>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col md:flex-row">
                    {/* Settings Sidebar */}
                    <div className="w-full md:w-64 border-b md:border-b-0 md:border-r dark:border-gray-700 p-4">
                        <nav className="space-y-1">
                            {[
                                { id: 'account', icon: <FiUser className="w-4 h-4 mr-2" />, label: "Account" },
                                { id: 'security', icon: <FiLock className="w-4 h-4 mr-2" />, label: "Security" },
                                { id: 'notifications', icon: <FiBell className="w-4 h-4 mr-2" />, label: "Notifications" },
                                { id: 'payments', icon: <FiCreditCard className="w-4 h-4 mr-2" />, label: "Payments" }
                            ].map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveTab(item.id)}
                                    className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center ${activeTab === item.id
                                            ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 font-medium'
                                            : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                                        }`}
                                >
                                    {item.icon}
                                    {item.label}
                                </button>
                            ))}
                        </nav>
                    </div>

                    {/* Settings Content */}
                    <div className="flex-1 p-6">
                        {activeTab === 'account' && (
                            <div className="space-y-6 animate-fadeIn">
                                <div>
                                    <h3 className="text-lg font-bold dark:text-white mb-4">Profile Information</h3>
                                    <div className="space-y-4">
                                        <div className="transform hover:scale-[1.01] transition-transform">
                                            <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Full Name</label>
                                            <input
                                                type="text"
                                                defaultValue="Rahul Sharma"
                                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            />
                                        </div>
                                        <div className="transform hover:scale-[1.01] transition-transform">
                                            <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Email Address</label>
                                            <input
                                                type="email"
                                                defaultValue="rahul.sharma@example.com"
                                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-4 border-t dark:border-gray-700">
                                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all hover:shadow-md">
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        )}

                        {activeTab === 'security' && (
                            <div className="space-y-6 animate-fadeIn">
                                <div>
                                    <h3 className="text-lg font-bold dark:text-white mb-4">Security Settings</h3>
                                    <div className="space-y-4">
                                        <div className="transform hover:scale-[1.01] transition-transform">
                                            <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Change Password</label>
                                            <input
                                                type="password"
                                                placeholder="Enter new password"
                                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            />
                                        </div>
                                        <div className="flex items-center justify-between p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                                            <div>
                                                <h4 className="font-medium dark:text-white">Two-Factor Authentication</h4>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">Add extra security to your account</p>
                                            </div>
                                            <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition">
                                                Enable
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Other tabs would go here... */}
                    </div>
                </div>
            )}
        </div>
    );
}