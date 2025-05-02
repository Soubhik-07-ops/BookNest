// import Link from 'next/link';
// import { FiArrowLeft, FiBook, FiHeart, FiShoppingCart } from 'react-icons/fi';

// export default function WishlistPage() {
//     const wishlistItems = [
//         {
//             id: "1",
//             title: "The 5 AM Club",
//             author: "Robin Sharma",
//             price: 299,
//             originalPrice: 599,
//             image: "/5am-club.jpg"
//         },
//         {
//             id: "2",
//             title: "Think Like a Monk",
//             author: "Jay Shetty",
//             price: 249,
//             originalPrice: 499,
//             image: "/think-like-monk.jpg"
//         },
//         {
//             id: "3",
//             title: "Deep Work",
//             author: "Cal Newport",
//             price: 199,
//             originalPrice: 399,
//             image: "/deep-work.jpg"
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
//                         <FiHeart className="mr-2" /> Your Wishlist
//                     </h1>
//                     <span className="ml-auto bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
//                         {wishlistItems.length} items
//                     </span>
//                 </div>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {wishlistItems.map((item) => (
//                         <div key={item.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
//                             <div className="p-4">
//                                 <div className="h-48 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
//                                     <FiBook className="w-16 h-16 text-gray-400 dark:text-gray-500" />
//                                 </div>
//                                 <h3 className="font-bold text-lg dark:text-white mb-1">{item.title}</h3>
//                                 <p className="text-gray-600 dark:text-gray-400 mb-3">by {item.author}</p>

//                                 <div className="flex items-center justify-between">
//                                     <div>
//                                         <p className="text-lg font-bold text-blue-600 dark:text-blue-400">₹{item.price}</p>
//                                         <p className="text-sm text-gray-500 dark:text-gray-400 line-through">₹{item.originalPrice}</p>
//                                     </div>
//                                     <div className="flex space-x-2">
//                                         <button className="p-2 text-gray-500 hover:text-blue-500 dark:hover:text-blue-400">
//                                             <FiHeart className="w-5 h-5 fill-current" />
//                                         </button>
//                                         <button className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
//                                             <FiShoppingCart className="w-5 h-5" />
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 {wishlistItems.length === 0 && (
//                     <div className="text-center py-12">
//                         <FiHeart className="mx-auto w-12 h-12 text-gray-400 dark:text-gray-600 mb-4" />
//                         <h3 className="text-xl font-medium dark:text-white mb-2">Your wishlist is empty</h3>
//                         <p className="text-gray-500 dark:text-gray-400 mb-6">Save your favorite books here for later</p>
//                         <Link
//                             href="/books"
//                             className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
//                         >
//                             Browse Books
//                         </Link>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }


import WishlistTab from '../_components/WishlistTab';

export default function WishlistPage() {
    return <WishlistTab />;
}