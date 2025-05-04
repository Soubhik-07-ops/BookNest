"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FiSearch, FiShoppingCart, FiUser, FiSun, FiMoon, FiMapPin } from "react-icons/fi";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const Select = dynamic(() => import('react-select'), {
    ssr: false,
    loading: () => (
        <div className="w-48 ml-2 min-w-[160px] h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
    )
});

export default function Navbar() {
    const router = useRouter();
    const pathname = usePathname();
    const [darkMode, setDarkMode] = useState(false);
    const [cartItems, setCartItems] = useState(3);
    const [states, setStates] = useState<{ value: string; label: string }[]>([]);
    const [selectedState, setSelectedState] = useState<any>(null);
    const [mounted, setMounted] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        setMounted(true);
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setDarkMode(savedTheme === 'dark');
            document.documentElement.classList.toggle('dark', savedTheme === 'dark');
        }

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleDarkMode = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        document.documentElement.classList.toggle('dark', newMode);
        localStorage.setItem('theme', newMode ? 'dark' : 'light');
    };

    useEffect(() => {
        const fetchStates = async () => {
            try {
                const response = await fetch("https://countriesnow.space/api/v0.1/countries/states", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ country: "India" }),
                });
                const data = await response.json();
                const formattedStates = data.data.states.map((state: any) => ({
                    value: state.name,
                    label: state.name,
                }));
                setStates(formattedStates);
            } catch (error) {
                console.error("Error fetching states:", error);
            }
        };

        fetchStates();
    }, []);

    useEffect(() => {
        if (mounted) {
            const savedState = localStorage.getItem("selectedState");
            if (savedState) {
                setSelectedState(JSON.parse(savedState));
            }
        }
    }, [mounted]);

    const handleStateChange = async (selected: any) => {
        setSelectedState(selected);
        localStorage.setItem("selectedState", JSON.stringify(selected));
        window.location.reload();
    };

    const isActive = (href: string) => pathname === href;

    if (!mounted) {
        return (
            <div className="bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 text-gray-800 dark:text-gray-200 py-2 px-4 border-b border-purple-200 dark:border-purple-800 transition-all duration-300">
                <div className="flex items-center justify-center">
                    <FiMapPin className="mr-2 text-purple-600 dark:text-purple-300 animate-pulse" />
                    <span className="font-medium">Deliver to</span>
                    <div className="w-48 ml-2 min-w-[160px] h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                </div>
            </div>
        );
    }

    return (
        <>
            {/* Location Bar with subtle gradient and animation */}
            <div className={`bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 text-gray-800 dark:text-gray-200 py-2 px-4 border-b border-purple-200 dark:border-purple-800 transition-all duration-300 ${isScrolled ? 'shadow-sm' : ''}`}>
                <div className="container mx-auto">
                    <div className="flex items-center justify-center">
                        <FiMapPin className="mr-2 text-purple-600 dark:text-purple-300 animate-bounce" />
                        <span className="font-medium">Deliver to</span>
                        <div className="w-48 ml-2 min-w-[160px]">
                            <Select
                                options={states}
                                value={selectedState}
                                onChange={handleStateChange}
                                placeholder="Select State"
                                isSearchable
                                styles={{
                                    control: (provided) => ({
                                        ...provided,
                                        backgroundColor: darkMode ? "rgba(79, 70, 229, 0.2)" : "rgba(255, 255, 255, 0.7)",
                                        borderColor: darkMode ? "rgba(99, 102, 241, 0.5)" : "rgba(124, 58, 237, 0.3)",
                                        minHeight: "32px",
                                        height: "32px",
                                        boxShadow: "none",
                                        borderRadius: "6px",
                                        cursor: "pointer",
                                        transition: "all 0.2s",
                                        ":hover": {
                                            borderColor: darkMode ? "rgba(99, 102, 241, 0.8)" : "rgba(124, 58, 237, 0.5)"
                                        }
                                    }),
                                    singleValue: (provided) => ({
                                        ...provided,
                                        color: darkMode ? "#e9d5ff" : "#6b21a8",
                                        fontWeight: "500",
                                    }),
                                    placeholder: (provided) => ({
                                        ...provided,
                                        color: darkMode ? "#c4b5fd" : "#8b5cf6",
                                    }),
                                    dropdownIndicator: (provided) => ({
                                        ...provided,
                                        padding: 4,
                                        color: darkMode ? "#a78bfa" : "#7c3aed",
                                        ":hover": {
                                            color: darkMode ? "#c4b5fd" : "#6d28d9",
                                        },
                                    }),
                                    clearIndicator: (provided) => ({
                                        ...provided,
                                        padding: 4,
                                        color: darkMode ? "#a78bfa" : "#7c3aed",
                                        ":hover": {
                                            color: darkMode ? "#c4b5fd" : "#6d28d9",
                                        },
                                    }),
                                    indicatorSeparator: () => ({
                                        display: "none",
                                    }),
                                    menu: (provided) => ({
                                        ...provided,
                                        backgroundColor: darkMode ? "#4c1d95" : "white",
                                        color: darkMode ? "#e9d5ff" : "#6b21a8",
                                        zIndex: 9999,
                                        border: darkMode ? "1px solid #5b21b6" : "1px solid #ddd6fe",
                                        boxShadow: darkMode ? "0 4px 6px rgba(109, 40, 217, 0.3)" : "0 4px 6px rgba(124, 58, 237, 0.1)",
                                    }),
                                    option: (provided, state) => ({
                                        ...provided,
                                        backgroundColor: state.isSelected
                                            ? (darkMode ? "#5b21b6" : "#ede9fe")
                                            : state.isFocused
                                                ? (darkMode ? "#6d28d9" : "#f5f3ff")
                                                : (darkMode ? "#4c1d95" : "white"),
                                        color: darkMode ? "#e9d5ff" : "#6b21a8",
                                        ":active": {
                                            backgroundColor: darkMode ? "#6d28d9" : "#f5f3ff",
                                        },
                                        cursor: "pointer",
                                    }),
                                    input: (provided) => ({
                                        ...provided,
                                        color: darkMode ? "#e9d5ff" : "#6b21a8",
                                    }),
                                }}
                                theme={(theme) => ({
                                    ...theme,
                                    colors: {
                                        ...theme.colors,
                                        primary: "#7c3aed",
                                        primary25: darkMode ? "#5b21b6" : "#f5f3ff",
                                        primary50: darkMode ? "#6d28d9" : "#ede9fe",
                                        primary75: darkMode ? "#7c3aed" : "#ddd6fe",
                                        neutral0: darkMode ? "#4c1d95" : "white",
                                        neutral20: darkMode ? "#5b21b6" : "#ddd6fe",
                                        neutral30: darkMode ? "#7c3aed" : "#a78bfa",
                                        neutral40: darkMode ? "#8b5cf6" : "#8b5cf6",
                                        neutral50: darkMode ? "#a78bfa" : "#7c3aed",
                                        neutral60: darkMode ? "#c4b5fd" : "#6d28d9",
                                        neutral80: darkMode ? "#e9d5ff" : "#5b21b6",
                                    },
                                })}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navbar with enhanced design */}
            <header className={`sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
                <div className="container mx-auto px-4 py-3 flex items-center justify-between flex-wrap gap-4">
                    <Link href="/" className="flex items-center gap-2 group">
                        <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent group-hover:from-purple-700 group-hover:to-blue-600 transition-all duration-300">
                            BookNest
                        </span>
                    </Link>

                    <div className="hidden md:flex flex-1 max-w-xl mx-4">
                        <div className="relative w-full group">
                            <input
                                type="text"
                                placeholder="Search for books, authors..."
                                className="w-full px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 transition-all duration-200 group-hover:shadow-md group-hover:shadow-purple-100 dark:group-hover:shadow-purple-900/50"
                            />
                            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-600 to-blue-500 text-white p-2 rounded-full hover:opacity-90 transition-all duration-300 hover:shadow-md hover:shadow-purple-300/50">
                                <FiSearch className="text-lg" />
                            </button>
                        </div>
                    </div>

                    <nav className="hidden md:flex items-center gap-6">
                        {[
                            { href: "/products", label: "Shop" },
                            { href: "/donate", label: "Donate" },
                            { href: "/free-books", label: "Free Books" },
                            { href: "/premium", label: "Premium" }
                        ].map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`relative font-medium transition-colors duration-200 ${isActive(item.href)
                                    ? 'bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent'
                                    : 'text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400'
                                    } group`}
                            >
                                {item.label}
                                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-500 transition-all duration-300 group-hover:w-full ${isActive(item.href) ? 'w-full' : ''}`}></span>
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
                        <button
                            onClick={toggleDarkMode}
                            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:rotate-12 hover:scale-110"
                            aria-label="Toggle dark mode"
                        >
                            {darkMode ? (
                                <FiSun className="text-lg text-yellow-300" />
                            ) : (
                                <FiMoon className="text-lg text-purple-600" />
                            )}
                        </button>
                        <Link
                            href="/cart"
                            className="relative p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 group"
                            aria-label="Shopping cart"
                        >
                            <FiShoppingCart className="text-xl text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400" />
                            {cartItems > 0 && (
                                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-purple-600 to-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-bounce">
                                    {cartItems}
                                </span>
                            )}
                        </Link>
                        <Link
                            href="/profile"
                            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110"
                            aria-label="User profile"
                        >
                            <FiUser className="text-xl text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400" />
                        </Link>
                    </div>
                </div>
            </header>
        </>
    );
}