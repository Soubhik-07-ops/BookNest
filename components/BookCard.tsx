import { FiHeart, FiShoppingCart } from "react-icons/fi";
import Link from "next/link";

export type BookCondition = "Like New" | "Good" | "Fair";

export interface BookCardProps {
    id: string;
    title: string;
    author: string;
    imageUrl?: string;
    originalPrice: number;
    sellingPrice: number;
    condition: BookCondition;
    isPremiumOnly?: boolean;
}

export default function BookCard({ book }: { book: BookCardProps }) {
    const discountPercentage = Math.round(
        ((book.originalPrice - book.sellingPrice) / book.originalPrice) * 100
    );

    const getConditionColor = () => {
        switch (book.condition) {
            case "Like New":
                return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
            case "Good":
                return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
            case "Fair":
                return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200";
            default:
                return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200";
        }
    };

    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 w-64 flex flex-col">
            {/* Book Image */}
            <div className="relative h-48 bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                {book.imageUrl ? (
                    <img
                        src={book.imageUrl}
                        alt={book.title}
                        className="h-full w-full object-cover"
                    />
                ) : (
                    <span className="text-4xl text-gray-400">📚</span>
                )}

                {book.isPremiumOnly && (
                    <div className="absolute top-2 right-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white text-xs px-2 py-1 rounded-full">
                        Premium
                    </div>
                )}

                <button
                    className="absolute top-2 left-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700"
                    aria-label="Add to wishlist"
                >
                    <FiHeart className="text-gray-600 dark:text-gray-300" />
                </button>
            </div>

            {/* Book Details */}
            <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-bold text-lg mb-1 line-clamp-2 dark:text-white">
                    {book.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                    by {book.author}
                </p>

                {/* Price Section */}
                <div className="mt-auto">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="font-bold text-lg dark:text-white">
                            ₹{book.sellingPrice}
                        </span>
                        <span className="text-gray-500 line-through text-sm dark:text-gray-400">
                            ₹{book.originalPrice}
                        </span>
                        <span className="text-green-600 text-sm font-medium dark:text-green-400">
                            {discountPercentage}% OFF
                        </span>
                    </div>

                    {/* Condition & Add to Cart */}
                    <div className="flex justify-between items-center">
                        <span
                            className={`text-xs px-2 py-1 rounded-full ${getConditionColor()}`}
                        >
                            {book.condition}
                        </span>
                        <button
                            className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full transition dark:bg-blue-600 dark:hover:bg-blue-700"
                            aria-label="Add to cart"
                        >
                            <FiShoppingCart />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}