// import Link from 'next/link';
// import { FiArrowLeft, FiShoppingBag } from 'react-icons/fi';

// export default function OrdersPage() {
//     const orders = [
//         {
//             id: "1",
//             date: "March 5, 2023",
//             status: "Delivered",
//             total: 647,
//             items: [
//                 { title: "Atomic Habits", price: 199 },
//                 { title: "The Psychology of Money", price: 249 },
//                 { title: "Ikigai", price: 199 }
//             ]
//         },
//         {
//             id: "2",
//             date: "February 18, 2023",
//             status: "Delivered",
//             total: 499,
//             items: [
//                 { title: "Rich Dad Poor Dad", price: 159 },
//                 { title: "The 5 AM Club", price: 340 }
//             ]
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
//                         <FiShoppingBag className="mr-2" /> Your Orders
//                     </h1>
//                 </div>

//                 <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
//                     {orders.map((order) => (
//                         <div key={order.id} className="border-b dark:border-gray-700 p-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition">
//                             <div className="flex flex-col sm:flex-row justify-between mb-4">
//                                 <div>
//                                     <h2 className="font-medium dark:text-white">Order #{order.id}</h2>
//                                     <p className="text-sm text-gray-500 dark:text-gray-400">{order.date}</p>
//                                 </div>
//                                 <div className="mt-2 sm:mt-0">
//                                     <span className={`px-3 py-1 rounded-full text-sm font-medium ${order.status === 'Delivered'
//                                             ? 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-200'
//                                             : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-200'
//                                         }`}>
//                                         {order.status}
//                                     </span>
//                                 </div>
//                             </div>

//                             <div className="mb-4">
//                                 {order.items.map((item, index) => (
//                                     <div key={index} className="flex justify-between py-2">
//                                         <p className="text-gray-700 dark:text-gray-300">{item.title}</p>
//                                         <p className="text-gray-900 dark:text-white font-medium">₹{item.price}</p>
//                                     </div>
//                                 ))}
//                             </div>

//                             <div className="flex justify-between border-t dark:border-gray-700 pt-4">
//                                 <p className="font-medium dark:text-white">Total</p>
//                                 <p className="text-lg font-bold text-blue-600 dark:text-blue-400">₹{order.total}</p>
//                             </div>

//                             <div className="mt-4 flex justify-end">
//                                 <Link
//                                     href={`/profile/orders/${order.id}`}
//                                     className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
//                                 >
//                                     View Details
//                                 </Link>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }


import OrdersTab from '../_components/OrdersTab';

export default function OrdersPage() {
    return <OrdersTab />;
}