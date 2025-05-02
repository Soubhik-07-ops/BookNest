// import Link from 'next/link';
// import { FiArrowLeft, FiUser, FiLock, FiBell, FiCreditCard, FiHelpCircle } from 'react-icons/fi';



// export default function SettingsPage() {
//     return (
//         <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
//             <div className="container mx-auto px-4 py-8">
//                 <div className="flex items-center mb-6">
//                     <Link href="/profile" className="mr-4 text-blue-500 hover:text-blue-600 dark:hover:text-blue-400">
//                         <FiArrowLeft className="w-5 h-5" />
//                     </Link>
//                     <h1 className="text-2xl font-bold dark:text-white">Settings</h1>
//                 </div>

//                 <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
//                     {/* Account Settings */}
//                     <div className="border-b dark:border-gray-700 p-6">
//                         <h2 className="text-lg font-bold mb-4 dark:text-white flex items-center">
//                             <FiUser className="mr-2" /> Account Settings
//                         </h2>
//                         <div className="space-y-4">
//                             <Link href="/profile/settings/edit" className="flex justify-between items-center p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition">
//                                 <span className="dark:text-white">Personal Information</span>
//                                 <span className="text-gray-500 dark:text-gray-400">Edit</span>
//                             </Link>
//                             <Link href="/profile/settings/password" className="flex justify-between items-center p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition">
//                                 <span className="dark:text-white">Password</span>
//                                 <span className="text-gray-500 dark:text-gray-400">Change</span>
//                             </Link>
//                             <Link href="/profile/settings/email" className="flex justify-between items-center p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition">
//                                 <span className="dark:text-white">Email Address</span>
//                                 <span className="text-gray-500 dark:text-gray-400">Update</span>
//                             </Link>
//                         </div>
//                     </div>

//                     {/* Notification Settings */}
//                     <div className="border-b dark:border-gray-700 p-6">
//                         <h2 className="text-lg font-bold mb-4 dark:text-white flex items-center">
//                             <FiBell className="mr-2" /> Notifications
//                         </h2>
//                         <div className="space-y-4">
//                             <div className="flex justify-between items-center p-3">
//                                 <span className="dark:text-white">Email Notifications</span>
//                                 <label className="relative inline-flex items-center cursor-pointer">
//                                     <input type="checkbox" className="sr-only peer" defaultChecked />
//                                     <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
//                                 </label>
//                             </div>
//                             <div className="flex justify-between items-center p-3">
//                                 <span className="dark:text-white">SMS Notifications</span>
//                                 <label className="relative inline-flex items-center cursor-pointer">
//                                     <input type="checkbox" className="sr-only peer" />
//                                     <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
//                                 </label>
//                             </div>
//                             <div className="flex justify-between items-center p-3">
//                                 <span className="dark:text-white">Promotional Offers</span>
//                                 <label className="relative inline-flex items-center cursor-pointer">
//                                     <input type="checkbox" className="sr-only peer" defaultChecked />
//                                     <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
//                                 </label>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Payment Methods */}
//                     <div className="border-b dark:border-gray-700 p-6">
//                         <h2 className="text-lg font-bold mb-4 dark:text-white flex items-center">
//                             <FiCreditCard className="mr-2" /> Payment Methods
//                         </h2>
//                         <div className="space-y-4">
//                             <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
//                                 <div>
//                                     <p className="font-medium dark:text-white">Visa •••• 4242</p>
//                                     <p className="text-sm text-gray-500 dark:text-gray-400">Expires 05/25</p>
//                                 </div>
//                                 <button className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium">
//                                     Edit
//                                 </button>
//                             </div>
//                             <Link href="/profile/settings/payment/add" className="flex items-center p-3 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
//                                 <span className="mr-2">+</span> Add New Payment Method
//                             </Link>
//                         </div>
//                     </div>

//                     {/* Help & Support */}
//                     <div className="p-6">
//                         <h2 className="text-lg font-bold mb-4 dark:text-white flex items-center">
//                             <FiHelpCircle className="mr-2" /> Help & Support
//                         </h2>
//                         <div className="space-y-4">
//                             <Link href="/help/faq" className="flex items-center p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition">
//                                 <span className="dark:text-white">FAQs</span>
//                             </Link>
//                             <Link href="/help/contact" className="flex items-center p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition">
//                                 <span className="dark:text-white">Contact Support</span>
//                             </Link>
//                             <Link href="/help/privacy" className="flex items-center p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition">
//                                 <span className="dark:text-white">Privacy Policy</span>
//                             </Link>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Danger Zone */}
//                 <div className="mt-8 border border-red-200 dark:border-red-900/50 rounded-xl p-6">
//                     <h2 className="text-lg font-bold mb-4 text-red-600 dark:text-red-400">Danger Zone</h2>
//                     <div className="space-y-4">
//                         <button className="w-full text-left p-3 bg-red-50 hover:bg-red-100 dark:bg-red-900/20 dark:hover:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg font-medium transition">
//                             Deactivate Account
//                         </button>
//                         <button className="w-full text-left p-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition">
//                             Delete Account Permanently
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

import SettingsTab from "../_components/SettingsTab";

export default function WishlistPage() {
    return <SettingsTab />;
}