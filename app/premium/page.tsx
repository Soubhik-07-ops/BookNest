"use client";
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';

export default function PremiumPage() {
    // Set the target date for the countdown (24 hours from now)
    const [targetDate] = useState(() => {
        const date = new Date();
        date.setHours(date.getHours() + 24);
        return date;
    });

    // Countdown timer state
    const [timeLeft, setTimeLeft] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0,
        expired: false
    });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();

            if (difference <= 0) {
                clearInterval(timer);
                setTimeLeft({
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                    expired: true
                });
                return;
            }

            const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((difference / 1000 / 60) % 60);
            const seconds = Math.floor((difference / 1000) % 60);

            setTimeLeft({
                hours,
                minutes,
                seconds,
                expired: false
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <Navbar />
            {/* Hero Section */}
            <section className="relative h-[50vh] bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center text-white overflow-hidden">
                <div className="container mx-auto px-4 text-center z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-yellow-300">Premium Subscription</span>
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
                        Unlock <span className="font-bold">exclusive benefits</span> and save up to 50% on every purchase!
                    </p>
                    <div className="bg-yellow-500 text-blue-900 font-bold py-2 px-6 rounded-full inline-block">
                        Starting at just ₹99/month!
                    </div>
                </div>
                <div className="absolute inset-0 bg-black opacity-20"></div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 bg-white dark:bg-gray-800">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
                        Why Choose Premium?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: "📚",
                                title: "Unlimited Access",
                                description: "Read thousands of books without restrictions"
                            },
                            {
                                icon: "🚚",
                                title: "Free Delivery",
                                description: "Get free shipping on all orders"
                            },
                            {
                                icon: "💰",
                                title: "Exclusive Discounts",
                                description: "Up to 50% off on all purchases"
                            },
                            {
                                icon: "📱",
                                title: "Offline Reading",
                                description: "Download books and read anytime"
                            },
                            {
                                icon: "⭐",
                                title: "Early Access",
                                description: "Get new releases before anyone else"
                            },
                            {
                                icon: "🛡️",
                                title: "Priority Support",
                                description: "24/7 dedicated customer service"
                            }
                        ].map((benefit, index) => (
                            <div
                                key={index}
                                className="bg-gray-100 dark:bg-gray-700 p-6 rounded-xl text-center hover:shadow-lg transition hover:scale-105"
                            >
                                <span className="text-4xl mb-4 block">{benefit.icon}</span>
                                <h3 className="text-xl font-bold mb-2 dark:text-white">{benefit.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Plans */}
            <section className="py-16 bg-gray-50 dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
                        Choose Your Plan
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                name: "Monthly",
                                price: "₹99",
                                period: "per month",
                                features: [
                                    "All premium benefits",
                                    "10% discount on purchases",
                                    "Free delivery on orders over ₹500",
                                    "Cancel anytime"
                                ],
                                featured: false
                            },
                            {
                                name: "Yearly",
                                price: "₹899",
                                period: "per year",
                                features: [
                                    "All premium benefits",
                                    "20% discount on purchases",
                                    "Free delivery on all orders",
                                    "2 free eBooks/month",
                                    "Save ₹289"
                                ],
                                featured: true
                            },
                            {
                                name: "Lifetime",
                                price: "₹2,999",
                                period: "one-time",
                                features: [
                                    "All premium benefits forever",
                                    "30% discount on purchases",
                                    "Free priority delivery",
                                    "5 free eBooks/month",
                                    "VIP customer support",
                                    "Save ₹8,000+"
                                ],
                                featured: false
                            }
                        ].map((plan, index) => (
                            <div
                                key={index}
                                className={`rounded-xl p-8 border ${plan.featured
                                    ? "border-yellow-400 bg-gradient-to-b from-purple-600 to-blue-500 text-white transform md:-translate-y-4 shadow-xl"
                                    : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
                                    }`}
                            >
                                {plan.featured && (
                                    <div className="bg-yellow-500 text-blue-900 font-bold text-sm px-4 py-1 rounded-full inline-block mb-4">
                                        MOST POPULAR
                                    </div>
                                )}
                                <h3 className={`text-2xl font-bold mb-2 ${plan.featured ? 'text-white' : 'dark:text-white'}`}>
                                    {plan.name}
                                </h3>
                                <p className="mb-1">
                                    <span className={`text-4xl font-bold ${plan.featured ? 'text-yellow-300' : 'text-blue-600 dark:text-blue-400'}`}>
                                        {plan.price}
                                    </span>
                                    <span className={`text-lg ${plan.featured ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'}`}>
                                        {plan.period}
                                    </span>
                                </p>

                                <ul className="my-6 space-y-3">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start">
                                            <span className={`mr-2 ${plan.featured ? 'text-yellow-300' : 'text-blue-500'}`}>✓</span>
                                            <span className={plan.featured ? 'text-blue-50' : 'dark:text-gray-300'}>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    href="/checkout"
                                    className={`block w-full text-center py-3 px-4 rounded-lg font-bold mt-6 ${plan.featured
                                        ? "bg-white text-blue-600 hover:bg-gray-100"
                                        : "bg-blue-600 hover:bg-blue-700 text-white"
                                        } transition-colors`}
                                >
                                    Get Started
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Limited Time Offer */}
            <section className="py-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Limited Time Offer!</h2>

                    <div className="flex flex-col items-center justify-center mb-8">
                        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 inline-block mb-6">
                            <div className="flex items-center justify-center space-x-4">
                                {!timeLeft.expired ? (
                                    <>
                                        <div className="bg-white/30 rounded p-3 text-center min-w-[70px]">
                                            <div className="text-2xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</div>
                                            <div className="text-sm">Hours</div>
                                        </div>
                                        <div className="text-2xl">:</div>
                                        <div className="bg-white/30 rounded p-3 text-center min-w-[70px]">
                                            <div className="text-2xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                                            <div className="text-sm">Minutes</div>
                                        </div>
                                        <div className="text-2xl">:</div>
                                        <div className="bg-white/30 rounded p-3 text-center min-w-[70px]">
                                            <div className="text-2xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                                            <div className="text-sm">Seconds</div>
                                        </div>
                                    </>
                                ) : (
                                    <div className="text-2xl font-bold bg-red-500/90 px-6 py-3 rounded-full">
                                        OFFER EXPIRED
                                    </div>
                                )}
                            </div>
                        </div>

                        <p className="text-xl mb-6 max-w-2xl mx-auto">
                            First 100 subscribers get <span className="font-bold">1 FREE eBook</span> worth ₹299 + extra 10% discount!
                        </p>

                        <Link
                            href="/checkout"
                            className="inline-block bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-lg"
                        >
                            Claim Your Offer Now <FiArrowRight className="inline ml-2" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-16 bg-white dark:bg-gray-800">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
                        What Our Members Say
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                quote: "Premium membership saved me over ₹5000 last year! The discounts are incredible.",
                                name: "Rahul K.",
                                role: "Premium Member"
                            },
                            {
                                quote: "As an avid reader, the unlimited access to books is worth every penny.",
                                name: "Priya M.",
                                role: "Book Lover"
                            },
                            {
                                quote: "The free deliveries alone make the subscription pay for itself. Highly recommend!",
                                name: "Arjun S.",
                                role: "Frequent Buyer"
                            }
                        ].map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-gray-100 dark:bg-gray-700 p-6 rounded-xl"
                            >
                                <p className="text-lg italic mb-4 dark:text-gray-300">"{testimonial.quote}"</p>
                                <div>
                                    <p className="font-bold dark:text-white">{testimonial.name}</p>
                                    <p className="text-blue-600 dark:text-blue-400">{testimonial.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-16 bg-gray-50 dark:bg-gray-900">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6 dark:text-white">
                        Ready to Start Saving?
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto dark:text-gray-300">
                        Join thousands of happy readers enjoying premium benefits today.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            href="/checkout"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold transition shadow-lg"
                        >
                            Get Premium Now
                        </Link>
                        <Link
                            href="/free-trial"
                            className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 px-8 py-4 rounded-full font-bold hover:bg-blue-50 dark:hover:bg-gray-800 transition"
                        >
                            Try 7 Days Free
                        </Link>
                    </div>
                    <p className="text-sm mt-4 text-gray-500 dark:text-gray-400">
                        No commitment. Cancel anytime.
                    </p>
                </div>
            </section>
        </div>
    );
}