// import Link from 'next/link';
// import { FiArrowLeft, FiBook, FiGift } from 'react-icons/fi';



// export default function DonationsPage() {
//     const donations = [
//         {
//             id: "1",
//             title: "The Alchemist",
//             donatedOn: "March 15, 2023",
//             status: "Received",
//             points: 50
//         },
//         {
//             id: "2",
//             title: "Atomic Habits",
//             donatedOn: "February 28, 2023",
//             status: "Processed",
//             points: 50
//         },
//         {
//             id: "3",
//             title: "Rich Dad Poor Dad",
//             donatedOn: "January 10, 2023",
//             status: "Received",
//             points: 50
//         }
//     ];

//     return (
//         <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
//             <div className="container mx-auto px-4 py-8">
//                 <div className="flex items-center mb-6">
//                     <Link href="/profile" className="mr-4 text-blue-500 hover:text-blue-600 dark:hover:text-blue-400">
//                         <FiArrowLeft className="w-5 h-5" />
//                     </Link>
//                     <h1 className="text-2xl font-bold dark:text-white flex items-center">
//                         <FiGift className="mr-2" /> Your Donations
//                     </h1>
//                 </div>

//                 <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
//                     {donations.length > 0 ? (
//                         donations.map((donation) => (
//                             <div key={donation.id} className="p-6 border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition">
//                                 <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
//                                     <div className="mb-4 sm:mb-0">
//                                         <h3 className="font-medium dark:text-white">{donation.title}</h3>
//                                         <p className="text-sm text-gray-500 dark:text-gray-400">Donated on {donation.donatedOn}</p>
//                                     </div>
//                                     <div className="flex items-center space-x-4">
//                                         <span className={`px-3 py-1 rounded-full text-sm ${donation.status === 'Received'
//                                                 ? 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-200'
//                                                 : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-200'
//                                             }`}>
//                                             {donation.status}
//                                         </span>
//                                         <span className="bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
//                                             +{donation.points} points
//                                         </span>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))
//                     ) : (
//                         <div className="text-center p-12">
//                             <FiBook className="mx-auto w-12 h-12 text-gray-400 dark:text-gray-600 mb-4" />
//                             <h3 className="text-xl font-medium dark:text-white mb-2">No donations yet</h3>
//                             <p className="text-gray-500 dark:text-gray-400 mb-6">Your donated books will appear here</p>
//                             <Link
//                                 href="/donate"
//                                 className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
//                             >
//                                 Donate Books
//                             </Link>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }

import DonationsTab from "../_components/DonationsTab";

export default function OrdersPage() {
    return <DonationsTab />;
}