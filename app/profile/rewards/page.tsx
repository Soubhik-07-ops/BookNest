// import Link from 'next/link';
// import { FiArrowLeft, FiAward, FiStar } from 'react-icons/fi';


// export default function RewardsPage() {
//     const rewards = [
//         {
//             id: "1",
//             title: "Welcome Bonus",
//             points: 100,
//             date: "January 15, 2023",
//             type: "credit"
//         },
//         {
//             id: "2",
//             title: "Book Donation",
//             points: 50,
//             date: "January 20, 2023",
//             type: "credit"
//         },
//         {
//             id: "3",
//             title: "Premium Membership",
//             points: 200,
//             date: "February 5, 2023",
//             type: "credit"
//         },
//         {
//             id: "4",
//             title: "Discount Redeemed",
//             points: -100,
//             date: "March 10, 2023",
//             type: "debit"
//         }
//     ];

//     const totalPoints = rewards.reduce((sum, reward) => sum + reward.points, 0);

//     return (
//         <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
//             <div className="container mx-auto px-4 py-8">
//                 <div className="flex items-center mb-6">
//                     <Link href="/profile" className="mr-4 text-blue-500 hover:text-blue-600 dark:hover:text-blue-400">
//                         <FiArrowLeft className="w-5 h-5" />
//                     </Link>
//                     <h1 className="text-2xl font-bold dark:text-white flex items-center">
//                         <FiAward className="mr-2" /> Your Rewards
//                     </h1>
//                 </div>

//                 {/* Points Summary */}
//                 <div className="bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl shadow-lg p-6 text-white mb-8">
//                     <div className="flex justify-between items-center">
//                         <div>
//                             <h2 className="text-xl font-bold mb-1">Loyalty Points</h2>
//                             <p className="opacity-90">Earn points with every purchase and donation</p>
//                         </div>
//                         <div className="text-right">
//                             <div className="text-4xl font-bold flex items-center justify-end">
//                                 {totalPoints} <FiStar className="ml-2 fill-current" />
//                             </div>
//                             <Link href="/rewards/how-it-works" className="text-sm underline hover:no-underline">
//                                 How it works?
//                             </Link>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Rewards History */}
//                 <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
//                     <div className="border-b dark:border-gray-700 px-6 py-4">
//                         <h2 className="text-lg font-bold dark:text-white">Points History</h2>
//                     </div>

//                     {rewards.length > 0 ? (
//                         <div className="divide-y divide-gray-200 dark:divide-gray-700">
//                             {rewards.map((reward) => (
//                                 <div key={reward.id} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition">
//                                     <div className="flex justify-between">
//                                         <div>
//                                             <h3 className="font-medium dark:text-white">{reward.title}</h3>
//                                             <p className="text-sm text-gray-500 dark:text-gray-400">{reward.date}</p>
//                                         </div>
//                                         <div className={`text-lg font-medium ${reward.type === 'credit' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
//                                             }`}>
//                                             {reward.type === 'credit' ? '+' : ''}{reward.points} pts
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     ) : (
//                         <div className="text-center p-12">
//                             <FiAward className="mx-auto w-12 h-12 text-gray-400 dark:text-gray-600 mb-4" />
//                             <h3 className="text-xl font-medium dark:text-white mb-2">No rewards yet</h3>
//                             <p className="text-gray-500 dark:text-gray-400 mb-6">Your reward history will appear here</p>
//                         </div>
//                     )}
//                 </div>

//                 {/* Redeem Section */}
//                 <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
//                     <h2 className="text-xl font-bold mb-4 dark:text-white">Redeem Points</h2>
//                     <p className="text-gray-600 dark:text-gray-400 mb-6">
//                         {totalPoints >= 100 ? (
//                             `You have enough points to redeem discounts!`
//                         ) : (
//                             `You need ${100 - totalPoints} more points to redeem your first discount.`
//                         )}
//                     </p>

//                     <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//                         {[
//                             { points: 100, discount: "10% OFF", disabled: totalPoints < 100 },
//                             { points: 200, discount: "25% OFF", disabled: totalPoints < 200 },
//                             { points: 500, discount: "50% OFF", disabled: totalPoints < 500 }
//                         ].map((offer, index) => (
//                             <div
//                                 key={index}
//                                 className={`border rounded-lg p-4 text-center ${offer.disabled
//                                         ? 'border-gray-200 dark:border-gray-700 opacity-50'
//                                         : 'border-yellow-400 bg-yellow-50 dark:bg-yellow-900/20'
//                                     }`}
//                             >
//                                 <div className="text-2xl font-bold mb-1">{offer.discount}</div>
//                                 <div className="text-sm text-gray-500 dark:text-gray-400 mb-3">
//                                     for {offer.points} pts
//                                 </div>
//                                 <button
//                                     className={`w-full py-2 rounded-lg font-medium ${offer.disabled
//                                             ? 'bg-gray-100 text-gray-400 dark:bg-gray-700 dark:text-gray-500 cursor-not-allowed'
//                                             : 'bg-yellow-500 hover:bg-yellow-600 text-white'
//                                         }`}
//                                     disabled={offer.disabled}
//                                 >
//                                     Redeem
//                                 </button>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }


import RewardsTab from "../_components/RewardsTab";

export default function WishlistPage() {
    return <RewardsTab />;
}