"use client";
import Link from "next/link";
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-12 pb-6 px-4 md:px-8">
            <div className="container mx-auto">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

                    {/* About Section */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                            BookNest
                        </h3>
                        <p className="text-gray-300">
                            Your premier destination for quality second-hand books. We connect book lovers with affordable reads while promoting sustainability.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <FaFacebook className="text-xl" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <FaTwitter className="text-xl" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <FaInstagram className="text-xl" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <FaYoutube className="text-xl" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/products" className="text-gray-300 hover:text-purple-300 transition-colors">
                                    Shop Books
                                </Link>
                            </li>
                            <li>
                                <Link href="/donate" className="text-gray-300 hover:text-purple-300 transition-colors">
                                    Donate Books
                                </Link>
                            </li>
                            <li>
                                <Link href="/free-books" className="text-gray-300 hover:text-purple-300 transition-colors">
                                    Free Books
                                </Link>
                            </li>
                            <li>
                                <Link href="/premium" className="text-gray-300 hover:text-purple-300 transition-colors">
                                    Premium Membership
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Help & Support */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Help & Support</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/contact" className="text-gray-300 hover:text-purple-300 transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq" className="text-gray-300 hover:text-purple-300 transition-colors">
                                    FAQs
                                </Link>
                            </li>
                            <li>
                                <Link href="/shipping" className="text-gray-300 hover:text-purple-300 transition-colors">
                                    Shipping Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/returns" className="text-gray-300 hover:text-purple-300 transition-colors">
                                    Returns Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Contact Us</h4>
                        <div className="flex items-start space-x-2">
                            <FiMail className="mt-1 text-purple-300" />
                            <span className="text-gray-300">support@booknest.com</span>
                        </div>
                        <div className="flex items-start space-x-2">
                            <FiPhone className="mt-1 text-purple-300" />
                            <span className="text-gray-300">+91 98765 43210</span>
                        </div>
                        <div className="pt-2">
                            <h5 className="font-medium text-gray-400">Newsletter</h5>
                            <div className="flex mt-2">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="px-3 py-2 bg-gray-700 text-white rounded-l focus:outline-none focus:ring-1 focus:ring-purple-400 w-full"
                                />
                                <button className="bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2 rounded-r hover:opacity-90 transition-opacity">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 my-6"></div>

                {/* Bottom Footer */}
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm mb-4 md:mb-0">
                        © {new Date().getFullYear()} BookNest. All rights reserved.
                    </p>

                    <div className="flex space-x-6">
                        <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                            Terms of Service
                        </Link>
                        <Link href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                            Cookie Policy
                        </Link>
                    </div>
                </div>

                {/* Developer Credit */}
                <div className="mt-6 text-center">
                    <p className="text-gray-500 text-xs">
                        Website developed by{" "}
                        <a
                            href="https://www.linkedin.com/in/soubhik-roy07/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-300 hover:text-purple-200 transition-colors"
                        >
                            Soubhik Roy
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}